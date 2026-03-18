import { Cloud, Linkedin, Mail, Calendar, Heart } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 bg-slate-950 border-t border-slate-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo & Copyright */}
          <div className="flex flex-col items-center md:items-start gap-2">
            <div className="flex items-center gap-2 text-white font-semibold">
              <Cloud className="w-5 h-5 text-cyan-400" />
              <span>Luis Ricardo Del Angel Gtz.</span>
            </div>
            <p className="text-slate-500 text-sm">
              Senior Cloud Architect & DevOps Engineer
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a 
              href="https://www.linkedin.com/in/luis-ricardo-del-angel/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-lg bg-slate-800 flex items-center justify-center text-slate-400 hover:text-blue-400 hover:bg-slate-700 transition-all"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a 
              href="mailto:lrdelangel@gmail.com"
              className="w-10 h-10 rounded-lg bg-slate-800 flex items-center justify-center text-slate-400 hover:text-cyan-400 hover:bg-slate-700 transition-all"
              aria-label="Email"
            >
              <Mail className="w-5 h-5" />
            </a>
            <a 
              href="https://calendly.com/lrdelangel"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-lg bg-slate-800 flex items-center justify-center text-slate-400 hover:text-emerald-400 hover:bg-slate-700 transition-all"
              aria-label="Calendly"
            >
              <Calendar className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-slate-800 mt-8 pt-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-500 text-sm">
            <p>
              {currentYear} Todos los derechos reservados.
            </p>
            <p className="flex items-center gap-1">
              Hecho con <Heart className="w-4 h-4 text-red-400 fill-red-400" /> en México
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
