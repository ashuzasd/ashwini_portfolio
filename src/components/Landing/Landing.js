import { useState } from "react";
import { motion } from "framer-motion";
import styles from "./Landing.module.css";
import Mouse from "../UI/Mouse";
import { Link } from "react-scroll";

const getRandomPosition = () => ({
  x: Math.floor(Math.random() * 400 - 200),
  y: Math.floor(Math.random() * 400 - 200),
});

const FloatingSquare = ({ id, color, size, initialTop, initialLeft }) => {
  const [position, setPosition] = useState(getRandomPosition());

  return (
    <motion.div
      animate={position}
      transition={{ duration: 2, ease: "easeInOut" }}
      style={{
        position: "absolute",
        top: initialTop,
        left: initialLeft,
        width: size,
        height: size,
        backgroundColor: color,
        borderRadius: "8px",
        zIndex: 10,
        pointerEvents: "none",
      }}
    />
  );
};

const CollapsingSquare = ({ collapse }) => {
  return (
    <motion.div
      initial={{ scale: 1, x: 0 }}
      animate={{
        scale: collapse ? 0.2 : 1,
        x: collapse ? -200 : 0,
        opacity: collapse ? 0.2 : 0.6,
      }}
      transition={{ duration: 1, ease: "easeInOut" }}
      style={{
        position: "absolute",
        top: "60%",
        left: "70%",
        width: "90px",
        height: "90px",
        backgroundColor: "rgba(255, 192, 203, 0.3)",
        borderRadius: "8px",
        zIndex: 10,
        pointerEvents: "none",
      }}
    />
  );
};

const FloatingSquares = () => {
  const squares = [
    {
      id: 1,
      color: "rgba(128, 0, 128, 0.3)",
      size: "100px",
      initialTop: "30%",
      initialLeft: "20%",
    },
    {
      id: 2,
      color: "rgba(128, 128, 128, 0.3)",
      size: "80px",
      initialTop: "50%",
      initialLeft: "60%",
    },
    {
      id: 3,
      color: "rgba(186, 85, 211, 0.3)",
      size: "120px",
      initialTop: "70%",
      initialLeft: "40%",
    },
  ];

  return (
    <>
      {squares.map((square) => (
        <FloatingSquare key={square.id} {...square} />
      ))}
    </>
  );
};

const Landing = () => {
  const [collapseCard, setCollapseCard] = useState(false);

  const handleMouseMove = (e) => {
    const screenWidth = window.innerWidth;
    if (e.clientX > screenWidth / 2) {
      setCollapseCard(true);
    } else {
      setCollapseCard(false);
    }
  };

  return (
    <div
      id="landing"
      className={styles.landing}
      style={{
        position: "relative",
        backgroundColor: "#000",
        overflow: "hidden",
        minHeight: "100vh",
      }}
      onMouseMove={handleMouseMove}
    >
      {/* Floating Squares */}
      <div style={{ position: "absolute", inset: 0, zIndex: 5 }}>
        <FloatingSquares />
        <CollapsingSquare collapse={collapseCard} />
      </div>

      {/* Dark Overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundColor: "rgba(0, 0, 0, 0.4)",
          zIndex: 8,
        }}
      />

      {/* Main Content - All text in white */}
      <div className={styles.left} style={{ position: "relative", zIndex: 10 }}>
        <div className={styles.leftWrapper} style={{ color: "white" }}>
          <h2 className={styles.intro} style={{ color: "white" }}>
            Hello, I am
          </h2>
          <h1 className={styles.name} style={{ color: "white" }}>
            Ashwini Tiwalkar
          </h1>
          <div
            className={styles.left}
            style={{ position: "relative", zIndex: 10 }}
          >
            <marquee
              behavior="scroll"
              direction="left"
              scrollamount="5"
              loop="infinite"
              style={{ whiteSpace: "nowrap" }}
            >
              <p
                className={styles.description}
                style={{
                  color: "white",
                  display: "inline-block",
                  marginRight: "20px",
                }}
              >
                Full Stack Developer
              </p>
              <p
                className={styles.description}
                style={{
                  color: "white",
                  display: "inline-block",
                  marginRight: "20px",
                }}
              >
                Android developer
              </p>
              <p
                className={styles.description}
                style={{
                  color: "white",
                  display: "inline-block",
                  marginRight: "20px",
                }}
              >
                Web Developer
              </p>
              <p
                className={styles.description}
                style={{
                  color: "white",
                  display: "inline-block",
                  marginRight: "20px",
                }}
              >
                Software Developer
              </p>
            </marquee>
          </div>
        </div>
      </div>

      <Link to="skills" spy={true} smooth={true} offset={-30} duration={500}>
        <Mouse />
      </Link>
    </div>
  );
};

export default Landing;
