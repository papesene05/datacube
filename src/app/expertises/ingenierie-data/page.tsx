import Link from 'next/link'
import { Database, BarChart3, TrendingUp, PieChart, Zap, ArrowRight, CheckCircle, Code, Users, Target } from 'lucide-react'

export default function IngenierieDataPage() {
  const services = [
    {
      icon: BarChart3,
      title: 'Analyse prédictive',
      description: 'Modèles prédictifs pour anticiper les tendances et optimiser vos décisions stratégiques.',
      features: [
        'Modèles de prédiction des ventes',
        'Analyse de la rétention client',
        'Prévision de la demande',
        'Optimisation des stocks'
      ]
    },
    {
      icon: Database,
      title: 'Big Data & Data Engineering',
      description: 'Architecture et pipelines de données pour traiter efficacement de gros volumes d\'informations.',
      features: [
        'Architecture data lake et data warehouse',
        'Pipelines ETL/ELT automatisés',
        'Traitement en temps réel',
        'Intégration de sources multiples'
      ]
    },
    {
      icon: PieChart,
      title: 'Tableaux de bord interactifs',
      description: 'Visualisations dynamiques et interactives pour une analyse en temps réel de vos données.',
      features: [
        'Dashboards personnalisés',
        'Visualisations interactives',
        'Alertes automatiques',
        'Rapports automatisés'
      ]
    },
    {
      icon: TrendingUp,
      title: 'Business Intelligence',
      description: 'Solutions complètes pour transformer vos données en insights actionnables.',
      features: [
        'Cubes OLAP et modèles dimensionnels',
        'Reporting automatisé',
        'Analyse de performance',
        'KPIs et métriques clés'
      ]
    },
    {
      icon: Zap,
      title: 'Data Mining & Visualisation',
      description: 'Extraction de patterns cachés et visualisation avancée de vos données.',
      features: [
        'Découverte de patterns',
        'Clustering et segmentation',
        'Visualisations avancées',
        'Analyse exploratoire'
      ]
    }
  ]

  const technologies = [
    { name: 'Python', category: 'Langage' },
    { name: 'R', category: 'Analyse statistique' },
    { name: 'SQL', category: 'Base de données' },
    { name: 'Power BI', category: 'Visualisation' },
    { name: 'Tableau', category: 'BI' },
    { name: 'Apache Spark', category: 'Big Data' },
    { name: 'Hadoop', category: 'Big Data' },
    { name: 'Kafka', category: 'Streaming' },
    { name: 'Elasticsearch', category: 'Recherche' },
    { name: 'Grafana', category: 'Monitoring' },
    { name: 'D3.js', category: 'Visualisation' },
    { name: 'Jupyter', category: 'Notebook' }
  ]

  const process = [
    {
      step: '01',
      title: 'Audit des données',
      description: 'Analyse de l\'existant et identification des sources de données disponibles.',
      icon: Database
    },
    {
      step: '02',
      title: 'Architecture des données',
      description: 'Conception de l\'architecture technique et choix des technologies.',
      icon: Code
    },
    {
      step: '03',
      title: 'Collecte et nettoyage',
      description: 'Mise en place des pipelines de données et nettoyage des données.',
      icon: Zap
    },
    {
      step: '04',
      title: 'Analyse et modélisation',
      description: 'Développement des modèles d\'analyse et création des visualisations.',
      icon: BarChart3
    },
    {
      step: '05',
      title: 'Déploiement et formation',
      description: 'Mise en production et formation des équipes aux nouveaux outils.',
      icon: Users
    }
  ]

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-blue-50 to-cyan-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-6">
                <Database className="w-4 h-4 mr-2" />
                Ingénierie Data
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Transformez vos données en <span className="gradient-text">insights actionnables</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Exploitez pleinement le potentiel de vos données avec nos solutions d'ingénierie data 
                et d'analyse prédictive pour prendre de meilleures décisions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/rdv" className="btn btn-primary text-lg px-8 py-4">
                  Demander un devis
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <Link href="/realisations" className="btn btn-outline text-lg px-8 py-4">
                  Voir nos projets Data
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="w-full h-96 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center">
                <Database className="w-32 h-32 text-white opacity-80" />
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
              Nos Services Data
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Des solutions complètes pour exploiter, analyser et visualiser 
              vos données de manière efficace.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon
              return (
                <div key={service.title} className="card p-6 hover:shadow-xl transition-all duration-300">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center text-white mb-4">
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
              Nous utilisons les technologies les plus avancées pour traiter, 
              analyser et visualiser vos données.
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
              de vos projets d'ingénierie data.
            </p>
          </div>

          <div className="space-y-8">
            {process.map((step, index) => {
              const Icon = step.icon
              return (
                <div key={step.step} className="flex items-start space-x-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
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

      {/* Benefits Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Les bénéfices de l'ingénierie data
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Découvrez comment nos solutions data transforment votre entreprise.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Prise de décision éclairée
              </h3>
              <p className="text-gray-600">
                Des insights basés sur des données réelles pour optimiser vos stratégies.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Performance améliorée
              </h3>
              <p className="text-gray-600">
                Identification des opportunités d'optimisation et d'amélioration.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Automatisation intelligente
              </h3>
              <p className="text-gray-600">
                Réduction des tâches manuelles grâce à l'automatisation des processus.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-blue-600 to-cyan-600 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Prêt à exploiter vos données ?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Discutons de vos besoins en data et découvrons ensemble comment 
            transformer vos informations en avantage concurrentiel.
          </p>
          <Link href="/rdv" className="btn bg-white text-blue-600 hover:bg-gray-100 text-lg px-8 py-4">
            Demander un devis personnalisé
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  )
}