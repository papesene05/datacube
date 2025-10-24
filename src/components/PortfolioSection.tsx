import Link from 'next/link'
import { ExternalLink, Github, ArrowRight } from 'lucide-react'
import ProjectImage from './ProjectImage'

const PortfolioSection = () => {
  const projects = [
    {
      id: 1,
      title: 'Système de recommandation IA',
      description: 'Plateforme e-commerce avec système de recommandation intelligent utilisant le machine learning pour personnaliser l\'expérience client.',
      image: 'gradient',
      category: 'Intelligence Artificielle',
      technologies: ['Python', 'TensorFlow', 'React', 'Node.js'],
      href: '/realisations/systeme-recommandation-ia',
      github: '#',
      demo: '#',
      featured: true
    },
    {
      id: 2,
      title: 'Dashboard Analytics',
      description: 'Tableau de bord temps réel pour l\'analyse des performances business avec visualisations interactives et alertes automatiques.',
      image: 'gradient',
      category: 'Data Science',
      technologies: ['Power BI', 'SQL', 'Python', 'D3.js'],
      href: '/realisations/dashboard-analytics',
      github: '#',
      demo: '#',
      featured: true
    },
    {
      id: 3,
      title: 'Application Web SaaS',
      description: 'Plateforme SaaS complète pour la gestion de projets avec authentification, paiements et collaboration en temps réel.',
      image: 'gradient',
      category: 'Développement Web',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      href: '/realisations/application-saas',
      github: '#',
      demo: '#',
      featured: false
    },
    {
      id: 4,
      title: 'Application Mobile Cross-Platform',
      description: 'Application mobile pour la livraison de repas avec géolocalisation, paiements intégrés et suivi en temps réel.',
      image: 'gradient',
      category: 'Développement Mobile',
      technologies: ['React Native', 'Firebase', 'Stripe', 'Maps API'],
      href: '/realisations/app-livraison',
      github: '#',
      demo: '#',
      featured: false
    }
  ]

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Intelligence Artificielle':
        return 'bg-purple-100 text-purple-800'
      case 'Data Science':
        return 'bg-blue-100 text-blue-800'
      case 'Développement Web':
        return 'bg-green-100 text-green-800'
      case 'Développement Mobile':
        return 'bg-orange-100 text-orange-800'
      default:
        return 'bg-gray-100 text-gray-800'
    }
  }

  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Nos Réalisations
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Découvrez nos projets les plus récents et laissez-vous inspirer 
            par nos solutions innovantes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {projects.map((project) => (
            <div
              key={project.id}
              className="card card-hover overflow-hidden"
            >
              <div className="relative h-48">
                <ProjectImage 
                  title={project.title}
                  category={project.category}
                  className="h-full"
                />
                <div className="absolute top-4 left-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${getCategoryColor(project.category)}`}>
                    {project.category}
                  </span>
                </div>
                {project.featured && (
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 bg-primary-100 text-primary-800 rounded-full text-xs font-medium">
                      Projet phare
                    </span>
                  </div>
                )}
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between">
                  <Link
                    href={project.href}
                    className="text-primary-600 hover:text-primary-700 font-medium flex items-center group"
                  >
                    Voir le projet
                    <ArrowRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                  </Link>
                  
                  <div className="flex space-x-2">
                    <a
                      href={project.github}
                      className="p-2 text-gray-400 hover:text-gray-600 transition-colors duration-200"
                      aria-label="Code source"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                    <a
                      href={project.demo}
                      className="p-2 text-gray-400 hover:text-gray-600 transition-colors duration-200"
                      aria-label="Démo"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link href="/realisations" className="btn btn-primary text-lg px-8 py-4">
            Voir tous nos projets
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  )
}

export default PortfolioSection