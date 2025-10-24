'use client'

interface BlogImageProps {
  title: string
  category: string
  className?: string
}

const BlogImage = ({ title, category, className = '' }: BlogImageProps) => {
  const getCategoryGradient = (category: string) => {
    switch (category) {
      case 'Intelligence Artificielle':
        return 'from-purple-500 to-pink-500'
      case 'Data Science':
        return 'from-blue-500 to-cyan-500'
      case 'Développement Web':
        return 'from-green-500 to-emerald-500'
      case 'Développement Mobile':
        return 'from-orange-500 to-red-500'
      default:
        return 'from-gray-500 to-gray-600'
    }
  }

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Intelligence Artificielle':
        return '🧠'
      case 'Data Science':
        return '📊'
      case 'Développement Web':
        return '💻'
      case 'Développement Mobile':
        return '📱'
      default:
        return '📝'
    }
  }

  return (
    <div className={`relative overflow-hidden rounded-lg ${className}`}>
      <div className={`w-full h-full bg-gradient-to-br ${getCategoryGradient(category)} flex items-center justify-center`}>
        <div className="text-center text-white">
          <div className="text-4xl mb-2">{getCategoryIcon(category)}</div>
          <div className="text-sm opacity-80">Image de l'article</div>
        </div>
      </div>
    </div>
  )
}

export default BlogImage