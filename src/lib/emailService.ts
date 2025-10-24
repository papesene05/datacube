import emailjs from '@emailjs/browser'

// Configuration EmailJS
const EMAILJS_SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || 'service_datacube'
const EMAILJS_TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || 'template_contact'
const EMAILJS_PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || 'your_public_key'

// Initialiser EmailJS
emailjs.init(EMAILJS_PUBLIC_KEY)

export interface ContactFormData {
  name: string
  email: string
  company?: string
  phone?: string
  subject: string
  message: string
  budget?: string
  timeline?: string
}

export const sendContactEmail = async (formData: ContactFormData): Promise<boolean> => {
  try {
    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      company: formData.company || 'Non renseigné',
      phone: formData.phone || 'Non renseigné',
      subject: formData.subject,
      message: formData.message,
      budget: formData.budget || 'Non renseigné',
      timeline: formData.timeline || 'Non renseigné',
      to_email: 'contact@datacube.fr', // Email de destination
      reply_to: formData.email
    }

    const response = await emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID,
      templateParams
    )

    console.log('Email envoyé avec succès:', response)
    return true
  } catch (error) {
    console.error('Erreur lors de l\'envoi de l\'email:', error)
    return false
  }
}

// Fonction de validation des données
export const validateContactForm = (formData: ContactFormData): { isValid: boolean; errors: string[] } => {
  const errors: string[] = []

  if (!formData.name.trim()) {
    errors.push('Le nom est requis')
  }

  if (!formData.email.trim()) {
    errors.push('L\'email est requis')
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
    errors.push('L\'email n\'est pas valide')
  }

  if (!formData.subject.trim()) {
    errors.push('Le sujet est requis')
  }

  if (!formData.message.trim()) {
    errors.push('Le message est requis')
  } else if (formData.message.trim().length < 10) {
    errors.push('Le message doit contenir au moins 10 caractères')
  }

  if (formData.phone && !/^[\+]?[0-9\s\-\(\)]{10,}$/.test(formData.phone)) {
    errors.push('Le numéro de téléphone n\'est pas valide')
  }

  return {
    isValid: errors.length === 0,
    errors
  }
}