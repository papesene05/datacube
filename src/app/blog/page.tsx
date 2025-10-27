'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Calendar, User, Clock, Search } from 'lucide-react'
import BlogImage from '@/components/BlogImage'

export default function BlogPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')

  const blogPosts = [
    {
      id: 1,
      title: 'Comment choisir la bonne technologie pour votre projet web ?',
      excerpt: 'Guide complet pour choisir la technologie adaptée à votre projet web : React, Vue.js, Angular, Node.js, Python. Conseils d\'experts DataCube.',
      slug: 'choisir-technologie-projet-web',
      category: 'Développement Web',
      tags: ['Développement Web', 'React', 'Vue.js', 'Angular', 'Technologie'],
      author: 'Sophie Laurent',
      publishedAt: '2024-01-15',
      readTime: '8 min',
      featured: true
    },
    {
      id: 2,
      title: 'IA et Machine Learning : Guide complet pour les entreprises',
      excerpt: 'Découvrez comment l\'Intelligence Artificielle et le Machine Learning peuvent transformer votre entreprise. Guide pratique avec exemples concrets.',
      slug: 'ia-machine-learning-guide-entreprises',
      category: 'Intelligence Artificielle',
      tags: ['IA', 'Machine Learning', 'Transformation Digitale', 'Business'],
      author: 'Marie Dubois',
      publishedAt: '2024-01-20',
      readTime: '12 min',
      featured: true
    },
    {
      id: 3,
      title: 'Data Science : Comment optimiser vos tableaux de bord',
      excerpt: 'Les meilleures pratiques pour créer des dashboards efficaces qui facilitent la prise de décision dans votre entreprise.',
      slug: 'data-science-dashboards-optimisation',
      category: 'Data Science',
      tags: ['Data Science', 'Visualisation', 'Business Intelligence', 'Analytics'],
      author: 'Jean Martin',
      publishedAt: '2024-01-10',
      readTime: '7 min',
      featured: false
    },
    {
      id: 4,
      title: 'Développement Web : Les tendances 2024',
      excerpt: 'Un aperçu des technologies et frameworks qui vont marquer le développement web cette année.',
      slug: 'developpement-web-tendances-2024',
      category: 'Développement Web',
      tags: ['Web', 'Tendances', 'React', 'Next.js', 'Performance'],
      author: 'Sophie Laurent',
      publishedAt: '2024-01-05',
      readTime: '6 min',
      featured: false
    }
  ]

  const categories = [
    { id: 'all', name: 'Tous les articles', count: blogPosts.length },
    { id: 'Intelligence Artificielle', name: 'IA', count: blogPosts.filter(p => p.category === 'Intelligence Artificielle').length },
    { id: 'Data Science', name: 'Data', count: blogPosts.filter(p => p.category === 'Data Science').length },
    { id: 'Développement Web', name: 'Web', count: blogPosts.filter(p => p.category === 'Développement Web').length },
    { id: 'Développement Mobile', name: 'Mobile', count: blogPosts.filter(p => p.category === 'Développement Mobile').length }
  ]

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Intelligence Artificielle':
        return 'bg-purple-100 text-purple-800'
      case 'Data Science':
        return 'bg-blue-100 text-blue-800'
      case 'Développement Web':
        return 'bg-green-100 text-green-800'
      case 'Développement Mobile':
        return 'bg-orange-100 text-orange-800'
      default:
        return 'bg-gray-100 text-gray-800'
    }
  }

  // Filtrage des posts
  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory
    const matchesSearch = searchTerm === '' || 
                         post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
    return matchesCategory && matchesSearch
  })

  const featuredPosts = filteredPosts.filter(post => post.featured)
  const regularPosts = filteredPosts.filter(post => !post.featured)

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-gray-50 to-primary-50">
        <div className="container-custom">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Blog DataCube
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Découvrez nos articles sur l'Intelligence Artificielle, la Data Science 
              et le Développement Web/Mobile. Conseils d'experts et tendances technologiques.
            </p>
          </div>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
            {/* Barre de recherche */}
            <div className="relative mb-6">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Rechercher dans les articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
            </div>

            {/* Filtres par catégorie */}
            <div className="flex flex-wrap gap-2 mb-4">
              {categories.map(category => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    selectedCategory === category.id
                      ? 'bg-primary-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category.name} ({category.count})
                </button>
              ))}
            </div>

            {/* Compteur de résultats */}
            <div className="text-sm text-gray-600">
              {filteredPosts.length} article{filteredPosts.length !== 1 ? 's' : ''} trouvé{filteredPosts.length !== 1 ? 's' : ''}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      {featuredPosts.length > 0 && (
        <section className="section-padding bg-white">
          <div className="container-custom">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Articles à la une</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {featuredPosts.map((post) => (
                <article key={post.id} className="card card-hover overflow-hidden">
                  <div className="relative h-48">
                    <BlogImage 
                      title={post.title}
                      category={post.category}
                      className="h-full"
                    />
                    <div className="absolute top-4 left-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${getCategoryColor(post.category)}`}>
                        {post.category}
                      </span>
                    </div>
                    <div className="absolute top-4 right-4">
                      <span className="px-3 py-1 bg-primary-100 text-primary-800 rounded-full text-xs font-medium">
                        À la une
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 mb-4 leading-relaxed line-clamp-3">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center">
                          <User className="w-4 h-4 mr-1" />
                          {post.author}
                        </div>
                        <div className="flex items-center">
                          <Calendar className="w-4 h-4 mr-1" />
                          {new Date(post.publishedAt).toLocaleDateString('fr-FR')}
                        </div>
                        <div className="flex items-center">
                          <Clock className="w-4 h-4 mr-1" />
                          {post.readTime}
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {post.tags.slice(0, 3).map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    <Link
                      href={`/blog/${post.slug}`}
                      className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium"
                    >
                      Lire l'article
                      <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Regular Posts */}
      {regularPosts.length > 0 && (
        <section className="section-padding bg-gray-50">
          <div className="container-custom">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Tous les articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {regularPosts.map((post) => (
                <article key={post.id} className="card card-hover overflow-hidden">
                  <div className="relative h-48">
                    <BlogImage 
                      title={post.title}
                      category={post.category}
                      className="h-full"
                    />
                    <div className="absolute top-4 left-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${getCategoryColor(post.category)}`}>
                        {post.category}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-gray-900 mb-3 line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 mb-4 leading-relaxed line-clamp-3">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                      <div className="flex items-center space-x-3">
                        <div className="flex items-center">
                          <User className="w-4 h-4 mr-1" />
                          {post.author}
                        </div>
                        <div className="flex items-center">
                          <Calendar className="w-4 h-4 mr-1" />
                          {new Date(post.publishedAt).toLocaleDateString('fr-FR')}
                        </div>
                        <div className="flex items-center">
                          <Clock className="w-4 h-4 mr-1" />
                          {post.readTime}
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {post.tags.slice(0, 2).map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    <Link
                      href={`/blog/${post.slug}`}
                      className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium"
                    >
                      Lire l'article
                      <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* No results */}
      {filteredPosts.length === 0 && (
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="text-center py-16">
              <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Search className="w-12 h-12 text-gray-400" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Aucun article trouvé
              </h3>
              <p className="text-gray-600 mb-6">
                Essayez de modifier vos critères de recherche ou de filtrer par une autre catégorie.
              </p>
              <button
                onClick={() => {
                  setSearchTerm('')
                  setSelectedCategory('all')
                }}
                className="btn btn-primary"
              >
                Effacer les filtres
              </button>
            </div>
          </div>
        </section>
      )}
    </div>
  )
}