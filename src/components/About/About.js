import styles from "./About.module.css";
import {
  faCss3,
  faGitAlt,
  faHtml5,
  faJsSquare,
  faReact,
  faEnvira,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useRef } from "react";
import { Box } from "@mui/material";

const About = () => {
  const canvasRef = useRef(null);
  const bgRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    let width = canvas.width = canvas.offsetWidth;
    let height = canvas.height = canvas.offsetHeight;
    
    // Matrix-style coding animation
    const chars = "02{}[]();:importexportincludeexcludedivtexttag`";
    const fontSize = 5;
    const columns = Math.floor(width / fontSize);
    
    const drops = [];
    for (let i = 0; i < columns; i++) {
      drops[i] = Math.floor(Math.random() * -100);
    }
    
    const colors = [
      { r: 249, g: 250, b: 251 },
      { r: 243, g: 244, b: 246 },
      { r: 229, g: 231, b: 235 }
    ];
    
    const draw = () => {
      ctx.clearRect(0, 0, width, height);
      
      for (let i = 0; i < drops.length; i++) {
        const text = chars[Math.floor(Math.random() * chars.length)];
        const colorIdx = Math.floor(Math.random() * colors.length);
        const color = colors[colorIdx];
        const opacity = Math.random() * 0.6 + 0.4;
        
        ctx.fillStyle = `rgba(${color.r}, ${color.g}, ${color.b}, ${opacity})`;
        ctx.font = `100 ${fontSize}px monospace`;
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);
        
        if (drops[i] * fontSize > height && Math.random() > 0.99) {
          drops[i] = 0;
        }
        
        drops[i] += Math.random() * 0.5;
      }
    };
    
    let animationId;
    let interval = setInterval(draw, 35);
    
    const handleResize = () => {
      width = canvas.width = canvas.offsetWidth;
      height = canvas.height = canvas.offsetHeight;
      const newColumns = Math.floor(width / fontSize);
      
      if (newColumns > drops.length) {
        for (let i = drops.length; i < newColumns; i++) {
          drops[i] = Math.floor(Math.random() * -100);
        }
      } else if (newColumns < drops.length) {
        drops.length = newColumns;
      }
      
      clearInterval(interval);
      interval = setInterval(draw, 50);
    };
    
    window.addEventListener('resize', handleResize);
    draw();
    
    return () => {
      window.removeEventListener('resize', handleResize);
      clearInterval(interval);
      if (animationId) cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <Box
      id="about"
      sx={{
        bgcolor: 'black',
        color: 'white',
        minHeight: '100vh',
        display: 'flex',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Animated background elements (same as Contact) */}
      <Box
        ref={bgRef}
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: 0,
          overflow: 'hidden',
        }}
      >
        {[...Array(10)].map((_, i) => (
          <Box
            key={i}
            sx={{
              position: 'absolute',
              background: 'rgba(133, 76, 230, 0.1)',
              borderRadius: '50%',
              animation: 'float 15s infinite linear',
              animationDelay: `${i * 2}s`,
              '@keyframes float': {
                '0%': {
                  transform: 'translateY(0) translateX(0) rotate(0deg)',
                  opacity: 1,
                },
                '100%': {
                  transform: 'translateY(-100vh) translateX(100px) rotate(360deg)',
                  opacity: 0,
                },
              },
            }}
            style={{
              width: `${Math.random() * 100 + 50}px`,
              height: `${Math.random() * 100 + 50}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </Box>

      <div className={styles.about}>
        <div className={styles.gridBackground}>
          <canvas ref={canvasRef} className={styles.gridCanvas} />
        </div>
        
        <div data-aos="fade-left" className={styles.left}>
          <div className={styles.cube}>
            <div className={styles.box + " " + styles.box1}>
              <FontAwesomeIcon icon={faEnvira} />
            </div>

            <div className={styles.box + " " + styles.box2}>
              <FontAwesomeIcon icon={faHtml5} />
            </div>

            <div className={styles.box + " " + styles.box3}>
              <FontAwesomeIcon icon={faCss3} />
            </div>

            <div className={styles.box + " " + styles.box4}>
              <FontAwesomeIcon icon={faReact} />
            </div>

            <div className={styles.box + " " + styles.box5}>
              <FontAwesomeIcon icon={faJsSquare} />
            </div>

            <div className={styles.box + " " + styles.box6}>
              <FontAwesomeIcon icon={faGitAlt} />
            </div>
          </div>
        </div>
        
        <div data-aos="fade-right" className={styles.right}>
          <h1 className={styles.title}>About Me</h1>
          <p className={styles.sub}>
            "Design is not just what it looks like and feels like. Design is how
            it works" - Steve Jobs
          </p>
          <p className={styles.description}>
            I have always had an affinity for technology and the arts, a chemistry
            I gratefully utilize today as a developer. I have a serious passion
            for creating dynamic digital experiences and intuitive user interfaces
            while allowing seamless front-end integration to back-end systems.
            Minimalism and "less is more" have always been my philosophy on
            removing unnecessary distractions that would keep me from exuding my
            creativity and products from executing its idea effectively. I am
            interested in anything coding or design related, from software
            engineering to UI/UX, and look forward to working on incredible projects
            with positive people.
          </p>
        </div>
      </div>
    </Box>
  );
};

export default About;