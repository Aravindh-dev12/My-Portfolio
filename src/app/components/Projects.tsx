'use client';

import { Box, Typography, Grid, Chip, Button, useTheme,  Modal, IconButton } from '@mui/material';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { useState, useRef } from 'react';
import { useThemeContext } from '@/app/theme/ThemeProvider';
import { FaPlay, FaTimes, FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import ReactPlayer from 'react-player';

// Updated project data with video URLs
const projectsData = [
 {
      "id": 1,
      "title": "Interview Assistant AI",
      "description": "• Developed a real-time interview assistant that listens to questions and provides AI-powered responses with voice synthesis.\n• Enabled users to practice interviews interactively with immediate feedback and natural language understanding.\n• Built a scalable backend with Node.js to handle requests efficiently and integrated the OpenAI API for intelligent responses.",
      "tags": ["React", "Node.js", "OpenAI API", "Web Speech API", "Tailwind CSS", "AI Assistant", "Voice Interaction"],
      "image": "/images/aicopilot.png",
      "github": "https://github.com/Aravindh-dev12/Bluepilot-Interview-Copilot.git",
      "live": "https://bluepilot-interview-copilot-1.onrender.com/"
    },

    {
      "id": 2,
      "title": "Blu — Local 7B Multilingual Multimodal Assistant",
      "description": "Blu is a fully local, multilingual, multimodal assistant running quantized models via Ollama, capable of text, vision, speech recognition (ASR), and text-to-speech (TTS). It supports RAG over PDFs/TXT, runs on CPU or small GPU, and can be extended with fine-tuned adapters. Ideal for lightweight, private AI applications on limited hardware.",
      "tags": ["Python", "LLM", "Multimodal AI", "Ollama", "NLP", "Vision", "ASR", "TTS"],
      "image": "/images/llm.jpeg",
      "github": "https://github.com/Aravindh-dev12/Blu--Multimodal-llm.git",
      "live": "https://github.com/Aravindh-dev12/Blu--Multimodal-llm.git"
    },
{
  "id": 3,
  "title": "AI Dual Brain Project",
  "description": "• Built a production-ready MVP for a Dual-Brain AI architecture combining a Main Brain and multiple Specialist Brains.\n• Implemented structured configurations, automated tests, and an intelligent fusion layer to coordinate decision-making.\n• Designed with scalability and CI/CD pipelines for smooth deployment and iteration.",
  "tags": ["Python", "FastAPI", "CI/CD", "AI Fusion Layer", "MLOps", "Intelligent Systems"],
  "image": "/images/dualbrain.png",
  "github": "https://github.com/Aravindh-dev12/AI-dual-Brain-Model.git",
  "live": "https://github.com/Aravindh-dev12/AI-dual-Brain-Model.git"
},
    {
      id: 4,
      title: "Voice Enabled Chat with PDFs",
      description: "Developed a LangChain-based chatbot that answers user queries through audio input using OpenAI's Whisper. Implemented a RAG pipeline with PDF chunking, embedding generation, and FAISS vector database for retrieval. Used LLaMA Scout LLM and Gemini TTS for human-like audio responses. Deployed via Hugging Face Spaces.",
      tags: ["Python", "LangChain", "OpenAI", "Whisper", "FAISS", "Gemini TTS", "LLaMA", "Hugging Face"],
      image: "/images/voice.png", 
      github: "https://huggingface.co/spaces/Aravindhan11/Voice-Activated-RAG-System/tree/main", 
      live: "https://huggingface.co/spaces/Aravindhan11/Voice-Activated-RAG-System" // Add Hugging Face Spaces URL here if deployed
    },
    {
      id: 5,
      title: "AI Recruiter — Resume & Interview Analyzer",
      description: "An AI-powered assistant that streamlines hiring: uploads resumes and job descriptions to produce compatibility scores, detects AI-generated content, generates targeted interview questions, analyzes interview transcripts for coverage, and gives detailed per-question candidate response evaluations. Built with FastAPI backend, Streamlit frontend, and Google Gemini for LLM-powered analysis.",
      tags: ["Python", "FastAPI", "Streamlit", "NLP", "AI", "Gemini API"],
      image: "/images/HR.png",
      github: "https://huggingface.co/spaces/Aravindhan11/AI-Agent-for-HR-Gemini/tree/main",
      live: "https://huggingface.co/spaces/Aravindhan11/AI-Agent-for-HR-Gemini" 
    },

    {
      id: 6,
      title: "Brain Tumor Detection",
      description: "Developed CNN model to detect brain tumor using Kaggle MRI dataset with 4,600 images, Leveraged transfer learning & fine-tuned pre-trained MobileNet, achieving an accuracy of 93.72% on test dataset Used Gradio to deploy the ML model, which can accurately classify MRI images in real-time efficiently",
      tags: [ "CNN" , "numpy" , "Pillow" , "gradio"],
      image: "/images/tumor.png",
      github: "https://huggingface.co/spaces/Aravindhan11/Brain_Tumor_Detection/tree/main",
      live: "https://huggingface.co/spaces/Aravindhan11/Brain_Tumor_Detection"
    },

    {
      "id": 7,
      "title": "Depression Detection",
      "description": "This project used data from social media networks to explore various methods of early detection of MDDs based on machine learning. We performed a thorough analysis of the dataset to characterize the subjects’ behavior based on different aspects of their PHQ9 question answering, textual inputs, Python code for Depression Detection using multiple machine learning algorithms and Twitter dataset for detecting depression also from sentiments.",
      "tags": ["Python", "Machine Learning", "NLP", "Data Analysis"],
      "image": "/images/ml.jpg",
      "github": "https://github.com/Aravindh-dev12/Depression-Detection-Using-ML",
      "live": "https://github.com/Aravindh-dev12/Depression-Detection-Using-ML"
    }

  ];

export const Projects = () => {
  const theme = useTheme();
  const { darkMode } = useThemeContext();
  const containerRef = useRef<HTMLDivElement>(null!);
  const [selectedProject, setSelectedProject] = useState<typeof projectsData[0] | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"]
  });
  
  const lineHeight = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  const openVideoModal = (project: typeof projectsData[0]) => {
    setSelectedProject(project);
    setIsPlaying(true);
  };

  const closeVideoModal = () => {
    setIsPlaying(false);
    setTimeout(() => setSelectedProject(null), 300); // Wait for animation to complete
  };

  return (
    <Box 
      id="projects"
      component="section"
      ref={containerRef}
      sx={{
        minHeight: '100vh',
        padding: { xs: '80px 20px', md: '120px 60px' },
        position: 'relative',
        overflow: 'hidden',
        background: darkMode ? 'radial-gradient(circle at center, #1a1a1a 0%, #000000 100%)' : 'radial-gradient(circle at center, #f5f5f5 0%, #e0e0e0 100%)',
      }}
    >
      {/* Animated background elements */}
      {[...Array(10)].map((_, i) => (
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

      {/* Main container */}
      <Box sx={{ 
        maxWidth: '1400px', 
        margin: '0 auto',
        position: 'relative',
        paddingLeft: { md: '100px' }
      }}>
        {/* Vertical animated line */}
        <motion.div
          style={{
            position: 'absolute',
            left: '50px',
            top: 0,
            bottom: 0,
            width: '4px',
            background: theme.palette.background.paper,
            borderRadius: '2px',
             display: 'block' 
          }}
        >
          <motion.div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              height: lineHeight,
              background: `linear-gradient(to bottom, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
              borderRadius: '2px',
            }}
          />
        </motion.div>

        {/* Section header */}
        <Box sx={{ 
          textAlign: 'center', 
          mb: { xs: 4, md: 8 },
          position: 'relative',
          zIndex: 1
        }}>
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
              Featured Projects
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
              Selected work showcasing my skills and experience
            </Typography>
          </motion.div>
        </Box>

        {/* Projects list */}
        <Box sx={{ position: 'relative', zIndex: 1 }}>
          {projectsData.map((project, index) => (
            <Box 
              key={project.id} 
              sx={{ 
                mb: { xs: 8, md: 12 },
                position: 'relative'
              }}
            >
              {/* Project dot on the line */}
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                style={{
                  position: 'absolute',
                  // left: { xs: 0, md: '46px' },
                  top: '40px',
                  width: '16px',
                  height: '16px',
                  borderRadius: '50%',
                  background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                  border: `2px solid ${theme.palette.background.paper}`,
                  display: 'block' ,
                  zIndex: 2
                }}
              />

              <Grid 
                container 
                spacing={6} 
                alignItems="center"
                direction={index % 2 === 0 ? 'row' : 'row-reverse'}
                sx={{ position: 'relative' }}
              >
                {/* Project image with video play button */}
                <Grid item xs={12} md={6}>
                  <motion.div
                    initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 * index }}
                    viewport={{ once: true }}
                  >
                    <Box
                      sx={{
                        borderRadius: '24px',
                        overflow: 'hidden',
                        boxShadow: `0 20px 40px ${darkMode ? 'rgba(0,0,0,0.3)' : 'rgba(0,0,0,0.1)'}`,
                        position: 'relative',
                        cursor: 'pointer',
                        '&:hover img': {
                          transform: 'scale(1.03)'
                        },
                        '&:hover .play-button': {
                          transform: 'scale(1.1)',
                          opacity: 1
                        }
                      }}
                    >
                      <Box
                        component="img"
                        src={project.image}
                        alt={project.title}
                        sx={{
                          width: '100%',
                          height: 'auto',
                          objectFit: 'cover',
                          transition: 'transform 0.5s ease',
                          display: 'block'
                        }}
                      />
                      {/* Gradient overlay */}
                      
                     
                      <Box
                        sx={{
                          position: 'absolute',
                          bottom: 0,
                          left: 0,
                          right: 0,
                          p: 3,
                          display: 'flex',
                          flexWrap: 'wrap',
                          gap: 1
                        }}
                      >
                        {project.tags.map(tag => (
                          <Chip
                            key={tag}
                            label={tag}
                            size="small"
                            sx={{
                              background: theme.palette.background.paper,
                              color: theme.palette.text.primary,
                              fontWeight: 600,
                              fontSize: '0.7rem'
                            }}
                          />
                        ))}
                      </Box>
                    </Box>
                  </motion.div>
                </Grid>

                {/* Project content */}
                <Grid item xs={12} md={6}>
                  <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Box sx={{ 
                      position: 'relative',
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'center'
                    }}>
                      <Typography
                        variant="h3"
                        component="h3"
                        sx={{ 
                          fontWeight: 700,
                          mb: 2,
                          color: theme.palette.text.primary,
                          fontSize: { xs: '1.8rem', md: '2.2rem' }
                        }}
                      >
                        {project.title}
                      </Typography>
                      
                      <Typography
                        variant="body1"
                        sx={{ 
                          mb: 3,
                          color: theme.palette.text.secondary,
                          lineHeight: 1.8,
                          fontSize: { xs: '1rem', md: '1.1rem' }
                        }}
                      >
                        {project.description}
                      </Typography>
                      
                      <Box sx={{ display: 'flex', gap: 2 }}>
                        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                          <Button
                            variant="contained"
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            startIcon={<FaGithub />}
                            sx={{
                              background: `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.primary.dark})`,
                              borderRadius: '12px',
                              padding: '10px 24px',
                              fontWeight: 600,
                              textTransform: 'none',
                              boxShadow: `0 4px 20px ${theme.palette.primary.main}30`,
                              '&:hover': {
                                boxShadow: `0 6px 24px ${theme.palette.primary.main}50`
                              }
                            }}
                          >
                            Code
                          </Button>
                        </motion.div>
                        
                        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                          <Button
                            variant="outlined"
                            href={project.live}
                            target="_blank"
                            rel="noopener noreferrer"
                            startIcon={<FaExternalLinkAlt />}
                            sx={{
                              borderColor: theme.palette.primary.main,
                              color: theme.palette.primary.main,
                              borderRadius: '12px',
                              padding: '10px 24px',
                              fontWeight: 600,
                              textTransform: 'none',
                              '&:hover': {
                                background: `${theme.palette.primary.main}10`,
                                borderColor: theme.palette.primary.dark,
                                color: theme.palette.primary.dark
                              }
                            }}
                          >
                            Live Demo
                          </Button>
                        </motion.div>
                      </Box>
                    </Box>
                  </motion.div>
                </Grid>
              </Grid>
            </Box>
          ))}
        </Box>
      </Box>

      {/* Video Modal */}
      <AnimatePresence>
        {selectedProject && (
          <Modal
            open={!!selectedProject}
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              backdropFilter: 'blur(10px)'
            }}
          >
            <Box sx={{ maxWidth: '90vw', width: '800px', p: 2 }}>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
              >
                {/* Video player with glowing border */}
                <motion.div
                  style={{
                    position: 'relative',
                    paddingTop: '56.25%', // 16:9 aspect ratio
                    borderRadius: '16px',
                    overflow: 'hidden',
                    boxShadow: `0 0 40px ${theme.palette.primary.main}80`
                  }}
                  animate={{
                    boxShadow: [
                      `0 0 30px ${theme.palette.primary.main}80`,
                      `0 0 50px ${theme.palette.secondary.main}80`,
                      `0 0 30px ${theme.palette.primary.main}80`
                    ]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    repeatType: 'reverse'
                  }}
                >
                  <ReactPlayer
                    url={selectedProject.image}
                    playing={isPlaying}
                    controls={true}
                    width="100%"
                    height="100%"
                    style={{
                      position: 'absolute',
                      top: 0,
                      left: 0
                    }}
                  />
                </motion.div>

                {/* Project info */}
                <Box sx={{
                  mt: 3,
                  p: 3,
                  background: darkMode ? 'rgba(30, 30, 30, 0.7)' : 'rgba(255, 255, 255, 0.7)',
                  backdropFilter: 'blur(12px)',
                  borderRadius: '12px'
                }}>
                  <Typography variant="h5" sx={{ mb: 1, fontWeight: 700 }}>
                    {selectedProject.title}
                  </Typography>
                  <Typography variant="body1" sx={{ color: theme.palette.text.secondary }}>
                    {selectedProject.description}
                  </Typography>
                </Box>
              </motion.div>
            </Box>
          </Modal>
        )}
      </AnimatePresence>
    </Box>
  );
};










