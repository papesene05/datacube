import Hero from '@/components/Hero'
import ServicesSection from '@/components/ServicesSection'
import SolutionsSection from '@/components/SolutionsSection'
import PortfolioSection from '@/components/PortfolioSection'
import TeamSection from '@/components/TeamSection'
import AboutSection from '@/components/AboutSection'
import TestimonialsSection from '@/components/TestimonialsSection'
import CTASection from '@/components/CTASection'
import StructuredData from '@/components/StructuredData'
import LazySection from '@/components/LazySection'

export default function HomePage() {
  const organizationData = {
    name: 'DataCube',
    description: 'Expert en Intelligence Artificielle, Data Science et Développement Web/Mobile à Paris. Solutions sur mesure pour entreprises.',
    url: 'https://datacube.fr',
    logo: 'https://datacube.fr/images/logo.png',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Paris',
      addressCountry: 'FR'
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+33-1-23-45-67-89',
      contactType: 'customer service',
      email: 'contact@datacube.fr'
    },
    sameAs: [
      'https://linkedin.com/company/datacube',
      'https://twitter.com/datacube',
      'https://github.com/datacube'
    ],
    foundingDate: '2022',
    numberOfEmployees: '5',
    industry: 'Technology',
    serviceArea: {
      '@type': 'Country',
      name: 'France'
    }
  }

  const websiteData = {
    name: 'DataCube',
    description: 'Expert en Intelligence Artificielle, Data Science et Développement Web/Mobile à Paris',
    url: 'https://datacube.fr',
    potentialAction: {
      '@type': 'SearchAction',
      target: 'https://datacube.fr/search?q={search_term_string}',
      'query-input': 'required name=search_term_string'
    }
  }

  return (
    <>
      <StructuredData type="Organization" data={organizationData} />
      <StructuredData type="WebSite" data={websiteData} />
      <Hero />
      <LazySection fallback={<div className="h-96 bg-gray-100 animate-pulse rounded-lg" />}>
        <ServicesSection />
      </LazySection>
      <LazySection fallback={<div className="h-96 bg-gray-100 animate-pulse rounded-lg" />}>
        <SolutionsSection />
      </LazySection>
      <LazySection fallback={<div className="h-96 bg-gray-100 animate-pulse rounded-lg" />}>
        <PortfolioSection />
      </LazySection>
      <LazySection fallback={<div className="h-96 bg-gray-100 animate-pulse rounded-lg" />}>
        <TeamSection />
      </LazySection>
      <LazySection fallback={<div className="h-96 bg-gray-100 animate-pulse rounded-lg" />}>
        <AboutSection />
      </LazySection>
      <LazySection fallback={<div className="h-96 bg-gray-100 animate-pulse rounded-lg" />}>
        <TestimonialsSection />
      </LazySection>
      <LazySection fallback={<div className="h-96 bg-gray-100 animate-pulse rounded-lg" />}>
        <CTASection />
      </LazySection>
    </>
  )
}