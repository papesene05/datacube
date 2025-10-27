'use client'

import Image from 'next/image'

interface AvatarImageProps {
  name: string
  size?: 'sm' | 'md' | 'lg'
  className?: string
  photoUrl?: string
}

const AvatarImage = ({ name, size = 'md', className = '', photoUrl }: AvatarImageProps) => {
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

  // Si une photo est fournie, l'afficher
  if (photoUrl) {
    return (
      <div className={`${getSizeClasses()} ${className}`}>
        <div className="w-full h-full rounded-full overflow-hidden">
          <Image
            src={photoUrl}
            alt={`Photo de ${name}`}
            width={size === 'sm' ? 40 : size === 'lg' ? 96 : 64}
            height={size === 'sm' ? 40 : size === 'lg' ? 96 : 64}
            className="w-full h-full object-cover"
            priority={size === 'lg'} // Priorité pour les grandes images
            placeholder="blur"
            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
            sizes={size === 'sm' ? '40px' : size === 'lg' ? '96px' : '64px'}
            onError={(e) => {
              // En cas d'erreur de chargement, afficher l'avatar par défaut
              const target = e.target as HTMLImageElement
              target.style.display = 'none'
              const parent = target.parentElement
              if (parent) {
                parent.innerHTML = `
                  <div class="w-full h-full bg-gradient-to-br ${getGradient(name)} rounded-full flex items-center justify-center text-white font-semibold">
                    ${getInitials(name)}
                  </div>
                `
              }
            }}
          />
        </div>
      </div>
    )
  }

  // Avatar par défaut avec gradient
  return (
    <div className={`${getSizeClasses()} ${className}`}>
      <div className={`w-full h-full bg-gradient-to-br ${getGradient(name)} rounded-full flex items-center justify-center text-white font-semibold`}>
        {getInitials(name)}
      </div>
    </div>
  )
}

export default AvatarImage