const STRAPI_URL = process.env.STRAPI_URL || 'http://localhost:1337'

class StrapiClient {
  constructor() {
    this.baseURL = STRAPI_URL
  }

  async request(endpoint, options = {}) {
    const url = `${this.baseURL}${endpoint}`
    
    const config = {
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
      ...options,
    }

    try {
      const response = await fetch(url, config)
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }
      
      return await response.json()
    } catch (error) {
      console.error('Strapi request failed:', error)
      throw error
    }
  }

  // Articles de blog
  async getBlogPosts(params = {}) {
    const queryParams = new URLSearchParams({
      'pagination[pageSize]': params.limit || 10,
      'pagination[page]': params.page || 1,
      'sort': params.sort || 'publishedAt:desc',
      'populate': '*',
      ...params.filters
    })

    return this.request(`/api/blog-posts?${queryParams}`)
  }

  async getBlogPost(slug) {
    const queryParams = new URLSearchParams({
      'filters[slug][$eq]': slug,
      'populate': '*'
    })

    const response = await this.request(`/api/blog-posts?${queryParams}`)
    return response.data?.[0] || null
  }

  // Projets/Réalisations
  async getProjects(params = {}) {
    const queryParams = new URLSearchParams({
      'pagination[pageSize]': params.limit || 10,
      'pagination[page]': params.page || 1,
      'sort': params.sort || 'createdAt:desc',
      'populate': '*',
      ...params.filters
    })

    return this.request(`/api/projects?${queryParams}`)
  }

  async getProject(slug) {
    const queryParams = new URLSearchParams({
      'filters[slug][$eq]': slug,
      'populate': '*'
    })

    const response = await this.request(`/api/projects?${queryParams}`)
    return response.data?.[0] || null
  }

  // Témoignages
  async getTestimonials(params = {}) {
    const queryParams = new URLSearchParams({
      'pagination[pageSize]': params.limit || 10,
      'sort': params.sort || 'createdAt:desc',
      'populate': '*',
      ...params.filters
    })

    return this.request(`/api/testimonials?${queryParams}`)
  }

  // Services
  async getServices() {
    const queryParams = new URLSearchParams({
      'sort': 'order:asc',
      'populate': '*'
    })

    return this.request(`/api/services?${queryParams}`)
  }

  // Équipe
  async getTeam() {
    const queryParams = new URLSearchParams({
      'sort': 'order:asc',
      'populate': '*'
    })

    return this.request(`/api/team-members?${queryParams}`)
  }

  // Configuration du site
  async getSiteConfig() {
    return this.request('/api/site-config?populate=*')
  }

  // Envoi de formulaire de contact
  async submitContactForm(data) {
    return this.request('/api/contact-forms', {
      method: 'POST',
      body: JSON.stringify({ data }),
    })
  }

  // Envoi de demande de rendez-vous
  async submitAppointmentForm(data) {
    return this.request('/api/appointment-forms', {
      method: 'POST',
      body: JSON.stringify({ data }),
    })
  }
}

// Instance singleton
const strapi = new StrapiClient()

export default strapi

// Fonctions utilitaires pour les images Strapi
export const getStrapiImageUrl = (image, size = 'medium') => {
  if (!image) return null
  
  const baseUrl = STRAPI_URL
  const imageUrl = image.url || image
  
  if (imageUrl.startsWith('http')) {
    return imageUrl
  }
  
  return `${baseUrl}${imageUrl}`
}

export const getStrapiMediaUrl = (media) => {
  if (!media) return null
  
  const baseUrl = STRAPI_URL
  const mediaUrl = media.url || media
  
  if (mediaUrl.startsWith('http')) {
    return mediaUrl
  }
  
  return `${baseUrl}${mediaUrl}`
}