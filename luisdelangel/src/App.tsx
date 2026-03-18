import { Navigation } from '@/sections/Navigation';
import { Hero } from '@/sections/Hero';
import { Services } from '@/sections/Services';
import { Experience } from '@/sections/Experience';
import { Certifications } from '@/sections/Certifications';
import { Contact } from '@/sections/Contact';
import { Footer } from '@/sections/Footer';

function App() {
  return (
    <div className="min-h-screen bg-slate-950">
      <Navigation />
      <main>
        <Hero />
        <Services />
        <Experience />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
