export const metadata = {
  title: 'Conditions générales de vente - DataCube',
  description: 'Conditions générales de vente et prestations de services de DataCube.',
}

export default function CGVPage() {
  return (
    <div className="pt-20">
      <section className="section-padding bg-white">
        <div className="container-custom max-w-4xl">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
            Conditions générales de vente
          </h1>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 mb-6">
              Les présentes conditions générales de vente régissent les relations contractuelles 
              entre DataCube et ses clients pour la fourniture de services en Intelligence Artificielle, 
              Data Science et Développement Web/Mobile.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Définitions</h2>
            <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
              <li><strong>DataCube</strong> : Société prestataire de services</li>
              <li><strong>Client</strong> : Toute personne physique ou morale contractant avec DataCube</li>
              <li><strong>Services</strong> : Prestations d'IA, Data Science et Développement</li>
              <li><strong>Projet</strong> : Mission spécifique définie dans un devis</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Objet</h2>
            <p className="text-gray-600 mb-6">
              DataCube propose des services de conseil, développement et mise en œuvre de solutions 
              technologiques dans les domaines de l'Intelligence Artificielle, de la Data Science 
              et du Développement Web/Mobile.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Devis et commande</h2>
            <p className="text-gray-600 mb-4">
              Toute prestation fait l'objet d'un devis détaillé comprenant :
            </p>
            <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
              <li>Description précise des services</li>
              <li>Délais de réalisation</li>
              <li>Tarifs et modalités de paiement</li>
              <li>Conditions particulières</li>
            </ul>
            <p className="text-gray-600 mb-6">
              Le devis est valable 30 jours. La commande est ferme et définitive après signature 
              du devis par le client.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Tarifs et facturation</h2>
            <p className="text-gray-600 mb-4">
              Les tarifs sont exprimés en euros hors taxes. Ils sont fermes et non révisables 
              pendant la durée du projet, sauf modification du cahier des charges.
            </p>
            <p className="text-gray-600 mb-6">
              La facturation s'effectue selon les modalités définies dans le devis :
            </p>
            <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
              <li>Acompte à la commande (30%)</li>
              <li>Facturation intermédiaire selon l'avancement</li>
              <li>Solde à la livraison</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Modalités de paiement</h2>
            <p className="text-gray-600 mb-6">
              Le paiement s'effectue par virement bancaire dans un délai de 30 jours 
              à compter de la date d'émission de la facture. En cas de retard de paiement, 
              des pénalités de 3 fois le taux d'intérêt légal peuvent être appliquées.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Exécution des services</h2>
            <p className="text-gray-600 mb-4">
              DataCube s'engage à fournir les services avec diligence et selon les règles de l'art. 
              Les délais sont donnés à titre indicatif et peuvent être modifiés en cas de :
            </p>
            <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
              <li>Modification du cahier des charges</li>
              <li>Retard dans la fourniture d'informations par le client</li>
              <li>Force majeure</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Obligations du client</h2>
            <p className="text-gray-600 mb-4">
              Le client s'engage à :
            </p>
            <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
              <li>Fournir les informations nécessaires à la réalisation du projet</li>
              <li>Désigner un interlocuteur unique</li>
              <li>Effectuer les validations dans les délais convenus</li>
              <li>Respecter les modalités de paiement</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Propriété intellectuelle</h2>
            <p className="text-gray-600 mb-6">
              Les développements spécifiques réalisés pour le client lui appartiennent après 
              règlement intégral des factures. DataCube conserve les droits sur ses méthodes, 
              outils et savoir-faire génériques.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Confidentialité</h2>
            <p className="text-gray-600 mb-6">
              DataCube s'engage à respecter la confidentialité des informations communiquées 
              par le client et à ne pas les divulguer à des tiers sans autorisation écrite.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Garantie</h2>
            <p className="text-gray-600 mb-6">
              DataCube garantit la conformité des services aux spécifications du devis. 
              La garantie couvre les défauts de conception et de réalisation pendant 12 mois 
              après la livraison.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Responsabilité</h2>
            <p className="text-gray-600 mb-6">
              La responsabilité de DataCube est limitée au montant des honoraires perçus 
              pour le projet concerné. DataCube ne peut être tenue responsable des dommages 
              indirects ou de la perte de profits.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">12. Résiliation</h2>
            <p className="text-gray-600 mb-6">
              En cas de résiliation anticipée, le client devra régler les prestations 
              déjà réalisées et les frais engagés. DataCube peut résilier le contrat 
              en cas de non-paiement après mise en demeure restée sans effet.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">13. Droit applicable</h2>
            <p className="text-gray-600 mb-6">
              Les présentes conditions sont soumises au droit français. 
              Tout litige relève de la compétence des tribunaux de Paris.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">14. Contact</h2>
            <p className="text-gray-600 mb-4">
              Pour toute question concernant ces conditions générales :
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