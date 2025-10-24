'use client'

import Link from 'next/link'
import { Home, ArrowLeft, Search } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="pt-20 min-h-screen flex items-center justify-center bg-gray-50">
      <div className="container-custom">
        <div className="max-w-2xl mx-auto text-center">
          <div className="w-32 h-32 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-8">
            <Search className="w-16 h-16 text-primary-600" />
          </div>
          
          <h1 className="text-6xl font-bold text-gray-900 mb-4">404</h1>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Page non trouvée
          </h2>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            Désolé, la page que vous recherchez n'existe pas ou a été déplacée. 
            Vérifiez l'URL ou retournez à la page d'accueil.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/" className="btn btn-primary text-lg px-8 py-4">
              <Home className="mr-2 w-5 h-5" />
              Retour à l'accueil
            </Link>
            <button 
              onClick={() => window.history.back()} 
              className="btn btn-outline text-lg px-8 py-4"
            >
              <ArrowLeft className="mr-2 w-5 h-5" />
              Page précédente
            </button>
          </div>
          
          <div className="mt-12">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Pages populaires
            </h3>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/expertises" className="text-primary-600 hover:text-primary-700 font-medium">
                Nos expertises
              </Link>
              <Link href="/realisations" className="text-primary-600 hover:text-primary-700 font-medium">
                Nos réalisations
              </Link>
              <Link href="/blog" className="text-primary-600 hover:text-primary-700 font-medium">
                Blog
              </Link>
              <Link href="/contact" className="text-primary-600 hover:text-primary-700 font-medium">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}