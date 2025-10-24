import Hero from '@/components/Hero'
import ServicesSection from '@/components/ServicesSection'
import SolutionsSection from '@/components/SolutionsSection'
import PortfolioSection from '@/components/PortfolioSection'
import AboutSection from '@/components/AboutSection'
import TestimonialsSection from '@/components/TestimonialsSection'
import CTASection from '@/components/CTASection'

export default function HomePage() {
  return (
    <>
      <Hero />
      <ServicesSection />
      <SolutionsSection />
      <PortfolioSection />
      <AboutSection />
      <TestimonialsSection />
      <CTASection />
    </>
  )
}