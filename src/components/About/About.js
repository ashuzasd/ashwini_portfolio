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
    
    // Matrix-style coding animation
    const chars = "02{}[]();:importexportincludeexcludedivtexttag`";
    const fontSize = 12; // Smaller font size for thinner appearance
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
    
    const draw = () => {
      // Clear the canvas completely (transparent background)
      ctx.clearRect(0, 0, width, height);
      
      // Draw the characters
      for (let i = 0; i < drops.length; i++) {
        // Random character
        const text = chars[Math.floor(Math.random() * chars.length)];
        
        // Random color from our gradient
        const colorIdx = Math.floor(Math.random() * colors.length);
        const color = colors[colorIdx];
        
        // Subtle opacity variation
        const opacity = Math.random() * 0.6 + 0.4; // Reduced max opacity
        
        ctx.fillStyle = `rgba(${color.r}, ${color.g}, ${color.b}, ${opacity})`;
        ctx.font = `100 ${fontSize}px monospace`; // Thin font weight
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);
        
        // Slower reset with more randomness
        if (drops[i] * fontSize > height && Math.random() > 0.99) { // Reduced reset frequency
          drops[i] = 0;
        }
        
        // Slower movement
        drops[i] += Math.random() * 0.5; // Reduced speed
      }
    };
    
    // Animation variables - slower frame rate
    let animationId;
    let interval = setInterval(draw, 35); // ~20fps (slower than before)
    
    // Handle resize
    const handleResize = () => {
      width = canvas.width = canvas.offsetWidth;
      height = canvas.height = canvas.offsetHeight;
      
      // Recalculate columns
      const newColumns = Math.floor(width / fontSize);
      
      // Adjust drops array
      if (newColumns > drops.length) {
        // Add new columns
        for (let i = drops.length; i < newColumns; i++) {
          drops[i] = Math.floor(Math.random() * -100);
        }
      } else if (newColumns < drops.length) {
        // Remove extra columns
        drops.length = newColumns;
      }
      
      // Restart animation with new dimensions
      clearInterval(interval);
      interval = setInterval(draw, 50); // Consistent slower speed
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