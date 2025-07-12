'use client';

import { Box, Typography, useTheme, Avatar, Chip, Button } from '@mui/material';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { useThemeContext } from '@/app/theme/ThemeProvider';
import { FaBriefcase, FaLaptopCode, FaChartLine } from 'react-icons/fa';
import { SiGoogle } from 'react-icons/si';

export const Experience = () => {
  const theme = useTheme();
  const { darkMode } = useThemeContext();
  const containerRef = useRef<HTMLDivElement>(null!);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Scroll transformations for parallax effects
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);
  const opacity = useTransform(scrollYProgress, [0, 0.8, 1], [1, 1, 0.2]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.98]);

  const experienceData = [
    {
      id: 1,
      role: "Software Development Engineer",
      company: "Perspectiv Labs",
      period: "2024 July - Present",
      description: "Led a team developing responsive, cross‑platform mobile and web applications—handling end‑to‑end front‑end and back‑end architecture—and designed and implemented RESTful APIs to ensure seamless integration across platforms.",
      icon: <SiGoogle size={24} />,
      color: "#4285F4",
      skills: ["Mobile App Development", "Full Stack Development", "Jest", "REST API"],
      type: "Full-time"
    },
    {
  id: 2,
  role: "Full Stack Developer Freelancer",
  company: "Day One",
  period: "2024 Feb - 2024 May",
  description: "Developed a Conversational AI Avatar Bot for restaurant ordering via QR code. Built a voice-driven, browser-based assistant using NLP and speech synthesis. Focused on creating a human-like chatbot interface using advanced NLP techniques and real-time speech synthesis.",
  icon: <SiGoogle size={24} />, // You can replace this with a more relevant icon, e.g., <SiOpenai /> or a custom one
  color: "#7FBA00",
  skills: ["JavaScript", "TypeScript", "Python", "NLP", "Speech Synthesis", "AI", "React"],
  type: "Freelance"
},
  ];

  const experienceTypes = [
    { icon: <FaBriefcase />, name: "Full-time", color: theme.palette.primary.main },
    { icon: <FaLaptopCode />, name: "Contract", color: theme.palette.secondary.main },
    { icon: <FaChartLine />, name: "Internship", color: "#6C63FF" }
  ];

  return (
    <Box 
      id="experience"
      component="section"
      ref={containerRef}
      sx={{
        minHeight: '100vh',
        padding: { xs: '80px 20px', md: '120px 60px' },
        position: 'relative',
        overflow: 'hidden',
        background: darkMode 
          ? 'radial-gradient(circle at center, #1a1a1a 0%, #000000 100%)' 
          : 'radial-gradient(circle at center, #f5f5f5 0%, #e0e0e0 100%)',
      }}
    >
      {/* Animated floating tech bubbles */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          style={{
            position: 'absolute',
            width: `${Math.random() * 12 + 4}px`,
            height: `${Math.random() * 12 + 4}px`,
            borderRadius: '50%',
            background: `radial-gradient(circle, ${theme.palette.primary.main}, transparent)`,
            opacity: 0.4,
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, Math.random() * 200 - 100],
            x: [0, Math.random() * 200 - 100],
            opacity: [0.2, 0.8, 0.2],
          }}
          transition={{
            duration: Math.random() * 15 + 10,
            repeat: Infinity,
            repeatType: 'reverse',
            ease: 'easeInOut',
            delay: i * 0.3
          }}
        />
      ))}

      {/* Animated background elements */}
      <motion.div
        style={{
          position: 'absolute',
          top: '10%',
          right: '5%',
          width: '400px',
          height: '400px',
          borderRadius: '30% 70% 67% 33% / 30% 30% 70% 70%',
          background: `linear-gradient(45deg, ${theme.palette.primary.main}10, ${theme.palette.secondary.main}10)`,
          filter: 'blur(60px)',
          zIndex: 0,
          y,
          opacity,
          scale
        }}
      />
      <motion.div
        style={{
          position: 'absolute',
          bottom: '15%',
          left: '5%',
          width: '500px',
          height: '500px',
          borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%',
          background: `linear-gradient(135deg, ${theme.palette.secondary.main}10, ${theme.palette.primary.main}10)`,
          filter: 'blur(70px)',
          zIndex: 0,
          y: useTransform(scrollYProgress, [0, 1], ['0%', '-20%']),
          opacity,
          scale
        }}
      />

      {/* Main content */}
      <Box sx={{ 
        maxWidth: '1400px', 
        margin: '0 auto',
        position: 'relative',
        zIndex: 1
      }}>
        {/* Section header */}
        <Box sx={{ textAlign: 'center', mb: { xs: 4, md: 8 } }}>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Typography
              variant="h4"
              component="h2"
              sx={{
                fontWeight: 800,
                mb: 2,
                background: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                display: 'inline-block',
                fontSize: { xs: '2rem', md: '3rem' },
                lineHeight: 1.2
              }}
            >
              Professional Journey
            </Typography>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Typography
              variant="h6"
              component="p"
              sx={{
                color: theme.palette.text.secondary,
                maxWidth: '700px',
                margin: '0 auto',
                fontSize: { xs: '1rem', md: '1.25rem' }
              }}
            >
              My career path through leading tech companies and innovative projects
            </Typography>
          </motion.div>
        </Box>

        {/* Experience type filter */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          style={{ 
            display: 'flex', 
            justifyContent: 'center', 
            flexWrap: 'wrap', 
            gap: '12px',
            marginBottom: '40px'
          }}
        >
          {experienceTypes.map((type, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                startIcon={type.icon}
                sx={{
                  background: `${type.color}20`,
                  color: type.color,
                  borderRadius: '12px',
                  padding: '8px 16px',
                  fontWeight: 600,
                  textTransform: 'none',
                  border: `1px solid ${type.color}30`,
                  '&:hover': {
                    background: `${type.color}30`
                  }
                }}
              >
                {type.name}
              </Button>
            </motion.div>
          ))}
        </motion.div>

        {/* Timeline */}
        <Box sx={{ 
          position: 'relative',
          paddingLeft: { xs: '20px', md: '100px' }
        }}>
          {/* Vertical line */}
          <motion.div
            style={{
              position: 'absolute',
              // left: { xs: '10px', md: '50px' },
              top: 0,
              bottom: 0,
              width: '4px',
              background: theme.palette.background.paper,
              borderRadius: '2px',
              zIndex: 1
            }}
          >
            <motion.div
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                height: useTransform(scrollYProgress, [0, 1], ['0%', '100%']),
                background: `linear-gradient(to bottom, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                borderRadius: '2px',
              }}
            />
          </motion.div>

          {/* Experience items */}
          {experienceData.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true, margin: "-50px" }}
              style={{ position: 'relative', zIndex: 2, marginBottom: '60px' }}
            >
              {/* Timeline dot */}
              <Box
                sx={{
                  position: 'absolute',
                  left: { xs: '-18px', md: '-58px' },
                  top: '40px',
                  width: '28px',
                  height: '28px',
                  borderRadius: '50%',
                  background: `linear-gradient(135deg, ${exp.color}, ${theme.palette.secondary.main})`,
                  border: `4px solid ${theme.palette.background.default}`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: theme.palette.common.white,
                  zIndex: 3,
                  boxShadow: `0 0 0 8px ${exp.color}20`
                }}
              >
                {exp.icon}
              </Box>

              {/* Experience card */}
              <Box
                sx={{
                  background: darkMode ? 'rgba(30, 30, 30, 0.7)' : 'rgba(255, 255, 255, 0.7)',
                  backdropFilter: 'blur(12px)',
                  padding: { xs: '20px', md: '30px' },
                  borderRadius: '20px',
                  boxShadow: `0 10px 30px ${darkMode ? 'rgba(0,0,0,0.3)' : 'rgba(0,0,0,0.1)'}`,
                  border: `1px solid ${darkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)'}`,
                  position: 'relative',
                  overflow: 'hidden',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-5px)',
                    boxShadow: `0 15px 40px ${darkMode ? 'rgba(0,0,0,0.4)' : 'rgba(0,0,0,0.2)'}`,
                    '& .company-highlight': {
                      width: '100%',
                      opacity: 0.1
                    }
                  }
                }}
              >
                {/* Company name highlight effect */}
                <Box
                  className="company-highlight"
                  sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '0%',
                    height: '100%',
                    background: exp.color,
                    opacity: 0,
                    transition: 'all 0.5s ease',
                    zIndex: -1
                  }}
                />

                <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: '20px' }}>
                  <Box sx={{ flexShrink: 0 }}>
                    <Avatar
                      sx={{
                        width: '80px',
                        height: '80px',
                        background: `${exp.color}20`,
                        color: exp.color,
                        fontSize: '32px',
                        border: `2px solid ${exp.color}`
                      }}
                    >
                      {exp.icon}
                    </Avatar>
                  </Box>

                  <Box sx={{ flex: 1 }}>
                    <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, gap: '10px', mb: 1 }}>
                      <Typography
                        variant="h5"
                        component="h3"
                        sx={{ 
                          fontWeight: 700,
                          color: theme.palette.text.primary,
                          background: `linear-gradient(90deg, ${exp.color}, ${theme.palette.secondary.main})`,
                          WebkitBackgroundClip: 'text',
                          WebkitTextFillColor: 'transparent',
                          display: 'inline-block'
                        }}
                      >
                        {exp.role}
                      </Typography>
                      <Chip
                        label={exp.type}
                        size="small"
                        sx={{
                          background: `${exp.color}20`,
                          color: exp.color,
                          fontWeight: 600,
                          height: '24px',
                          alignSelf: 'center'
                        }}
                      />
                    </Box>

                    <Typography
                      variant="h6"
                      component="p"
                      sx={{ 
                        fontWeight: 600,
                        mb: 1,
                        color: theme.palette.text.secondary
                      }}
                    >
                      {exp.company} • {exp.period}
                    </Typography>

                    <Typography
                      variant="body1"
                      sx={{ 
                        mb: 3,
                        color: theme.palette.text.secondary,
                        lineHeight: 1.8
                      }}
                    >
                      {exp.description}
                    </Typography>

                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                      {exp.skills.map((skill, i) => (
                        <motion.div
                          key={i}
                          whileHover={{ y: -3 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <Chip
                            label={skill}
                            sx={{
                              background: `${exp.color}15`,
                              color: theme.palette.text.primary,
                              fontWeight: 500,
                              border: `1px solid ${exp.color}30`,
                              '&:hover': {
                                background: `${exp.color}25`
                              }
                            }}
                          />
                        </motion.div>
                      ))}
                    </Box>
                  </Box>
                </Box>
              </Box>
            </motion.div>
          ))}
        </Box>
      </Box>
    </Box>
  );
};
