'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ExternalLink, Github, Filter, Search, ArrowRight, Calendar, User, Tag } from 'lucide-react'
import ProjectImage from '@/components/ProjectImage'

export default function RealisationsPage() {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [searchTerm, setSearchTerm] = useState('')

  const projects = [
    {
      id: 1,
      title: 'Système de recommandation IA',
      description: 'Plateforme e-commerce avec système de recommandation intelligent utilisant le machine learning pour personnaliser l\'expérience client et augmenter les ventes.',
      image: 'gradient',
      category: 'Intelligence Artificielle',
      technologies: ['Python', 'TensorFlow', 'React', 'Node.js', 'MongoDB'],
      href: '/realisations/systeme-recommandation-ia',
      github: '#',
      demo: '#',
      featured: true,
      date: '2024-01-15',
      client: 'TechCorp',
      results: '+40% de ventes en 3 mois'
    },
    {
      id: 2,
      title: 'Dashboard Analytics',
      description: 'Tableau de bord temps réel pour l\'analyse des performances business avec visualisations interactives, alertes automatiques et reporting avancé.',
      image: 'gradient',
      category: 'Data Science',
      technologies: ['Power BI', 'SQL', 'Python', 'D3.js', 'PostgreSQL'],
      href: '/realisations/dashboard-analytics',
      github: '#',
      demo: '#',
      featured: true,
      date: '2023-11-20',
      client: 'DataSolutions',
      results: 'Réduction de 60% du temps d\'analyse'
    },
    {
      id: 3,
      title: 'Application Web SaaS',
      description: 'Plateforme SaaS complète pour la gestion de projets avec authentification, paiements intégrés, collaboration en temps réel et API REST.',
      image: 'gradient',
      category: 'Développement Web',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe', 'Socket.io'],
      href: '/realisations/application-saas',
      github: '#',
      demo: '#',
      featured: false,
      date: '2023-09-10',
      client: 'StartupInnovante',
      results: '500+ utilisateurs actifs'
    },
    {
      id: 4,
      title: 'Application Mobile Cross-Platform',
      description: 'Application mobile pour la livraison de repas avec géolocalisation, paiements intégrés, suivi en temps réel et notifications push.',
      image: 'gradient',
      category: 'Développement Mobile',
      technologies: ['React Native', 'Firebase', 'Stripe', 'Maps API', 'Redux'],
      href: '/realisations/app-livraison',
      github: '#',
      demo: '#',
      featured: false,
      date: '2023-07-05',
      client: 'FoodDelivery',
      results: '4.8/5 étoiles sur les stores'
    },
    {
      id: 5,
      title: 'Chatbot IA Multilingue',
      description: 'Assistant virtuel intelligent capable de gérer les demandes clients en français, anglais et espagnol avec intégration CRM complète.',
      image: 'gradient',
      category: 'Intelligence Artificielle',
      technologies: ['Python', 'OpenAI', 'FastAPI', 'PostgreSQL', 'Docker'],
      href: '/realisations/chatbot-ia',
      github: '#',
      demo: '#',
      featured: false,
      date: '2023-05-18',
      client: 'CustomerService',
      results: '85% de satisfaction client'
    },
    {
      id: 6,
      title: 'Plateforme E-commerce',
      description: 'Marketplace moderne avec système de paiement sécurisé, gestion des stocks, analytics avancées et interface administrateur complète.',
      image: 'gradient',
      category: 'Développement Web',
      technologies: ['Next.js', 'Stripe', 'Prisma', 'PostgreSQL', 'AWS'],
      href: '/realisations/marketplace',
      github: '#',
      demo: '#',
      featured: false,
      date: '2023-03-12',
      client: 'EcommercePlus',
      results: '2M€ de CA généré'
    }
  ]

  const categories = [
    { id: 'all', name: 'Tous les projets', count: projects.length },
    { id: 'Intelligence Artificielle', name: 'IA', count: projects.filter(p => p.category === 'Intelligence Artificielle').length },
    { id: 'Data Science', name: 'Data', count: projects.filter(p => p.category === 'Data Science').length },
    { id: 'Développement Web', name: 'Web', count: projects.filter(p => p.category === 'Développement Web').length },
    { id: 'Développement Mobile', name: 'Mobile', count: projects.filter(p => p.category === 'Développement Mobile').length }
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

  const filteredProjects = projects.filter(project => {
    const matchesCategory = selectedCategory === 'all' || project.category === selectedCategory
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.technologies.some(tech => tech.toLowerCase().includes(searchTerm.toLowerCase()))
    return matchesCategory && matchesSearch
  })

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-gray-50 to-primary-50">
        <div className="container-custom">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Nos Réalisations
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Découvrez nos projets les plus récents et laissez-vous inspirer 
              par nos solutions innovantes qui transforment les entreprises.
            </p>
          </div>
        </div>
      </section>

      {/* Filters Section */}
      <section className="py-8 bg-white border-b">
        <div className="container-custom">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Rechercher un projet..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
            </div>

            {/* Category Filters */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                    selectedCategory === category.id
                      ? 'bg-primary-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category.name} ({category.count})
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          {filteredProjects.length === 0 ? (
            <div className="text-center py-16">
              <Filter className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Aucun projet trouvé
              </h3>
              <p className="text-gray-600">
                Essayez de modifier vos critères de recherche.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project) => (
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

                    {/* Project Info */}
                    <div className="space-y-2 mb-4 text-sm text-gray-500">
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-2" />
                        {new Date(project.date).toLocaleDateString('fr-FR', { 
                          year: 'numeric', 
                          month: 'long' 
                        })}
                      </div>
                      <div className="flex items-center">
                        <User className="w-4 h-4 mr-2" />
                        {project.client}
                      </div>
                      <div className="flex items-center">
                        <Tag className="w-4 h-4 mr-2" />
                        {project.results}
                      </div>
                    </div>

                    {/* Technologies */}
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

                    {/* Actions */}
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
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Vous avez un projet similaire ?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Discutons de vos besoins et créons ensemble la solution 
            qui transformera votre entreprise.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/rdv" className="btn btn-primary text-lg px-8 py-4">
              Demander un devis
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link href="/contact" className="btn btn-outline text-lg px-8 py-4">
              Nous contacter
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}