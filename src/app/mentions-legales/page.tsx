export const metadata = {
  title: 'Mentions légales - DataCube',
  description: 'Mentions légales et informations légales de DataCube.',
}

export default function MentionsLegalesPage() {
  return (
    <div className="pt-20">
      <section className="section-padding bg-white">
        <div className="container-custom max-w-4xl">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
            Mentions légales
          </h1>
          
          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Éditeur du site</h2>
            <p className="text-gray-600 mb-6">
              Le site web datacube.fr est édité par la société DataCube, société par actions simplifiée au capital de 10 000 euros, 
              immatriculée au RCS de Paris sous le numéro 123 456 789, dont le siège social est situé à Paris, France.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Directeur de publication</h2>
            <p className="text-gray-600 mb-6">
              Le directeur de la publication est Marie Dubois, en qualité de Présidente de la société DataCube.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Hébergement</h2>
            <p className="text-gray-600 mb-6">
              Le site est hébergé par Vercel Inc., 340 S Lemon Ave #4133, Walnut, CA 91789, États-Unis.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Propriété intellectuelle</h2>
            <p className="text-gray-600 mb-6">
              L'ensemble du contenu du site datacube.fr (textes, images, vidéos, logos, graphismes, etc.) est protégé par le droit d'auteur. 
              Toute reproduction, représentation, modification, publication, adaptation de tout ou partie des éléments du site, 
              quel que soit le moyen ou le procédé utilisé, est interdite, sauf autorisation écrite préalable de DataCube.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Responsabilité</h2>
            <p className="text-gray-600 mb-6">
              Les informations contenues sur ce site sont aussi précises que possible et le site remis à jour à différentes périodes de l'année, 
              mais peut toutefois contenir des inexactitudes ou des omissions. Si vous constatez une lacune, erreur ou ce qui parait être un dysfonctionnement, 
              merci de bien vouloir le signaler par email, à l'adresse contact@datacube.fr, en décrivant le problème de la manière la plus précise possible.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Liens hypertextes</h2>
            <p className="text-gray-600 mb-6">
              Des liens hypertextes peuvent être présents sur le site. L'utilisateur est informé qu'en cliquant sur ces liens, 
              il sortira du site datacube.fr. Ce dernier n'a pas de contrôle sur les pages web sur lesquelles aboutissent ces liens 
              et ne saurait, en aucun cas, être responsable de leur contenu.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Cookies</h2>
            <p className="text-gray-600 mb-6">
              Le site datacube.fr peut être amené à vous demander l'acceptation des cookies pour des besoins de statistiques et d'affichage. 
              Un cookie est une information déposée sur votre disque dur par le serveur du site que vous visitez. 
              Il contient plusieurs données qui sont stockées sur votre ordinateur dans un simple fichier texte auquel un serveur accède pour lire et enregistrer des informations.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Droit applicable</h2>
            <p className="text-gray-600 mb-6">
              Tout litige en relation avec l'utilisation du site datacube.fr est soumis au droit français. 
              Il est fait attribution exclusive de juridiction aux tribunaux compétents de Paris.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Contact</h2>
            <p className="text-gray-600 mb-6">
              Pour toute question concernant ces mentions légales, vous pouvez nous contacter :
            </p>
            <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
              <li>Par email : contact@datacube.fr</li>
              <li>Par téléphone : +33 1 23 45 67 89</li>
              <li>Par courrier : DataCube, Paris, France</li>
            </ul>

            <p className="text-sm text-gray-500 mt-8">
              Dernière mise à jour : {new Date().toLocaleDateString('fr-FR')}
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}