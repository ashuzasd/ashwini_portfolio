import React from 'react';
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
} from '@mui/lab';
import { Paper, Typography, Box } from '@mui/material';

const experiences = [
  {
    role: "Frontend Engineer",
    company: "Bharat GO",
    duration: "Sep 2023 - Jan 2024",
    description:
      "Collaborated with teams to design appealing UI for online stores. Used React.js for responsive UI.",
    skills: ["ReactJS", "Material UI", "HTML", "CSS"],
  },
  {
    role: "Software Developer Intern",
    company: "Softomatic",
    duration: "Jan 2023 - Mar 2023",
    description:
      "Worked on websites using HTML, CSS, JS, PHP. Learned full-stack basics with mentorship.",
    skills: ["ReactJS", "JavaScript", "HTML", "CSS"],
  },
  {
    role: "Frontend Engineer Intern",
    company: "AK Infotech",
    duration: "Sep 2022 - Mar 2023",
    description:
      "Designed front-end layouts using HTML, CSS, PHP, and Figma.",
    skills: ["HTML", "CSS", "PHP", "Figma"],
  },
];

const Experience = () => {
  return (
    <Box sx={{ position: 'relative', overflow: 'hidden', minHeight: '100vh', backgroundColor: '#000' }}>
      {/* Animated Coding Background */}
      <Box sx={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 0,
        opacity: 0.15,
        background: 'radial-gradient(circle, #1e1e1e 0%, #000000 100%)',
        overflow: 'hidden',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundImage: `
            linear-gradient(transparent 95%, rgba(45, 156, 219, 0.1) 95%),
            linear-gradient(90deg, transparent 95%, rgba(45, 156, 219, 0.1) 95%)
          `,
          backgroundSize: '30px 30px',
        }
      }}>
        {/* Animated code elements */}
        {[...Array(20)].map((_, i) => (
          <Box
            key={i}
            sx={{
              position: 'absolute',
              color: '#2d9cdb',
              fontSize: '14px',
              fontFamily: 'monospace',
              whiteSpace: 'nowrap',
              animation: 'float 15s linear infinite',
              animationDelay: `${Math.random() * 10}s`,
              textShadow: '0 0 5px rgba(45, 156, 219, 0.7)',
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              opacity: 0.7,
            }}
          >
            {(() => {
              const codeLines = [
                'const experience = () => {',
                'return <div>My Journey</div>;',
                '};',
                'function Projects() {',
                'return <Portfolio />;',
                '}',
                'import React from "react";',
                'export default App;',
                '<Timeline position="alternate">',
                'useEffect(() => {}, []);',
                'const [state, setState] = useState();',
                'className="glow-card"',
                'border-radius: 12px;',
                'box-shadow: 0 0 12px;',
                'margin: 1rem 0;',
                'padding: 1.5rem;',
                'background: #1f1f2e;',
                'color: white;',
                'text-align: left;',
                'animation: glowPulse 3s;'
              ];
              return codeLines[Math.floor(Math.random() * codeLines.length)];
            })()}
          </Box>
        ))}
      </Box>

      <style>
        {`
          @keyframes float {
            0% {
              transform: translateY(0) translateX(0);
              opacity: 0;
            }
            10% {
              opacity: 0.7;
            }
            90% {
              opacity: 0.7;
            }
            100% {
              transform: translateY(-100vh) translateX(20px);
              opacity: 0;
            }
          }
          
          .glow-card {
            padding: 1.5rem;
            margin: 1rem 0;
            background: #1f1f2e;
            border-left: 4px solid #854CE6;
            color: white;
            text-align: left;
            border-radius: 12px;
            animation: glowPulse 3s infinite;
            box-shadow: 0 0 12px rgba(133, 76, 230, 0.6);
          }

          @keyframes glowPulse {
            0% {
              box-shadow: 0 0 12px rgba(133, 76, 230, 0.6);
            }
            50% {
              box-shadow: 0 0 24px rgba(133, 76, 230, 1);
            }
            100% {
              box-shadow: 0 0 12px rgba(133, 76, 230, 0.6);
            }
          }
        `}
      </style>

      {/* Content Container */}
      <Box sx={{ position: 'relative', zIndex: 1 }}>
        {/* Heading and Subtitle */}
        <Box sx={{ textAlign: 'center', marginTop: '40px', marginBottom: '20px' }}>
          <Typography variant="h4" component="h2" sx={{ fontWeight: 'bold', color: '#fff' }}>
            Experience
          </Typography>
          <Typography variant="subtitle1" sx={{ color: '#aaa', maxWidth: '600px', margin: '0 auto' }}>
            My professional journey as a software engineer working across diverse companies and impactful projects.
          </Typography>
        </Box>

        {/* Timeline */}
        <Timeline position="alternate" style={{ marginTop: '30px' }}>
          {experiences.map((exp, index) => (
            <TimelineItem
              key={index}
              position={index === 1 ? 'left' : 'alternate'}
            >
              <TimelineSeparator>
                <TimelineDot color="secondary" variant="outlined" />
                {index !== experiences.length - 1 && (
                  <TimelineConnector style={{ background: '#854CE6' }} />
                )}
              </TimelineSeparator>
              <TimelineContent style={index === 1 ? { textAlign: 'left' } : {}}>
                <Paper
                  elevation={3}
                  style={{
                    padding: '1rem',
                    background: '#1f1f2e',
                    color: '#fff',
                    animation: 'glowPulse 3s infinite',
                    boxShadow: '0 0 12px rgba(133, 76, 230, 0.6)',
                    borderRadius: '12px',
                  }}
                >
                  <Typography variant="h6" component="h1">{exp.role}</Typography>
                  <Typography variant="subtitle2" color="#aaa">
                    {exp.company} | {exp.duration}
                  </Typography>
                  <Typography style={{ margin: '0.5rem 0' }}>{exp.description}</Typography>
                  <Box component="ul" style={{ paddingLeft: '1rem', margin: 0 }}>
                    {exp.skills.map((skill, idx) => (
                      <li key={idx}>{skill}</li>
                    ))}
                  </Box>
                </Paper>
              </TimelineContent>
            </TimelineItem>
          ))}
        </Timeline>
      </Box>
    </Box>
  );
};

export default Experience;