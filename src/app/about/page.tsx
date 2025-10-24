import { Users, Award, Target, Heart, Lightbulb, Shield, Globe, Zap, Linkedin, Github, Mail, Calendar, MapPin, GraduationCap, Briefcase } from 'lucide-react'
import AvatarImage from '@/components/AvatarImage'
import Link from 'next/link'

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
      description: 'Visionnaire de l\'IA avec 15 ans d\'expérience dans la transformation digitale des entreprises.',
      detailedBio: 'Marie a dirigé des équipes d\'IA chez Google et Microsoft avant de co-fonder DataCube. Elle est titulaire d\'un PhD en Machine Learning et a publié plus de 20 articles scientifiques. Passionnée par l\'éthique de l\'IA, elle conseille plusieurs startups et siège au conseil d\'administration de l\'association française pour l\'IA.',
      experience: '15 ans',
      education: 'PhD Machine Learning - Stanford',
      previousCompany: 'Google, Microsoft',
      certifications: ['Certified AI Professional', 'Google Cloud AI'],
      avatar: 'gradient',
      photoUrl: 'https://randomuser.me/api/portraits/women/1.jpg',
      linkedin: 'https://linkedin.com/in/marie-dubois-ia',
      email: 'marie@datacube.fr',
      location: 'Paris, France'
    },
    {
      name: 'Jean Martin',
      role: 'CTO & Co-fondateur',
      expertise: 'Data Science & Architecture',
      description: 'Architecte de solutions data à grande échelle, expert en Big Data et Machine Learning.',
      detailedBio: 'Jean a conçu et déployé des systèmes de données pour des entreprises du CAC 40. Il est spécialisé dans l\'architecture de pipelines de données et l\'optimisation des performances. Ancien consultant senior chez McKinsey, il apporte une vision stratégique unique à nos projets.',
      experience: '12 ans',
      education: 'PhD Informatique - Polytechnique',
      previousCompany: 'McKinsey, TotalEnergies',
      certifications: ['AWS Solutions Architect', 'Apache Spark'],
      avatar: 'gradient',
      photoUrl: 'https://randomuser.me/api/portraits/men/1.jpg',
      linkedin: 'https://linkedin.com/in/jean-martin-data',
      email: 'jean@datacube.fr',
      location: 'Lyon, France'
    },
    {
      name: 'Sophie Laurent',
      role: 'Lead Developer Frontend',
      expertise: 'Développement Web & UX',
      description: 'Spécialiste des interfaces utilisateur modernes et de l\'expérience utilisateur.',
      detailedBio: 'Sophie crée des expériences web exceptionnelles depuis 8 ans. Elle maîtrise React, Vue.js et les dernières technologies frontend. Ancienne UX Designer chez Spotify, elle combine design et développement pour créer des interfaces intuitives et performantes.',
      experience: '8 ans',
      education: 'Master Design & Développement - Gobelins',
      previousCompany: 'Spotify, BlaBlaCar',
      certifications: ['React Expert', 'UX Design'],
      avatar: 'gradient',
      photoUrl: 'https://randomuser.me/api/portraits/women/2.jpg',
      linkedin: 'https://linkedin.com/in/sophie-laurent-dev',
      email: 'sophie@datacube.fr',
      location: 'Paris, France'
    },
    {
      name: 'Pierre Moreau',
      role: 'Lead Developer Mobile',
      expertise: 'Développement Mobile & Cross-Platform',
      description: 'Expert en applications mobiles natives et cross-platform, créateur d\'apps primées.',
      detailedBio: 'Pierre développe des applications mobiles depuis 10 ans. Il a créé plusieurs apps qui ont atteint le top 10 des stores. Spécialiste React Native et Flutter, il optimise les performances et l\'expérience utilisateur sur tous les appareils.',
      experience: '10 ans',
      education: 'Master Informatique Mobile - EPITA',
      previousCompany: 'Deezer, Deliveroo',
      certifications: ['React Native Expert', 'Flutter Certified'],
      avatar: 'gradient',
      photoUrl: 'https://randomuser.me/api/portraits/men/2.jpg',
      linkedin: 'https://linkedin.com/in/pierre-moreau-mobile',
      email: 'pierre@datacube.fr',
      location: 'Toulouse, France'
    },
    {
      name: 'Alexandre Chen',
      role: 'Data Scientist Senior',
      expertise: 'Machine Learning & Analytics',
      description: 'Expert en modèles prédictifs et analyse de données complexes.',
      detailedBio: 'Alexandre transforme les données en insights actionnables. Il a développé des modèles de prédiction pour des entreprises de la finance et du retail. Spécialiste Python et R, il crée des solutions d\'IA sur mesure pour nos clients.',
      experience: '7 ans',
      education: 'PhD Statistiques - ENSAE',
      previousCompany: 'BNP Paribas, Carrefour',
      certifications: ['TensorFlow', 'Scikit-learn'],
      avatar: 'gradient',
      photoUrl: 'https://randomuser.me/api/portraits/men/3.jpg',
      linkedin: 'https://linkedin.com/in/alexandre-chen-data',
      email: 'alexandre@datacube.fr',
      location: 'Paris, France'
    }
  ]

  const values = [
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'Nous repoussons les limites technologiques pour créer des solutions d\'avenir.',
      details: 'Recherche constante des dernières technologies, veille technologique, R&D interne'
    },
    {
      icon: Target,
      title: 'Excellence',
      description: 'Chaque projet est une opportunité de dépasser les attentes de nos clients.',
      details: 'Code de qualité, tests automatisés, documentation complète, revues de code'
    },
    {
      icon: Heart,
      title: 'Collaboration',
      description: 'Nous croyons en la force du travail d\'équipe et de la communication transparente.',
      details: 'Méthodologies agiles, communication ouverte, partage de connaissances'
    },
    {
      icon: Shield,
      title: 'Sécurité',
      description: 'La protection des données et la sécurité sont au cœur de nos préoccupations.',
      details: 'Audits de sécurité, conformité RGPD, chiffrement, bonnes pratiques'
    }
  ]

  const stats = [
    { number: '50+', label: 'Projets réalisés', description: 'Solutions déployées avec succès' },
    { number: '25+', label: 'Clients satisfaits', description: 'Entreprises qui nous font confiance' },
    { number: '3', label: 'Années d\'expérience', description: 'Expertise reconnue sur le marché' },
    { number: '100%', label: 'Taux de satisfaction', description: 'Clients qui recommandent nos services' }
  ]

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-primary-50 to-accent-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              À propos de DataCube
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Nous sommes une équipe d'experts passionnés qui transforme les entreprises 
              grâce aux technologies de pointe en Intelligence Artificielle, Data Science et Développement.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn btn-primary text-lg px-8 py-4">
                Nous rencontrer
              </Link>
              <Link href="/realisations" className="btn btn-secondary text-lg px-8 py-4">
                Voir nos projets
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-primary-600 mb-2">
                  {stat.number}
                </div>
                <div className="text-xl font-semibold text-gray-900 mb-1">
                  {stat.label}
                </div>
                <div className="text-gray-600">
                  {stat.description}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Notre Mission
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Chez DataCube, nous croyons que la technologie doit servir l'humain et l'entreprise. 
                Notre mission est d'accompagner les entreprises dans leur transformation digitale 
                en leur offrant des solutions innovantes, sécurisées et performantes.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Nous combinons expertise technique et vision stratégique pour créer des solutions 
                sur mesure qui génèrent de la valeur et accélèrent la croissance de nos clients.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-2 h-2 bg-primary-600 rounded-full"></div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Innovation continue</h4>
                    <p className="text-gray-600">Veille technologique et adoption des dernières innovations</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-2 h-2 bg-primary-600 rounded-full"></div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Accompagnement personnalisé</h4>
                    <p className="text-gray-600">Solutions adaptées aux besoins spécifiques de chaque client</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-2 h-2 bg-primary-600 rounded-full"></div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Excellence technique</h4>
                    <p className="text-gray-600">Code de qualité, tests et documentation complète</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-primary-600 to-accent-600 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-6">Notre Vision</h3>
              <p className="text-lg mb-6 leading-relaxed">
                Devenir le partenaire de référence pour la transformation digitale des entreprises, 
                en combinant innovation technologique et expertise métier.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Globe className="w-5 h-5" />
                  <span>Impact positif sur l'économie française</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Users className="w-5 h-5" />
                  <span>Formation et développement des talents</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Zap className="w-5 h-5" />
                  <span>Innovation au service de l'humain</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Notre Équipe d'Experts
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Des professionnels passionnés et expérimentés, prêts à relever vos défis technologiques
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
            {team.map((member, index) => (
              <div key={index} className="card p-8 text-center group hover:shadow-2xl transition-all duration-300">
                <div className="mx-auto mb-6">
                  <AvatarImage name={member.name} size="lg" photoUrl={member.photoUrl} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {member.name}
                </h3>
                <p className="text-primary-600 font-semibold mb-2">
                  {member.role}
                </p>
                <p className="text-sm text-gray-600 mb-4">
                  {member.expertise}
                </p>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {member.description}
                </p>
                
                {/* Détails professionnels */}
                <div className="space-y-2 mb-6 text-sm">
                  <div className="flex items-center justify-center space-x-2 text-gray-500">
                    <Briefcase className="w-4 h-4" />
                    <span>{member.experience} d'expérience</span>
                  </div>
                  <div className="flex items-center justify-center space-x-2 text-gray-500">
                    <GraduationCap className="w-4 h-4" />
                    <span>{member.education}</span>
                  </div>
                  <div className="flex items-center justify-center space-x-2 text-gray-500">
                    <MapPin className="w-4 h-4" />
                    <span>{member.location}</span>
                  </div>
                </div>

                {/* Certifications */}
                <div className="mb-6">
                  <div className="text-xs text-gray-500 mb-2">Certifications</div>
                  <div className="flex flex-wrap justify-center gap-1">
                    {member.certifications.map((cert, certIndex) => (
                      <span key={certIndex} className="px-2 py-1 bg-primary-100 text-primary-700 rounded-full text-xs">
                        {cert}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Liens sociaux */}
                <div className="flex justify-center space-x-3">
                  <a 
                    href={member.linkedin} 
                    className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center text-primary-600 hover:bg-primary-600 hover:text-white transition-all duration-200"
                    aria-label={`LinkedIn de ${member.name}`}
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a 
                    href={`mailto:${member.email}`}
                    className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center text-gray-600 hover:bg-gray-600 hover:text-white transition-all duration-200"
                    aria-label={`Email de ${member.name}`}
                  >
                    <Mail className="w-5 h-5" />
                  </a>
                </div>
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
              Les principes qui guident notre travail et nos relations avec nos clients
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <div key={index} className="card p-8">
                <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center mb-6">
                  <value.icon className="w-6 h-6 text-primary-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {value.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {value.description}
                </p>
                <p className="text-sm text-gray-500">
                  {value.details}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-br from-secondary-900 via-secondary-800 to-primary-900 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Prêt à travailler avec notre équipe ?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Découvrez comment nos experts peuvent transformer votre entreprise avec des solutions innovantes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn bg-white text-gray-900 hover:bg-gray-100 text-lg px-8 py-4">
              Discuter de votre projet
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