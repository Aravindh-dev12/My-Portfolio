'use client';

import { Box, Typography, useTheme, Avatar, Chip } from '@mui/material';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { useThemeContext } from '@/app/theme/ThemeProvider';
import { FaGraduationCap, FaUniversity } from 'react-icons/fa';
import { IoIosSchool } from 'react-icons/io';

export const Education = () => {
  const theme = useTheme();
  const { darkMode } = useThemeContext();
  const containerRef = useRef<HTMLDivElement>(null!);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Transform scroll progress for various animations
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1, 0.5]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.95]);

  const educationData = [
    {
      id: 1,
      degree: "Bachelor of Computer Science",
      institution: "Chettinad College Of Engineering And Technology",
      year: "2020 - 2024",
      description: "Specialized in Computer Science Engineering with a strong foundation in software development, algorithms, and systems design. Completed final year project on scalable cloud-based application architecture",
      icon: <FaUniversity size={24} />,
      color: "#B7094C"
        },
  
    {
      id: 2,
      degree: "High School",
      institution: "GHS Malaikovilur",
      year: "2018 - 2020",
      icon: <IoIosSchool size={24} />,
      color: "#5C4D7D",
      courses: ["Bio-Maths"]
    },
    {
      id: 3,
      degree: "High School",
      institution: "GHS Malaikovilur",
      year: "2017 - 2018",
      icon: <IoIosSchool size={24} />,
      color: "#5C4D7D",
    }
  ];

  return (
    <Box 
      id="education"
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
      {/* Animated floating particles */}
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={i}
          style={{
            position: 'absolute',
            width: `${Math.random() * 10 + 5}px`,
            height: `${Math.random() * 10 + 5}px`,
            borderRadius: '50%',
            background: `radial-gradient(circle, ${theme.palette.primary.main}, transparent)`,
            opacity: 0.4,
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, Math.random() * 200 - 100],
            x: [0, Math.random() * 200 - 100],
            opacity: [0.2, 0.6, 0.2],
          }}
          transition={{
            duration: Math.random() * 15 + 10,
            repeat: Infinity,
            repeatType: 'reverse',
            ease: 'easeInOut',
            delay: i * 0.5
          }}
        />
      ))}

      {/* Animated background shapes */}
      <motion.div
        style={{
          position: 'absolute',
          top: '20%',
          right: '10%',
          width: '300px',
          height: '300px',
          borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%',
          background: `linear-gradient(45deg, ${theme.palette.primary.main}20, ${theme.palette.secondary.main}20)`,
          filter: 'blur(40px)',
          zIndex: 0,
          y,
          opacity,
          scale
        }}
      />
      <motion.div
        style={{
          position: 'absolute',
          bottom: '10%',
          left: '10%',
          width: '400px',
          height: '400px',
          borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%',
          background: `linear-gradient(135deg, ${theme.palette.secondary.main}10, ${theme.palette.primary.main}10)`,
          filter: 'blur(50px)',
          zIndex: 0,
          y: useTransform(scrollYProgress, [0, 1], ['0%', '-30%']),
          opacity,
          scale
        }}
      />

      {/* Main content */}
      <Box sx={{ 
        maxWidth: '1200px', 
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
              My Education
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
              Academic journey that shaped my technical expertise and problem-solving skills
            </Typography>
          </motion.div>
        </Box>

        {/* Timeline */}
        <Box sx={{ 
          position: 'relative',
          paddingLeft: { xs: '20px', md: '100px' },
          marginTop: '40px'
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

          {/* Education items */}
          {educationData.map((edu, index) => (
            <motion.div
              key={edu.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true, margin: "-50px" }}
              style={{ position: 'relative', zIndex: 2, marginBottom: '60px' }}
            >
              {/* Timeline dot */}
              <Box
                sx={{
                  position: 'absolute',
                  left: { xs: '-16px', md: '-56px' },
                  top: '40px',
                  width: '24px',
                  height: '24px',
                  borderRadius: '50%',
                  background: `linear-gradient(135deg, ${edu.color}, ${theme.palette.secondary.main})`,
                  border: `4px solid ${theme.palette.background.default}`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: theme.palette.common.white,
                  zIndex: 3
                }}
              >
                {edu.icon}
              </Box>

              {/* Education card */}
              <Box
                sx={{
                  background: darkMode ? 'rgba(30, 30, 30, 0.7)' : 'rgba(255, 255, 255, 0.7)',
                  backdropFilter: 'blur(12px)',
                  padding: '30px',
                  borderRadius: '20px',
                  boxShadow: `0 10px 30px ${darkMode ? 'rgba(0,0,0,0.3)' : 'rgba(0,0,0,0.1)'}`,
                  border: `1px solid ${darkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)'}`,
                  position: 'relative',
                  overflow: 'hidden',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-5px)',
                    boxShadow: `0 15px 40px ${darkMode ? 'rgba(0,0,0,0.4)' : 'rgba(0,0,0,0.2)'}`
                  }
                }}
              >
                {/* Gradient overlay */}
                <Box
                  sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    background: `linear-gradient(135deg, ${edu.color}10, transparent)`,
                    zIndex: -1
                  }}
                />

                <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: '20px' }}>
                  <Box sx={{ flexShrink: 0 }}>
                    <Avatar
                      sx={{
                        width: '80px',
                        height: '80px',
                        background: `${edu.color}20`,
                        color: edu.color,
                        fontSize: '32px'
                      }}
                    >
                      {edu.icon}
                    </Avatar>
                  </Box>

                  <Box>
                    <Typography
                      variant="h5"
                      component="h3"
                      sx={{ 
                        fontWeight: 700,
                        mb: 1,
                        color: theme.palette.text.primary,
                        background: `linear-gradient(90deg, ${edu.color}, ${theme.palette.secondary.main})`,
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        display: 'inline-block'
                      }}
                    >
                      {edu.degree}
                    </Typography>

                    <Typography
                      variant="h6"
                      component="p"
                      sx={{ 
                        fontWeight: 600,
                        mb: 1,
                        color: theme.palette.text.secondary
                      }}
                    >
                      {edu.institution} • {edu.year}
                    </Typography>

                    <Typography
                      variant="body1"
                      sx={{ 
                        mb: 3,
                        color: theme.palette.text.secondary,
                        lineHeight: 1.8
                      }}
                    >
                      {edu.description}
                    </Typography>
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