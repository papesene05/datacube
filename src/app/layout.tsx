import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '../styles/globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'),
  title: 'DataCube - Solutions IA, Data & Développement',
  description: 'DataCube propose des solutions innovantes en Intelligence Artificielle, Data Science et Développement Web/Mobile pour transformer votre entreprise.',
  keywords: 'IA, Intelligence Artificielle, Data Science, Développement Web, Développement Mobile, Machine Learning, Big Data',
  authors: [{ name: 'DataCube' }],
  openGraph: {
    title: 'DataCube - Solutions IA, Data & Développement',
    description: 'Transformez votre entreprise avec nos solutions innovantes en IA, Data et Développement.',
    type: 'website',
    locale: 'fr_FR',
    url: '/',
    siteName: 'DataCube',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'DataCube - Solutions IA, Data & Développement',
    description: 'Transformez votre entreprise avec nos solutions innovantes en IA, Data et Développement.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
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