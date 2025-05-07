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

const About = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    let width = canvas.width = canvas.offsetWidth;
    let height = canvas.height = canvas.offsetHeight;
    
    // Extended character set for full text display
    const chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ{}[]();:<>?/!@#$%^&*-+=|~`";
    const fontSize = 14; // Slightly larger for better readability
    const columns = Math.floor(width / fontSize);
    
    // Create an array to track the Y position of each column
    const drops = [];
    for (let i = 0; i < columns; i++) {
      drops[i] = Math.floor(Math.random() * -100);
    }
    
    // Gray-50 color palette for text only
    const colors = [
      { r: 249, g: 250, b: 251 }, // Lightest gray
      { r: 243, g: 244, b: 246 }, // Medium light gray
      { r: 229, g: 231, b: 235 }  // Slightly darker gray
    ];
    
    // Store multiple characters per column for full text effect
    const columnTexts = Array(columns).fill().map(() => []);
    const maxTextLength = 20; // Number of characters to show per column
    
    const draw = () => {
      // Clear the canvas completely (transparent background)
      ctx.clearRect(0, 0, width, height);
      
      // Draw the characters
      for (let i = 0; i < columns; i++) {
        // Add new random character at the top occasionally
        if (Math.random() > 0.97) {
          columnTexts[i].unshift(chars[Math.floor(Math.random() * chars.length)]);
          if (columnTexts[i].length > maxTextLength) {
            columnTexts[i].pop();
          }
        }
        
        // Random color from our gradient
        const colorIdx = Math.floor(Math.random() * colors.length);
        const color = colors[colorIdx];
        
        // Draw all characters in the column
        for (let j = 0; j < columnTexts[i].length; j++) {
          const opacity = 1 - (j / maxTextLength); // Fade out as we go down
          ctx.fillStyle = `rgba(${color.r}, ${color.g}, ${color.b}, ${opacity})`;
          ctx.font = `300 ${fontSize}px monospace`; // Normal font weight
          ctx.fillText(
            columnTexts[i][j], 
            i * fontSize, 
            drops[i] * fontSize + j * fontSize
          );
        }
        
        // Move the column down
        drops[i] += 0.5; // Consistent slow speed
        
        // Reset column when it goes too far down
        if (drops[i] * fontSize > height + maxTextLength * fontSize) {
          drops[i] = 0;
          columnTexts[i] = []; // Clear the column
        }
      }
    };
    
    // Animation variables
    let animationId;
    let lastTime = 0;
    const fps = 20;
    const fpsInterval = 1000 / fps;
    
    const animate = (timestamp) => {
      if (!lastTime) lastTime = timestamp;
      const elapsed = timestamp - lastTime;
      
      if (elapsed > fpsInterval) {
        lastTime = timestamp - (elapsed % fpsInterval);
        draw();
      }
      
      animationId = requestAnimationFrame(animate);
    };
    
    // Handle resize
    const handleResize = () => {
      width = canvas.width = canvas.offsetWidth;
      height = canvas.height = canvas.offsetHeight;
      
      // Recalculate columns
      const newColumns = Math.floor(width / fontSize);
      
      // Adjust columns array
      if (newColumns > columns) {
        // Add new columns
        for (let i = columns; i < newColumns; i++) {
          columnTexts[i] = [];
          drops[i] = Math.floor(Math.random() * -100);
        }
      } else if (newColumns < columns) {
        // Remove extra columns
        columnTexts.length = newColumns;
        drops.length = newColumns;
      }
    };
    
    window.addEventListener('resize', handleResize);
    animationId = requestAnimationFrame(animate);
    
    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <div id="about" className={styles.about}>
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
  );
};

export default About;