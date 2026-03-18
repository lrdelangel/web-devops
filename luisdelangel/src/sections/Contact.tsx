import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Linkedin, Mail, Calendar, Phone, MapPin, Send } from 'lucide-react';

const contactMethods = [
  {
    icon: Linkedin,
    title: 'LinkedIn',
    description: 'Conecta conmigo profesionalmente',
    value: 'Luis Ricardo Del Angel',
    href: 'https://www.linkedin.com/in/luis-ricardo-del-angel/',
    color: 'blue',
    buttonText: 'Ver Perfil'
  },
  {
    icon: Mail,
    title: 'Email',
    description: 'Escríbeme directamente',
    value: 'lrdelangel@gmail.com',
    href: 'mailto:lrdelangel@gmail.com',
    color: 'cyan',
    buttonText: 'Enviar Email'
  },
  {
    icon: Calendar,
    title: 'Calendly',
    description: 'Agenda una reunión',
    value: 'Disponible para consultoría',
    href: 'https://calendly.com/lrdelangel',
    color: 'emerald',
    buttonText: 'Agendar Cita'
  }
];

const colorClasses: Record<string, { bg: string; text: string; button: string }> = {
  blue: {
    bg: 'bg-blue-500/10',
    text: 'text-blue-400',
    button: 'bg-blue-500 hover:bg-blue-600'
  },
  cyan: {
    bg: 'bg-cyan-500/10',
    text: 'text-cyan-400',
    button: 'bg-cyan-500 hover:bg-cyan-600'
  },
  emerald: {
    bg: 'bg-emerald-500/10',
    text: 'text-emerald-400',
    button: 'bg-emerald-500 hover:bg-emerald-600'
  }
};

export function Contact() {
  return (
    <section id="contact" className="py-24 bg-slate-900 relative overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl -translate-y-1/2" />
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl -translate-y-1/2" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-emerald-500/10 text-emerald-400 text-sm font-medium mb-4">
            Contacto
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Trabajemos <span className="text-gradient">Juntos</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            ¿Tienes un proyecto en mente? Estoy disponible para consultoría, 
            implementaciones y asesoría en arquitectura cloud.
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {contactMethods.map((method, index) => {
            const colors = colorClasses[method.color];
            const Icon = method.icon;
            
            return (
              <Card 
                key={index} 
                className="bg-slate-800/50 border-slate-700 hover:border-cyan-500/50 transition-all duration-300 group"
              >
                <CardContent className="p-6 text-center">
                  <div className={`w-16 h-16 rounded-2xl ${colors.bg} flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                    <Icon className={`w-8 h-8 ${colors.text}`} />
                  </div>
                  <h3 className="text-white font-semibold text-lg mb-1">
                    {method.title}
                  </h3>
                  <p className="text-slate-400 text-sm mb-2">
                    {method.description}
                  </p>
                  <p className={`${colors.text} font-medium mb-4`}>
                    {method.value}
                  </p>
                  <Button 
                    className={`${colors.button} text-white w-full`}
                    asChild
                  >
                    <a 
                      href={method.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2"
                    >
                      {method.buttonText}
                      <Send className="w-4 h-4" />
                    </a>
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Contact Info Bar */}
        <div className="bg-slate-800/30 border border-slate-700 rounded-2xl p-6">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-10">
            <div className="flex items-center gap-3 text-slate-300">
              <div className="w-10 h-10 rounded-lg bg-cyan-500/10 flex items-center justify-center">
                <Phone className="w-5 h-5 text-cyan-400" />
              </div>
              <div>
                <div className="text-xs text-slate-500">Teléfono</div>
                <div className="text-sm">777 328 0274</div>
              </div>
            </div>
            <div className="hidden sm:block w-px h-10 bg-slate-700" />
            <div className="flex items-center gap-3 text-slate-300">
              <div className="w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center">
                <MapPin className="w-5 h-5 text-emerald-400" />
              </div>
              <div>
                <div className="text-xs text-slate-500">Ubicación</div>
                <div className="text-sm">México</div>
              </div>
            </div>
            <div className="hidden sm:block w-px h-10 bg-slate-700" />
            <div className="flex items-center gap-3 text-slate-300">
              <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center">
                <Mail className="w-5 h-5 text-blue-400" />
              </div>
              <div>
                <div className="text-xs text-slate-500">Email</div>
                <div className="text-sm">lrdelangel@gmail.com</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
