import Link from 'next/link'
import { ArrowRight, Calendar, MessageCircle, Phone } from 'lucide-react'

const CTASection = () => {
  const ctaOptions = [
    {
      icon: Calendar,
      title: 'Prendre rendez-vous',
      description: 'Planifiez un appel pour discuter de votre projet',
      href: '/rdv',
      buttonText: 'Réserver un créneau',
      color: 'from-primary-500 to-primary-600'
    },
    {
      icon: MessageCircle,
      title: 'Nous contacter',
      description: 'Posez vos questions ou demandez un devis',
      href: '/contact',
      buttonText: 'Envoyer un message',
      color: 'from-accent-500 to-accent-600'
    },
    {
      icon: Phone,
      title: 'Appel direct',
      description: 'Parlez directement avec un expert',
      href: 'tel:+33123456789',
      buttonText: 'Appeler maintenant',
      color: 'from-green-500 to-green-600'
    }
  ]

  return (
    <section className="section-padding bg-gradient-to-br from-secondary-900 via-secondary-800 to-primary-900 text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary-600/20 to-transparent"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-primary-500/10 rounded-full blur-2xl"></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Prêt à transformer votre entreprise ?
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Rejoignez les entreprises qui font confiance à DataCube pour leur 
            transformation digitale. Discutons de votre projet dès aujourd'hui.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {ctaOptions.map((option, index) => {
            const Icon = option.icon
            return (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center hover:bg-white/20 transition-all duration-300 group"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${option.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{option.title}</h3>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {option.description}
                </p>
                <Link
                  href={option.href}
                  className="inline-flex items-center justify-center w-full px-6 py-3 bg-white text-gray-900 rounded-lg font-medium hover:bg-gray-100 transition-colors duration-200"
                >
                  {option.buttonText}
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </div>
            )
          })}
        </div>

        {/* Trust Indicators */}
        <div className="text-center">
          <p className="text-gray-400 text-sm mb-6">
            Rejoignez plus de 25 entreprises qui nous font confiance
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            {/* Placeholder for client logos */}
            <div className="w-24 h-12 bg-white/20 rounded flex items-center justify-center">
              <span className="text-xs font-medium">Client 1</span>
            </div>
            <div className="w-24 h-12 bg-white/20 rounded flex items-center justify-center">
              <span className="text-xs font-medium">Client 2</span>
            </div>
            <div className="w-24 h-12 bg-white/20 rounded flex items-center justify-center">
              <span className="text-xs font-medium">Client 3</span>
            </div>
            <div className="w-24 h-12 bg-white/20 rounded flex items-center justify-center">
              <span className="text-xs font-medium">Client 4</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CTASection