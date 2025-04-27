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
    
    // Grid configuration
    const gridSize = 35;
    const dotSize = 1.5;
    
    // Points for grid
    const points = [];
    const spacing = width > 800 ? 30 : 20;
    const cols = Math.floor(width / spacing) + 2;
    const rows = Math.floor(height / spacing) + 2;
    
    // Create grid points with random velocity
    for (let i = 0; i < cols; i++) {
      for (let j = 0; j < rows; j++) {
        // Generate gray colors (same value for r, g, b)
        const grayValue = 120 + Math.random() * 60; // Values between 120-180 for medium gray
        
        points.push({
          x: i * spacing,
          y: j * spacing,
          originX: i * spacing,
          originY: j * spacing,
          vx: Math.random() * 0.5 - 0.25,
          vy: Math.random() * 0.5 - 0.25,
          active: 0.3 + Math.random() * 0.2,
          color: {
            r: grayValue,
            g: grayValue,
            b: grayValue
          }
        });
      }
    }
    
    // Create wave centers for automatic animation
    const waveCenters = [];
    for (let i = 0; i < 3; i++) {
      waveCenters.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 2,
        vy: (Math.random() - 0.5) * 2,
        radius: 80 + Math.random() * 60
      });
    }
    
    // Animation variables
    let animationId;
    let time = 0;
    
    const animate = () => {
      ctx.clearRect(0, 0, width, height);
      time += 0.01;
      
      // Update wave centers
      waveCenters.forEach(center => {
        center.x += center.vx;
        center.y += center.vy;
        
        // Bounce wave centers off edges
        if (center.x < 0 || center.x > width) center.vx *= -1;
        if (center.y < 0 || center.y > height) center.vy *= -1;
      });
      
      // Update points
      for (let i = 0; i < points.length; i++) {
        const point = points[i];
        
        // Auto animation with wave-like motion
        let totalForceX = 0;
        let totalForceY = 0;
        
        // Influence from wave centers
        waveCenters.forEach(center => {
          const dx = center.x - point.x;
          const dy = center.y - point.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          
          if (dist < center.radius) {
            const force = (1 - dist / center.radius) * 0.03;
            totalForceX += dx * force;
            totalForceY += dy * force;
            point.active = Math.min(0.8, point.active + 0.2);
          }
        });
        
        // Add some subtle movement based on time
        totalForceX += Math.sin(time + point.originX * 0.01) * 0.2;
        totalForceY += Math.cos(time + point.originY * 0.01) * 0.2;
        
        // Update position with forces
        point.x += totalForceX;
        point.y += totalForceY;
        
        // Gradually return to original position
        point.x += (point.originX - point.x) * 0.05;
        point.y += (point.originY - point.y) * 0.05;
        
        // Natural fade of activity
        point.active = Math.max(0.3, point.active * 0.98);
        
        // Draw point
        ctx.beginPath();
        ctx.arc(point.x, point.y, dotSize, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${point.color.r}, ${point.color.g}, ${point.color.b}, ${point.active})`;
        ctx.fill();
        
        // Connect nearby points with lines
        for (let j = i + 1; j < points.length; j++) {
          const nextPoint = points[j];
          const dx = point.x - nextPoint.x;
          const dy = point.y - nextPoint.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < gridSize) {
            ctx.beginPath();
            ctx.moveTo(point.x, point.y);
            ctx.lineTo(nextPoint.x, nextPoint.y);
            const lineOpacity = Math.max(0, 0.15 - distance / 100);
            ctx.strokeStyle = `rgba(${point.color.r}, ${point.color.g}, ${point.color.b}, ${lineOpacity})`;
            ctx.stroke();
          }
        }
      }
      
      animationId = requestAnimationFrame(animate);
    };
    
    // Handle mouse movement as a bonus interaction
    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      const mouseX = e.clientX - rect.left;
      const mouseY = e.clientY - rect.top;
      
      // Add temporary wave center at mouse position
      points.forEach(point => {
        const dx = mouseX - point.x;
        const dy = mouseY - point.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        
        if (dist < 100) {
          const force = (1 - dist / 100) * 0.2;
          point.x += dx * force;
          point.y += dy * force;
          point.active = Math.min(0.8, point.active + 0.2);
        }
      });
    };
    
    // Handle resize
    const handleResize = () => {
      width = canvas.width = canvas.offsetWidth;
      height = canvas.height = canvas.offsetHeight;
    };
    
    // Event listeners
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('resize', handleResize);
    
    // Start animation
    animate();
    
    // Cleanup
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
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