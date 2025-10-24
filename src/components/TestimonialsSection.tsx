'use client'

import { useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react'

const TestimonialsSection = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  const testimonials = [
    {
      id: 1,
      name: 'Marie Dubois',
      position: 'Directrice Marketing',
      company: 'TechCorp',
      content: 'DataCube a transformé notre approche de la data. Leur système de recommandation IA a augmenté nos ventes de 40% en seulement 3 mois. Une équipe exceptionnelle !',
      rating: 5,
      avatar: '/api/placeholder/80/80'
    },
    {
      id: 2,
      name: 'Jean Martin',
      position: 'CEO',
      company: 'StartupInnovante',
      content: 'L\'application mobile développée par DataCube dépasse toutes nos attentes. Interface intuitive, performance excellente et support réactif. Je recommande vivement !',
      rating: 5,
      avatar: '/api/placeholder/80/80'
    },
    {
      id: 3,
      name: 'Sophie Laurent',
      position: 'CTO',
      company: 'DataSolutions',
      content: 'Leur expertise en machine learning nous a permis d\'automatiser des processus complexes. Résultats immédiats et ROI exceptionnel. Partenaire de confiance.',
      rating: 5,
      avatar: '/api/placeholder/80/80'
    },
    {
      id: 4,
      name: 'Pierre Moreau',
      position: 'Directeur IT',
      company: 'EnterprisePlus',
      content: 'Migration cloud réussie grâce à DataCube. Architecture robuste, sécurité renforcée et coûts optimisés. Un accompagnement professionnel du début à la fin.',
      rating: 5,
      avatar: '/api/placeholder/80/80'
    }
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const current = testimonials[currentTestimonial]

  return (
    <section className="section-padding bg-gradient-to-br from-primary-50 to-accent-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Ce que disent nos clients
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            La satisfaction de nos clients est notre priorité. 
            Découvrez leurs retours d'expérience.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Main Testimonial */}
            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Quote className="w-8 h-8 text-primary-600" />
              </div>
              
              <blockquote className="text-lg md:text-xl text-gray-700 leading-relaxed mb-8 italic">
                "{current.content}"
              </blockquote>

              <div className="flex justify-center mb-6">
                {[...Array(current.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>

              <div className="flex items-center justify-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-primary-600 to-accent-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-semibold text-lg">
                    {current.name.charAt(0)}
                  </span>
                </div>
                <div className="text-left">
                  <div className="font-semibold text-gray-900">{current.name}</div>
                  <div className="text-sm text-gray-600">{current.position}</div>
                  <div className="text-sm text-primary-600 font-medium">{current.company}</div>
                </div>
              </div>
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={prevTestimonial}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-gray-600 hover:text-primary-600 hover:shadow-xl transition-all duration-200"
              aria-label="Témoignage précédent"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            
            <button
              onClick={nextTestimonial}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-gray-600 hover:text-primary-600 hover:shadow-xl transition-all duration-200"
              aria-label="Témoignage suivant"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center space-x-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all duration-200 ${
                  index === currentTestimonial
                    ? 'bg-primary-600 w-8'
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Aller au témoignage ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          <div className="text-center">
            <div className="text-4xl font-bold text-primary-600 mb-2">100%</div>
            <div className="text-gray-600">Clients satisfaits</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary-600 mb-2">4.9/5</div>
            <div className="text-gray-600">Note moyenne</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary-600 mb-2">95%</div>
            <div className="text-gray-600">Projets livrés à temps</div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TestimonialsSection