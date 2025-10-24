'use client'

interface AvatarImageProps {
  name: string
  size?: 'sm' | 'md' | 'lg'
  className?: string
}

const AvatarImage = ({ name, size = 'md', className = '' }: AvatarImageProps) => {
  const getSizeClasses = () => {
    switch (size) {
      case 'sm':
        return 'w-10 h-10 text-sm'
      case 'lg':
        return 'w-24 h-24 text-2xl'
      default:
        return 'w-16 h-16 text-lg'
    }
  }

  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map(word => word.charAt(0))
      .join('')
      .toUpperCase()
      .slice(0, 2)
  }

  const getGradient = (name: string) => {
    const colors = [
      'from-blue-500 to-purple-600',
      'from-green-500 to-blue-600',
      'from-purple-500 to-pink-600',
      'from-orange-500 to-red-600',
      'from-teal-500 to-green-600',
      'from-indigo-500 to-purple-600',
      'from-pink-500 to-rose-600',
      'from-cyan-500 to-blue-600'
    ]
    
    const hash = name.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0)
    return colors[hash % colors.length]
  }

  return (
    <div className={`${getSizeClasses()} ${className}`}>
      <div className={`w-full h-full bg-gradient-to-br ${getGradient(name)} rounded-full flex items-center justify-center text-white font-semibold`}>
        {getInitials(name)}
      </div>
    </div>
  )
}

export default AvatarImage