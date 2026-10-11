import { useEffect, useRef } from "react";
import * as THREE from "three";

/**
 * Fixed, full-screen WebGL backdrop: a wireframe "network core" with orbiting
 * rings inside a particle field. Scroll progress drives the core's position,
 * scale and rotation; the pointer adds a gentle parallax. Renders one static
 * frame for reduced-motion users and pauses while the tab is hidden.
 */
const ACCENT = new THREE.Color("#38bdf8");
const IRIS = new THREE.Color("#818cf8");
const DEEP = new THREE.Color("#0ea5e9");

const ThreeScene = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return undefined;

    let renderer;
    try {
      renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: "low-power" });
    } catch (e) {
      return undefined; // No WebGL: the CSS background still renders.
    }

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const isSmall = window.innerWidth < 768;

    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000, 0);
    mount.appendChild(renderer.domElement);

    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x070a12, 0.045);
    const camera = new THREE.PerspectiveCamera(55, window.innerWidth / window.innerHeight, 0.1, 100);
    camera.position.set(0, 0, 9);

    // Soft round sprite so points render as glowing dots, not squares
    const dotCanvas = document.createElement("canvas");
    dotCanvas.width = dotCanvas.height = 64;
    const ctx = dotCanvas.getContext("2d");
    const grad = ctx.createRadialGradient(32, 32, 0, 32, 32, 32);
    grad.addColorStop(0, "rgba(255,255,255,1)");
    grad.addColorStop(0.35, "rgba(255,255,255,0.6)");
    grad.addColorStop(1, "rgba(255,255,255,0)");
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, 64, 64);
    const dotTex = new THREE.CanvasTexture(dotCanvas);

    // ---- Core: wireframe icosahedron + glowing vertices + inner solid ----
    const core = new THREE.Group();
    scene.add(core);

    const icoGeo = new THREE.IcosahedronGeometry(2, 1);
    const wire = new THREE.LineSegments(
      new THREE.WireframeGeometry(icoGeo),
      new THREE.LineBasicMaterial({ color: ACCENT, transparent: true, opacity: 0.55 })
    );
    core.add(wire);

    // Icosahedron geometry repeats each vertex per face — keep unique ones only
    const seen = new Set();
    const nodePositions = [];
    const ico = icoGeo.attributes.position;
    for (let i = 0; i < ico.count; i++) {
      const key = [ico.getX(i), ico.getY(i), ico.getZ(i)].map((v) => v.toFixed(3)).join();
      if (!seen.has(key)) {
        seen.add(key);
        nodePositions.push(ico.getX(i), ico.getY(i), ico.getZ(i));
      }
    }
    const nodeGeo = new THREE.BufferGeometry();
    nodeGeo.setAttribute("position", new THREE.Float32BufferAttribute(nodePositions, 3));
    const nodes = new THREE.Points(
      nodeGeo,
      new THREE.PointsMaterial({
        color: IRIS,
        size: 0.16,
        map: dotTex,
        transparent: true,
        opacity: 0.95,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
      })
    );
    core.add(nodes);

    const innerGeo = new THREE.IcosahedronGeometry(1.1, 0);
    const inner = new THREE.Mesh(
      innerGeo,
      new THREE.MeshBasicMaterial({ color: DEEP, wireframe: true, transparent: true, opacity: 0.35 })
    );
    core.add(inner);

    // Orbit rings
    const rings = [2.9, 3.5].map((r, i) => {
      const ring = new THREE.Mesh(
        new THREE.TorusGeometry(r, 0.008, 8, 160),
        new THREE.MeshBasicMaterial({ color: i ? IRIS : ACCENT, transparent: true, opacity: 0.35 })
      );
      ring.rotation.x = Math.PI / 2 + (i ? 0.5 : -0.35);
      ring.rotation.y = i ? 0.3 : -0.2;
      core.add(ring);
      return ring;
    });

    // Satellites riding the rings
    const satGeo = new THREE.SphereGeometry(0.07, 12, 12);
    const satellites = rings.map((ring, i) => {
      const sat = new THREE.Mesh(satGeo, new THREE.MeshBasicMaterial({ color: i ? IRIS : ACCENT }));
      ring.add(sat);
      return { sat, radius: ring.geometry.parameters.radius, speed: i ? -0.35 : 0.5 };
    });

    // ---- Particle field ----
    const count = isSmall ? 900 : 2200;
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);
    const tmp = new THREE.Color();
    for (let i = 0; i < count; i++) {
      // Points in a thick spherical shell around the scene
      const r = 9 + Math.random() * 18;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      positions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = r * Math.cos(phi) - 12;
      tmp.copy(ACCENT).lerp(IRIS, Math.random());
      colors.set([tmp.r, tmp.g, tmp.b], i * 3);
    }
    const starGeo = new THREE.BufferGeometry();
    starGeo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    starGeo.setAttribute("color", new THREE.BufferAttribute(colors, 3));
    const stars = new THREE.Points(
      starGeo,
      new THREE.PointsMaterial({
        size: 0.14,
        map: dotTex,
        vertexColors: true,
        transparent: true,
        opacity: 0.8,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
      })
    );
    scene.add(stars);

    // ---- Input state ----
    const pointer = { x: 0, y: 0, tx: 0, ty: 0 };
    let scroll = 0; // smoothed 0..1
    let scrollTarget = 0;

    const readScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      scrollTarget = max > 0 ? window.scrollY / max : 0;
    };
    const onPointer = (e) => {
      pointer.tx = (e.clientX / window.innerWidth) * 2 - 1;
      pointer.ty = (e.clientY / window.innerHeight) * 2 - 1;
    };
    const onResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
      readScroll();
      if (reduce) renderFrame(0);
    };

    // Hero: core sits right of the headline. Later it drifts left, recedes
    // and dims so it never fights the content for attention.
    const layout = () => {
      const wide = window.innerWidth >= 1024;
      // On narrow screens the core sits behind the headline, so push it back and dim it.
      return {
        startX: wide ? 3.6 : 0.8,
        startY: wide ? 0.2 : 2.4,
        startZ: wide ? 0 : -3,
        endX: wide ? -4 : 0,
        glow: wide ? 1 : 0.45,
      };
    };

    const clock = new THREE.Clock();
    const renderFrame = (t) => {
      const { startX, startY, startZ, endX, glow } = layout();
      const s = scroll;
      const ease = s * s * (3 - 2 * s);

      core.position.x = THREE.MathUtils.lerp(startX, endX, Math.min(ease * 1.4, 1));
      core.position.y = THREE.MathUtils.lerp(startY, -0.5, Math.min(s * 2, 1)) + Math.sin(t * 0.6) * 0.12;
      core.position.z = THREE.MathUtils.lerp(startZ, -3.5, ease);
      const scale = 1 + Math.sin(s * Math.PI) * 0.25;
      core.scale.setScalar(scale);

      wire.rotation.y = t * 0.12 + s * Math.PI * 2;
      wire.rotation.x = t * 0.05 + s * Math.PI;
      nodes.rotation.copy(wire.rotation);
      inner.rotation.y = -t * 0.3 - s * Math.PI * 3;
      inner.rotation.z = t * 0.15;
      rings[0].rotation.z = t * 0.2 + s * 2;
      rings[1].rotation.z = -t * 0.15 - s * 2;
      satellites.forEach(({ sat, radius, speed }) => {
        const a = t * speed + s * 6;
        sat.position.set(Math.cos(a) * radius, Math.sin(a) * radius, 0);
      });

      // Dim the core while reading content below the hero
      const dim = glow * (1 - Math.min(s * 3, 1) * 0.55);
      wire.material.opacity = 0.55 * dim;
      inner.material.opacity = 0.35 * dim;
      rings.forEach((r) => (r.material.opacity = 0.35 * dim));
      nodes.material.opacity = 0.95 * dim;

      stars.rotation.y = t * 0.01 + s * 0.8;
      stars.rotation.x = s * 0.3;

      camera.position.x = pointer.x * 0.6;
      camera.position.y = -pointer.y * 0.4 - s * 1.5;
      camera.lookAt(0, -s * 1.5, 0);

      renderer.render(scene, camera);
    };

    let raf = 0;
    const loop = () => {
      raf = requestAnimationFrame(loop);
      pointer.x += (pointer.tx - pointer.x) * 0.05;
      pointer.y += (pointer.ty - pointer.y) * 0.05;
      scroll += (scrollTarget - scroll) * 0.08;
      renderFrame(clock.getElapsedTime());
    };
    const onVisibility = () => {
      if (document.hidden) cancelAnimationFrame(raf);
      else if (!reduce) loop();
    };

    readScroll();
    window.addEventListener("resize", onResize);
    if (reduce) {
      scroll = scrollTarget;
      renderFrame(0);
    } else {
      window.addEventListener("scroll", readScroll, { passive: true });
      window.addEventListener("pointermove", onPointer, { passive: true });
      document.addEventListener("visibilitychange", onVisibility);
      loop();
    }

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", onResize);
      window.removeEventListener("scroll", readScroll);
      window.removeEventListener("pointermove", onPointer);
      document.removeEventListener("visibilitychange", onVisibility);
      scene.traverse((obj) => {
        obj.geometry?.dispose();
        obj.material?.dispose();
      });
      icoGeo.dispose();
      dotTex.dispose();
      renderer.dispose();
      mount.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={mountRef} aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10" />;
};

export default ThreeScene;
