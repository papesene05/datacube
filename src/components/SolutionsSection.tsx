import Link from 'next/link'
import { ArrowRight, Target, Lightbulb, Zap, Shield, CheckCircle } from 'lucide-react'

export default function SolutionsSection() {
  const solutions = [
    {
      icon: <Target className="w-8 h-8" />,
      title: 'Audit & Analyse',
      description: 'Évaluation complète de votre infrastructure IT et identification des opportunités d\'optimisation.',
      features: ['Audit de sécurité', 'Analyse des performances', 'Conformité RGPD', 'Recommandations']
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: 'Conseil Stratégique',
      description: 'Accompagnement dans la définition de votre roadmap technologique et la sélection des solutions.',
      features: ['Stratégie digitale', 'Sélection technologies', 'Architecture système', 'Plan de migration']
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Optimisation',
      description: 'Amélioration des performances de vos systèmes existants et optimisation des processus métier.',
      features: ['Optimisation BDD', 'Temps de réponse', 'Automatisation', 'Monitoring proactif']
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Sécurité & Conformité',
      description: 'Renforcement de la sécurité de vos systèmes et mise en conformité avec les réglementations.',
      features: ['Audit sécurité', 'Politiques sécurité', 'Formation équipes', 'Conformité ISO 27001']
    }
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Solutions & Conseil Informatique
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Transformez votre entreprise avec des solutions informatiques sur mesure et un accompagnement stratégique personnalisé.
          </p>
          <Link href="/solutions" className="btn btn-primary">
            Découvrir nos solutions
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {solutions.map((solution, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-primary-100 rounded-lg flex items-center justify-center text-primary-600 mb-6">
                {solution.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{solution.title}</h3>
              <p className="text-gray-600 mb-6">{solution.description}</p>
              <ul className="space-y-2">
                {solution.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="bg-white rounded-2xl shadow-lg p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Votre Partenaire Technologique de Confiance
            </h3>
            <p className="text-gray-600 mb-6">
              DataCube vous accompagne de l'audit initial à la mise en production, en passant par la formation de vos équipes. 
              Une approche complète pour garantir le succès de votre transformation digitale.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/contact" className="btn btn-primary">
                Demander un audit gratuit
              </Link>
              <Link href="/solutions" className="btn btn-secondary">
                En savoir plus
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}