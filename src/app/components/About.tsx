'use client';

// import { useState} from 'react';
import { Box, Typography, Grid, Avatar, useTheme } from '@mui/material';
import { motion } from 'framer-motion';
import { useThemeContext } from '@/app/theme/ThemeProvider';


// Animation variants
const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
        },
    },
};

const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 0.6,
            ease: "easeOut"
        },
    },
};

export const About = () => {
    const theme = useTheme();
    const { darkMode } = useThemeContext();
    // const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    // const skillsRef = useRef<HTMLDivElement>(null);
    // const [hoveredSkill, setHoveredSkill] = useState<number | null>(null);
    // const skills = [
    //     { name: "React", level: 90 },
    //     { name: "Next.js", level: 85 },
    //     { name: "TypeScript", level: 80 },
    //     { name: "Node.js", level: 75 },
    //     { name: "UI/UX Design", level: 70 },
    //     { name: "GraphQL", level: 65 },
    // ];

    // const handleMouseMove = (e: React.MouseEvent) => {
    //     if (skillsRef.current) {
    //         const rect = skillsRef.current.getBoundingClientRect();
    //         setMousePosition({
    //             x: e.clientX - rect.left,
    //             y: e.clientY - rect.top
    //         });
    //     }
    // };

    // const skillItemVariants = {
    //     initial: {
    //         opacity: 0,
    //         y: 20
    //     },
    //     animate: (i: number) => ({
    //         opacity: 1,
    //         y: 0,
    //         transition: {
    //             delay: i * 0.1,
    //         }
    //     }),
    //     hover: {
    //         scale: 1.05,
    //         transition: {
    //             type: "spring",
    //             stiffness: 400,
    //             damping: 10
    //         }
    //     }
    // };

    // const skillBarVariants = {
    //     initial: {
    //         width: 0,
    //         opacity: 0.5
    //     },
    //     animate: (level: number) => ({
    //         width: `${level}%`,
    //         opacity: 1,
    //         transition: {
    //             width: {
    //                 duration: 1.5,
    //                 ease: [0.43, 0.13, 0.23, 0.96],
    //                 delay: 0.3
    //             },
    //             opacity: {
    //                 duration: 0.8,
    //                 ease: "easeOut"
    //             }
    //         }
    //     })
    // };

    // const percentageVariants = {
    //     initial: { opacity: 0, x: -10 },
    //     animate: (i: number) => ({
    //         opacity: 1,
    //         x: 0,
    //         transition: {
    //             delay: 0.5 + i * 0.05,
    //             duration: 0.5,
    //             ease: "easeOut"
    //         }
    //     })
    // };

    return (
        <>
        <Box
            id="about"
            component="section"
            sx={{
                minHeight: '100vh',
                padding: { xs: '80px 20px', md: '120px 60px' },
                position: 'relative',
                overflow: 'hidden',
                background: theme.palette.background.default,
            }}
        >
            {/* Animated gradient background */}
            <motion.div
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: `linear-gradient(45deg, ${darkMode ? '#171717' : '#e9ecef'}, ${darkMode ? '#1e1e1e' : '#ffffff'})`,
                    zIndex: -1,
                }}
                animate={{
                    background: [
                        `linear-gradient(45deg, ${darkMode ? '#171717' : '#e9ecef'}, ${darkMode ? '#1e1e1e' : '#ffffff'})`,
                        `linear-gradient(135deg, ${darkMode ? '#171717' : '#e9ecef'}, ${darkMode ? '#1e1e1e' : '#ffffff'})`,
                        `linear-gradient(225deg, ${darkMode ? '#171717' : '#e9ecef'}, ${darkMode ? '#1e1e1e' : '#ffffff'})`,
                    ],
                }}
                transition={{
                    duration: 20,
                    repeat: Infinity,
                    repeatType: 'reverse',
                }}
            />

            {/* Floating bubbles */}
            {[...Array(15)].map((_, i) => (
                <motion.div
                    key={i}
                    style={{
                        position: 'absolute',
                        width: `${Math.random() * 100 + 50}px`,
                        height: `${Math.random() * 100 + 50}px`,
                        borderRadius: '50%',
                        background: `radial-gradient(circle, ${theme.palette.primary.main}20, transparent)`,
                        opacity: 0.3,
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

            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
            >
                <Grid container spacing={6} alignItems="center">
                    {/* Image Column - Fixed Grid usage */}
                    <Grid item xs={12} md={5} component={motion.div} variants={itemVariants}>
                        <Box
                            sx={{
                                display: 'flex',
                                justifyContent: 'center',
                                position: 'relative',
                            }}
                        >
                            <motion.div
                                whileHover={{ scale: 1.03 }}
                                transition={{ type: 'spring', stiffness: 400 }}
                            >
                                <Avatar
                                    src="/images/photo.JPG"  // Updated image path
                                    alt="Profile Picture"
                                    sx={{
                                        width: { xs: 250, md: 350 },
                                        height: { xs: 250, md: 350 },
                                        border: `4px solid ${theme.palette.primary.main}`,
                                        boxShadow: `0 0 30px ${theme.palette.primary.main}40`,
                                    }}
                                />
                            </motion.div>

                            {/* Decorative elements */}
                            <motion.div
                                style={{
                                    position: 'absolute',
                                    width: '100%',
                                    height: '100%',
                                    borderRadius: '50%',
                                    border: `2px dashed ${theme.palette.primary.main}`,
                                    top: '10px',
                                    left: '10px',
                                    zIndex: -1,
                                }}
                                animate={{ rotate: 360 }}
                                transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
                            />

                            <Box
                                sx={{
                                    position: 'absolute',
                                    bottom: 0,
                                    right: { xs: '10%', md: '20%' },
                                    zIndex: 1,
                                }}
                            >
                                <motion.div
                                    animate={{ y: [0, -15, 0] }}
                                    transition={{
                                        duration: 3,
                                        repeat: Infinity,
                                        ease: 'easeInOut',
                                    }}
                                >
                                    <Box
                                        sx={{
                                            background: `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                                            color: theme.palette.common.white,
                                            padding: '10px 20px',
                                            borderRadius: '50px',
                                            boxShadow: theme.shadows[4],
                                            display: 'flex',
                                            alignItems: 'center',
                                        }}
                                    >
                                        <Typography variant="body1" fontWeight="bold">
                                            Full Stack Developer
                                        </Typography>
                                    </Box>
                                </motion.div>
                            </Box>
                        </Box>
                    </Grid>

                    {/* Content Column - Fixed Grid usage */}
                    <Grid item xs={12} md={7} component={motion.div} variants={itemVariants}>
                        {/* Animated title with gradient and sparkle effect */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >
                            <Typography
                                variant="h4"
                                component="h2"
                                gutterBottom
                                sx={{
                                    fontWeight: 900,
                                    mb: 3,
                                    background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                                    WebkitBackgroundClip: 'text',
                                    WebkitTextFillColor: 'transparent',
                                    display: 'inline-block',
                                    position: 'relative',
                                    fontSize: { xs: '2rem', md: '2.5rem' },
                                    letterSpacing: '1px',
                                    '&::after': {
                                        content: '""',
                                        position: 'absolute',
                                        bottom: -8,
                                        left: 0,
                                        width: '100%',
                                        height: '4px',
                                        background: `linear-gradient(90deg, ${theme.palette.primary.main}, transparent)`,
                                        borderRadius: '2px'
                                    }
                                }}
                            >
                                About Me
                                <motion.span
                                    style={{
                                        position: 'absolute',
                                        top: -10,
                                        right: -20,
                                        fontSize: '1.5rem'
                                    }}
                                    animate={{ rotate: [0, 360] }}
                                    transition={{
                                        duration: 8,
                                        repeat: Infinity,
                                        ease: 'linear'
                                    }}
                                >
                                    ✨
                                </motion.span>
                            </Typography>
                        </motion.div>

                        {/* Main headline with animated letters */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ staggerChildren: 0.05, delayChildren: 0.3 }}
                            style={{ overflow: 'hidden' }}
                        >
                            <Typography
                                variant="h3"
                                component="h3"
                                gutterBottom
                                sx={{
                                    fontWeight: 800,
                                    mb: 3,
                                    fontSize: { xs: '2.2rem', md: '3rem' },
                                    lineHeight: 1.2,
                                    color: theme.palette.text.primary,
                                    '& span': {
                                        display: 'inline-block'
                                    }
                                }}
                            >
                                {"Crafting Digital Excellence".split('').map((letter, i) => (
                                    <motion.span
                                        key={i}
                                        initial={{ y: 50, opacity: 0 }}
                                        animate={{ y: 0, opacity: 1 }}
                                        transition={{
                                            type: 'spring',
                                            stiffness: 100,
                                            damping: 12,
                                            delay: i * 0.05
                                        }}
                                    >
                                        {letter === ' ' ? '\u00A0' : letter}
                                    </motion.span>
                                ))}
                            </Typography>
                            <Typography
                                variant="h3"
                                component="h3"
                                gutterBottom
                                sx={{
                                    fontWeight: 800,
                                    mb: 4,
                                    fontSize: { xs: '1.8rem', md: '2.5rem' },
                                    lineHeight: 1.2,
                                    background: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                                    WebkitBackgroundClip: 'text',
                                    WebkitTextFillColor: 'transparent',
                                    '& span': {
                                        display: 'inline-block'
                                    }
                                }}
                            >
                                {"With MERN Stack Magic".split('').map((letter, i) => (
                                    <motion.span
                                        key={i}
                                        initial={{ y: 30, opacity: 0 }}
                                        animate={{ y: 0, opacity: 1 }}
                                        transition={{
                                            type: 'spring',
                                            stiffness: 100,
                                            damping: 12,
                                            delay: 0.5 + i * 0.03
                                        }}
                                    >
                                        {letter === ' ' ? '\u00A0' : letter}
                                    </motion.span>
                                ))}
                            </Typography>
                        </motion.div>

                        {/* Enhanced description with animated entry */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 1 }}
                        >
                            <Typography
                                variant="body1"
                                paragraph
                                sx={{
                                    mb: 3,
                                    color: theme.palette.text.secondary,
                                    lineHeight: 1.8,
                                    fontSize: '1.1rem',
                                    position: 'relative',
                                    '&::first-letter': {
                                        initial: { scale: 0 },
                                        animate: { scale: 1 },
                                        fontSize: '2.5rem',
                                        fontWeight: 'bold',
                                        float: 'left',
                                        lineHeight: 1,
                                        mr: 1,
                                        mt: 1,
                                        background: `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                                        WebkitBackgroundClip: 'text',
                                        WebkitTextFillColor: 'transparent'
                                    }
                                }}
                            >
                                <motion.span
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 1.2 }}
                                >
                                    Greetings! Im <strong style={{
                                        background: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                                        WebkitBackgroundClip: 'text',
                                        WebkitTextFillColor: 'transparent',
                                        fontWeight: 700
                                    }}>Aravindhan B</strong>, a passionate <strong>Software Engineer</strong> As a multi‑platform app developer, I specialize in building robust, scalable mobile and web applications. My journey combines technical precision with creative vision to deliver exceptional digital experiences across both platforms.
                                </motion.span>
                            </Typography>

                            <Typography
                                variant="body1"
                                paragraph
                                sx={{
                                    mb: 3,
                                    color: theme.palette.text.secondary,
                                    lineHeight: 1.8,
                                    fontSize: '1.1rem',
                                    position: 'relative',
                                    paddingLeft: '20px',
                                    borderLeft: `3px solid ${theme.palette.primary.main}`,
                                    '&::before': {
                                        content: '""',
                                        position: 'absolute',
                                        left: -3,
                                        top: 0,
                                        height: '100%',
                                        width: '3px',
                                        background: `linear-gradient(to bottom, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`
                                    }
                                }}
                            >
                                <motion.span
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 1.4 }}
                                >
Specializing in frontend, backend, and database development, I craft end‑to‑end solutions that are both robust and user‑friendly. On the frontend, I leverage <strong>Vue.js, AngularJS, Tailwind CSS, HTML, and CSS</strong> to build responsive, intuitive interfaces. Behind the scenes, I rely on <strong>TypeScript and Python</strong> to implement scalable, clean-code backends. For data persistence, I utilize <strong>PostgreSQL and MongoDB</strong> to design and optimize schemas that ensure reliability and performance.

Additionally, I have experience developing AI-powered applications, including training custom <strong>LLM models</strong> and integrating <strong>third-party AI services</strong> to deliver intelligent features. With a keen eye for detail and a commitment to maintainable code, I transform complex requirements into elegant, delightful applications.
</motion.span>

                            </Typography>
                        </motion.div>

                        {/* Skills section with enhanced title */}
                        <Box sx={{ mb: 4 }}>
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6, delay: 1.6 }}
                            >
                                <Typography
                                    variant="h6"
                                    sx={{
                                        fontWeight: 800,
                                        mb: 3,
                                        fontSize: '1.5rem',
                                        display: 'flex',
                                        alignItems: 'center',
                                        '&::before, &::after': {
                                            content: '""',
                                            flex: 1,
                                            height: '1px',
                                            background: `linear-gradient(90deg, transparent, ${theme.palette.primary.main}, transparent)`,
                                            ml: 2,
                                            mr: 2
                                        }
                                    }}
                                >
                                    <motion.span
                                        initial={{ scale: 0 }}
                                        animate={{ scale: 1 }}
                                        transition={{ type: 'spring', delay: 1.7 }}
                                    >
                                        ⚡
                                    </motion.span>
                                    <span style={{ margin: '0 12px' }}>Technical Mastery</span>
                                    <motion.span
                                        initial={{ scale: 0 }}
                                        animate={{ scale: 1 }}
                                        transition={{ type: 'spring', delay: 1.8 }}
                                    >
                                        ⚡
                                    </motion.span>
                                </Typography>
                            </motion.div>

                            {/* ... (keep existing skills grid) */}
                        </Box>

                        {/* Enhanced contact button */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 2 }}
                            whileHover={{
                                scale: 1.05,
                                transition: { type: 'spring', stiffness: 400 }
                            }}
                            whileTap={{ scale: 0.98 }}
                            style={{ display: 'inline-block' }}
                        >
                            <Box
                                component="a"
                                href="#contact"
                                sx={{
                                    display: 'inline-flex',
                                    alignItems: 'center',
                                    background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                                    color: theme.palette.common.white,
                                    padding: '14px 32px',
                                    borderRadius: '50px',
                                    textDecoration: 'none',
                                    fontWeight: 700,
                                    boxShadow: `0 4px 20px ${theme.palette.primary.main}40`,
                                    position: 'relative',
                                    overflow: 'hidden',
                                    fontSize: '1.1rem',
                                    '&::before': {
                                        content: '""',
                                        position: 'absolute',
                                        top: 0,
                                        left: '-100%',
                                        width: '100%',
                                        height: '100%',
                                        background: `linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)`,
                                        transition: '0.5s'
                                    },
                                    '&:hover::before': {
                                        left: '100%'
                                    },
                                    '&:hover': {
                                        boxShadow: `0 6px 25px ${theme.palette.primary.main}60`
                                    }
                                }}
                            >
                                <Typography variant="body1" sx={{ mr: 1, fontWeight: 700 }}>
                                    Lets Build Something Amazing
                                </Typography>
                                <motion.div
                                    animate={{ x: [0, 4, 0] }}
                                    transition={{
                                        duration: 1.5,
                                        repeat: Infinity,
                                        repeatType: 'loop'
                                    }}
                                >
                                    →
                                </motion.div>
                            </Box>
                        </motion.div>
                    </Grid>
                </Grid>
            </motion.div>
        </Box>

        </>
    );
};
