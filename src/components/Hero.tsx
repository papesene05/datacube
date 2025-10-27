'use client'

import { useState, useEffect, useCallback } from 'react'
import Link from 'next/link'
import { ArrowRight, Play, Brain, Database, Code, Smartphone } from 'lucide-react'

const Hero = () => {
  const [currentText, setCurrentText] = useState(0)
  
  const texts = [
    'Intelligence Artificielle',
    'Data Science',
    'Développement Web',
    'Développement Mobile'
  ]

  const updateText = useCallback(() => {
    setCurrentText((prev) => (prev + 1) % texts.length)
  }, [texts.length])

  useEffect(() => {
    const interval = setInterval(updateText, 3000)
    return () => clearInterval(interval)
  }, [updateText])

  const services = [
    { icon: Brain, label: 'IA', color: 'from-purple-500 to-pink-500' },
    { icon: Database, label: 'Data', color: 'from-blue-500 to-cyan-500' },
    { icon: Code, label: 'Web', color: 'from-green-500 to-emerald-500' },
    { icon: Smartphone, label: 'Mobile', color: 'from-orange-500 to-red-500' },
  ]

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-50 via-white to-primary-50">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-accent-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-secondary-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-medium mb-6">
              <span className="w-2 h-2 bg-primary-500 rounded-full mr-2 animate-pulse"></span>
              Solutions innovantes pour votre transformation digitale
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Transformez votre entreprise avec{' '}
              <span className="gradient-text">
                {texts[currentText]}
              </span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 leading-relaxed max-w-2xl">
              DataCube vous accompagne dans votre transformation digitale avec des solutions 
              sur mesure en Intelligence Artificielle, Data Science et Développement Web/Mobile.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Link href="/rdv" className="btn btn-primary text-lg px-8 py-4">
                Demander un devis
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link href="/realisations" className="btn btn-outline text-lg px-8 py-4">
                <Play className="mr-2 w-5 h-5" />
                Voir nos réalisations
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8">
              <div className="text-center lg:text-left">
                <div className="text-3xl font-bold text-primary-600 mb-1">50+</div>
                <div className="text-sm text-gray-600">Projets réalisés</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-3xl font-bold text-primary-600 mb-1">25+</div>
                <div className="text-sm text-gray-600">Clients satisfaits</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-3xl font-bold text-primary-600 mb-1">3</div>
                <div className="text-sm text-gray-600">Années d'expérience</div>
              </div>
            </div>
          </div>

          {/* Right Visual */}
          <div className="relative">
            <div className="relative w-full h-96 lg:h-[500px]">
              {/* Floating Service Cards */}
              {services.map((service, index) => {
                const Icon = service.icon
                return (
                  <div
                    key={service.label}
                    className={`absolute w-24 h-24 bg-gradient-to-r ${service.color} rounded-2xl shadow-xl flex flex-col items-center justify-center text-white transform transition-all duration-1000 hover:scale-110`}
                    style={{
                      top: `${20 + (index * 20)}%`,
                      left: `${10 + (index * 25)}%`,
                      animationDelay: `${index * 0.5}s`,
                    }}
                  >
                    <Icon className="w-8 h-8 mb-2" />
                    <span className="text-sm font-semibold">{service.label}</span>
                  </div>
                )
              })}

              {/* Central Hub */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-white rounded-full shadow-2xl flex items-center justify-center border-4 border-primary-100">
                <div className="w-16 h-16 bg-gradient-to-r from-primary-600 to-accent-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-xl">DC</span>
                </div>
              </div>

              {/* Connection Lines */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none">
                {services.map((_, index) => (
                  <line
                    key={index}
                    x1="50%"
                    y1="50%"
                    x2={`${10 + (index * 25)}%`}
                    y2={`${20 + (index * 20)}%`}
                    stroke="url(#gradient)"
                    strokeWidth="2"
                    strokeDasharray="5,5"
                    className="animate-pulse"
                  />
                ))}
                <defs>
                  <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#3b82f6" />
                    <stop offset="100%" stopColor="#0ea5e9" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero