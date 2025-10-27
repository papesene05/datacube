import { Metadata } from 'next'
import { Code, Globe, Smartphone, Database, Zap, Shield, Users, Award } from 'lucide-react'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Développement Web Paris | DataCube - Expert React & Next.js',
  description: 'Développement web sur mesure à Paris : sites vitrine, e-commerce, applications web avec React, Next.js, TypeScript. Équipe experte, devis gratuit. Solutions performantes et sécurisées.',
  keywords: 'développement web Paris, React Paris, Next.js Paris, développement application web, site vitrine Paris, e-commerce Paris, développement TypeScript, développeur web Paris, agence web Paris, développement sur mesure',
  openGraph: {
    title: 'Développement Web Paris | DataCube - Expert React & Next.js',
    description: 'Développement web sur mesure à Paris : sites vitrine, e-commerce, applications web avec React, Next.js, TypeScript. Équipe experte, devis gratuit.',
    type: 'website',
    locale: 'fr_FR',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Développement Web Paris | DataCube - Expert React & Next.js',
    description: 'Développement web sur mesure à Paris : sites vitrine, e-commerce, applications web avec React, Next.js, TypeScript.',
  },
}

export default function DeveloppementWebPage() {
  const services = [
    {
      icon: Globe,
      title: 'Sites Web Modernes',
      description: 'Sites vitrine, corporate et institutionnels avec design responsive et performance optimisée.',
      features: ['Design responsive', 'SEO optimisé', 'Performance élevée', 'Maintenance incluse']
    },
    {
      icon: Code,
      title: 'Applications Web',
      description: 'Applications web complexes avec interfaces utilisateur intuitives et fonctionnalités avancées.',
      features: ['Interfaces modernes', 'API REST/GraphQL', 'Authentification', 'Gestion d\'état']
    },
    {
      icon: Database,
      title: 'E-commerce & Plateformes',
      description: 'Boutiques en ligne et plateformes B2B avec gestion complète des commandes et paiements.',
      features: ['Paiements sécurisés', 'Gestion stock', 'Analytics', 'Multi-langues']
    },
    {
      icon: Zap,
      title: 'Optimisation & Performance',
      description: 'Amélioration des performances, SEO technique et optimisation de l\'expérience utilisateur.',
      features: ['Audit performance', 'SEO technique', 'Core Web Vitals', 'Monitoring']
    }
  ]

  const technologies = [
    { name: 'React', category: 'Frontend', description: 'Bibliothèque JavaScript pour interfaces utilisateur' },
    { name: 'Next.js', category: 'Framework', description: 'Framework React pour applications web modernes' },
    { name: 'TypeScript', category: 'Langage', description: 'JavaScript typé pour un développement plus sûr' },
    { name: 'Node.js', category: 'Backend', description: 'Runtime JavaScript pour applications serveur' },
    { name: 'PostgreSQL', category: 'Base de données', description: 'Base de données relationnelle robuste' },
    { name: 'MongoDB', category: 'Base de données', description: 'Base de données NoSQL flexible' },
    { name: 'AWS', category: 'Cloud', description: 'Services cloud pour hébergement et déploiement' },
    { name: 'Docker', category: 'DevOps', description: 'Conteneurisation pour déploiement simplifié' }
  ]

  const process = [
    {
      step: '01',
      title: 'Analyse & Conception',
      description: 'Étude de vos besoins, architecture technique et conception UX/UI',
      duration: '1-2 semaines'
    },
    {
      step: '02',
      title: 'Développement',
      description: 'Création de votre solution web avec les meilleures pratiques',
      duration: '2-8 semaines'
    },
    {
      step: '03',
      title: 'Tests & Optimisation',
      description: 'Tests complets, optimisation des performances et corrections',
      duration: '1-2 semaines'
    },
    {
      step: '04',
      title: 'Déploiement & Formation',
      description: 'Mise en ligne, formation de votre équipe et documentation',
      duration: '1 semaine'
    }
  ]

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-primary-50 to-accent-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 rounded-2xl mb-6">
              <Code className="w-8 h-8 text-primary-600" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Développement Web
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Créez des expériences web exceptionnelles avec nos solutions de développement sur mesure. 
              Des sites vitrine aux applications web complexes, nous transformons vos idées en réalité digitale.
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

      {/* Services Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Nos Services de Développement Web
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Des solutions web complètes adaptées à vos besoins spécifiques
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
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Technologies & Outils
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Nous utilisons les technologies les plus récentes et performantes du marché
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {technologies.map((tech, index) => (
              <div key={index} className="bg-white rounded-xl p-6 text-center hover:shadow-lg transition-all duration-300">
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
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Notre Processus de Développement
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Une approche méthodique pour garantir la qualité et la réussite de votre projet
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
      <section className="section-padding bg-gradient-to-br from-primary-50 to-accent-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Pourquoi choisir DataCube pour votre développement web ?
              </h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Shield className="w-4 h-4 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Sécurité & Performance</h3>
                    <p className="text-gray-600">Applications sécurisées avec des performances optimisées pour une expérience utilisateur exceptionnelle.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Users className="w-4 h-4 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Équipe Experte</h3>
                    <p className="text-gray-600">Développeurs seniors avec une expertise reconnue dans les technologies web modernes.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Award className="w-4 h-4 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Qualité Garantie</h3>
                    <p className="text-gray-600">Code propre, tests automatisés et documentation complète pour une maintenance facilitée.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Projets Types</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <span className="font-medium text-gray-900">Site vitrine</span>
                  <span className="text-primary-600 font-semibold">À partir de 2 500€</span>
                </div>
                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <span className="font-medium text-gray-900">E-commerce</span>
                  <span className="text-primary-600 font-semibold">À partir de 8 000€</span>
                </div>
                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <span className="font-medium text-gray-900">Application web</span>
                  <span className="text-primary-600 font-semibold">À partir de 15 000€</span>
                </div>
                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <span className="font-medium text-gray-900">Plateforme complexe</span>
                  <span className="text-primary-600 font-semibold">Sur devis</span>
                </div>
              </div>
              <div className="mt-6 p-4 bg-primary-50 rounded-lg">
                <p className="text-sm text-gray-600 text-center">
                  <strong>Note :</strong> Les tarifs sont indicatifs et varient selon la complexité du projet. 
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
            Prêt à créer votre solution web ?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Discutons de votre projet et créons ensemble une solution web qui répond parfaitement à vos besoins.
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