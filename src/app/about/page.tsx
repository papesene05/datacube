import { Users, Award, Target, Heart, Lightbulb, Shield, Globe, Zap } from 'lucide-react'
import AvatarImage from '@/components/AvatarImage'

export const metadata = {
  title: 'À propos - DataCube',
  description: 'Découvrez l\'équipe DataCube, notre mission et nos valeurs. Des experts passionnés qui transforment les entreprises avec l\'IA, la Data et le Développement.',
}

export default function AboutPage() {
  const team = [
    {
      name: 'Marie Dubois',
      role: 'CEO & Co-fondatrice',
      expertise: 'Intelligence Artificielle',
      description: '15 ans d\'expérience en IA, ancienne directrice technique chez Google.',
      avatar: 'gradient',
      linkedin: '#'
    },
    {
      name: 'Jean Martin',
      role: 'CTO & Co-fondateur',
      expertise: 'Data Science',
      description: 'Expert en Big Data et Machine Learning, PhD en Informatique.',
      avatar: 'gradient',
      linkedin: '#'
    },
    {
      name: 'Sophie Laurent',
      role: 'Lead Developer',
      expertise: 'Développement Web',
      description: 'Spécialiste React/Node.js, architecte de solutions web complexes.',
      avatar: 'gradient',
      linkedin: '#'
    },
    {
      name: 'Pierre Moreau',
      role: 'Mobile Developer',
      expertise: 'Développement Mobile',
      description: 'Expert React Native et Flutter, créateur d\'apps primées.',
      avatar: 'gradient',
      linkedin: '#'
    }
  ]

  const values = [
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'Nous repoussons les limites technologiques pour créer des solutions d\'avenir.'
    },
    {
      icon: Target,
      title: 'Excellence',
      description: 'Nous visons la perfection dans chaque projet et nous engageons pour la qualité.'
    },
    {
      icon: Heart,
      title: 'Passion',
      description: 'Notre amour pour la technologie se reflète dans notre engagement quotidien.'
    },
    {
      icon: Shield,
      title: 'Confiance',
      description: 'Nous construisons des relations durables basées sur la transparence et la fiabilité.'
    },
    {
      icon: Globe,
      title: 'Impact',
      description: 'Nous créons des solutions qui transforment positivement les entreprises et la société.'
    },
    {
      icon: Zap,
      title: 'Agilité',
      description: 'Nous nous adaptons rapidement aux besoins changeants de nos clients.'
    }
  ]

  const stats = [
    { number: '50+', label: 'Projets réalisés', icon: Award },
    { number: '25+', label: 'Clients satisfaits', icon: Users },
    { number: '3', label: 'Années d\'expérience', icon: Target },
    { number: '100%', label: 'Taux de satisfaction', icon: Heart }
  ]

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-gray-50 to-primary-50">
        <div className="container-custom">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              À propos de DataCube
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Nous sommes une équipe d'experts passionnés qui transforme les entreprises 
              grâce aux technologies de pointe en Intelligence Artificielle, Data Science 
              et Développement Web/Mobile.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Notre Mission
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Chez DataCube, nous croyons que la technologie doit servir l'humain et 
                l'entreprise. Notre mission est d'accompagner les organisations dans leur 
                transformation digitale en proposant des solutions innovantes et sur mesure.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Nous combinons expertise technique, créativité et approche humaine pour 
                créer des solutions qui transforment réellement votre business et 
                améliorent l'expérience de vos utilisateurs.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-2 h-2 bg-primary-600 rounded-full"></div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Innovation continue</h4>
                    <p className="text-gray-600">Nous restons à la pointe des dernières technologies</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-2 h-2 bg-primary-600 rounded-full"></div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Approche sur mesure</h4>
                    <p className="text-gray-600">Chaque solution est adaptée à vos besoins spécifiques</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-2 h-2 bg-primary-600 rounded-full"></div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Accompagnement complet</h4>
                    <p className="text-gray-600">De la conception à la maintenance, nous sommes à vos côtés</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="w-full h-96 bg-gradient-to-br from-primary-500 to-accent-500 rounded-2xl flex items-center justify-center">
                <Users className="w-32 h-32 text-white opacity-80" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Nos Réalisations
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Des chiffres qui témoignent de notre expertise et de notre engagement 
              envers l'excellence.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon
              return (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-primary-600" />
                  </div>
                  <div className="text-4xl font-bold text-gray-900 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-600">
                    {stat.label}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Notre Équipe
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Des experts passionnés et expérimentés, unis par la volonté 
              de créer des solutions technologiques exceptionnelles.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="text-center">
                <div className="mx-auto mb-4">
                  <AvatarImage name={member.name} size="lg" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-1">
                  {member.name}
                </h3>
                <p className="text-primary-600 font-medium mb-2">
                  {member.role}
                </p>
                <p className="text-sm text-gray-500 mb-3">
                  {member.expertise}
                </p>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {member.description}
                </p>
                <a
                  href={member.linkedin}
                  className="inline-flex items-center text-primary-600 hover:text-primary-700 text-sm font-medium"
                >
                  LinkedIn
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Nos Valeurs
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Les principes qui guident notre travail et nos relations avec nos clients.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon
              return (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-primary-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary-600 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Prêt à travailler avec nous ?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Rejoignez les entreprises qui nous font confiance pour leur 
            transformation digitale. Discutons de votre projet.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/rdv" className="btn bg-white text-primary-600 hover:bg-gray-100 text-lg px-8 py-4">
              Prendre rendez-vous
            </a>
            <a href="/contact" className="btn border-2 border-white text-white hover:bg-white hover:text-primary-600 text-lg px-8 py-4">
              Nous contacter
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}