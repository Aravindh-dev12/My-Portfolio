'use client';

import { createTheme, ThemeProvider as MuiThemeProvider } from '@mui/material/styles';
import { ReactNode, createContext, useContext, useState } from 'react';
import { darkTheme as dark, lightTheme as light } from './theme';

type ThemeContextType = {
  darkMode: boolean;
  toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextType>({
  darkMode: false,
  toggleTheme: () => {},
});

export const useThemeContext = () => useContext(ThemeContext);

// Tuple type for shadows - exactly 25 strings
type ShadowsTuple = [
  "none", string, string, string, string,
  string, string, string, string, string,
  string, string, string, string, string,
  string, string, string, string, string,
  string, string, string, string, string
];

const fillShadows = (shadows: string[]): ShadowsTuple => {
  const defaultShadow = 'none';
  const filled = [defaultShadow, ...shadows.slice(1)]; // Keep first as 'none'
  while (filled.length < 25) {
    filled.push('none');
  }
  return filled.slice(0, 25) as ShadowsTuple;
};

export const CustomThemeProvider = ({ children }: { children: ReactNode }) => {
  const [darkMode, setDarkMode] = useState(true);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  const theme = createTheme({
    typography: {
      fontFamily: 'Poppins, sans-serif',
      h1: { fontWeight: 700 },
      h2: { fontWeight: 600 },
      h3: { fontWeight: 500 },
      body1: { fontWeight: 400 },
      button: { fontWeight: 500 },
    },
    palette: {
      mode: darkMode ? 'dark' : 'light',
      primary: {
        main: darkMode ? dark.primary.main : light.primary.main,
        dark: darkMode ? dark.primary.dark : light.primary.dark,
      },
      secondary: {
        main: darkMode ? dark.secondary.main : light.secondary.main,
      },
      text: {
        primary: darkMode ? dark.text.primary : light.text.primary,
        secondary: darkMode ? dark.text.secondary : light.text.secondary,
      },
      background: {
        default: darkMode ? dark.background.default : light.background.default,
        paper: darkMode ? dark.background.paper : light.background.paper,
      },
    },
    shape: {
      borderRadius: Number(dark.borderRadius.replace('px', '')),
    },
    shadows: darkMode ? fillShadows(dark.shadows) : fillShadows(light.shadows),
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            fontWeight: 600,
            textTransform: 'none', // removes uppercase transformation
          },
        },
      },
      MuiTypography: {
        defaultProps: {
          fontFamily: 'Poppins, sans-serif',
        },
      },
    },
  });

  return (
    <ThemeContext.Provider value={{ darkMode, toggleTheme }}>
      <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>
    </ThemeContext.Provider>
  );
};
