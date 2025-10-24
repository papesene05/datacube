import { notFound } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeft, ExternalLink, Github, Calendar, User, Tag, Award, CheckCircle, Code, Database, Zap } from 'lucide-react'

// Données des projets (en attendant l'intégration Strapi)
const projects = {
  'systeme-recommandation-ia': {
    id: 1,
    title: 'Système de recommandation IA',
    description: 'Plateforme e-commerce avec système de recommandation intelligent utilisant le machine learning pour personnaliser l\'expérience client et augmenter les ventes.',
    longDescription: 'Ce projet révolutionnaire a transformé l\'expérience d\'achat en ligne de TechCorp en implémentant un système de recommandation basé sur l\'intelligence artificielle. Notre solution utilise des algorithmes de machine learning avancés pour analyser le comportement des utilisateurs et proposer des produits personnalisés en temps réel.',
    category: 'Intelligence Artificielle',
    technologies: ['Python', 'TensorFlow', 'React', 'Node.js', 'MongoDB', 'Redis', 'Docker'],
    client: 'TechCorp',
    date: '2024-01-15',
    duration: '4 mois',
    team: '3 développeurs',
    results: '+40% de ventes en 3 mois',
    images: [
      '/images/projects/recommendation-1.jpg',
      '/images/projects/recommendation-2.jpg',
      '/images/projects/recommendation-3.jpg'
    ],
    github: '#',
    demo: '#',
    featured: true,
    challenges: [
      'Traitement de gros volumes de données en temps réel',
      'Intégration avec l\'infrastructure existante',
      'Optimisation des performances pour 100k+ utilisateurs'
    ],
    solutions: [
      'Architecture microservices avec Redis pour le cache',
      'API REST optimisée avec pagination intelligente',
      'Monitoring en temps réel avec alertes automatiques'
    ],
    testimonial: {
      text: 'DataCube a transformé notre approche de la data. Leur système de recommandation IA a augmenté nos ventes de 40% en seulement 3 mois. Une équipe exceptionnelle !',
      author: 'Marie Dubois',
      position: 'Directrice Marketing',
      company: 'TechCorp'
    }
  },
  'dashboard-analytics': {
    id: 2,
    title: 'Dashboard Analytics',
    description: 'Tableau de bord temps réel pour l\'analyse des performances business avec visualisations interactives, alertes automatiques et reporting avancé.',
    longDescription: 'Dashboard complet pour DataSolutions permettant de visualiser et analyser les performances business en temps réel. La solution intègre des données provenant de multiples sources et offre des visualisations interactives pour faciliter la prise de décision.',
    category: 'Data Science',
    technologies: ['Power BI', 'SQL', 'Python', 'D3.js', 'PostgreSQL', 'Apache Kafka', 'Elasticsearch'],
    client: 'DataSolutions',
    date: '2023-11-20',
    duration: '3 mois',
    team: '2 data scientists + 1 développeur',
    results: 'Réduction de 60% du temps d\'analyse',
    images: [
      '/images/projects/dashboard-1.jpg',
      '/images/projects/dashboard-2.jpg',
      '/images/projects/dashboard-3.jpg'
    ],
    github: '#',
    demo: '#',
    featured: true,
    challenges: [
      'Intégration de données hétérogènes',
      'Traitement en temps réel de gros volumes',
      'Interface utilisateur intuitive'
    ],
    solutions: [
      'Pipeline ETL automatisé avec Apache Kafka',
      'Base de données optimisée avec indexation intelligente',
      'Interface responsive avec D3.js'
    ],
    testimonial: {
      text: 'Le dashboard développé par DataCube nous fait gagner un temps précieux. Les visualisations sont claires et les alertes nous permettent de réagir rapidement.',
      author: 'Jean Martin',
      position: 'CEO',
      company: 'DataSolutions'
    }
  },
  'application-saas': {
    id: 3,
    title: 'Application Web SaaS',
    description: 'Plateforme SaaS complète pour la gestion de projets avec authentification, paiements intégrés, collaboration en temps réel et API REST.',
    longDescription: 'Plateforme SaaS complète développée pour StartupInnovante, permettant la gestion collaborative de projets avec des fonctionnalités avancées de communication, suivi des tâches et intégration de paiements.',
    category: 'Développement Web',
    technologies: ['React', 'Node.js', 'MongoDB', 'Stripe', 'Socket.io', 'JWT', 'AWS'],
    client: 'StartupInnovante',
    date: '2023-09-10',
    duration: '5 mois',
    team: '4 développeurs',
    results: '500+ utilisateurs actifs',
    images: [
      '/images/projects/saas-1.jpg',
      '/images/projects/saas-2.jpg',
      '/images/projects/saas-3.jpg'
    ],
    github: '#',
    demo: '#',
    featured: false,
    challenges: [
      'Scalabilité pour des milliers d\'utilisateurs',
      'Sécurité des données et authentification',
      'Intégration de paiements sécurisés'
    ],
    solutions: [
      'Architecture cloud-native sur AWS',
      'Authentification JWT avec refresh tokens',
      'Intégration Stripe avec webhooks sécurisés'
    ],
    testimonial: {
      text: 'L\'application développée par DataCube dépasse toutes nos attentes. Interface intuitive, performance excellente et support réactif.',
      author: 'Sophie Laurent',
      position: 'CTO',
      company: 'StartupInnovante'
    }
  },
  'app-livraison': {
    id: 4,
    title: 'Application Mobile Cross-Platform',
    description: 'Application mobile pour la livraison de repas avec géolocalisation, paiements intégrés, suivi en temps réel et notifications push.',
    longDescription: 'Application mobile cross-platform développée pour FoodDelivery, permettant aux utilisateurs de commander des repas, suivre leur livraison en temps réel et effectuer des paiements sécurisés. L\'app intègre la géolocalisation pour un suivi précis des livraisons.',
    category: 'Développement Mobile',
    technologies: ['React Native', 'Firebase', 'Stripe', 'Maps API', 'Redux', 'Push Notifications', 'Geolocation'],
    client: 'FoodDelivery',
    date: '2023-07-05',
    duration: '6 mois',
    team: '3 développeurs mobile',
    results: '4.8/5 étoiles sur les stores',
    images: [
      '/images/projects/mobile-1.jpg',
      '/images/projects/mobile-2.jpg',
      '/images/projects/mobile-3.jpg'
    ],
    github: '#',
    demo: '#',
    featured: false,
    challenges: [
      'Gestion de la géolocalisation en temps réel',
      'Intégration des paiements mobiles',
      'Optimisation des performances sur iOS et Android'
    ],
    solutions: [
      'API de géolocalisation optimisée avec cache intelligent',
      'Intégration Stripe avec authentification biométrique',
      'Code partagé avec optimisations spécifiques par plateforme'
    ],
    testimonial: {
      text: 'L\'application développée par DataCube a révolutionné notre service de livraison. Les clients adorent le suivi en temps réel !',
      author: 'Pierre Moreau',
      position: 'Fondateur',
      company: 'FoodDelivery'
    }
  },
  'chatbot-ia': {
    id: 5,
    title: 'Chatbot IA Multilingue',
    description: 'Assistant virtuel intelligent capable de gérer les demandes clients en français, anglais et espagnol avec intégration CRM complète.',
    longDescription: 'Chatbot intelligent développé pour CustomerService, capable de comprendre et répondre aux demandes clients dans trois langues. Le système utilise l\'IA pour apprendre des interactions et améliorer continuellement ses réponses.',
    category: 'Intelligence Artificielle',
    technologies: ['Python', 'OpenAI', 'FastAPI', 'PostgreSQL', 'Docker', 'NLP', 'Machine Learning'],
    client: 'CustomerService',
    date: '2023-05-18',
    duration: '4 mois',
    team: '2 IA engineers + 1 développeur',
    results: '85% de satisfaction client',
    images: [
      '/images/projects/chatbot-1.jpg',
      '/images/projects/chatbot-2.jpg',
      '/images/projects/chatbot-3.jpg'
    ],
    github: '#',
    demo: '#',
    featured: false,
    challenges: [
      'Compréhension multilingue naturelle',
      'Intégration avec le CRM existant',
      'Apprentissage continu des interactions'
    ],
    solutions: [
      'Modèles NLP entraînés sur des corpus multilingues',
      'API REST pour intégration CRM transparente',
      'Système de feedback pour amélioration continue'
    ],
    testimonial: {
      text: 'Le chatbot de DataCube a transformé notre service client. 85% de satisfaction et une réduction de 70% des tickets !',
      author: 'Sophie Laurent',
      position: 'Responsable Service Client',
      company: 'CustomerService'
    }
  },
  'marketplace': {
    id: 6,
    title: 'Plateforme E-commerce',
    description: 'Marketplace moderne avec système de paiement sécurisé, gestion des stocks, analytics avancées et interface administrateur complète.',
    longDescription: 'Marketplace complet développé pour EcommercePlus, permettant aux vendeurs de gérer leurs boutiques en ligne avec des outils avancés d\'analytics, de gestion des stocks et de paiements sécurisés.',
    category: 'Développement Web',
    technologies: ['Next.js', 'Stripe', 'Prisma', 'PostgreSQL', 'AWS', 'Redis', 'Elasticsearch'],
    client: 'EcommercePlus',
    date: '2023-03-12',
    duration: '7 mois',
    team: '5 développeurs full-stack',
    results: '2M€ de CA généré',
    images: [
      '/images/projects/marketplace-1.jpg',
      '/images/projects/marketplace-2.jpg',
      '/images/projects/marketplace-3.jpg'
    ],
    github: '#',
    demo: '#',
    featured: false,
    challenges: [
      'Gestion de multiples vendeurs et produits',
      'Système de paiement complexe',
      'Scalabilité pour des milliers d\'utilisateurs'
    ],
    solutions: [
      'Architecture microservices avec AWS',
      'Système de paiement multi-vendeurs avec Stripe',
      'Cache Redis et recherche Elasticsearch'
    ],
    testimonial: {
      text: 'DataCube a créé une plateforme exceptionnelle. 2M€ de CA généré en 6 mois grâce à leur expertise !',
      author: 'Marie Dubois',
      position: 'CEO',
      company: 'EcommercePlus'
    }
  }
}

