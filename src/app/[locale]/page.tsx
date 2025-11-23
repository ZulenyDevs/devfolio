import Hero from '@/app/home/hero';
import About from '@/app/about/about';
import Experience from '@/app/experience/experience';
import Skills from '@/app/experience/skills';
import Projects from '@/app/projects/projects';
import Education from '@/app/education/education';
import Contact from '@/app/contact/contact';

export default function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <Education />
      <Contact />
    </>
  );
}

