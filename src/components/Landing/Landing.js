import styles from "./Landing.module.css";
import { useEffect } from "react";
import Mouse from "../UI/Mouse";
import { Link } from "react-scroll";
import { motion } from "framer-motion";

const RetroGrid = () => {
  
  return (
    <div className="absolute inset-0 grid grid-cols-8 gap-1 p-1 pointer-events-none">
      {Array.from({ length: 128 }).map((_, i) => (
        <motion.div
          key={i}
          className="h-4 w-4 border-2 border-[#FF2975]"
          initial={{ opacity: 0 }}
          animate={{
            opacity: [0, 0.8, 0.3],
            scale: [1, 1.2, 1],
            borderColor: ["#FF2975", "#8C1EFF", "#FFD319"]
          }}
          transition={{
            repeat: Infinity,
            duration: 4,
            delay: i * 0.02,
          }}
        />
      ))}
    </div>
  );
};

const Landing = () => {
  return (
    <div id="landing" className={`${styles.landing} relative bg-black`}>
      {/* Debug container - remove after verification */}
      <div className="absolute inset-0 bg-blue-500 opacity-10 z-30"></div>
      
      {/* Retro Grid */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <RetroGrid />
      </div>
      
      {/* Semi-transparent overlay */}
      <div className="absolute inset-0 bg-black/40 z-10"></div>
      
      {/* Content */}
      <div className={`${styles.left} relative z-20`}>
        <div className={styles.leftWrapper}>
          <h2 className={styles.intro}>Hello, My name is</h2>
          <h1 className={styles.name}>Ashwini Tiwalkar</h1>
          <p className={styles.description}>Full Stack Developer</p>
        </div>
      </div>
      
      <Link to="skills" spy={true} smooth={true} offset={-30} duration={500}>
        <Mouse />
      </Link>
    </div>
  );
};

export default Landing;