export async function generateStaticParams() {
  return Object.keys(projects).map((slug) => ({
    slug: slug,
  }))
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const project = projects[params.slug as keyof typeof projects]
  
  if (!project) {
    return {
      title: 'Projet non trouvé - DataCube',
    }
  }

  return {
    title: `${project.title} - DataCube`,
    description: project.description,
    openGraph: {
      title: `${project.title} - DataCube`,
      description: project.description,
      images: project.images,
    },
  }
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = projects[params.slug as keyof typeof projects]

  if (!project) {
    notFound()
  }

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
    <div className="pt-20">
      {/* Header */}
      <section className="section-padding bg-gradient-to-br from-gray-50 to-primary-50">
        <div className="container-custom">
          <Link 
            href="/realisations" 
            className="inline-flex items-center text-primary-600 hover:text-primary-700 mb-6"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Retour aux réalisations
          </Link>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center space-x-4 mb-6">
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${getCategoryColor(project.category)}`}>
                  {project.category}
                </span>
                {project.featured && (
                  <span className="px-3 py-1 bg-primary-100 text-primary-800 rounded-full text-sm font-medium">
                    Projet phare
                  </span>
                )}
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                {project.title}
              </h1>
              
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                {project.longDescription}
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <a href={project.demo} className="btn btn-primary text-lg px-8 py-4">
                  Voir la démo
                  <ExternalLink className="ml-2 w-5 h-5" />
                </a>
                <a href={project.github} className="btn btn-outline text-lg px-8 py-4">
                  <Github className="mr-2 w-5 h-5" />
                  Code source
                </a>
              </div>
            </div>
            
            <div className="relative">
              <div className="w-full h-96 bg-gradient-to-br from-primary-500 to-accent-500 rounded-2xl flex items-center justify-center">
                <span className="text-6xl font-bold text-white opacity-80">
                  {project.title.charAt(0)}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Info */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
            <div className="text-center">
              <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <Calendar className="w-6 h-6 text-primary-600" />
              </div>
              <div className="text-2xl font-bold text-gray-900 mb-1">
                {new Date(project.date).toLocaleDateString('fr-FR', { 
                  year: 'numeric', 
                  month: 'long' 
                })}
              </div>
              <div className="text-gray-600">Date de livraison</div>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <User className="w-6 h-6 text-primary-600" />
              </div>
              <div className="text-2xl font-bold text-gray-900 mb-1">
                {project.client}
              </div>
              <div className="text-gray-600">Client</div>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <Tag className="w-6 h-6 text-primary-600" />
              </div>
              <div className="text-2xl font-bold text-gray-900 mb-1">
                {project.duration}
              </div>
              <div className="text-gray-600">Durée</div>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <Award className="w-6 h-6 text-primary-600" />
              </div>
              <div className="text-2xl font-bold text-gray-900 mb-1">
                {project.results}
              </div>
              <div className="text-gray-600">Résultats</div>
            </div>
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Technologies utilisées
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
            {project.technologies.map((tech, index) => (
              <div key={index} className="bg-white rounded-lg p-4 text-center hover:shadow-lg transition-all duration-300">
                <div className="text-sm font-semibold text-gray-900">
                  {tech}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Challenges & Solutions */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                Défis relevés
              </h2>
              <div className="space-y-6">
                {project.challenges.map((challenge, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-red-600 font-bold text-sm">{index + 1}</span>
                    </div>
                    <p className="text-gray-600 leading-relaxed">{challenge}</p>
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                Solutions apportées
              </h2>
              <div className="space-y-6">
                {project.solutions.map((solution, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                    </div>
                    <p className="text-gray-600 leading-relaxed">{solution}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="section-padding bg-primary-600 text-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <blockquote className="text-2xl md:text-3xl font-medium mb-8 leading-relaxed">
              "{project.testimonial.text}"
            </blockquote>
            <div className="flex items-center justify-center space-x-4">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xl">
                  {project.testimonial.author.split(' ').map(n => n[0]).join('')}
                </span>
              </div>
              <div className="text-left">
                <div className="font-semibold text-lg">{project.testimonial.author}</div>
                <div className="text-white/80">{project.testimonial.position}</div>
                <div className="text-white/60">{project.testimonial.company}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
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