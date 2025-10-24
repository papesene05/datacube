import Link from 'next/link'
import { Brain, Database, Code, Smartphone, ArrowRight } from 'lucide-react'

const ServicesSection = () => {
  const services = [
    {
      icon: Brain,
      title: 'Intelligence Artificielle',
      description: 'Solutions d\'IA sur mesure pour automatiser et optimiser vos processus métier.',
      features: [
        'Machine Learning & Deep Learning',
        'Chatbots & Assistants virtuels',
        'Computer Vision',
        'NLP & Traitement du langage',
        'Automatisation intelligente'
      ],
      href: '/expertises/intelligence-artificielle',
      color: 'from-purple-500 to-pink-500',
      bgColor: 'bg-purple-50'
    },
    {
      icon: Database,
      title: 'Ingénierie Data',
      description: 'Transformez vos données en insights actionnables pour prendre de meilleures décisions.',
      features: [
        'Analyse prédictive',
        'Big Data & Data Engineering',
        'Tableaux de bord interactifs',
        'Business Intelligence',
        'Data Mining & Visualisation'
      ],
      href: '/expertises/ingenierie-data',
      color: 'from-blue-500 to-cyan-500',
      bgColor: 'bg-blue-50'
    },
    {
      icon: Code,
      title: 'Développement Web',
      description: 'Applications web modernes, performantes et évolutives pour votre business.',
      features: [
        'Sites web modernes & responsive',
        'Applications web complexes',
        'E-commerce & Marketplaces',
        'APIs & Microservices',
        'Progressive Web Apps'
      ],
      href: '/expertises/developpement-web',
      color: 'from-green-500 to-emerald-500',
      bgColor: 'bg-green-50'
    },
    {
      icon: Smartphone,
      title: 'Développement Mobile',
      description: 'Applications mobiles natives et cross-platform pour iOS et Android.',
      features: [
        'Applications iOS & Android',
        'Applications cross-platform',
        'UI/UX Design',
        'Intégration d\'APIs',
        'Maintenance & Support'
      ],
      href: '/expertises/developpement-mobile',
      color: 'from-orange-500 to-red-500',
      bgColor: 'bg-orange-50'
    }
  ]

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Nos Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Des solutions complètes pour votre transformation digitale, 
            de la conception à la mise en production.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <div
                key={service.title}
                className={`${service.bgColor} rounded-2xl p-8 hover:shadow-xl transition-all duration-300 group`}
              >
                <div className="flex items-start space-x-4 mb-6">
                  <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-xl flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-8 h-8" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>

                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-700">
                      <div className={`w-1.5 h-1.5 bg-gradient-to-r ${service.color} rounded-full mr-3`}></div>
                      {feature}
                    </li>
                  ))}
                </ul>

                <Link
                  href={service.href}
                  className="inline-flex items-center text-sm font-medium text-gray-900 hover:text-primary-600 transition-colors duration-200 group"
                >
                  En savoir plus
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                </Link>
              </div>
            )
          })}
        </div>

        <div className="text-center mt-12">
          <Link href="/rdv" className="btn btn-primary text-lg px-8 py-4">
            Discuter de votre projet
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  )
}

export default ServicesSection