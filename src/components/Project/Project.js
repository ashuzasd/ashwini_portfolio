import React from 'react';

const Project = ({ img, title, techno, description, link, source }) => {
  return (
    <div style={styles.project}>
      <style>
        {`
          @keyframes scrollCode {
            0% { background-position: 0 0; }
            100% { background-position: 0 1000px; }
          }
        `}
      </style>
      
      <div style={styles.browser}>
        <div style={{...styles.circle, backgroundColor: '#FF605C'}}></div>
        <div style={{...styles.circle, backgroundColor: '#FFBD44'}}></div>
        <div style={{...styles.circle, backgroundColor: '#00CA4E'}}></div>
      </div>
      
      <div style={styles.imageContainer}>
        <img src={img} alt={title} style={styles.img} />
        <div style={styles.overlay}>
          <h3 style={styles.overlayTitle}>{title}</h3>
          <p style={styles.techStack}>{techno}</p>
          <p style={styles.overlayDesc}>{description}</p>
          <button style={styles.detailsBtn}>View Details</button>
        </div>
      </div>
      
      <div style={styles.details}>
        <h3 style={styles.detailsTitle}>{title}</h3>
        <p style={styles.detailsTech}>{techno}</p>
        <p style={styles.summary}>{description}</p>
        <div style={styles.actions}>
          <a href={link} style={styles.actionBtn}>See Live</a>
          <a href={source} style={styles.actionBtn}>Source Code</a>
        </div>
      </div>
    </div>
  );
};

const styles = {
  project: {
    marginBottom: '30px',
    overflow: 'hidden',
    borderRadius: '10px',
    boxShadow: '0 15px 30px rgb(0, 0, 0)',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    backgroundColor: '#000',
    position: 'relative',
  },
  projectBefore: {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: `
      linear-gradient(rgb(0, 0, 0), rgb(0, 0, 0)),
      url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100">
        <text x="10" y="20" font-family="monospace" font-size="10" fill="rgba(0,255,0,0.1)">&lt;div&gt;</text>
        <text x="20" y="35" font-family="monospace" font-size="10" fill="rgba(0,255,0,0.1)">className="app"</text>
        <text x="10" y="50" font-family="monospace" font-size="10" fill="rgba(0,255,0,0.1)">&lt;/div&gt;</text>
        <text x="10" y="70" font-family="monospace" font-size="10" fill="rgba(0,255,0,0.1)">function() {</text>
        <text x="20" y="85" font-family="monospace" font-size="10" fill="rgba(0,255,0,0.1)">return null;</text>
        <text x="10" y="100" font-family="monospace" font-size="10" fill="rgba(0,255,0,0.1)">}</text>
      </svg>')
    `,
    opacity: 0.3,
    zIndex: 1,
    animation: 'scrollCode 100s linear infinite',
  },
  browser: {
    height: '20px',
    backgroundColor: 'rgb(0, 0, 0)',
    display: 'flex',
    alignItems: 'center',
    padding: '0 10px',
    position: 'relative',
    zIndex: 2,
    borderRadius: '10px 10px 0 0',
  },
  circle: {
    width: '6px',
    height: '6px',
    borderRadius: '50%',
    margin: '3px',
  },
  imageContainer: {
    position: 'relative',
    overflow: 'hidden',
    height: '200px',
    zIndex: 2,
  },
  img: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    transition: 'transform 0.5s ease',
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    background: 'linear-gradient(to top, rgb(0, 0, 0), transparent)',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    padding: '20px',
    opacity: 0,
    transition: 'opacity 0.3s ease',
    color: 'white',
    zIndex: 3,
  },
  // ... include all your other styles from the original CSS ...
};

export default Project;