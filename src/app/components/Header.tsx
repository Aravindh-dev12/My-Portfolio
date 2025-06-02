'use client';

import { AppBar, Toolbar, Typography, Button, IconButton, Box, useTheme, Avatar } from '@mui/material';
import { motion } from 'framer-motion';
import { useThemeContext } from '../theme/ThemeProvider';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { useState, useEffect, useRef } from 'react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const navItems = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Education', href: '#education' },
  { name: 'Contact', href: '#contact' }
];

export const Header = () => {
  const { darkMode, toggleTheme } = useThemeContext();
  const theme = useTheme();
  const [activeSection, setActiveSection] = useState('home');
  const [hidden, setHidden] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const appBarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (typeof window !== 'undefined') {
        const currentScrollPos = window.scrollY;
        const scrollingDown = currentScrollPos > prevScrollPos;

        // Hide header when scrolling down, show when scrolling up
        if (scrollingDown && currentScrollPos > 100) {
          setHidden(true);
        } else {
          setHidden(false);
        }

        // Update previous scroll position
        setPrevScrollPos(currentScrollPos);

        // Active section detection
        const sections = navItems.map(item => item.href.substring(1));
        const scrollPosition = currentScrollPos + 100;

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
      }
    };

    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }
  }, [prevScrollPos]);

  const smoothScroll = (id: string) => {
    if (typeof window !== 'undefined') {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <AppBar
      ref={appBarRef}
      position="fixed"
      elevation={0}
      sx={{
        backgroundColor: darkMode ? 'rgba(18, 18, 18, 0.9)' : 'rgba(255, 255, 255, 0.9)',
        backdropFilter: 'blur(8px)',
        borderBottom: `1px solid ${darkMode ? 'rgba(255, 255, 255, 0.08)' : 'rgba(0, 0, 0, 0.08)'}`,
        transform: hidden ? 'translateY(-100%)' : 'translateY(0)',
        transition: 'transform 0.3s ease, background-color 0.3s ease',
        boxShadow: 'none'
      }}
    >
      <Toolbar sx={{ 
        justifyContent: 'space-between',
        maxWidth: '1400px',
        margin: '0 auto',
        width: '100%',
        padding: { xs: '0 16px', md: '0 24px' },
        height: '70px'
      }}>
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          whileHover={{ scale: 1.02 }}
        >
          <Box 
            sx={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: '12px',
              cursor: 'pointer'
            }}
            onClick={() => smoothScroll('home')}
          >
            <Avatar
              src="/path-to-your-logo-or-image.jpg"
              sx={{
                width: 36,
                height: 36,
                background: `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
              }}
            >
              AR
            </Avatar>
            <Typography
              variant="h6"
              component="div"
              sx={{
                fontWeight: 700,
                color: theme.palette.text.primary,
                display: { xs: 'none', sm: 'block' }
              }}
            >
              Aravindhan B
            </Typography>
          </Box>
        </motion.div>

        <Box sx={{ 
          display: { xs: 'none', md: 'flex' },
          gap: '8px',
          alignItems: 'center'
        }}>
          {navItems.map((item) => (
            <Button
              key={item.name}
              onClick={() => smoothScroll(item.href.substring(1))}
              sx={{
                color: activeSection === item.href.substring(1)
                  ? theme.palette.primary.main
                  : theme.palette.text.secondary,
                fontWeight: 500,
                fontSize: '0.9rem',
                textTransform: 'none',
                position: 'relative',
                padding: '8px 12px',
                borderRadius: '8px',
                '&:hover': {
                  backgroundColor: darkMode ? 'rgba(255, 255, 255, 0.05)' : 'rgba(0, 0, 0, 0.05)',
                  color: theme.palette.primary.main
                }
              }}
            >
              {item.name}
              {activeSection === item.href.substring(1) && (
                <motion.div
                  layoutId="activeIndicator"
                  style={{
                    position: 'absolute',
                    bottom: 0,
                    left: '50%',
                    transform: 'translateX(-50%)',
                    width: '20px',
                    height: '2px',
                    background: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                    borderRadius: '2px'
                  }}
                  transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                />
              )}
            </Button>
          ))}
        </Box>

        <Box sx={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
          <Box sx={{ display: { xs: 'none', sm: 'flex' }, gap: '2px' }}>
            {[
              { icon: <FaGithub size={16} />, url: "https://github.com/thearavindh" },
              { icon: <FaLinkedin size={16} />, url: "https://www.linkedin.com/in/aravindhanb/" },
            ].map((social, i) => (
              <IconButton
                key={i}
                href={social.url}
                target="_blank"
                size="small"
                sx={{
                  color: theme.palette.text.secondary,
                  '&:hover': {
                    color: theme.palette.primary.main,
                    backgroundColor: 'transparent'
                  }
                }}
              >
                {social.icon}
              </IconButton>
            ))}
          </Box>

          <IconButton 
            onClick={toggleTheme} 
            size="small"
            sx={{
              color: theme.palette.text.secondary,
              '&:hover': {
                color: theme.palette.primary.main,
                backgroundColor: 'transparent'
              }
            }}
          >
            {darkMode ? <Brightness7Icon fontSize="small" /> : <Brightness4Icon fontSize="small" />}
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
};