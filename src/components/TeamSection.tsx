'use client'

import { useState } from 'react'
import { Users, Linkedin, Mail, Briefcase, GraduationCap, MapPin, ChevronLeft, ChevronRight } from 'lucide-react'
import AvatarImage from './AvatarImage'
import Link from 'next/link'

const TeamSection = () => {
  const [currentMember, setCurrentMember] = useState(0)

  const team = [
    {
      name: 'Marie Dubois',
      role: 'CEO & Co-fondatrice',
      expertise: 'Intelligence Artificielle',
      description: 'Visionnaire de l\'IA avec 15 ans d\'expérience dans la transformation digitale.',
      experience: '15 ans',
      education: 'PhD Machine Learning - Stanford',
      previousCompany: 'Google, Microsoft',
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
      description: 'Architecte de solutions data à grande échelle, expert en Big Data.',
      experience: '12 ans',
      education: 'PhD Informatique - Polytechnique',
      previousCompany: 'McKinsey, TotalEnergies',
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
      experience: '8 ans',
      education: 'Master Design & Développement - Gobelins',
      previousCompany: 'Spotify, BlaBlaCar',
      avatar: 'gradient',
      photoUrl: 'https://randomuser.me/api/portraits/women/2.jpg',
      linkedin: 'https://linkedin.com/in/sophie-laurent-dev',
      email: 'sophie@datacube.fr',
      location: 'Paris, France'
    },
    {
      name: 'Pierre Moreau',
      role: 'Lead Developer Mobile',
      expertise: 'Développement Mobile',
      description: 'Expert en applications mobiles natives et cross-platform.',
      experience: '10 ans',
      education: 'Master Informatique Mobile - EPITA',
      previousCompany: 'Deezer, Deliveroo',
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
      experience: '7 ans',
      education: 'PhD Statistiques - ENSAE',
      previousCompany: 'BNP Paribas, Carrefour',
      avatar: 'gradient',
      photoUrl: 'https://randomuser.me/api/portraits/men/3.jpg',
      linkedin: 'https://linkedin.com/in/alexandre-chen-data',
      email: 'alexandre@datacube.fr',
      location: 'Paris, France'
    }
  ]

  const nextMember = () => {
    setCurrentMember((prev) => (prev + 1) % team.length)
  }

  const prevMember = () => {
    setCurrentMember((prev) => (prev - 1 + team.length) % team.length)
  }

  const current = team[currentMember]

  return (
    <section className="section-padding bg-gradient-to-br from-primary-50 to-accent-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 rounded-2xl mb-6">
            <Users className="w-8 h-8 text-primary-600" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Rencontrez Notre Équipe
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Des experts passionnés qui transforment vos idées en solutions technologiques innovantes
          </p>
        </div>

        {/* Team Member Spotlight */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              {/* Photo et infos de base */}
              <div className="text-center lg:text-left">
                <div className="mx-auto lg:mx-0 mb-6">
                  <AvatarImage name={current.name} size="lg" photoUrl={current.photoUrl} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {current.name}
                </h3>
                <p className="text-primary-600 font-semibold text-lg mb-2">
                  {current.role}
                </p>
                <p className="text-gray-600 mb-4">
                  {current.expertise}
                </p>
                
                {/* Détails professionnels */}
                <div className="space-y-2 text-sm text-gray-500 mb-6">
                  <div className="flex items-center justify-center lg:justify-start space-x-2">
                    <Briefcase className="w-4 h-4" />
                    <span>{current.experience} d'expérience</span>
                  </div>
                  <div className="flex items-center justify-center lg:justify-start space-x-2">
                    <GraduationCap className="w-4 h-4" />
                    <span>{current.education}</span>
                  </div>
                  <div className="flex items-center justify-center lg:justify-start space-x-2">
                    <MapPin className="w-4 h-4" />
                    <span>{current.location}</span>
                  </div>
                </div>

                {/* Liens sociaux */}
                <div className="flex justify-center lg:justify-start space-x-3">
                  <a 
                    href={current.linkedin} 
                    className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center text-primary-600 hover:bg-primary-600 hover:text-white transition-all duration-200"
                    aria-label={`LinkedIn de ${current.name}`}
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a 
                    href={`mailto:${current.email}`}
                    className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center text-gray-600 hover:bg-gray-600 hover:text-white transition-all duration-200"
                    aria-label={`Email de ${current.name}`}
                  >
                    <Mail className="w-5 h-5" />
                  </a>
                </div>
              </div>

              {/* Description et expérience */}
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-4">
                  À propos
                </h4>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {current.description}
                </p>
                
                <div className="bg-gray-50 rounded-lg p-4 mb-6">
                  <h5 className="font-semibold text-gray-900 mb-2">Expérience précédente</h5>
                  <p className="text-gray-600 text-sm">{current.previousCompany}</p>
                </div>

                <div className="flex flex-col sm:flex-row gap-3">
                  <Link href="/about" className="btn btn-primary flex-1 text-center">
                    Voir toute l'équipe
                  </Link>
                  <Link href="/contact" className="btn btn-outline flex-1 text-center">
                    Nous contacter
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center mt-8 space-x-4">
            <button
              onClick={prevMember}
              className="w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-gray-600 hover:text-primary-600 hover:shadow-xl transition-all duration-200"
              aria-label="Membre précédent"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            
            <div className="flex space-x-2">
              {team.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentMember(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-200 ${
                    index === currentMember ? 'bg-primary-600 w-8' : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                  aria-label={`Aller au membre ${index + 1}`}
                />
              ))}
            </div>
            
            <button
              onClick={nextMember}
              className="w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-gray-600 hover:text-primary-600 hover:shadow-xl transition-all duration-200"
              aria-label="Membre suivant"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Team Grid (version compacte) */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
            Toute l'équipe DataCube
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {team.map((member, index) => (
              <div 
                key={index} 
                className={`text-center cursor-pointer transition-all duration-200 ${
                  index === currentMember ? 'transform scale-105' : 'hover:transform hover:scale-105'
                }`}
                onClick={() => setCurrentMember(index)}
              >
                <div className="mx-auto mb-3">
                  <AvatarImage name={member.name} size="md" photoUrl={member.photoUrl} />
                </div>
                <h4 className="font-semibold text-gray-900 text-sm mb-1">
                  {member.name}
                </h4>
                <p className="text-xs text-primary-600 mb-1">
                  {member.role}
                </p>
                <p className="text-xs text-gray-500">
                  {member.expertise}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default TeamSection