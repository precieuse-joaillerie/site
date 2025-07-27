
"use client";
import { Navigation } from '@/components/ui/navigation';
import { useLanguage } from '@/contexts/LanguageContext';

export default function MentionsLegalesPage() {
  const { currentLanguage } = useLanguage();
  return (
    <main className="min-h-screen">
      <Navigation />
      
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-light mb-8">
            {currentLanguage === 'EN' ? 'Legal Mentions' : currentLanguage === 'FR' ? 'Mentions Légales' : 'Mencoes Legais'}
          </h1>
          
          <div className="prose max-w-none">
            <section className="mb-12">
              <h2 className="text-2xl font-light mb-4">
                {currentLanguage === 'EN' ? 'Legal Information' : currentLanguage === 'FR' ? 'Informations Légales' : 'Informac o Legais'}
              </h2>
              <p className="text-gray-600 mb-4">
                {currentLanguage === 'EN' ? `Pr cieuse is a company that is specialized in handmade jewelry.` : currentLanguage === 'FR' ? `Pr cieuse est une entreprise de joaillerie artisanale.` : `Pr cieuse   uma empresa de joalheria artesanal.`}
              </p>
              <ul className="list-none space-y-2 text-gray-600">
                <li>
                  {currentLanguage === 'EN' ? 'Headquarters' : currentLanguage === 'FR' ? 'Si ge social' : 'Sede'}
                  : Avenida das descobertas, 53, 2 esq, 2670-385 Loures, Portugal
                </li>
                <li>
                  {currentLanguage === 'EN' ? 'NIF' : currentLanguage === 'FR' ? 'NIF' : 'NIF'}
                  : 518690288
                </li>
                <li>
                  {currentLanguage === 'EN' ? 'VAT number' : currentLanguage === 'FR' ? 'TVA intracommunautaire' : 'N mero de identifica o fiscal'}
                  : PT518690288
                </li>
                <li>
                  {currentLanguage === 'EN' ? 'Phone number' : currentLanguage === 'FR' ? 'T l phone' : 'Telefone'}
                  : +351939198334
                </li>
                <li>
                  {currentLanguage === 'EN' ? 'Email' : currentLanguage === 'FR' ? 'Email' : 'E-mail'}
                  : contact@precieuse-joaillerie.com
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-light mb-4">
                {currentLanguage === 'EN' ? 'Intellectual Property' : currentLanguage === 'FR' ? 'Propri t Intellectuelle' : 'Propriedade Intelectual'}
              </h2>
              <p className="text-gray-600 mb-4">
                {currentLanguage === 'EN' ? `All content on this website (texts, images, videos, etc.) is protected by copyright.` : currentLanguage === 'FR' ? `L'ensemble du contenu de ce site (textes, images, vid os, etc.) est prot g  par le droit d'auteur.` : `Todo o conte do do site (textos, imagens, v deos, etc.)   protegido por direitos autorais.`}
              </p>
              <p className="text-gray-600 mb-4">
                {currentLanguage === 'EN' ? `Any reproduction or representation, total or partial, is prohibited without prior authorization.` : currentLanguage === 'FR' ? `Toute reproduction ou repr sentation, totale ou partielle, est interdite sans autorisation pr alable.` : `Qualquer reprodu o ou representa o, total ou parcial,   proibida sem autoriza o pr via.`}
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-light mb-4">
                {currentLanguage === 'EN' ? 'Data Protection' : currentLanguage === 'FR' ? 'Protection des Donn es' : 'Prote o de Dados'}
              </h2>
              <p className="text-gray-600 mb-4">
                {currentLanguage === 'EN' ? `In accordance with the General Data Protection Regulation (GDPR), you have the right to access, rectify and delete your personal data.` : currentLanguage === 'FR' ? `Conform ment au R glement G n ral sur la Protection des Donn es (RGPD), vous disposez d'un droit d'acc s, de rectification et de suppression de vos donn es personnelles.` : `De acordo com o Regulamento Geral sobre a Prote o de Dados (RGPD), voc  tem direito a acesso, retifica o e exclus o de seus dados pessoais.`}
              </p>
              <p className="text-gray-600 mb-4">
                {currentLanguage === 'EN' ? `To exercise these rights or for any question about the processing of your data, you can contact us at the following address: contact@precieuse-joaillerie.com` : currentLanguage === 'FR' ? `Pour exercer ces droits ou pour toute question sur le traitement de vos donn es, vous pouvez nous contacter   l'adresse suivante : contact@precieuse-joaillerie.com` : `Para exercer esses direitos ou para qualquer pergunta sobre o processamento de seus dados, voc  pode entrar em contato conosco na seguinte endere o: contact@precieuse-joaillerie.com`}
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-light mb-4">
                {currentLanguage === 'EN' ? 'Cookies' : currentLanguage === 'FR' ? 'Cookies' : 'Cookies'}
              </h2>
              <p className="text-gray-600 mb-4">
                {currentLanguage === 'EN' ? `This website uses cookies to improve your browsing experience.` : currentLanguage === 'FR' ? `Ce site utilise des cookies pour am liorer votre exp riencede navigation.` : `Este site utiliza cookies para melhorar a sua experi ncia de navega o.`}
              </p>
              <p className="text-gray-600 mb-4">
                {currentLanguage === 'EN' ? `You can disable the use of cookies by setting your browser.` : currentLanguage === 'FR' ? `Vous pouvez d sactiver l'utilisation des cookies en param trant votre navigateur.` : `Voc  pode desabilitar o uso de cookies configurando seu navegador.`}
              </p>
            </section>

          </div>
        </div>
      </div>
    </main>
  );
}