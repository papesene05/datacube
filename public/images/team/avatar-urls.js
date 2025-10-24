// URLs d'avatars réalistes générés pour l'équipe DataCube
// Ces avatars sont générés par des services d'IA pour un aspect professionnel

const avatarUrls = {
  // Équipe principale (2 membres réels)
  'marie-dubois': 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face&auto=format&q=80',
  'jean-martin': 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face&auto=format&q=80',
  
  // Équipe étendue (pour l'expansion future)
  'sophie-laurent': 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face&auto=format&q=80',
  'pierre-moreau': 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face&auto=format&q=80',
  'alexandre-chen': 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face&auto=format&q=80',
  'camille-rousseau': 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&h=400&fit=crop&crop=face&auto=format&q=80'
}

// Alternative avec des avatars générés par IA (plus diversifiés)
const aiAvatarUrls = {
  'marie-dubois': 'https://i.pravatar.cc/400?img=1',
  'jean-martin': 'https://i.pravatar.cc/400?img=2',
  'sophie-laurent': 'https://i.pravatar.cc/400?img=3',
  'pierre-moreau': 'https://i.pravatar.cc/400?img=4',
  'alexandre-chen': 'https://i.pravatar.cc/400?img=5',
  'camille-rousseau': 'https://i.pravatar.cc/400?img=6'
}

// Service d'avatars professionnels
const professionalAvatars = {
  'marie-dubois': 'https://randomuser.me/api/portraits/women/1.jpg',
  'jean-martin': 'https://randomuser.me/api/portraits/men/1.jpg',
  'sophie-laurent': 'https://randomuser.me/api/portraits/women/2.jpg',
  'pierre-moreau': 'https://randomuser.me/api/portraits/men/2.jpg',
  'alexandre-chen': 'https://randomuser.me/api/portraits/men/3.jpg',
  'camille-rousseau': 'https://randomuser.me/api/portraits/women/3.jpg'
}

console.log('Avatars disponibles:')
console.log('1. Unsplash (photos réelles):', avatarUrls)
console.log('2. Pravatar (IA généré):', aiAvatarUrls)
console.log('3. RandomUser (professionnel):', professionalAvatars)

// Recommandation: Utiliser RandomUser pour un aspect plus professionnel
module.exports = {
  avatarUrls,
  aiAvatarUrls,
  professionalAvatars
}