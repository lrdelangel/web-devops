import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Cloud, Container, GitBranch, Shield, Server, Zap, Database, Lock } from 'lucide-react';

const services = [
  {
    icon: Cloud,
    title: 'Cloud Architecture',
    description: 'Diseño e implementación de arquitecturas cloud escalables, seguras y resilientes.',
    items: [
      { icon: Server, text: 'AWS Architecture' },
      { icon: Database, text: 'GCP Architecture' },
      { icon: Zap, text: 'High Availability' },
      { icon: Shield, text: 'Disaster Recovery' }
    ],
    color: 'cyan'
  },
  {
    icon: Container,
    title: 'Kubernetes Consulting',
    description: 'Implementación y gestión de clusters Kubernetes on-premise y en la nube.',
    items: [
      { icon: Server, text: 'On-premise cluster deployment' },
      { icon: Cloud, text: 'Cloud Kubernetes (EKS, GKE)' },
      { icon: GitBranch, text: 'Migration to containers' },
      { icon: Zap, text: 'Troubleshooting clusters' }
    ],
    color: 'blue'
  },
  {
    icon: GitBranch,
    title: 'DevOps Automation',
    description: 'Automatización de infraestructura y pipelines de CI/CD para entrega continua.',
    items: [
      { icon: Database, text: 'Terraform Infrastructure' },
      { icon: GitBranch, text: 'CI/CD Pipelines' },
      { icon: Lock, text: 'GitOps' },
      { icon: Zap, text: 'Infrastructure as Code' }
    ],
    color: 'emerald'
  }
];

const colorClasses: Record<string, { bg: string; text: string; border: string; glow: string }> = {
  cyan: {
    bg: 'bg-cyan-500/10',
    text: 'text-cyan-400',
    border: 'border-cyan-500/30',
    glow: 'hover:shadow-cyan-500/20'
  },
  blue: {
    bg: 'bg-blue-500/10',
    text: 'text-blue-400',
    border: 'border-blue-500/30',
    glow: 'hover:shadow-blue-500/20'
  },
  emerald: {
    bg: 'bg-emerald-500/10',
    text: 'text-emerald-400',
    border: 'border-emerald-500/30',
    glow: 'hover:shadow-emerald-500/20'
  }
};

export function Services() {
  return (
    <section id="services" className="py-24 bg-slate-950 relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(34, 211, 238, 0.3) 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-cyan-500/10 text-cyan-400 text-sm font-medium mb-4">
            Servicios Profesionales
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Soluciones <span className="text-gradient">Cloud & DevOps</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Ofrezco servicios especializados para ayudar a tu empresa a transformar 
            su infraestructura y adoptar las mejores prácticas de la nube.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const colors = colorClasses[service.color];
            const Icon = service.icon;
            
            return (
              <Card 
                key={index} 
                className={`bg-slate-900/50 border-slate-800 hover:border-${service.color}-500/50 transition-all duration-500 group ${colors.glow} hover:shadow-lg hover:shadow-${service.color}-500/10`}
              >
                <CardHeader className="pb-4">
                  <div className={`w-14 h-14 rounded-xl ${colors.bg} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className={`w-7 h-7 ${colors.text}`} />
                  </div>
                  <CardTitle className="text-xl font-bold text-white">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-400 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="space-y-3">
                    {service.items.map((item, itemIndex) => {
                      const ItemIcon = item.icon;
                      return (
                        <li 
                          key={itemIndex} 
                          className="flex items-center gap-3 text-slate-300 group/item hover:text-white transition-colors"
                        >
                          <div className={`w-8 h-8 rounded-lg ${colors.bg} flex items-center justify-center flex-shrink-0`}>
                            <ItemIcon className={`w-4 h-4 ${colors.text}`} />
                          </div>
                          <span className="text-sm">{item.text}</span>
                        </li>
                      );
                    })}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
