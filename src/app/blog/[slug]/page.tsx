import { notFound } from 'next/navigation'
import Link from 'next/link'
import { ArrowLeft, Calendar, User, Clock, Tag } from 'lucide-react'

// Données des articles (en attendant l'intégration Strapi)
const blogPosts = {
  'ia-ecommerce-recommandations': {
    id: 1,
    title: 'L\'Intelligence Artificielle au service de l\'e-commerce',
    excerpt: 'Découvrez comment l\'IA transforme l\'expérience d\'achat en ligne et augmente les ventes grâce aux recommandations personnalisées.',
    content: `
      <h2>Introduction</h2>
      <p>L'Intelligence Artificielle révolutionne le secteur de l'e-commerce en offrant des expériences d'achat personnalisées et en optimisant les ventes. Dans cet article, nous explorons comment les systèmes de recommandation IA transforment l'industrie.</p>
      
      <h2>Les défis de l'e-commerce traditionnel</h2>
      <p>Les plateformes e-commerce traditionnelles font face à plusieurs défis :</p>
      <ul>
        <li>Difficulté à personnaliser l'expérience pour chaque utilisateur</li>
        <li>Taux d'abandon élevé des paniers d'achat</li>
        <li>Recommandations génériques peu efficaces</li>
        <li>Analyse limitée du comportement client</li>
      </ul>
      
      <h2>Comment l'IA transforme l'expérience</h2>
      <p>Les systèmes de recommandation basés sur l'IA analysent :</p>
      <ul>
        <li>L'historique d'achat du client</li>
        <li>Le comportement de navigation</li>
        <li>Les préférences exprimées</li>
        <li>Les interactions avec les produits</li>
      </ul>
      
      <h2>Résultats concrets</h2>
      <p>Nos clients ont observé des améliorations significatives :</p>
      <ul>
        <li>+40% d'augmentation des ventes</li>
        <li>-25% de taux d'abandon</li>
        <li>+60% de temps passé sur le site</li>
        <li>+35% de satisfaction client</li>
      </ul>
      
      <h2>Conclusion</h2>
      <p>L'IA n'est plus une option mais une nécessité pour rester compétitif dans l'e-commerce. Les entreprises qui adoptent ces technologies voient des résultats immédiats et durables.</p>
    `,
    slug: 'ia-ecommerce-recommandations',
    category: 'Intelligence Artificielle',
    tags: ['IA', 'E-commerce', 'Machine Learning', 'Recommandations'],
    author: 'Marie Dubois',
    authorAvatar: '/api/placeholder/40/40',
    publishedAt: '2024-01-15',
    readTime: '5 min',
    featured: true
  },
  'data-science-dashboards-optimisation': {
    id: 2,
    title: 'Data Science : Comment optimiser vos tableaux de bord',
    excerpt: 'Les meilleures pratiques pour créer des dashboards efficaces qui facilitent la prise de décision dans votre entreprise.',
    content: `
      <h2>L'importance des dashboards optimisés</h2>
      <p>Un tableau de bord bien conçu est essentiel pour une prise de décision efficace. Il doit être à la fois informatif et facile à comprendre.</p>
      
      <h2>Principes de design</h2>
      <p>Voici les principes clés pour créer des dashboards performants :</p>
      <ul>
        <li>Simplicité et clarté</li>
        <li>Hiérarchie visuelle logique</li>
        <li>Couleurs cohérentes</li>
        <li>Mise à jour en temps réel</li>
      </ul>
      
      <h2>Outils recommandés</h2>
      <p>Les meilleurs outils pour créer vos dashboards :</p>
      <ul>
        <li>Power BI pour l'intégration Microsoft</li>
        <li>Tableau pour la flexibilité</li>
        <li>Grafana pour le monitoring</li>
        <li>D3.js pour le développement custom</li>
      </ul>
      
      <h2>Métriques essentielles</h2>
      <p>Ne négligez pas ces indicateurs clés :</p>
      <ul>
        <li>KPIs business</li>
        <li>Métriques de performance</li>
        <li>Indicateurs de qualité</li>
        <li>Tendances temporelles</li>
      </ul>
    `,
    slug: 'data-science-dashboards-optimisation',
    category: 'Data Science',
    tags: ['Data Science', 'Visualisation', 'Business Intelligence', 'Analytics'],
    author: 'Jean Martin',
    authorAvatar: '/api/placeholder/40/40',
    publishedAt: '2024-01-10',
    readTime: '7 min',
    featured: true
  },
  'developpement-web-tendances-2024': {
    id: 3,
    title: 'Développement Web : Les tendances 2024',
    excerpt: 'Un aperçu des technologies et frameworks qui vont marquer le développement web cette année.',
    content: `
      <h2>Introduction</h2>
      <p>Le développement web évolue rapidement. Voici les tendances qui vont marquer 2024 et transformer notre façon de créer des applications web.</p>
      
      <h2>Frameworks JavaScript</h2>
      <p>Les frameworks continuent d'évoluer :</p>
      <ul>
        <li>React 18+ avec les nouvelles fonctionnalités</li>
        <li>Vue.js 3 et sa composition API</li>
        <li>Next.js 14 avec l'App Router</li>
        <li>SvelteKit pour la performance</li>
      </ul>
      
      <h2>Performance et optimisation</h2>
      <p>La performance reste une priorité :</p>
      <ul>
        <li>Core Web Vitals toujours importants</li>
        <li>Optimisation des images avec WebP</li>
        <li>Lazy loading intelligent</li>
        <li>Code splitting avancé</li>
      </ul>
      
      <h2>Accessibilité</h2>
      <p>L'accessibilité devient obligatoire :</p>
      <ul>
        <li>WCAG 2.2 comme standard</li>
        <li>Tests automatisés d'accessibilité</li>
        <li>Design inclusif par défaut</li>
        <li>Navigation au clavier optimisée</li>
      </ul>
    `,
    slug: 'developpement-web-tendances-2024',
    category: 'Développement Web',
    tags: ['Web', 'Tendances', 'React', 'Next.js', 'Performance'],
    author: 'Sophie Laurent',
    authorAvatar: '/api/placeholder/40/40',
    publishedAt: '2024-01-05',
    readTime: '6 min',
    featured: false
  },
  'mobile-native-vs-crossplatform': {
    id: 4,
    title: 'Applications mobiles : Native vs Cross-platform',
    excerpt: 'Comparaison détaillée entre le développement natif et cross-platform pour choisir la meilleure approche.',
    content: `
      <h2>Le dilemme du développement mobile</h2>
      <p>Choisir entre développement natif et cross-platform est crucial pour le succès de votre application mobile.</p>
      
      <h2>Développement natif</h2>
      <p>Avantages du développement natif :</p>
      <ul>
        <li>Performance optimale</li>
        <li>Accès complet aux APIs</li>
        <li>Expérience utilisateur native</li>
        <li>Intégration parfaite avec l'OS</li>
      </ul>
      
      <h2>Développement cross-platform</h2>
      <p>Avantages des solutions cross-platform :</p>
      <ul>
        <li>Code partagé entre plateformes</li>
        <li>Développement plus rapide</li>
        <li>Coûts réduits</li>
        <li>Maintenance simplifiée</li>
      </ul>
      
      <h2>Quand choisir quoi ?</h2>
      <p>Critères de décision :</p>
      <ul>
        <li>Budget et délais</li>
        <li>Complexité de l'application</li>
        <li>Performance requise</li>
        <li>Équipe de développement</li>
      </ul>
    `,
    slug: 'mobile-native-vs-crossplatform',
    category: 'Développement Mobile',
    tags: ['Mobile', 'React Native', 'Flutter', 'Performance', 'Développement'],
    author: 'Pierre Moreau',
    authorAvatar: '/api/placeholder/40/40',
    publishedAt: '2023-12-28',
    readTime: '8 min',
    featured: false
  },
  'machine-learning-guide-debutants': {
    id: 5,
    title: 'Machine Learning : Guide pour débutants',
    excerpt: 'Introduction complète au machine learning avec des exemples pratiques et des cas d\'usage concrets.',
    content: `
      <h2>Qu'est-ce que le Machine Learning ?</h2>
      <p>Le Machine Learning est une branche de l'intelligence artificielle qui permet aux machines d'apprendre à partir de données.</p>
      
      <h2>Types de Machine Learning</h2>
      <p>Il existe trois types principaux :</p>
      <ul>
        <li>Apprentissage supervisé</li>
        <li>Apprentissage non supervisé</li>
        <li>Apprentissage par renforcement</li>
      </ul>
      
      <h2>Outils et langages</h2>
      <p>Les outils essentiels :</p>
      <ul>
        <li>Python et ses bibliothèques</li>
        <li>Scikit-learn pour débuter</li>
        <li>TensorFlow pour le deep learning</li>
        <li>Jupyter pour l'expérimentation</li>
      </ul>
      
      <h2>Premiers pas</h2>
      <p>Comment commencer :</p>
      <ul>
        <li>Comprendre les mathématiques de base</li>
        <li>Pratiquer avec des datasets simples</li>
        <li>Implémenter des algorithmes classiques</li>
        <li>Participer à des compétitions</li>
      </ul>
    `,
    slug: 'machine-learning-guide-debutants',
    category: 'Intelligence Artificielle',
    tags: ['Machine Learning', 'IA', 'Python', 'Débutant', 'Tutoriel'],
    author: 'Marie Dubois',
    authorAvatar: '/api/placeholder/40/40',
    publishedAt: '2023-12-20',
    readTime: '12 min',
    featured: false
  },
  'securite-applications-web-bonnes-pratiques': {
    id: 6,
    title: 'Sécurité des applications web : Bonnes pratiques',
    excerpt: 'Les mesures essentielles à mettre en place pour sécuriser vos applications web et protéger vos données.',
    content: `
      <h2>L'importance de la sécurité web</h2>
      <p>La sécurité des applications web est cruciale pour protéger les données utilisateurs et la réputation de votre entreprise.</p>
      
      <h2>Vulnérabilités courantes</h2>
      <p>Les principales menaces :</p>
      <ul>
        <li>Injection SQL</li>
        <li>Cross-Site Scripting (XSS)</li>
        <li>Cross-Site Request Forgery (CSRF)</li>
        <li>Authentification faible</li>
      </ul>
      
      <h2>Bonnes pratiques</h2>
      <p>Mesures de protection :</p>
      <ul>
        <li>Validation et sanitisation des données</li>
        <li>HTTPS obligatoire</li>
        <li>Authentification robuste</li>
        <li>Mise à jour régulière</li>
      </ul>
      
      <h2>Outils de sécurité</h2>
      <p>Solutions recommandées :</p>
      <ul>
        <li>OWASP ZAP pour les tests</li>
        <li>SonarQube pour l'analyse de code</li>
        <li>Let's Encrypt pour les certificats</li>
        <li>Content Security Policy</li>
      </ul>
    `,
    slug: 'securite-applications-web-bonnes-pratiques',
    category: 'Développement Web',
    tags: ['Sécurité', 'Web', 'HTTPS', 'Authentification', 'Bonnes pratiques'],
    author: 'Jean Martin',
    authorAvatar: '/api/placeholder/40/40',
    publishedAt: '2023-12-15',
    readTime: '9 min',
    featured: false
  }
}

