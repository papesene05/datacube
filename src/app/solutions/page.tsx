import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, CheckCircle, Users, Building, Zap, Target, Lightbulb, Shield, Clock, Award } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Solutions & Conseil - DataCube',
  description: 'DataCube vous accompagne dans la transformation digitale de votre entreprise avec des solutions informatiques sur mesure et un conseil stratégique personnalisé.',
  keywords: 'solutions informatiques, conseil digital, transformation digitale, audit informatique, stratégie technologique',
}

export default function SolutionsPage() {
  const solutions = [
    {
      icon: <Target className="w-8 h-8" />,
      title: 'Audit & Analyse',
      description: 'Évaluation complète de votre infrastructure IT et identification des opportunités d\'optimisation.',
      features: [
        'Audit de sécurité informatique',
        'Analyse des performances système',
        'Évaluation de la conformité RGPD',
        'Recommandations stratégiques'
      ]
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: 'Conseil Stratégique',
      description: 'Accompagnement dans la définition de votre roadmap technologique et la sélection des bonnes solutions.',
      features: [
        'Stratégie de transformation digitale',
        'Sélection des technologies',
        'Architecture système recommandée',
        'Plan de migration personnalisé'
      ]
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Optimisation & Performance',
      description: 'Amélioration des performances de vos systèmes existants et optimisation des processus métier.',
      features: [
        'Optimisation des bases de données',
        'Amélioration des temps de réponse',
        'Automatisation des processus',
        'Monitoring et alertes proactives'
      ]
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Sécurité & Conformité',
      description: 'Renforcement de la sécurité de vos systèmes et mise en conformité avec les réglementations.',
      features: [
        'Audit de sécurité approfondi',
        'Mise en place de politiques de sécurité',
        'Formation des équipes',
        'Conformité RGPD et ISO 27001'
      ]
    }
  ]

  const sectors = [
    {
      icon: <Users className="w-6 h-6" />,
      title: 'Startups & PME',
      description: 'Solutions agiles et évolutives pour accompagner votre croissance',
      benefits: [
        'Solutions sur mesure adaptées à votre budget',
        'Accompagnement dans la scalabilité',
        'Formation de vos équipes',
        'Support réactif et personnalisé'
      ]
    },
    {
      icon: <Building className="w-6 h-6" />,
      title: 'Grandes Entreprises',
      description: 'Transformation digitale à grande échelle avec des solutions robustes',
      benefits: [
        'Architecture enterprise-grade',
        'Intégration avec les systèmes existants',
        'Gestion de projet complexe',
        'Support 24/7 et SLA garantis'
      ]
    }
  ]

  const process = [
    {
      step: '01',
      title: 'Audit & Analyse',
      description: 'Nous analysons votre infrastructure actuelle, vos processus et vos besoins pour identifier les opportunités d\'amélioration.'
    },
    {
      step: '02',
      title: 'Stratégie & Recommandations',
      description: 'Nous vous proposons une roadmap personnalisée avec des solutions adaptées à vos objectifs et contraintes budgétaires.'
    },
    {
      step: '03',
      title: 'Mise en Œuvre',
      description: 'Notre équipe accompagne la mise en place des solutions avec un suivi rigoureux et une communication transparente.'
    },
    {
      step: '04',
      title: 'Formation & Support',
      description: 'Nous formons vos équipes et assurons un support continu pour garantir le succès de votre transformation digitale.'
    }
  ]

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-blue-50 py-20">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Solutions & Conseil Informatique
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Transformez votre entreprise avec des solutions informatiques sur mesure et un accompagnement stratégique personnalisé. DataCube est votre partenaire technologique de confiance.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/contact" className="btn btn-primary">
                Demander un audit gratuit
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link href="/rdv" className="btn btn-secondary">
                Prendre rendez-vous
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Nos Solutions */}
      <section className="py-20">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Nos Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Des services complets pour optimiser votre infrastructure informatique et accélérer votre transformation digitale.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {solutions.map((solution, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-primary-100 rounded-lg flex items-center justify-center text-primary-600 mr-4">
                    {solution.icon}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">{solution.title}</h3>
                  </div>
                </div>
                <p className="text-gray-600 mb-6">{solution.description}</p>
                <ul className="space-y-3">
                  {solution.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Secteurs d'Activité */}
      <section className="bg-gray-50 py-20">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Secteurs d'Activité
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Des solutions adaptées à la taille et aux besoins spécifiques de votre entreprise.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {sectors.map((sector, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center text-primary-600 mr-4">
                    {sector.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">{sector.title}</h3>
                </div>
                <p className="text-gray-600 mb-6">{sector.description}</p>
                <ul className="space-y-3">
                  {sector.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Notre Processus */}
      <section className="py-20">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Notre Processus
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Une approche méthodique et transparente pour garantir le succès de votre projet.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-primary-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-6">
                  {step.step}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pourquoi Choisir DataCube */}
      <section className="bg-primary-600 py-20">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Pourquoi Choisir DataCube ?
            </h2>
            <p className="text-xl text-primary-100 max-w-3xl mx-auto">
              Une expertise reconnue et un accompagnement personnalisé pour votre réussite.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-white bg-opacity-20 rounded-lg flex items-center justify-center mx-auto mb-6">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Expertise Reconnue</h3>
              <p className="text-primary-100">
                Plus de 50 projets réussis avec des technologies de pointe et des méthodologies éprouvées.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-white bg-opacity-20 rounded-lg flex items-center justify-center mx-auto mb-6">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Accompagnement Continu</h3>
              <p className="text-primary-100">
                Un support réactif et une formation complète pour assurer la pérennité de vos solutions.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-white bg-opacity-20 rounded-lg flex items-center justify-center mx-auto mb-6">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Sécurité & Conformité</h3>
              <p className="text-primary-100">
                Respect des standards de sécurité et conformité RGPD pour protéger vos données.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container-custom">
          <div className="bg-gradient-to-r from-primary-600 to-blue-600 rounded-2xl p-12 text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Prêt à Transformer Votre Entreprise ?
            </h2>
            <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
              Contactez-nous pour un audit gratuit et découvrez comment optimiser votre infrastructure informatique.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/contact" className="btn btn-white">
                Demander un audit gratuit
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link href="/rdv" className="btn btn-outline-white">
                Prendre rendez-vous
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}