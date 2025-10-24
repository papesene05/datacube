import Link from 'next/link'
import { Brain, Database, Code, Smartphone, ArrowRight, CheckCircle } from 'lucide-react'

export default function ExpertisesPage() {
  const expertises = [
    {
      icon: Brain,
      title: 'Intelligence Artificielle',
      description: 'Solutions d\'IA sur mesure pour automatiser et optimiser vos processus métier.',
      href: '/expertises/intelligence-artificielle',
      color: 'from-purple-500 to-pink-500',
      bgColor: 'bg-purple-50',
      features: [
        'Machine Learning & Deep Learning',
        'Chatbots & Assistants virtuels',
        'Computer Vision',
        'NLP & Traitement du langage',
        'Automatisation intelligente'
      ]
    },
    {
      icon: Database,
      title: 'Ingénierie Data',
      description: 'Transformez vos données en insights actionnables pour prendre de meilleures décisions.',
      href: '/expertises/ingenierie-data',
      color: 'from-blue-500 to-cyan-500',
      bgColor: 'bg-blue-50',
      features: [
        'Analyse prédictive',
        'Big Data & Data Engineering',
        'Tableaux de bord interactifs',
        'Business Intelligence',
        'Data Mining & Visualisation'
      ]
    },
    {
      icon: Code,
      title: 'Développement Web',
      description: 'Applications web modernes, performantes et évolutives pour votre business.',
      href: '/expertises/developpement-web',
      color: 'from-green-500 to-emerald-500',
      bgColor: 'bg-green-50',
      features: [
        'Sites web modernes & responsive',
        'Applications web complexes',
        'E-commerce & Marketplaces',
        'APIs & Microservices',
        'Progressive Web Apps'
      ]
    },
    {
      icon: Smartphone,
      title: 'Développement Mobile',
      description: 'Applications mobiles natives et cross-platform pour iOS et Android.',
      href: '/expertises/developpement-mobile',
      color: 'from-orange-500 to-red-500',
      bgColor: 'bg-orange-50',
      features: [
        'Applications iOS & Android',
        'Applications cross-platform',
        'UI/UX Design',
        'Intégration d\'APIs',
        'Maintenance & Support'
      ]
    }
  ]

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-gray-50 to-primary-50">
        <div className="container-custom">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Nos Expertises
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Découvrez nos domaines d'expertise et les solutions que nous proposons 
              pour transformer votre entreprise avec les technologies les plus avancées.
            </p>
          </div>
        </div>
      </section>

      {/* Expertises Grid */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {expertises.map((expertise, index) => {
              const Icon = expertise.icon
              return (
                <div
                  key={expertise.title}
                  className={`${expertise.bgColor} rounded-2xl p-8 hover:shadow-xl transition-all duration-300 group`}
                >
                  <div className="flex items-start space-x-4 mb-6">
                    <div className={`w-16 h-16 bg-gradient-to-r ${expertise.color} rounded-xl flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="w-8 h-8" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">
                        {expertise.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {expertise.description}
                      </p>
                    </div>
                  </div>

                  <ul className="space-y-3 mb-8">
                    {expertise.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-700">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <Link
                    href={expertise.href}
                    className="inline-flex items-center text-primary-600 hover:text-primary-700 font-semibold group"
                  >
                    En savoir plus
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                  </Link>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Vous avez un projet en tête ?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Discutons de vos besoins et trouvons ensemble la solution la plus adaptée 
            à votre entreprise.
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