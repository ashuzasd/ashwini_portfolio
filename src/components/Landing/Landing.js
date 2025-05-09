import styles from "./Landing.module.css";
import { motion } from "framer-motion";
import Mouse from "../UI/Mouse";
import { Link } from "react-scroll";

const FloatingCircles = () => {
  const colors = ["#FF2975", "#8C1EFF", "#FFD319", "#00F0FF"];
  
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full opacity-10"
          style={{
            backgroundColor: colors[i % colors.length],
            width: `${Math.random() * 200 + 100}px`,
            height: `${Math.random() * 200 + 100}px`,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            x: [0, (Math.random() - 0.5) * 100],
            y: [0, (Math.random() - 0.5) * 100],
            opacity: [0.1, 0.2, 0.1]
          }}
          transition={{
            duration: 10 + Math.random() * 20,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut"
          }}
        />
      ))}
    </div>
  );
};

const Landing = () => {
  return (
    <div id="landing" className={`${styles.landing} relative bg-black`}>
      {/* Floating background circles */}
      <FloatingCircles />
      
      {/* Retro Grid */}
      <div className="absolute inset-0 z-0 overflow-hidden">
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
      </div>
      
      {/* Content with animations */}
      <div className={`${styles.left} relative z-20`}>
        <div className={styles.leftWrapper}>
          <motion.h2 
            className={styles.intro}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            Hello, My name is
          </motion.h2>
          
          <motion.h1 
            className={styles.name}
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            whileHover={{ scale: 1.02 }}
          >
            Ashwini Tiwalkar
          </motion.h1>
          
          <motion.p 
            className={styles.description}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Full Stack Developer
          </motion.p>
        </div>
      </div>
      
      <Link to="skills" spy smooth offset={-30} duration={500}>
        <Mouse />
      </Link>
    </div>
  );
};

export default Landing;