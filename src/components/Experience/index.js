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
    <Timeline position="alternate" style={{ marginTop:'70px'}}>
      {experiences.map((exp, index) => (
        <TimelineItem key={index}>
          <TimelineSeparator>
            <TimelineDot color="secondary" variant="outlined" />
            {index !== experiences.length - 1 && (
              <TimelineConnector style={{ background: '#854CE6' }} />
            )}
          </TimelineSeparator>
          <TimelineContent>
            <Paper elevation={3} style={{ padding: '1rem', background: '#1f1f2e', color: '#fff', }}>
              <Typography variant="h6" component="h1">{exp.role}</Typography>
              <Typography variant="subtitle2" color="#aaa">{exp.company} | {exp.duration}</Typography>
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
  );
};

export default Experience;
