import { Metadata } from 'next'
import { Smartphone, Code, Zap, Shield, Users, Award, Globe, Database } from 'lucide-react'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Développement Mobile Paris | DataCube - Expert React Native & Flutter',
  description: 'Développement mobile sur mesure à Paris : applications iOS, Android, cross-platform avec React Native, Flutter. Équipe experte, devis gratuit. Apps performantes et primées.',
  keywords: 'développement mobile Paris, React Native Paris, Flutter Paris, développement iOS Paris, développement Android Paris, application mobile Paris, développeur mobile Paris, agence mobile Paris, développement cross-platform',
  openGraph: {
    title: 'Développement Mobile Paris | DataCube - Expert React Native & Flutter',
    description: 'Développement mobile sur mesure à Paris : applications iOS, Android, cross-platform avec React Native, Flutter. Équipe experte, devis gratuit.',
    type: 'website',
    locale: 'fr_FR',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Développement Mobile Paris | DataCube - Expert React Native & Flutter',
    description: 'Développement mobile sur mesure à Paris : applications iOS, Android, cross-platform avec React Native, Flutter.',
  },
}

export default function DeveloppementMobilePage() {
  const services = [
    {
      icon: Smartphone,
      title: 'Applications Natives',
      description: 'Applications iOS et Android développées avec les technologies natives pour des performances optimales.',
      features: ['Swift/Kotlin', 'Performance native', 'Accès complet APIs', 'Store optimization']
    },
    {
      icon: Globe,
      title: 'Applications Cross-Platform',
      description: 'Une seule base de code pour iOS et Android avec React Native ou Flutter.',
      features: ['React Native', 'Flutter', 'Développement rapide', 'Maintenance simplifiée']
    },
    {
      icon: Database,
      title: 'Applications Backend',
      description: 'APIs et services backend pour alimenter vos applications mobiles.',
      features: ['API REST/GraphQL', 'Base de données', 'Authentification', 'Push notifications']
    },
    {
      icon: Zap,
      title: 'Optimisation & Tests',
      description: 'Tests automatisés, optimisation des performances et déploiement sur les stores.',
      features: ['Tests unitaires', 'Performance', 'Store deployment', 'Analytics']
    }
  ]

  const technologies = [
    { name: 'React Native', category: 'Cross-Platform', description: 'Framework pour applications iOS et Android' },
    { name: 'Flutter', category: 'Cross-Platform', description: 'SDK Google pour applications multiplateformes' },
    { name: 'Swift', category: 'iOS', description: 'Langage de programmation pour iOS' },
    { name: 'Kotlin', category: 'Android', description: 'Langage moderne pour le développement Android' },
    { name: 'Firebase', category: 'Backend', description: 'Plateforme Google pour services mobiles' },
    { name: 'Expo', category: 'Outils', description: 'Plateforme pour développement React Native' },
    { name: 'Xcode', category: 'iOS', description: 'IDE Apple pour développement iOS' },
    { name: 'Android Studio', category: 'Android', description: 'IDE officiel pour développement Android' }
  ]

  const process = [
    {
      step: '01',
      title: 'Conception & UX',
      description: 'Design d\'interface utilisateur et expérience utilisateur optimisée pour mobile',
      duration: '1-2 semaines'
    },
    {
      step: '02',
      title: 'Développement',
      description: 'Création de l\'application avec les meilleures pratiques de développement mobile',
      duration: '3-12 semaines'
    },
    {
      step: '03',
      title: 'Tests & QA',
      description: 'Tests sur différents appareils, résolution de bugs et optimisation',
      duration: '1-3 semaines'
    },
    {
      step: '04',
      title: 'Publication & Support',
      description: 'Soumission sur les stores, formation et support post-lancement',
      duration: '1-2 semaines'
    }
  ]

  const platforms = [
    {
      name: 'iOS',
      icon: '🍎',
      description: 'Applications natives pour iPhone et iPad',
      features: ['Swift/SwiftUI', 'App Store', 'Performance optimale', 'Design Apple']
    },
    {
      name: 'Android',
      icon: '🤖',
      description: 'Applications natives pour smartphones et tablettes Android',
      features: ['Kotlin/Java', 'Google Play', 'Fragmentation gérée', 'Material Design']
    },
    {
      name: 'Cross-Platform',
      icon: '🔄',
      description: 'Une seule application pour iOS et Android',
      features: ['React Native', 'Flutter', 'Coût réduit', 'Développement rapide']
    }
  ]

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-primary-50 to-accent-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 rounded-2xl mb-6">
              <Smartphone className="w-8 h-8 text-primary-600" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Développement Mobile
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Créez des applications mobiles exceptionnelles qui captivent vos utilisateurs. 
              Du concept à la publication sur les stores, nous accompagnons votre projet mobile de A à Z.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn btn-primary text-lg px-8 py-4">
                Demander un devis
              </Link>
              <Link href="/realisations" className="btn btn-secondary text-lg px-8 py-4">
                Voir nos réalisations
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Platforms Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Plateformes Supportées
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Nous développons pour toutes les plateformes mobiles principales
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {platforms.map((platform, index) => (
              <div key={index} className="card p-8 text-center">
                <div className="text-6xl mb-6">{platform.icon}</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {platform.name}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {platform.description}
                </p>
                <ul className="space-y-2">
                  {platform.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center justify-center text-gray-600">
                      <div className="w-2 h-2 bg-primary-600 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Nos Services de Développement Mobile
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Des solutions mobiles complètes adaptées à vos besoins spécifiques
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={index} className="card p-8">
                <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center mb-6">
                  <service.icon className="w-6 h-6 text-primary-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-600">
                      <div className="w-2 h-2 bg-primary-600 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Technologies & Outils
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Nous maîtrisons les technologies les plus récentes du développement mobile
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {technologies.map((tech, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6 text-center hover:shadow-lg transition-all duration-300">
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Code className="w-6 h-6 text-primary-600" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{tech.name}</h3>
                <p className="text-sm text-primary-600 font-medium mb-2">{tech.category}</p>
                <p className="text-sm text-gray-600">{tech.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Notre Processus de Développement
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Une approche méthodique pour garantir la qualité et la réussite de votre application mobile
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-primary-600 to-accent-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-white font-bold text-xl">{step.step}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {step.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {step.description}
                </p>
                <div className="text-sm text-primary-600 font-medium">
                  Durée: {step.duration}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Pourquoi choisir DataCube pour votre développement mobile ?
              </h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Shield className="w-4 h-4 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Sécurité & Performance</h3>
                    <p className="text-gray-600">Applications sécurisées avec des performances optimisées pour tous les appareils.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Users className="w-4 h-4 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Équipe Experte</h3>
                    <p className="text-gray-600">Développeurs mobiles seniors avec une expertise reconnue sur toutes les plateformes.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Award className="w-4 h-4 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Publication Stores</h3>
                    <p className="text-gray-600">Accompagnement complet pour la publication sur App Store et Google Play.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-primary-50 to-accent-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Projets Types</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-white rounded-lg shadow-sm">
                  <span className="font-medium text-gray-900">App simple</span>
                  <span className="text-primary-600 font-semibold">À partir de 8 000€</span>
                </div>
                <div className="flex items-center justify-between p-4 bg-white rounded-lg shadow-sm">
                  <span className="font-medium text-gray-900">App e-commerce</span>
                  <span className="text-primary-600 font-semibold">À partir de 15 000€</span>
                </div>
                <div className="flex items-center justify-between p-4 bg-white rounded-lg shadow-sm">
                  <span className="font-medium text-gray-900">App complexe</span>
                  <span className="text-primary-600 font-semibold">À partir de 25 000€</span>
                </div>
                <div className="flex items-center justify-between p-4 bg-white rounded-lg shadow-sm">
                  <span className="font-medium text-gray-900">Plateforme mobile</span>
                  <span className="text-primary-600 font-semibold">Sur devis</span>
                </div>
              </div>
              <div className="mt-6 p-4 bg-white rounded-lg shadow-sm">
                <p className="text-sm text-gray-600 text-center">
                  <strong>Note :</strong> Les tarifs incluent le développement, les tests et la publication sur les stores. 
                  Contactez-nous pour un devis personnalisé.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-br from-secondary-900 via-secondary-800 to-primary-900 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Prêt à créer votre application mobile ?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Discutons de votre projet et créons ensemble une application mobile qui séduit vos utilisateurs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn bg-white text-gray-900 hover:bg-gray-100 text-lg px-8 py-4">
              Demander un devis gratuit
            </Link>
            <Link href="/rdv" className="btn btn-outline border-white text-white hover:bg-white hover:text-gray-900 text-lg px-8 py-4">
              Prendre rendez-vous
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}