import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '../styles/globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'),
  title: 'DataCube - Expert IA & Développement Web Paris | Solutions Data Science',
  description: 'DataCube : expert en Intelligence Artificielle, Data Science et Développement Web/Mobile à Paris. Solutions sur mesure pour entreprises. Équipe de 5 experts. Devis gratuit.',
  keywords: 'développement web Paris, intelligence artificielle, data science, développement mobile, machine learning, big data, startup tech Paris, solutions IA entreprise, développement React, développement mobile React Native, data scientist Paris, expert IA France',
  authors: [{ name: 'DataCube', url: 'https://datacube.fr' }],
  creator: 'DataCube',
  publisher: 'DataCube',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: 'DataCube - Expert IA & Développement Web Paris | Solutions Data Science',
    description: 'Transformez votre entreprise avec nos solutions innovantes en IA, Data et Développement. Équipe de 5 experts basée à Paris. Devis gratuit.',
    type: 'website',
    locale: 'fr_FR',
    url: '/',
    siteName: 'DataCube',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'DataCube - Solutions IA, Data & Développement',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'DataCube - Expert IA & Développement Web Paris',
    description: 'Transformez votre entreprise avec nos solutions innovantes en IA, Data et Développement. Équipe de 5 experts basée à Paris.',
    images: ['/images/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <head>
        {/* Preload des ressources critiques */}
        <link rel="preload" href="/fonts/inter.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="//randomuser.me" />
        <link rel="dns-prefetch" href="//images.unsplash.com" />
        <link rel="dns-prefetch" href="//i.pravatar.cc" />
        
        {/* Optimisation des polices */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className={inter.className}>
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}