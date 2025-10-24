import { Users, Award, Clock, Target } from 'lucide-react'

const AboutSection = () => {
  const stats = [
    {
      icon: Users,
      value: '25+',
      label: 'Clients satisfaits',
      description: 'Entreprises qui nous font confiance'
    },
    {
      icon: Award,
      value: '50+',
      label: 'Projets réalisés',
      description: 'Solutions déployées avec succès'
    },
    {
      icon: Clock,
      value: '3',
      label: 'Années d\'expérience',
      description: 'Expertise reconnue sur le marché'
    },
    {
      icon: Target,
      value: '100%',
      label: 'Taux de satisfaction',
      description: 'Clients qui recommandent nos services'
    }
  ]

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              À propos de DataCube
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Fondée par des experts passionnés, DataCube est une startup innovante 
              spécialisée dans les technologies de pointe. Notre mission est d'accompagner 
              les entreprises dans leur transformation digitale.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Avec une équipe multidisciplinaire composée d'ingénieurs en IA, de data scientists 
              et de développeurs expérimentés, nous maîtrisons l'ensemble de la chaîne technologique 
              pour vous offrir des solutions complètes et performantes.
            </p>

            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <div className="w-2 h-2 bg-primary-600 rounded-full"></div>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Expertise technique</h4>
                  <p className="text-gray-600">Maîtrise des dernières technologies et frameworks</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <div className="w-2 h-2 bg-primary-600 rounded-full"></div>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Approche sur mesure</h4>
                  <p className="text-gray-600">Solutions adaptées à vos besoins spécifiques</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <div className="w-2 h-2 bg-primary-600 rounded-full"></div>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Accompagnement complet</h4>
                  <p className="text-gray-600">De la conception à la maintenance de vos solutions</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Stats */}
          <div>
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => {
                const Icon = stat.icon
                return (
                  <div
                    key={index}
                    className="bg-gray-50 rounded-2xl p-6 text-center hover:shadow-lg transition-all duration-300"
                  >
                    <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-6 h-6 text-primary-600" />
                    </div>
                    <div className="text-3xl font-bold text-gray-900 mb-2">
                      {stat.value}
                    </div>
                    <div className="text-sm font-semibold text-gray-700 mb-1">
                      {stat.label}
                    </div>
                    <div className="text-xs text-gray-500">
                      {stat.description}
                    </div>
                  </div>
                )
              })}
            </div>

            {/* Team Visual */}
            <div className="mt-8 bg-gradient-to-r from-primary-50 to-accent-50 rounded-2xl p-8 text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-primary-600 to-accent-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Notre équipe d'experts
              </h3>
              <p className="text-gray-600 text-sm">
                Des professionnels passionnés et expérimentés, 
                prêts à relever vos défis technologiques.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection