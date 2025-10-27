'use client'

import Link from 'next/link'
import { ArrowRight, Calendar, Clock, User } from 'lucide-react'
import BlogImage from '@/components/BlogImage'
import AvatarImage from '@/components/AvatarImage'

interface BlogPost {
  id: number
  title: string
  excerpt: string
  slug: string
  category: string
  tags: string[]
  author: string
  authorAvatar: string
  publishedAt: string
  readTime: string
  featured: boolean
}

interface RelatedArticlesProps {
  currentPost: BlogPost
  allPosts: BlogPost[]
  maxArticles?: number
}

const RelatedArticles = ({ currentPost, allPosts, maxArticles = 3 }: RelatedArticlesProps) => {
  // Trouver les articles similaires basés sur les tags et la catégorie
  const relatedPosts = allPosts
    .filter(post => post.id !== currentPost.id) // Exclure l'article actuel
    .map(post => {
      // Calculer un score de similarité
      const categoryMatch = post.category === currentPost.category ? 2 : 0
      const tagMatches = post.tags.filter(tag => currentPost.tags.includes(tag)).length
      const totalScore = categoryMatch + tagMatches
      
      return { ...post, score: totalScore }
    })
    .filter(post => post.score > 0) // Seulement les articles avec au moins un point commun
    .sort((a, b) => b.score - a.score) // Trier par score décroissant
    .slice(0, maxArticles) // Limiter le nombre d'articles

  if (relatedPosts.length === 0) {
    return null
  }

  return (
    <section className="bg-gray-50 rounded-xl p-8">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">
        Articles similaires
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {relatedPosts.map((post) => (
          <Link
            key={post.id}
            href={`/blog/${post.slug}`}
            className="group block"
          >
            <article className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden">
              {/* Image */}
              <div className="h-48 bg-gradient-to-br from-primary-100 to-accent-100 flex items-center justify-center">
                <BlogImage
                  title={post.title}
                  category={post.category}
                  className="w-full h-full"
                />
              </div>
              
              {/* Content */}
              <div className="p-6">
                {/* Category */}
                <div className="mb-3">
                  <span className="inline-block px-3 py-1 bg-primary-100 text-primary-700 text-xs font-medium rounded-full">
                    {post.category}
                  </span>
                </div>
                
                {/* Title */}
                <h3 className="text-lg font-semibold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors line-clamp-2">
                  {post.title}
                </h3>
                
                {/* Excerpt */}
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                
                {/* Tags */}
                <div className="flex flex-wrap gap-1 mb-4">
                  {post.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded"
                    >
                      {tag}
                    </span>
                  ))}
                  {post.tags.length > 3 && (
                    <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded">
                      +{post.tags.length - 3}
                    </span>
                  )}
                </div>
                
                {/* Meta */}
                <div className="flex items-center justify-between text-xs text-gray-500">
                  <div className="flex items-center">
                    <AvatarImage
                      name={post.author}
                      size="sm"
                      className="mr-2"
                    />
                    <span>{post.author}</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="flex items-center">
                      <Calendar className="w-3 h-3 mr-1" />
                      {new Date(post.publishedAt).toLocaleDateString('fr-FR')}
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-3 h-3 mr-1" />
                      {post.readTime}
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Hover effect */}
              <div className="px-6 pb-6">
                <div className="flex items-center text-primary-600 font-medium text-sm group-hover:text-primary-700 transition-colors">
                  Lire l'article
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </article>
          </Link>
        ))}
      </div>
      
      {/* Voir tous les articles */}
      <div className="mt-6 text-center">
        <Link
          href="/blog"
          className="inline-flex items-center px-6 py-3 bg-primary-600 text-white font-medium rounded-lg hover:bg-primary-700 transition-colors"
        >
          Voir tous les articles
          <ArrowRight className="w-4 h-4 ml-2" />
        </Link>
      </div>
    </section>
  )
}

export default RelatedArticles