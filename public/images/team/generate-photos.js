// Script pour générer des photos d'équipe professionnelles
// Utilise des services d'avatars générés pour créer des photos réalistes

const teamMembers = [
  {
    name: 'Marie Dubois',
    filename: 'marie-dubois.jpg',
    description: 'CEO & Co-fondatrice - Femme professionnelle, 35-40 ans, souriante'
  },
  {
    name: 'Jean Martin', 
    filename: 'jean-martin.jpg',
    description: 'CTO & Co-fondateur - Homme professionnel, 35-40 ans, souriant'
  },
  {
    name: 'Sophie Laurent',
    filename: 'sophie-laurent.jpg', 
    description: 'Lead Developer Frontend - Femme professionnelle, 30-35 ans, souriante'
  },
  {
    name: 'Pierre Moreau',
    filename: 'pierre-moreau.jpg',
    description: 'Lead Developer Mobile - Homme professionnel, 30-35 ans, souriant'
  },
  {
    name: 'Alexandre Chen',
    filename: 'alexandre-chen.jpg',
    description: 'Data Scientist Senior - Homme professionnel, 28-32 ans, souriant'
  },
  {
    name: 'Camille Rousseau',
    filename: 'camille-rousseau.jpg',
    description: 'DevOps & Infrastructure - Femme professionnelle, 28-32 ans, souriante'
  }
]

// URLs des services d'avatars professionnels
const avatarServices = [
  'https://i.pravatar.cc/400?img=1', // Service 1
  'https://i.pravatar.cc/400?img=2', // Service 2  
  'https://i.pravatar.cc/400?img=3', // Service 3
  'https://i.pravatar.cc/400?img=4', // Service 4
  'https://i.pravatar.cc/400?img=5', // Service 5
  'https://i.pravatar.cc/400?img=6', // Service 6
]

console.log('Photos d\'équipe à générer:')
teamMembers.forEach((member, index) => {
  console.log(`${index + 1}. ${member.name}`)
  console.log(`   Fichier: ${member.filename}`)
  console.log(`   Description: ${member.description}`)
  console.log(`   URL: ${avatarServices[index]}`)
  console.log('')
})

console.log('Instructions:')
console.log('1. Téléchargez chaque image depuis les URLs ci-dessus')
console.log('2. Renommez les fichiers selon les noms indiqués')
console.log('3. Placez les fichiers dans le dossier public/images/team/')
console.log('4. Ou utilisez un photographe professionnel pour de vraies photos')