import { Hero } from '@/components/sections/Hero';
import { Services } from '@/components/sections/Services';
import { Projects } from '@/components/sections/Projects';
import { Skills } from '@/components/sections/Skills';
import { Experiences } from '@/components/sections/Experiences';
import { Education } from '@/components/sections/Education';
import { About } from '@/components/sections/About';
import { Contact } from '@/components/sections/Contact';

export default function HomePage() {
  return (
    <>
      <Hero />
      <Services />
      <Projects />
      <Skills />
      <Experiences />
      <Education />
      <About />
      <Contact />
    </>
  );
}
