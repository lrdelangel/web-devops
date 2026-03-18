import { Card, CardContent } from '@/components/ui/card';
import { Calendar, Building2, CheckCircle2 } from 'lucide-react';

const experiences = [
  {
    company: 'Proyecto: albo',
    position: 'Cloud Engineer',
   #period: 'Junio 2022 - Presente',
    description: 'Diseño, implementación, administración y soporte de soluciones en AWS y GCP. Gestión de infraestructura con Terraform, Ansible y CloudFormation.',
    achievements: [
      'Implementación de arquitecturas serverless con Lambda y Cloud Functions',
      'Gestión de clusters Kubernetes (EKS, GKE) con Helm y Operators',
      'Automatización CI/CD con Jenkins, GitHub Actions y GitLab CI/CD',
      'Monitoreo y observabilidad con Prometheus, Grafana y ELK Stack',
      'Comunicación de microservicios intra-nube y entre nubes via VPN'
    ]
  },
  {
    company: 'Proyecto: IT Solutions and Services',
    position: 'Infrastructure Architect',
    #period: 'Abril 2016 - Junio 2022',
    description: 'Implementación y soporte de plataformas de almacenamiento empresarial y despliegue de clusters Kubernetes.',
    achievements: [
      'Implementación de plataformas Oracle FS1 Flash Storage y ZFS Storage',
      'Configuración de replicación con Oracle MaxRep',
      'Administración de switches Brocade Directors',
      'Despliegue y optimización de clusters Kubernetes con kubeadm',
      'Gestión de microservicios y contenedores con Docker'
    ]
  }
];

const stats = [
  { value: '25+', label: 'Años de Experiencia', sublabel: 'Linux Administration' },
  { value: '10+', label: 'Años de Experiencia', sublabel: 'Cloud (AWS, GCP)' },
  { value: '10+', label: 'Años de Experiencia', sublabel: 'Kubernetes' },
  { value: '2+', label: 'Empresas', sublabel: 'Enterprise Experience' }
];

export function Experience() {
  return (
    <section id="experience" className="py-24 bg-slate-900 relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-blue-500/10 text-blue-400 text-sm font-medium mb-4">
            Trayectoria Profesional
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Experiencia <span className="text-gradient">Laboral</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Más de dos décadas de experiencia en administración de sistemas, 
            arquitectura cloud y tecnologías de contenedores.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-16">
          {stats.map((stat, index) => (
            <Card 
              key={index} 
              className="bg-slate-800/50 border-slate-700 hover:border-cyan-500/30 transition-all duration-300 group"
            >
              <CardContent className="p-6 text-center">
                <div className="text-3xl sm:text-4xl font-bold text-cyan-400 mb-2 group-hover:scale-110 transition-transform">
                  {stat.value}
                </div>
                <div className="text-sm text-slate-300">{stat.label}</div>
                <div className="text-xs text-slate-500 mt-1">{stat.sublabel}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Experience Timeline */}
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card 
              key={index} 
              className="bg-slate-800/50 border-slate-700 hover:border-cyan-500/30 transition-all duration-300"
            >
              <CardContent className="p-6 sm:p-8">
                <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                  {/* Company Info */}
                  <div className="lg:w-1/3">
                    <div className="flex items-center gap-2 text-cyan-400 mb-2">
                      <Building2 className="w-5 h-5" />
                      <span className="font-semibold text-lg">{exp.company}</span>
                    </div>
                    <div className="text-white font-medium mb-2">{exp.position}</div>
                    <div className="flex items-center gap-2 text-slate-400 text-sm">
                      <Calendar className="w-4 h-4" />
                      <span>{exp.period}</span>
                    </div>
                  </div>

                  {/* Description & Achievements */}
                  <div className="lg:w-2/3">
                    <p className="text-slate-300 mb-4 leading-relaxed">
                      {exp.description}
                    </p>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, achIndex) => (
                        <li 
                          key={achIndex} 
                          className="flex items-start gap-3 text-slate-400"
                        >
                          <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                          <span className="text-sm">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
