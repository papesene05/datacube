import Link from 'next/link'
import { Brain, Bot, Eye, MessageSquare, Zap, ArrowRight, CheckCircle, Code, Database, Users } from 'lucide-react'

export default function IntelligenceArtificiellePage() {
  const services = [
    {
      icon: Brain,
      title: 'Machine Learning & Deep Learning',
      description: 'Algorithmes d\'apprentissage automatique pour prédire, classifier et optimiser vos processus.',
      features: [
        'Modèles prédictifs personnalisés',
        'Réseaux de neurones profonds',
        'Apprentissage supervisé et non-supervisé',
        'Optimisation des hyperparamètres'
      ]
    },
    {
      icon: Bot,
      title: 'Chatbots & Assistants virtuels',
      description: 'Solutions conversationnelles intelligentes pour améliorer l\'expérience client.',
      features: [
        'Chatbots multilingues',
        'Traitement du langage naturel',
        'Intégration CRM et bases de données',
        'Analytics et amélioration continue'
      ]
    },
    {
      icon: Eye,
      title: 'Computer Vision',
      description: 'Analyse et traitement d\'images pour automatiser la reconnaissance visuelle.',
      features: [
        'Reconnaissance d\'objets et de visages',
        'Classification d\'images',
        'Détection d\'anomalies',
        'OCR et extraction de texte'
      ]
    },
    {
      icon: MessageSquare,
      title: 'NLP & Traitement du langage',
      description: 'Compréhension et génération de texte pour automatiser les tâches linguistiques.',
      features: [
        'Analyse de sentiment',
        'Résumé automatique de documents',
        'Traduction automatique',
        'Extraction d\'entités nommées'
      ]
    },
    {
      icon: Zap,
      title: 'Automatisation intelligente',
      description: 'RPA et workflows intelligents pour optimiser vos processus métier.',
      features: [
        'Automatisation de processus robotisés',
        'Workflows intelligents',
        'Intégration de systèmes',
        'Monitoring et maintenance'
      ]
    }
  ]

  const technologies = [
    { name: 'Python', category: 'Langage' },
    { name: 'TensorFlow', category: 'Framework' },
    { name: 'PyTorch', category: 'Framework' },
    { name: 'Scikit-learn', category: 'Bibliothèque' },
    { name: 'OpenCV', category: 'Computer Vision' },
    { name: 'NLTK', category: 'NLP' },
    { name: 'spaCy', category: 'NLP' },
    { name: 'Transformers', category: 'NLP' },
    { name: 'Keras', category: 'Framework' },
    { name: 'Pandas', category: 'Data Science' },
    { name: 'NumPy', category: 'Calcul scientifique' },
    { name: 'Docker', category: 'Déploiement' }
  ]

  const process = [
    {
      step: '01',
      title: 'Analyse des besoins',
      description: 'Compréhension approfondie de vos objectifs et contraintes métier.',
      icon: Users
    },
    {
      step: '02',
      title: 'Conception de l\'architecture',
      description: 'Définition de l\'architecture technique et choix des technologies.',
      icon: Code
    },
    {
      step: '03',
      title: 'Préparation des données',
      description: 'Collecte, nettoyage et préparation des données pour l\'entraînement.',
      icon: Database
    },
    {
      step: '04',
      title: 'Développement & Entraînement',
      description: 'Création et entraînement des modèles d\'IA avec validation continue.',
      icon: Brain
    },
    {
      step: '05',
      title: 'Déploiement & Monitoring',
      description: 'Mise en production et surveillance des performances en temps réel.',
      icon: Zap
    }
  ]

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-medium mb-6">
                <Brain className="w-4 h-4 mr-2" />
                Intelligence Artificielle
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Transformez votre entreprise avec l'<span className="gradient-text">Intelligence Artificielle</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Déployez des solutions d'IA sur mesure pour automatiser vos processus, 
                améliorer la prise de décision et créer de nouveaux services innovants.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/rdv" className="btn btn-primary text-lg px-8 py-4">
                  Demander un devis
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <Link href="/realisations" className="btn btn-outline text-lg px-8 py-4">
                  Voir nos projets IA
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="w-full h-96 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center">
                <Brain className="w-32 h-32 text-white opacity-80" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Nos Services IA
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Des solutions complètes pour intégrer l'Intelligence Artificielle 
              dans tous vos processus métier.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon
              return (
                <div key={service.title} className="card p-6 hover:shadow-xl transition-all duration-300">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center text-white mb-4">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-700">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Technologies & Outils
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Nous utilisons les technologies les plus avancées et les frameworks 
              les plus performants du marché.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {technologies.map((tech, index) => (
              <div key={tech.name} className="bg-white rounded-lg p-4 text-center hover:shadow-lg transition-all duration-300">
                <div className="text-sm font-semibold text-gray-900 mb-1">
                  {tech.name}
                </div>
                <div className="text-xs text-gray-500">
                  {tech.category}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Notre Processus
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Une approche méthodique et éprouvée pour garantir le succès 
              de vos projets d'Intelligence Artificielle.
            </p>
          </div>

          <div className="space-y-8">
            {process.map((step, index) => {
              const Icon = step.icon
              return (
                <div key={step.step} className="flex items-start space-x-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                      {step.step}
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-purple-600 to-pink-600 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Prêt à intégrer l'IA dans votre entreprise ?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Discutons de vos besoins et découvrons ensemble comment l'Intelligence 
            Artificielle peut transformer votre business.
          </p>
          <Link href="/rdv" className="btn bg-white text-purple-600 hover:bg-gray-100 text-lg px-8 py-4">
            Demander un devis personnalisé
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  )
}