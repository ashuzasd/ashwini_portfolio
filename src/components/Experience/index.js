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
import video1 from '../../../src/assets/video/pinterestdownloader.com-1746296220.685037.mp4';

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
    <>
      <style>
        {`
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

          video {
            border-radius: 10px;
            max-width: 240px;
            margin-right: 20px;
          }
        `}
      </style>

      {/* Heading and Subtitle */}
      <Box sx={{ textAlign: 'center', marginTop: '40px', marginBottom: '20px' }}>
        <Typography variant="h4" component="h2" sx={{ fontWeight: 'bold', color: '#854CE6' }}>
          Experience
        </Typography>
        <Typography variant="subtitle1" sx={{ color: '#aaa', maxWidth: '600px', margin: '0 auto' }}>
          My professional journey as a software engineer working across diverse companies and impactful projects.
        </Typography>
      </Box>

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

            <TimelineContent>
  <Box display="flex" alignItems="center" gap={2}>
    {/* Show video ONLY for the first card */}
    {index === 0 && (
      <video
        src={video1}
        width="200"
        height="120"
        controls
        style={{ borderRadius: '8px' }}
      />
    )}

    <Paper elevation={3} style={{ padding: '1rem', background: '#1f1f2e', color: '#fff' }}>
      <Typography variant="h6" component="h1">{exp.role}</Typography>
      <Typography variant="subtitle2" color="#aaa">{exp.company} | {exp.duration}</Typography>
      <Typography style={{ margin: '0.5rem 0' }}>{exp.description}</Typography>
      <Box component="ul" style={{ paddingLeft: '1rem', margin: 0 }}>
        {exp.skills.map((skill, idx) => (
          <li key={idx}>{skill}</li>
        ))}
      </Box>
    </Paper>
  </Box>
</TimelineContent>

          </TimelineItem>
        ))}
      </Timeline>
    </>
  );
};

export default Experience;
