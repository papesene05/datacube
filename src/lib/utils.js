import { clsx } from 'clsx'

// Fonction utilitaire pour combiner les classes CSS
export function cn(...inputs) {
  return clsx(inputs)
}

// Fonction pour formater les dates
export function formatDate(date, locale = 'fr-FR') {
  if (!date) return ''
  
  const dateObj = typeof date === 'string' ? new Date(date) : date
  
  return new Intl.DateTimeFormat(locale, {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(dateObj)
}

// Fonction pour formater les dates courtes
export function formatDateShort(date, locale = 'fr-FR') {
  if (!date) return ''
  
  const dateObj = typeof date === 'string' ? new Date(date) : date
  
  return new Intl.DateTimeFormat(locale, {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  }).format(dateObj)
}

// Fonction pour générer un slug à partir d'un titre
export function generateSlug(title) {
  return title
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '') // Supprime les accents
    .replace(/[^a-z0-9\s-]/g, '') // Supprime les caractères spéciaux
    .replace(/\s+/g, '-') // Remplace les espaces par des tirets
    .replace(/-+/g, '-') // Supprime les tirets multiples
    .trim()
}

// Fonction pour tronquer un texte
export function truncateText(text, maxLength = 150) {
  if (!text || text.length <= maxLength) return text
  
  return text.substring(0, maxLength).trim() + '...'
}

// Fonction pour extraire le texte d'un contenu HTML
export function extractTextFromHTML(html) {
  if (!html) return ''
  
  // Supprime les balises HTML
  const text = html.replace(/<[^>]*>/g, '')
  
  // Supprime les espaces multiples
  return text.replace(/\s+/g, ' ').trim()
}

// Fonction pour valider un email
export function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

// Fonction pour valider un numéro de téléphone français
export function isValidFrenchPhone(phone) {
  const phoneRegex = /^(?:(?:\+|00)33|0)\s*[1-9](?:[\s.-]*\d{2}){4}$/
  return phoneRegex.test(phone.replace(/\s/g, ''))
}

// Fonction pour formater un numéro de téléphone
export function formatPhoneNumber(phone) {
  if (!phone) return ''
  
  // Supprime tous les caractères non numériques
  const cleaned = phone.replace(/\D/g, '')
  
  // Format français
  if (cleaned.length === 10 && cleaned.startsWith('0')) {
    return cleaned.replace(/(\d{2})(\d{2})(\d{2})(\d{2})(\d{2})/, '$1 $2 $3 $4 $5')
  }
  
  // Format international
  if (cleaned.length === 12 && cleaned.startsWith('33')) {
    return `+${cleaned.substring(0, 2)} ${cleaned.substring(2, 4)} ${cleaned.substring(4, 6)} ${cleaned.substring(6, 8)} ${cleaned.substring(8, 10)}`
  }
  
  return phone
}

// Fonction pour générer des métadonnées SEO
export function generateSEOMeta(title, description, image = null, url = null) {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://datacube.fr'
  
  return {
    title: title ? `${title} | DataCube` : 'DataCube - Solutions IA, Data & Développement',
    description: description || 'DataCube propose des solutions innovantes en Intelligence Artificielle, Data Science et Développement Web/Mobile pour transformer votre entreprise.',
    openGraph: {
      title: title ? `${title} | DataCube` : 'DataCube - Solutions IA, Data & Développement',
      description: description || 'DataCube propose des solutions innovantes en Intelligence Artificielle, Data Science et Développement Web/Mobile pour transformer votre entreprise.',
      type: 'website',
      locale: 'fr_FR',
      url: url ? `${baseUrl}${url}` : baseUrl,
      siteName: 'DataCube',
      images: image ? [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: title || 'DataCube',
        }
      ] : [],
    },
    twitter: {
      card: 'summary_large_image',
      title: title ? `${title} | DataCube` : 'DataCube - Solutions IA, Data & Développement',
      description: description || 'DataCube propose des solutions innovantes en Intelligence Artificielle, Data Science et Développement Web/Mobile pour transformer votre entreprise.',
      images: image ? [image] : [],
    },
  }
}

// Fonction pour gérer les erreurs
export function handleError(error, context = '') {
  console.error(`Error in ${context}:`, error)
  
  // Log l'erreur pour le monitoring (Sentry, etc.)
  // Sentry.captureException(error, { tags: { context } })
  
  return {
    error: true,
    message: error.message || 'Une erreur est survenue',
    context
  }
}

// Fonction pour debounce
export function debounce(func, wait) {
  let timeout
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout)
      func(...args)
    }
    clearTimeout(timeout)
    timeout = setTimeout(later, wait)
  }
}

// Fonction pour throttle
export function throttle(func, limit) {
  let inThrottle
  return function() {
    const args = arguments
    const context = this
    if (!inThrottle) {
      func.apply(context, args)
      inThrottle = true
      setTimeout(() => inThrottle = false, limit)
    }
  }
}

// Fonction pour copier du texte dans le presse-papiers
export async function copyToClipboard(text) {
  try {
    await navigator.clipboard.writeText(text)
    return { success: true }
  } catch (error) {
    // Fallback pour les navigateurs plus anciens
    const textArea = document.createElement('textarea')
    textArea.value = text
    document.body.appendChild(textArea)
    textArea.select()
    try {
      document.execCommand('copy')
      document.body.removeChild(textArea)
      return { success: true }
    } catch (fallbackError) {
      document.body.removeChild(textArea)
      return { success: false, error: fallbackError }
    }
  }
}

// Fonction pour détecter si l'utilisateur est sur mobile
export function isMobile() {
  if (typeof window === 'undefined') return false
  return window.innerWidth < 768
}

// Fonction pour détecter si l'utilisateur est sur tablette
export function isTablet() {
  if (typeof window === 'undefined') return false
  return window.innerWidth >= 768 && window.innerWidth < 1024
}

// Fonction pour détecter si l'utilisateur est sur desktop
export function isDesktop() {
  if (typeof window === 'undefined') return false
  return window.innerWidth >= 1024
}