import { Card, CardContent } from '@/components/ui/card';
import { BadgeCheck, ExternalLink } from 'lucide-react';

const certifications = [
  {
    name: 'AWS Certified Solutions Architect',
    level: 'Professional',
    year: '2024',
    url: 'https://www.credly.com/badges/756c510f-c796-47c4-828e-be033ad35ff0/public_url',
    color: 'orange'
  },
  {
    name: 'AWS Certified Solutions Architect',
    level: 'Associate',
    year: '2024',
    url: 'https://www.credly.com/badges/c7b77262-d6ea-4d32-91cd-3a375a5ea7b2/public_url',
    color: 'orange'
  },
  {
    name: 'HashiCorp Certified: Terraform Associate',
    level: '003',
    year: '2024',
    url: 'https://www.credly.com/badges/d93926c1-8466-4c98-973a-c0e29b9eead0/public_url',
    color: 'purple'
  },
  {
    name: 'Certified Kubernetes Application Developer',
    level: 'CKAD',
    year: '2024',
    url: 'https://www.credly.com/badges/c194a9ab-eebd-48cf-ab0c-4a3797420716/public_url',
    color: 'blue'
  }
];

const additionalCerts = [
  'AWS Certified SysOps Administrator - Associate (SOA-C02)',
  'Certified Kubernetes Administrator (CKA)',
  'AWS Certified Cloud Practitioner (CLF-C02)'
];

const colorClasses: Record<string, { bg: string; text: string; border: string }> = {
  orange: {
    bg: 'bg-orange-500/10',
    text: 'text-orange-400',
    border: 'border-orange-500/30'
  },
  purple: {
    bg: 'bg-purple-500/10',
    text: 'text-purple-400',
    border: 'border-purple-500/30'
  },
  blue: {
    bg: 'bg-blue-500/10',
    text: 'text-blue-400',
    border: 'border-blue-500/30'
  }
};

export function Certifications() {
  return (
    <section id="certifications" className="py-24 bg-slate-950 relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(168, 85, 247, 0.3) 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-purple-500/10 text-purple-400 text-sm font-medium mb-4">
            Certificaciones Oficiales
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Certificaciones <span className="text-gradient">Profesionales</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Certificaciones validadas internacionalmente que respaldan mi experiencia 
            en tecnologías cloud, Kubernetes y DevOps.
          </p>
        </div>

        {/* Main Certifications Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {certifications.map((cert, index) => {
            const colors = colorClasses[cert.color];
            return (
              <a 
                key={index}
                href={cert.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group"
              >
                <Card className="bg-slate-800/50 border-slate-700 hover:border-cyan-500/50 transition-all duration-300 h-full group-hover:shadow-lg group-hover:shadow-cyan-500/10">
                  <CardContent className="p-6">
                    <div className={`w-12 h-12 rounded-xl ${colors.bg} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                      <BadgeCheck className={`w-6 h-6 ${colors.text}`} />
                    </div>
                    <h3 className="text-white font-semibold mb-1 leading-tight">
                      {cert.name}
                    </h3>
                    <p className={`text-sm ${colors.text} font-medium mb-3`}>
                      {cert.level}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-slate-500 text-sm">{cert.year}</span>
                      <ExternalLink className="w-4 h-4 text-slate-500 group-hover:text-cyan-400 transition-colors" />
                    </div>
                  </CardContent>
                </Card>
              </a>
            );
          })}
        </div>

        {/* Additional Certifications */}
        <div className="bg-slate-800/30 border border-slate-700 rounded-2xl p-6 sm:p-8">
          <h3 className="text-white font-semibold mb-6 text-center">
            Certificaciones Adicionales
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {additionalCerts.map((cert, index) => (
              <span 
                key={index}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-700/50 text-slate-300 text-sm border border-slate-600"
              >
                <BadgeCheck className="w-4 h-4 text-emerald-400" />
                {cert}
              </span>
            ))}
          </div>
        </div>

        {/* Credly Link */}
        <div className="text-center mt-8">
          <p className="text-slate-400 text-sm">
            Todas las certificaciones están verificadas en{' '}
            <a 
              href="https://www.credly.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan-400 hover:text-cyan-300 transition-colors"
            >
              Credly
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
