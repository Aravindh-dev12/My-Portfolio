'use client';

import { Box, Typography, Button, useTheme } from '@mui/material';
import { motion } from 'framer-motion';
// import { useThemeContext } from '../theme/ThemeProvider';
import DownloadIcon from '@mui/icons-material/Download';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { useState } from 'react';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { y: 40, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      damping: 10,
      stiffness: 100,
      duration: 0.8,
    },
  },
};

const floatingVariants = {
  float: {
    y: [0, -20, 0],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut",
    }
  }
};

const downloadButtonVariants = {
  initial: { scale: 1 },
  tap: { scale: 0.95 },
  hover: { scale: 1.05 },
  downloading: { 
    scale: 0.98,
    backgroundColor: '#4CAF50',
    transition: { duration: 0.5 }
  },
  completed: { 
    scale: 1,
    backgroundColor: '#4CAF50',
    transition: { duration: 0.5 }
  }
};

const progressBarVariants = {
  initial: { width: 0 },
  downloading: { 
    width: '100%',
    transition: { duration: 2, ease: "linear" }
  },
  completed: { width: '100%' }
};

export const Hero = () => {
  const theme = useTheme();
  // const { darkMode } = useThemeContext();
  const [downloadState, setDownloadState] = useState<'idle' | 'downloading' | 'completed'>('idle');

  const handleDownload = () => {
    setDownloadState('downloading');
    
    // Simulate download process
    setTimeout(() => {
      setDownloadState('completed');
      
      // Reset after 2 seconds
      setTimeout(() => {
        setDownloadState('idle');
        
        // In a real app, you would trigger the actual download here
        const link = document.createElement('a');
        link.href = '/Resume.pdf';
        link.download = 'Resume.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      }, 2000);
    }, 2000);
  };

  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden',
        background: theme.palette.background.default,
      }}
    >
      {/* Animated particle background */}
      <Box sx={{
        position: 'absolute',
        width: '100%',
        height: '100%',
        overflow: 'hidden',
        zIndex: 0,
      }}>
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            style={{
              position: 'absolute',
              width: `${Math.random() * 10 + 2}px`,
              height: `${Math.random() * 10 + 2}px`,
              borderRadius: '50%',
              background: theme.palette.mode === 'dark' 
                ? `rgba(255, 255, 255, ${Math.random() * 0.3})` 
                : `rgba(0, 0, 0, ${Math.random() * 0.2})`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -1000],
              x: [0, Math.random() * 200 - 100],
              opacity: [1, 0],
              scale: [1, Math.random() * 0.5],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: "linear",
            }}
          />
        ))}
      </Box>

      {/* Glowing orb */}
      <motion.div
        style={{
          position: 'absolute',
          width: '300px',
          height: '300px',
          borderRadius: '50%',
          background: `radial-gradient(circle, ${theme.palette.primary.light} 0%, transparent 70%)`,
          filter: 'blur(40px)',
          opacity: 0.4,
          left: '20%',
          top: '30%',
          zIndex: 0,
        }}
        animate={{
          x: [0, 100, 0],
          y: [0, 50, 0],
          opacity: [0.4, 0.6, 0.4],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        style={{ 
          maxWidth: '800px', 
          padding: '0 20px',
          zIndex: 1,
          position: 'relative',
        }}
      >
        <motion.div variants={itemVariants}>
          <Typography
            variant="h2"
            component="h1"
            gutterBottom
            sx={{
              fontWeight: 'bold',
              mb: 2,
              background: `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              fontSize: { xs: '2.5rem', md: '3.5rem' },
              lineHeight: 1.2,
            }}
          >
            Welcome to My Creative Space
          </Typography>
        </motion.div>

        <motion.div variants={itemVariants}>
          <Typography
            variant="h5"
            component="h2"
            gutterBottom
            sx={{
              color: theme.palette.text.secondary,
              mb: 4,
              fontSize: { xs: '1.2rem', md: '1.5rem' },
            }}
          >
            Crafting <span style={{ fontWeight: 'bold' }}>immersive</span> digital experiences that{" "}
            <span style={{ fontWeight: 'bold' }}>inspire</span> and{" "}
            <span style={{ fontWeight: 'bold' }}>engage</span>
          </Typography>
        </motion.div>

        <motion.div variants={itemVariants}>
          <Box sx={{ 
            display: 'flex', 
            gap: 3, 
            justifyContent: 'center',
            flexWrap: 'wrap',
          }}>
            <motion.div 
              whileHover={{ scale: 1.05 }} 
              whileTap={{ scale: 0.95 }}
              variants={floatingVariants}
              animate="float"
            >
              <Button
                variant="contained"
                size="large"
                sx={{
                  background: `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                  borderRadius: '50px',
                  px: 4,
                  py: 1.5,
                  fontSize: '1.1rem',
                  fontWeight: 'bold',
                  boxShadow: `0 4px 15px ${theme.palette.primary.main}40`,
                  '&:hover': {
                    boxShadow: `0 6px 20px ${theme.palette.primary.main}60`,
                    background: `linear-gradient(45deg, ${theme.palette.primary.dark}, ${theme.palette.secondary.dark})`,
                  },
                }}
              >
                Explore My Work
              </Button>
            </motion.div>

            <motion.div 
              whileHover={{ scale: 1.05 }} 
              whileTap={{ scale: 0.95 }}
              variants={floatingVariants}
              animate="float"
              style={{ transitionDelay: '0.2s' }}
            >
              <Button
                variant="outlined"
                size="large"
                sx={{
                  borderWidth: '2px',
                  borderColor: theme.palette.primary.main,
                  color: theme.palette.primary.main,
                  borderRadius: '50px',
                  px: 4,
                  py: 1.5,
                  fontSize: '1.1rem',
                  fontWeight: 'bold',
                  '&:hover': {
                    borderColor: theme.palette.primary.dark,
                    color: theme.palette.primary.dark,
                    background: `${theme.palette.primary.main}10`,
                    borderWidth: '2px',
                  },
                }}
              >
                Lets Connect
              </Button>
            </motion.div>

            {/* Resume Download Button */}
            <motion.div
              variants={floatingVariants}
              animate="float"
              style={{ transitionDelay: '0.4s' }}
            >
              <motion.div
                initial="initial"
                animate={downloadState === 'idle' ? 'initial' : downloadState === 'downloading' ? 'downloading' : 'completed'}
                whileHover="hover"
                whileTap="tap"
                variants={downloadButtonVariants}
                style={{
                  position: 'relative',
                  overflow: 'hidden',
                  borderRadius: '50px',
                  border: `2px solid ${downloadState === 'completed' ? '#4CAF50' : theme.palette.primary.main}`,
                }}
              >
                <Button
                  onClick={handleDownload}
                  size="large"
                  sx={{
                    background: downloadState === 'idle' 
                      ? theme.palette.mode === 'dark' 
                        ? 'rgba(255, 255, 255, 0.1)' 
                        : 'rgba(0, 0, 0, 0.05)'
                      : 'transparent',
                    borderRadius: '50px',
                    px: 4,
                    py: 1.5,
                    fontSize: '1.1rem',
                    fontWeight: 'bold',
                    color: downloadState === 'completed' ? '#fff' : theme.palette.text.primary,
                    '&:hover': {
                      background: theme.palette.mode === 'dark' 
                        ? 'rgba(255, 255, 255, 0.15)' 
                        : 'rgba(0, 0, 0, 0.08)',
                    },
                  }}
                  startIcon={
                    downloadState === 'completed' ? (
                      <CheckCircleIcon />
                    ) : (
                      <DownloadIcon />
                    )
                  }
                  disabled={downloadState !== 'idle'}
                >
                  {downloadState === 'idle' && 'Download Resume'}
                  {downloadState === 'downloading' && 'Downloading...'}
                  {downloadState === 'completed' && 'Downloaded!'}
                </Button>
                
                {/* Progress bar */}
                {downloadState === 'downloading' && (
                  <motion.div
                    variants={progressBarVariants}
                    initial="initial"
                    animate="downloading"
                    style={{
                      position: 'absolute',
                      bottom: 0,
                      left: 0,
                      height: '4px',
                      background: theme.palette.primary.main,
                      borderRadius: '0 0 50px 50px',
                    }}
                  />
                )}
                
                {downloadState === 'completed' && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    style={{
                      position: 'absolute',
                      bottom: 0,
                      left: 0,
                      width: '100%',
                      height: '4px',
                      background: '#4CAF50',
                      borderRadius: '0 0 50px 50px',
                    }}
                  />
                )}
              </motion.div>
            </motion.div>
          </Box>
        </motion.div>

        {/* Animated decorative elements */}
        <motion.div
          style={{
            position: 'absolute',
            width: '150px',
            height: '150px',
            border: `2px dashed ${theme.palette.primary.main}`,
            borderRadius: '50%',
            top: '-50px',
            right: '-50px',
            zIndex: -1,
            opacity: 0.3,
          }}
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear",
          }}
        />

        <motion.div
          style={{
            position: 'absolute',
            width: '100px',
            height: '100px',
            border: `1px solid ${theme.palette.secondary.main}`,
            borderRadius: '10px',
            bottom: '-30px',
            left: '-30px',
            zIndex: -1,
            opacity: 0.3,
          }}
          animate={{
            rotate: -360,
            borderRadius: ['10px', '50%', '10px'],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </motion.div>
    </Box>
  );
};