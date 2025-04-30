// ProjectList.js
import { useEffect, useRef, useState } from "react";
import styles from "./ProjectList.module.css";
import { projects } from "../../data.js";

const ProjectList = () => {
  const canvasRef = useRef(null);
  const sectionRef = useRef(null);
  const [visibleProjects, setVisibleProjects] = useState([]);

  useEffect(() => {
    // Handle scroll-based project animations
    const handleScroll = () => {
      const section = sectionRef.current;
      if (!section) return;
      
      const sectionTop = section.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      
      if (sectionTop < windowHeight * 0.75) {
        const newVisibleProjects = [];
        
        projects.forEach((project, index) => {
          setTimeout(() => {
            setVisibleProjects(prev => {
              if (prev.includes(project.id)) return prev;
              return [...prev, project.id];
            });
          }, index * 300);
        });
      }
    };
    
    // Initialize animated background
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    let width = canvas.width = canvas.offsetWidth;
    let height = canvas.height = canvas.offsetHeight;
    
    // Particles for background
    const particles = [];
    const particleCount = 60;
    
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: Math.random() * 3 + 1,
        color: `rgba(100, 100, 100, ${Math.random() * 0.5 + 0.1})`,
        speedX: Math.random() * 0.6 - 0.3,
        speedY: Math.random() * 0.6 - 0.3
      });
    }
    
    let animationId;
    
    const animate = () => {
      ctx.clearRect(0, 0, width, height);
      
      particles.forEach(particle => {
        particle.x += particle.speedX;
        particle.y += particle.speedY;
        
        if (particle.x < 0) particle.x = width;
        if (particle.x > width) particle.x = 0;
        if (particle.y < 0) particle.y = height;
        if (particle.y > height) particle.y = 0;
        
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        ctx.fillStyle = particle.color;
        ctx.fill();
        
        particles.forEach(otherParticle => {
          const dx = particle.x - otherParticle.x;
          const dy = particle.y - otherParticle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < 100) {
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(otherParticle.x, otherParticle.y);
            ctx.strokeStyle = `rgba(150, 150, 150, ${0.1 - distance / 1000})`;
            ctx.stroke();
          }
        });
      });
      
      animationId = requestAnimationFrame(animate);
    };
    
    const handleResize = () => {
      width = canvas.width = canvas.offsetWidth;
      height = canvas.height = canvas.offsetHeight;
    };
    
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);
    
    animate();
    handleScroll();
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <div id="project" className={styles.projectList} ref={sectionRef}>
      {/* Animated background */}
      <div className={styles.projectBackground}>
        <canvas ref={canvasRef} className={styles.projectCanvas} />
      </div>
      
      <div className={styles.texts}>
        <h1 className={styles.title}>My Projects</h1>
        <p className={styles.description}>Here are some of my recent works</p>
      </div>

      <div className={styles.list}>
  {projects.map((project, index) => (
    <div 
      key={project.id}
      className={`${styles.projectWrapper} ${visibleProjects.includes(project.id) ? styles.visible : ''}`}
    >
      <div 
        className={styles.projectContainer}
        style={{
          flexDirection: index % 2 === 0 ? "row" : "row-reverse",
          backgroundColor: "rgba(0, 0, 0, 0.25)",
          borderRadius: "10px",
          padding: "20px",
          alignItems: "center",
          border: "none", // explicitly no border
        }}
      >
        <div className={styles.projectImage}>
          <img src={project.img} alt={project.title} />
        </div>
        <div className={styles.projectContent}>
          <h2>{project.title}</h2>
          <div className={styles.techno}>{project.techno}</div>
          <p className={styles.description}>{project.description}</p>
        </div>
      </div>
    </div>
  ))}
</div>


    </div>
  );
};

export default ProjectList;