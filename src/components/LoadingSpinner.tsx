'use client'

interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg'
  className?: string
}

const LoadingSpinner = ({ size = 'md', className = '' }: LoadingSpinnerProps) => {
  const getSizeClasses = () => {
    switch (size) {
      case 'sm':
        return 'w-4 h-4'
      case 'lg':
        return 'w-12 h-12'
      default:
        return 'w-8 h-8'
    }
  }

  return (
    <div className={`flex items-center justify-center ${className}`}>
      <div className={`${getSizeClasses()} animate-spin rounded-full border-2 border-gray-300 border-t-primary-600`} />
    </div>
  )
}

export default LoadingSpinner