'use client'

import { useState, useMemo } from 'react'
import { Search, Filter, X, Tag, Calendar, User } from 'lucide-react'

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

interface BlogSearchProps {
  posts: BlogPost[]
  onFilteredPosts: (posts: BlogPost[]) => void
}

const BlogSearch = ({ posts, onFilteredPosts }: BlogSearchProps) => {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [selectedTags, setSelectedTags] = useState<string[]>([])
  const [showFilters, setShowFilters] = useState(false)

  // Extraire toutes les catégories et tags uniques
  const categories = useMemo(() => {
    const cats = [...new Set(posts.map(post => post.category))]
    return ['all', ...cats]
  }, [posts])

  const allTags = useMemo(() => {
    return [...new Set(posts.flatMap(post => post.tags))]
  }, [posts])

  // Filtrer les posts
  const filteredPosts = useMemo(() => {
    return posts.filter(post => {
      const matchesSearch = searchTerm === '' || 
        post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.author.toLowerCase().includes(searchTerm.toLowerCase())

      const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory

      const matchesTags = selectedTags.length === 0 || 
        selectedTags.some(tag => post.tags.includes(tag))

      return matchesSearch && matchesCategory && matchesTags
    })
  }, [posts, searchTerm, selectedCategory, selectedTags])

  // Notifier le parent des posts filtrés
  useMemo(() => {
    onFilteredPosts(filteredPosts)
  }, [filteredPosts, onFilteredPosts])

  const toggleTag = (tag: string) => {
    setSelectedTags(prev => 
      prev.includes(tag) 
        ? prev.filter(t => t !== tag)
        : [...prev, tag]
    )
  }

  const clearFilters = () => {
    setSearchTerm('')
    setSelectedCategory('all')
    setSelectedTags([])
  }

  const hasActiveFilters = searchTerm !== '' || selectedCategory !== 'all' || selectedTags.length > 0

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
      {/* Barre de recherche principale */}
      <div className="relative mb-4">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
        <input
          type="text"
          placeholder="Rechercher dans les articles..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
        />
      </div>

      {/* Bouton filtres et résultats */}
      <div className="flex items-center justify-between mb-4">
        <button
          onClick={() => setShowFilters(!showFilters)}
          className="flex items-center px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
        >
          <Filter className="w-4 h-4 mr-2" />
          Filtres avancés
          {hasActiveFilters && (
            <span className="ml-2 px-2 py-1 bg-primary-600 text-white text-xs rounded-full">
              {[searchTerm && '1', selectedCategory !== 'all' && '1', selectedTags.length].filter(Boolean).length}
            </span>
          )}
        </button>

        <div className="text-sm text-gray-600">
          {filteredPosts.length} article{filteredPosts.length !== 1 ? 's' : ''} trouvé{filteredPosts.length !== 1 ? 's' : ''}
        </div>
      </div>

      {/* Filtres avancés */}
      {showFilters && (
        <div className="border-t pt-4 space-y-4">
          {/* Catégories */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              <Calendar className="w-4 h-4 inline mr-1" />
              Catégorie
            </label>
            <div className="flex flex-wrap gap-2">
              {categories.map(category => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
                    selectedCategory === category
                      ? 'bg-primary-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category === 'all' ? 'Toutes les catégories' : category}
                </button>
              ))}
            </div>
          </div>

          {/* Tags */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              <Tag className="w-4 h-4 inline mr-1" />
              Tags
            </label>
            <div className="flex flex-wrap gap-2">
              {allTags.map(tag => (
                <button
                  key={tag}
                  onClick={() => toggleTag(tag)}
                  className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
                    selectedTags.includes(tag)
                      ? 'bg-accent-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>

          {/* Bouton clear */}
          {hasActiveFilters && (
            <div className="pt-2">
              <button
                onClick={clearFilters}
                className="flex items-center px-3 py-1 text-sm text-gray-600 hover:text-gray-800 transition-colors"
              >
                <X className="w-4 h-4 mr-1" />
                Effacer tous les filtres
              </button>
            </div>
          )}
        </div>
      )}

      {/* Filtres actifs */}
      {hasActiveFilters && (
        <div className="border-t pt-4">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-sm text-gray-600">Filtres actifs :</span>
            
            {searchTerm && (
              <span className="inline-flex items-center px-2 py-1 bg-primary-100 text-primary-800 text-xs rounded-full">
                Recherche: "{searchTerm}"
                <button
                  onClick={() => setSearchTerm('')}
                  className="ml-1 hover:text-primary-600"
                >
                  <X className="w-3 h-3" />
                </button>
              </span>
            )}

            {selectedCategory !== 'all' && (
              <span className="inline-flex items-center px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">
                Catégorie: {selectedCategory}
                <button
                  onClick={() => setSelectedCategory('all')}
                  className="ml-1 hover:text-blue-600"
                >
                  <X className="w-3 h-3" />
                </button>
              </span>
            )}

            {selectedTags.map(tag => (
              <span key={tag} className="inline-flex items-center px-2 py-1 bg-accent-100 text-accent-800 text-xs rounded-full">
                Tag: {tag}
                <button
                  onClick={() => toggleTag(tag)}
                  className="ml-1 hover:text-accent-600"
                >
                  <X className="w-3 h-3" />
                </button>
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default BlogSearch