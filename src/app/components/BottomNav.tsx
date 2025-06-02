'use client';

import { Box, IconButton, Tooltip, useTheme } from '@mui/material';
import { motion } from 'framer-motion';
import {
  Home as HomeIcon,
  Person,
  Work,
  Email,
  Code,
  School,
  Timeline
} from '@mui/icons-material';
import { useEffect, useState } from 'react';

export const BottomNav = () => {
  const theme = useTheme();
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'experience', 'projects', 'education', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { icon: <HomeIcon fontSize="medium" />, label: 'Home', href: '#home' },
    { icon: <Person fontSize="medium" />, label: 'About', href: '#about' },
    { icon: <Code fontSize="medium" />, label: 'Skills', href: '#skills' },
    { icon: <Timeline fontSize="medium" />, label: 'Experience', href: '#experience' },
    { icon: <Work fontSize="medium" />, label: 'Projects', href: '#projects' },
    { icon: <School fontSize="medium" />, label: 'Education', href: '#education' },
    { icon: <Email fontSize="medium" />, label: 'Contact', href: '#contact' }
  ];

  const handleClick = (href: string) => {
    const id = href.substring(1);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(id);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.3 }}
    >
      <Box
        sx={{
          position: 'fixed',
          bottom: 20,
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 1000,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: theme.palette.mode === 'dark'
            ? 'rgba(25, 25, 25, 0.75)'
            : 'rgba(255, 255, 255, 0.75)',
          borderRadius: '50px',
          padding: '10px 18px',
          backdropFilter: 'blur(18px)',
          border: `1px solid ${theme.palette.mode === 'dark'
            ? 'rgba(255, 255, 255, 0.1)'
            : 'rgba(0, 0, 0, 0.1)'}`,
          boxShadow: `0 8px 28px ${
            theme.palette.mode === 'dark'
              ? 'rgba(0, 0, 0, 0.45)'
              : 'rgba(0, 0, 0, 0.15)'
          }`
        }}
      >
        {navItems.map((item) => {
          const isActive = activeSection === item.href.substring(1);
          return (
            <Tooltip key={item.label} title={item.label} placement="top" arrow>
              <motion.div
                whileHover={{
                  scale: 1.25,
                  rotate: 5,
                  y: -5,
                }}
                whileTap={{ scale: 0.95 }}
                transition={{
                  type: 'spring',
                  stiffness: 500,
                  damping: 20,
                }}
                style={{
                  margin: '0 5px',
                  borderRadius: '50%',
                  padding: '6px',
                  background: isActive
                    ? `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`
                    : 'transparent',
                  color: isActive
                    ? theme.palette.common.white
                    : theme.palette.text.primary,
                  boxShadow: isActive
                    ? `0 0 12px ${theme.palette.primary.main}, 0 0 18px ${theme.palette.secondary.main}`
                    : 'none',
                  transition: 'all 0.3s ease'
                }}
              >
                <IconButton
                  onClick={() => handleClick(item.href)}
                  sx={{
                    padding: '10px',
                    color: 'inherit',
                    '&:hover': {
                      background: 'transparent'
                    }
                  }}
                >
                  {item.icon}
                </IconButton>
              </motion.div>
            </Tooltip>
          );
        })}
      </Box>
    </motion.div>
  );
};
