'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Calendar, User, Clock, Search, Tag, ArrowRight, Filter } from 'lucide-react'
import BlogImage from '@/components/BlogImage'
import AvatarImage from '@/components/AvatarImage'

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [searchTerm, setSearchTerm] = useState('')

  const blogPosts = [
    {
      id: 1,
      title: 'L\'Intelligence Artificielle au service de l\'e-commerce',
      excerpt: 'Découvrez comment l\'IA transforme l\'expérience d\'achat en ligne et augmente les ventes grâce aux recommandations personnalisées.',
      content: 'Contenu complet de l\'article...',
      slug: 'ia-ecommerce-recommandations',
      image: 'gradient',
      category: 'Intelligence Artificielle',
      tags: ['IA', 'E-commerce', 'Machine Learning', 'Recommandations'],
      author: 'Marie Dubois',
      authorAvatar: 'gradient',
      publishedAt: '2024-01-15',
      readTime: '5 min',
      featured: true
    },
    {
      id: 2,
      title: 'Data Science : Comment optimiser vos tableaux de bord',
      excerpt: 'Les meilleures pratiques pour créer des dashboards efficaces qui facilitent la prise de décision dans votre entreprise.',
      content: 'Contenu complet de l\'article...',
      slug: 'data-science-dashboards-optimisation',
      image: 'gradient',
      category: 'Data Science',
      tags: ['Data Science', 'Visualisation', 'Business Intelligence', 'Analytics'],
      author: 'Jean Martin',
      authorAvatar: 'gradient',
      publishedAt: '2024-01-10',
      readTime: '7 min',
      featured: true
    },
    {
      id: 3,
      title: 'Développement Web : Les tendances 2024',
      excerpt: 'Un aperçu des technologies et frameworks qui vont marquer le développement web cette année.',
      content: 'Contenu complet de l\'article...',
      slug: 'developpement-web-tendances-2024',
      image: 'gradient',
      category: 'Développement Web',
      tags: ['Web', 'Tendances', 'React', 'Next.js', 'Performance'],
      author: 'Sophie Laurent',
      authorAvatar: 'gradient',
      publishedAt: '2024-01-05',
      readTime: '6 min',
      featured: false
    },
    {
      id: 4,
      title: 'Applications mobiles : Native vs Cross-platform',
      excerpt: 'Comparaison détaillée entre le développement natif et cross-platform pour choisir la meilleure approche.',
      content: 'Contenu complet de l\'article...',
      slug: 'mobile-native-vs-crossplatform',
      image: 'gradient',
      category: 'Développement Mobile',
      tags: ['Mobile', 'React Native', 'Flutter', 'Performance', 'Développement'],
      author: 'Pierre Moreau',
      authorAvatar: 'gradient',
      publishedAt: '2023-12-28',
      readTime: '8 min',
      featured: false
    },
    {
      id: 5,
      title: 'Machine Learning : Guide pour débutants',
      excerpt: 'Introduction complète au machine learning avec des exemples pratiques et des cas d\'usage concrets.',
      content: 'Contenu complet de l\'article...',
      slug: 'machine-learning-guide-debutants',
      image: 'gradient',
      category: 'Intelligence Artificielle',
      tags: ['Machine Learning', 'IA', 'Python', 'Débutant', 'Tutoriel'],
      author: 'Marie Dubois',
      authorAvatar: 'gradient',
      publishedAt: '2023-12-20',
      readTime: '12 min',
      featured: false
    },
    {
      id: 6,
      title: 'Sécurité des applications web : Bonnes pratiques',
      excerpt: 'Les mesures essentielles à mettre en place pour sécuriser vos applications web et protéger vos données.',
      content: 'Contenu complet de l\'article...',
      slug: 'securite-applications-web-bonnes-pratiques',
      image: 'gradient',
      category: 'Développement Web',
      tags: ['Sécurité', 'Web', 'HTTPS', 'Authentification', 'Bonnes pratiques'],
      author: 'Jean Martin',
      authorAvatar: 'gradient',
      publishedAt: '2023-12-15',
      readTime: '9 min',
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

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
    return matchesCategory && matchesSearch
  })

  const featuredPosts = blogPosts.filter(post => post.featured)
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

      {/* Featured Posts */}
      {selectedCategory === 'all' && searchTerm === '' && (
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
                      {post.tags.slice(0, 3).map((tag, index) => (
                        <span key={index} className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs">
                          {tag}
                        </span>
                      ))}
                    </div>

                    <Link
                      href={`/blog/${post.slug}`}
                      className="text-primary-600 hover:text-primary-700 font-medium flex items-center group"
                    >
                      Lire l'article
                      <ArrowRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Filters Section */}
      <section className="py-8 bg-white border-b">
        <div className="container-custom">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Rechercher un article..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
            </div>

            {/* Category Filters */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                    selectedCategory === category.id
                      ? 'bg-primary-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category.name} ({category.count})
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          {regularPosts.length === 0 ? (
            <div className="text-center py-16">
              <Filter className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Aucun article trouvé
              </h3>
              <p className="text-gray-600">
                Essayez de modifier vos critères de recherche.
              </p>
            </div>
          ) : (
            <>
              <h2 className="text-2xl font-bold text-gray-900 mb-8">
                {selectedCategory === 'all' ? 'Tous les articles' : `Articles ${selectedCategory}`}
              </h2>
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
                        </div>
                        <div className="flex items-center">
                          <Clock className="w-4 h-4 mr-1" />
                          {post.readTime}
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-2 mb-4">
                        {post.tags.slice(0, 2).map((tag, index) => (
                          <span key={index} className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs">
                            {tag}
                          </span>
                        ))}
                      </div>

                      <Link
                        href={`/blog/${post.slug}`}
                        className="text-primary-600 hover:text-primary-700 font-medium flex items-center group"
                      >
                        Lire l'article
                        <ArrowRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                      </Link>
                    </div>
                  </article>
                ))}
              </div>
            </>
          )}
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="section-padding bg-primary-600 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold mb-4">
            Restez informé des dernières tendances
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Recevez nos articles directement dans votre boîte mail et ne ratez 
            aucune innovation technologique.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Votre adresse email"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:ring-2 focus:ring-white focus:outline-none"
            />
            <button className="btn bg-white text-primary-600 hover:bg-gray-100 px-6 py-3">
              S'abonner
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}