export async function generateStaticParams() {
  return Object.keys(blogPosts).map((slug) => ({
    slug: slug,
  }))
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const post = blogPosts[params.slug as keyof typeof blogPosts]
  
  if (!post) {
    return {
      title: 'Article non trouvé - DataCube',
    }
  }

  return {
    title: `${post.title} - DataCube Blog`,
    description: post.excerpt,
  }
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = blogPosts[params.slug as keyof typeof blogPosts]

  if (!post) {
    notFound()
  }

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Intelligence Artificielle':
        return 'bg-purple-100 text-purple-800'
      case 'Data Science':
        return 'bg-blue-100 text-blue-800'
      case 'Développement Web':
        return 'bg-green-100 text-green-800'
      case 'Développement Mobile':
        return 'bg-orange-100 text-orange-800'
      default:
        return 'bg-gray-100 text-gray-800'
    }
  }

  return (
    <div className="pt-20">
      {/* Header */}
      <section className="section-padding bg-gradient-to-br from-gray-50 to-primary-50">
        <div className="container-custom">
          <Link 
            href="/blog" 
            className="inline-flex items-center text-primary-600 hover:text-primary-700 mb-6"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Retour au blog
          </Link>
          
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center space-x-4 mb-6">
              <span className={`px-3 py-1 rounded-full text-sm font-medium ${getCategoryColor(post.category)}`}>
                {post.category}
              </span>
              {post.featured && (
                <span className="px-3 py-1 bg-primary-100 text-primary-800 rounded-full text-sm font-medium">
                  À la une
                </span>
              )}
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              {post.title}
            </h1>
            
            <div className="flex items-center space-x-6 text-gray-600 mb-8">
              <div className="flex items-center">
                <User className="w-5 h-5 mr-2" />
                {post.author}
              </div>
              <div className="flex items-center">
                <Calendar className="w-5 h-5 mr-2" />
                {new Date(post.publishedAt).toLocaleDateString('fr-FR')}
              </div>
              <div className="flex items-center">
                <Clock className="w-5 h-5 mr-2" />
                {post.readTime}
              </div>
            </div>

            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag, index) => (
                <span key={index} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div 
              className="prose prose-lg max-w-none"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </div>
        </div>
      </section>

      {/* Author */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl p-8">
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-xl">
                    {post.author.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">{post.author}</h3>
                  <p className="text-gray-600">Expert {post.category}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-primary-600 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold mb-4">
            Vous avez un projet similaire ?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Discutons de vos besoins et créons ensemble la solution 
            qui transformera votre entreprise.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/rdv" className="btn bg-white text-primary-600 hover:bg-gray-100 text-lg px-8 py-4">
              Demander un devis
            </Link>
            <Link href="/contact" className="btn border-2 border-white text-white hover:bg-white hover:text-primary-600 text-lg px-8 py-4">
              Nous contacter
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}