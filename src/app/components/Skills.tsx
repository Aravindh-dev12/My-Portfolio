'use client';

import { useState, useRef } from 'react';
import { Box, Typography, Grid, useTheme } from '@mui/material';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import { useThemeContext } from '@/app/theme/ThemeProvider';
import {
  SiJavascript, SiTypescript, SiReact, SiNextdotjs, SiNodedotjs,
  SiExpress, SiMongodb, SiPostgresql, SiDjango,
   SiPhp, SiLaravel, SiGit, SiGithub,
  SiDocker, SiFirebase, SiGraphql, SiRedux, SiSass,
  SiTailwindcss, SiFigma, SiAdobexd,  SiPython,
  SiTensorflow,
  SiPytorch,
  SiKeras,
  SiScikitlearn,
  SiOpencv, 
  SiHuggingface,
  SiOpenai ,
  SiNumpy,


} from 'react-icons/si';

export const Skills = () => {
  const theme = useTheme();
  const { darkMode } = useThemeContext();
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [0, 400], [5, -5]);
  const rotateY = useTransform(x, [0, 400], [-5, 5]);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      setMousePosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
      });
      x.set(e.clientX - rect.left);
      y.set(e.clientY - rect.top);
    }
  };

  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        { name: "JavaScript", icon: <SiJavascript />, color: "#F7DF1E" },
        { name: "TypeScript", icon: <SiTypescript />, color: "#3178C6" },
        { name: "React", icon: <SiReact />, color: "#61DAFB" },
        { name: "Next.js", icon: <SiNextdotjs />, color: "#000000" },
        { name: "Redux", icon: <SiRedux />, color: "#764ABC" },
        { name: "Tailwind", icon: <SiTailwindcss />, color: "#06B6D4" },
      ]
    },
    {
      title: "Backend",
      skills: [
        { name: "Node.js", icon: <SiNodedotjs />, color: "#339933" },
        { name: "Express", icon: <SiExpress />, color: "#000000" },
        { name: "Python", icon: <SiPython />, color: "#3776AB" }
      ]
    },
    {
      title: "Databases",
      skills: [
        { name: "MongoDB", icon: <SiMongodb />, color: "#47A248" },
        { name: "PostgreSQL", icon: <SiPostgresql />, color: "#4169E1" },
      ]
    },
    {
      title: "AI/ML",
      skills: [
        { name: "TensorFlow",       icon: <SiTensorflow />,    color: "#FF6F00" },
        { name: "PyTorch",          icon: <SiPytorch />,       color: "#EE4C2C" },
        { name: "NumPy",            icon: <SiNumpy />,         color: "#013243" },
        { name: "OpenCV",           icon: <SiOpencv />,        color: "#5C2D91" },
        { name: "Hugging Face",     icon: <SiHuggingface />,   color: "#FF6C37" },
        { name: "OpenAI",           icon: <SiOpenai />,        color: "#412991" },
      ]
    },
    
    {
      title: "DevOps",
      skills: [
        { name: "Git", icon: <SiGit />, color: "#F05032" },
        { name: "GitHub", icon: <SiGithub />, color: "#181717" },
      ]
    },
    {
      title: "Design",
      skills: [
        { name: "Figma", icon: <SiFigma />, color: "#F24E1E" },
        { name: "Adobe XD", icon: <SiAdobexd />, color: "#FF61F6" },
        { name: "Sass", icon: <SiSass />, color: "#CC6699" },
      ]
    }
  ];

  const allIcons = skillCategories.flatMap(category => category.skills);
  const duplicatedIcons = [...allIcons, ...allIcons];

  return (
    <Box
      id="skills"
      component="section"
      ref={containerRef}
      onMouseMove={handleMouseMove}
      sx={{
        minHeight: '100vh',
        padding: { xs: '80px 20px', md: '120px 60px' },
        position: 'relative',
        overflow: 'hidden',
        background: darkMode ? 'radial-gradient(circle at center, #1a1a1a 0%, #000000 100%)' : 'radial-gradient(circle at center, #f5f5f5 0%, #e0e0e0 100%)',
      }}
    >
      {/* Floating gradient dots */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          style={{
            position: 'absolute',
            width: `${Math.random() * 100 + 50}px`,
            height: `${Math.random() * 100 + 50}px`,
            borderRadius: '50%',
            background: `radial-gradient(circle, ${theme.palette.primary.main}20, transparent)`,
            opacity: 0.1,
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, Math.random() * 100 - 50],
            x: [0, Math.random() * 100 - 50],
          }}
          transition={{
            duration: Math.random() * 20 + 10,
            repeat: Infinity,
            repeatType: 'reverse',
            ease: 'easeInOut',
          }}
        />
      ))}

      {/* Main content */}
      <Box sx={{ maxWidth: '1400px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
        {/* Section header */}
        <Box sx={{ textAlign: 'center', mb: 8 }}>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
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
              My Technical Skills
            </Typography>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
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
              Technologies I've mastered and tools I use to create exceptional digital experiences
            </Typography>
          </motion.div>
        </Box>

        {/* Skill categories with 3D cards */}
        <Grid container spacing={4} sx={{ mb: 8 }}>
          {skillCategories.map((category, index) => (
            <Grid item xs={12} sm={6} md={4} key={category.title}>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                style={{
                  perspective: '1000px',
                  height: '100%'
                }}
              >
                <motion.div
                  style={{
                    height: '100%',
                    borderRadius: '24px',
                    position: 'relative',
                    overflow: 'hidden',
                    transformStyle: 'preserve-3d',
                    rotateX,
                    rotateY,
                    transition: 'transform 0.15s ease-out'
                  }}
                  whileHover={{ scale: 1.03 }}
                >
                  {/* Gradient border that follows mouse */}
                  <motion.div
                    style={{
                      position: 'absolute',
                      inset: 0,
                      borderRadius: '24px',
                      padding: '2px',
                      background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, 
                        ${theme.palette.primary.main}80, transparent 70%)`,
                      WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                      WebkitMaskComposite: 'xor',
                      zIndex: 1,
                      pointerEvents: 'none',
                      transition: 'background 0.2s ease-out'
                    }}
                  />

                  <Box
                    sx={{
                      background: darkMode
                        ? 'rgba(30, 30, 30, 0.7)'
                        : 'rgba(255, 255, 255, 0.7)',
                      backdropFilter: 'blur(12px)',
                      borderRadius: '22px',
                      padding: '24px',
                      height: '100%',
                      border: `1px solid ${darkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)'}`,
                      display: 'flex',
                      flexDirection: 'column'
                    }}
                  >
                    <Typography
                      variant="h5"
                      component="h3"
                      sx={{
                        fontWeight: 700,
                        mb: 3,
                        color: theme.palette.primary.main,
                        display: 'flex',
                        alignItems: 'center',
                        gap: '12px'
                      }}
                    >
                      <Box sx={{
                        width: '8px',
                        height: '24px',
                        background: `linear-gradient(to bottom, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                        borderRadius: '4px'
                      }} />
                      {category.title}
                    </Typography>

                    <Grid container spacing={2}>
                      {category.skills.map((item) => (
                        <Grid item xs={6} key={item.name} component={motion.div}>
                          <motion.div
                            whileHover={{
                              y: -5,
                              transition: { type: 'spring', stiffness: 400, damping: 10 }
                            }}
                            whileTap={{ scale: 0.95 }}
                          >
                            <Box
                              sx={{
                                background: darkMode
                                  ? 'rgba(255, 255, 255, 0.05)'
                                  : 'rgba(0, 0, 0, 0.03)',
                                borderRadius: '12px',
                                padding: '12px',
                                height: '100%',
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                justifyContent: 'center',
                                transition: 'all 0.3s ease',
                                position: 'relative',
                                overflow: 'hidden',
                                '&:hover': {
                                  boxShadow: `0 8px 24px ${item.color}40`
                                }
                              }}
                            >
                              {/* item icon background glow */}
                              <Box
                                sx={{
                                  position: 'absolute',
                                  top: 0,
                                  left: 0,
                                  width: '100%',
                                  height: '100%',
                                  background: `radial-gradient(circle at center, ${item.color}10, transparent 70%)`,
                                  opacity: 0,
                                  transition: 'opacity 0.3s ease',
                                  '&:hover': {
                                    opacity: 1
                                  }
                                }}
                              />

                              <Box sx={{
                                fontSize: '2.5rem',
                                color: item.color,
                                mb: 1,
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center'
                              }}>
                                {item.icon}
                              </Box>
                              <Typography
                                variant="body2"
                                sx={{
                                  fontWeight: 600,
                                  color: theme.palette.text.primary,
                                  textAlign: 'center'
                                }}
                              >
                                {item.name}
                              </Typography>
                            </Box>
                          </motion.div>
                        </Grid>
                      ))}
                    </Grid>
                  </Box>
                </motion.div>
              </motion.div>
            </Grid>
          ))}
        </Grid>

        {/* Floating tech bubble showcase */}
        {/* Floating tech bubble showcase */}
        <Box sx={{
          position: 'relative',
          height: '200px',
          overflow: 'hidden',
          mb: 8,
          borderRadius: '24px',
          background: darkMode
            ? 'rgba(255, 255, 255, 0.03)'
            : 'rgba(0, 0, 0, 0.03)',
          border: `1px solid ${darkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)'}`
        }}>
          <Typography
            variant="h5"
            component="h4"
            sx={{
              fontWeight: 700,
              mb: 4,
              textAlign: 'center',
              pt: 4,
              color: theme.palette.text.primary
            }}
          >
            Technologies I've Worked With
          </Typography>

          <motion.div
            style={{
              display: 'flex',
              width: 'max-content'
            }}
            animate={{
              x: ['0%', '-50%']
            }}
            transition={{
              duration: 30,
              repeat: Infinity,
              ease: 'linear'
            }}
            whileHover={{
              transition: {
                duration: 2,
                ease: [0.33, 1, 0.68, 1] // Smooth deceleration curve
              }
            }}
          >
            {duplicatedIcons.map((item, index) => ( // Changed 'skill' to 'item' for clarity
              <motion.div
                key={`${item.name}-${index}`}
                style={{
                  margin: '0 20px',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  minWidth: '80px',
                  position: 'relative'
                }}
                whileHover={{
                  scale: 1.5,
                  transition: {
                    type: 'spring',
                    stiffness: 400,
                    damping: 10
                  }
                }}
              >
                {/* Glowing background effect */}
                <motion.div
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    borderRadius: '50%',
                    background: `radial-gradient(circle, ${item.color}60, transparent 70%)`,
                    opacity: 0,
                    scale: 0.8
                  }}
                  whileHover={{
                    opacity: [0, 0.8, 0],
                    scale: [0.8, 1.2, 1],
                    transition: {
                      duration: 1.5,
                      repeat: Infinity,
                      ease: 'easeInOut'
                    }
                  }}
                />

                {/* Pulsing shadow effect */}
                <motion.div
                  style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    width: '60px',
                    height: '60px',
                    borderRadius: '50%',
                    background: item.color,
                    filter: 'blur(15px)',
                    opacity: 0,
                    x: '-50%',
                    y: '-50%'
                  }}
                  whileHover={{
                    opacity: [0, 0.3, 0],
                    scale: [0.8, 1, 1.2],
                    transition: {
                      duration: 2,
                      repeat: Infinity,
                      ease: 'easeInOut'
                    }
                  }}
                />

                <Box sx={{
                  fontSize: '48px',
                  color: item.color,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  mb: 1,
                  position: 'relative',
                  zIndex: 1,
                  textShadow: `0 0 10px ${item.color}80`
                }}>
                  {item.icon}
                </Box>
                <Typography
                  variant="caption"
                  sx={{
                    fontWeight: 'medium',
                    color: theme.palette.text.secondary,
                    textAlign: 'center',
                    position: 'relative',
                    zIndex: 1
                  }}
                >
                  {item.name}
                </Typography>
              </motion.div>
            ))}
          </motion.div>
        </Box>
      </Box>
    </Box>
  );
};
