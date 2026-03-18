import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, Cloud } from 'lucide-react';

const navItems = [
  { label: 'Servicios', href: '#services' },
  { label: 'Experiencia', href: '#experience' },
  { label: 'Certificaciones', href: '#certifications' },
  { label: 'Contacto', href: '#contact' }
];

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <nav 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-slate-950/90 backdrop-blur-xl border-b border-slate-800' 
            : 'bg-transparent'
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <a 
              href="#" 
              className="flex items-center gap-2 text-white font-semibold"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            >
              <Cloud className="w-6 h-6 text-cyan-400" />
              <span className="hidden sm:inline">Luis Del Angel</span>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-1">
              {navItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => scrollToSection(item.href)}
                  className="px-4 py-2 text-slate-300 hover:text-white transition-colors text-sm font-medium"
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden md:block">
              <Button 
                size="sm"
                className="bg-cyan-500 hover:bg-cyan-600 text-slate-950 font-semibold"
                onClick={() => scrollToSection('#contact')}
              >
                Contactar
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 text-slate-300 hover:text-white"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div 
        className={`fixed inset-0 z-40 md:hidden transition-all duration-300 ${
          isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        <div 
          className="absolute inset-0 bg-slate-950/95 backdrop-blur-xl"
          onClick={() => setIsMobileMenuOpen(false)}
        />
        <div className="relative flex flex-col items-center justify-center h-full gap-6">
          {navItems.map((item) => (
            <button
              key={item.href}
              onClick={() => scrollToSection(item.href)}
              className="text-2xl text-slate-300 hover:text-white transition-colors font-medium"
            >
              {item.label}
            </button>
          ))}
          <Button 
            size="lg"
            className="mt-4 bg-cyan-500 hover:bg-cyan-600 text-slate-950 font-semibold px-8"
            onClick={() => scrollToSection('#contact')}
          >
            Contactar
          </Button>
        </div>
      </div>
    </>
  );
}
