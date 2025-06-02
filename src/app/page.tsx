import { Header } from '@/app/components/Header';
import { Hero } from '@/app/components/Hero';
import { CustomThemeProvider } from '@/app/theme/ThemeProvider';
import { BottomNav } from '@/app/components/BottomNav';
import { About } from '@/app/components/About';
import { Skills } from '@/app/components/Skills';
import { Projects } from '@/app/components/Projects';
import { Contact } from '@/app/components/Contact';
import { Education } from './components/education';
import { Experience } from './components/Experience';
// import { Certifications } from './components/Certifications';
export default function Home() {
  return (
    <CustomThemeProvider>
      <Header />
      <Hero />
      <About />
      <Skills/>
      {/* Add more sections here */}
      <BottomNav />
      <Experience/>
      <Projects/>
      <Education/>
      {/* <Certifications/> */}

      <Contact/>
    </CustomThemeProvider>
  );
}