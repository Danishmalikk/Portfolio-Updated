import { useScroll, motion } from "framer-motion";
import Preloader from "./Components/Preloader";
import AnimatedBackground from "./Components/AnimatedBackground";
import CursorFollower from "./Components/CursorFollower";
import Header from "./Components/Header";
import Home from "./Components/Home";
import About from "./Components/About";
import TechStack from "./Components/TechStack";
import Experience from "./Components/Experience";
import Achievements from "./Components/Achievements";
import Project from "./Components/Project";
import Education from "./Components/Education";
import Footer from "./Components/Footer";
import LeftContent from "./Components/LeftContent";
import RightContent from "./Components/RightContent";
import BackToTop from "./Components/BackToTop";

function App() {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="relative min-h-screen text-slate-200 selection:bg-accent/30 selection:text-white"
    >
      <Preloader />
      <AnimatedBackground />
      <CursorFollower />

      {/* Scroll progress bar */}
      <motion.div
        style={{ scaleX: scrollYProgress }}
        className="fixed top-0 left-0 right-0 z-50 h-[3px] origin-left bg-gradient-to-r from-accent-soft via-accent to-iris"
      />

      <Header />
      <LeftContent />
      <RightContent />
      <BackToTop />

      <main className="mx-auto w-full max-w-6xl px-5 sm:px-8 lg:px-12">
        <Home />
        <About />
        <TechStack />
        <Experience />
        <Achievements />
        <Project />
        <Education />
        <Footer />
      </main>
    </motion.div>
  );
}

export default App;
