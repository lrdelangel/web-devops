import { Button } from '@/components/ui/button';
import { Cloud, Server, Container, ChevronDown } from 'lucide-react';

export function Hero() {
  const scrollToServices = () => {
    document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url(/hero-bg.jpg)' }}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950/70 via-slate-950/80 to-slate-950" />
      
      {/* Animated Grid */}
      <div className="absolute inset-0 opacity-20">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(34, 211, 238, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(34, 211, 238, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Badges */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-effect text-cyan-400 text-sm font-medium">
            <Cloud className="w-4 h-4" />
            Cloud Architect
          </span>
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-effect text-blue-400 text-sm font-medium">
            <Container className="w-4 h-4" />
            Kubernetes Expert
          </span>
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-effect text-emerald-400 text-sm font-medium">
            <Server className="w-4 h-4" />
            DevOps Engineer
          </span>
        </div>

        {/* Main Title */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
          <span className="text-white">Luis Ricardo</span>
          <br />
          <span className="text-gradient">Del Angel Gtz.</span>
        </h1>

        {/* Subtitle */}
        <p className="text-lg sm:text-xl md:text-2xl text-slate-300 mb-4 max-w-3xl mx-auto">
          Senior Cloud Architect Certificado
        </p>

        {/* Description */}
        <p className="text-base sm:text-lg text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed">
          Especialista en diseño e implementación de arquitecturas cloud escalables, 
          seguras y resilientes en <span className="text-cyan-400">AWS</span> y <span className="text-blue-400">Google Cloud</span>. 
          Experto en Kubernetes, DevOps e Infraestructura como Código.
        </p>

        {/* Experience Stats */}
        <div className="flex flex-wrap justify-center gap-6 sm:gap-10 mb-12">
          <div className="text-center">
            <div className="text-3xl sm:text-4xl font-bold text-cyan-400">25+</div>
            <div className="text-sm text-slate-400 mt-1">Años Linux</div>
          </div>
          <div className="w-px h-16 bg-slate-700 hidden sm:block" />
          <div className="text-center">
            <div className="text-3xl sm:text-4xl font-bold text-blue-400">10+</div>
            <div className="text-sm text-slate-400 mt-1">Años Cloud</div>
          </div>
          <div className="w-px h-16 bg-slate-700 hidden sm:block" />
          <div className="text-center">
            <div className="text-3xl sm:text-4xl font-bold text-emerald-400">10+</div>
            <div className="text-sm text-slate-400 mt-1">Años Kubernetes</div>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            size="lg" 
            className="bg-cyan-500 hover:bg-cyan-600 text-slate-950 font-semibold px-8 py-6 text-lg glow-cyan transition-all duration-300"
            onClick={scrollToServices}
          >
            Ver Servicios
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="border-slate-600 text-white hover:bg-slate-800 px-8 py-6 text-lg transition-all duration-300"
            onClick={scrollToContact}
          >
            Contactar
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-8 h-8 text-slate-500" />
      </div>
    </section>
  );
}
