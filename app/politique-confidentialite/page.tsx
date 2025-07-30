"use client";
import { Navigation } from '@/components/ui/navigation';
import { useLanguage } from '@/contexts/LanguageContext';

export default function PolitiqueConfidentialitePage() {
  const { currentLanguage } = useLanguage();
  return (
    <main className="min-h-screen">
      <Navigation />
      
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-light mb-8">
            {currentLanguage === 'EN' ? 'Privacy Policy' : currentLanguage === 'FR' ? 'Politique de Confidentialité' : 'Política de Privacidade'}
          </h1>
          
          <div className="prose max-w-none space-y-8">
            <section>
              <h2 className="text-2xl font-light mb-4">
                {currentLanguage === 'EN' ? '1. Introduction' : currentLanguage === 'FR' ? '1. Introduction' : '1. Introdução'}
              </h2>
              <p className="text-gray-600 mb-4">
                {currentLanguage === 'EN' ? 'This Privacy Policy is intended to provide you with clear and transparent information about how Mundenfeitado Unipessoal LDA, a company registered in Portugal, collects, uses and protects your personal data when you use the website www.precieuse-joaillerie.com.' : currentLanguage === 'FR' ? 'La présente politique de confidentialité a pour but de vous informer de manière claire et transparente sur la manière dont Mundenfeitado Unipessoal LDA, société immatriculée au Portugal, collecte, utilise et protège vos données personnelles lorsque vous utilisez le site www.precieuse-joaillerie.com.' : 'Esta Política de Privacidade tem como objetivo fornecer a você informações claras e transparentes sobre como a Mundenfeitado Unipessoal LDA, uma empresa registrada em Portugal, coleta, usa e protege seus dados pessoais quando você usa o site www.precieuse-joaillerie.com.'}
              </p>
              <p className="text-gray-600">
                {currentLanguage === 'EN' ? 'By accessing this site, you accept this policy. It may be updated at any time, depending on legislative or technical developments.' : currentLanguage === 'FR' ? 'En accédant à ce site, vous acceptez la présente politique. Elle peut être mise à jour à tout moment, en fonction des évolutions législatives ou techniques.' : 'Ao aceder a este site, concorda com esta política. Poderá ser atualizada a qualquer momento, dependendo de desenvolvimentos legislativos ou técnicos.'}
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-light mb-4">
                {currentLanguage === 'EN' ? '2. Identity of the data controller' : currentLanguage === 'FR' ? '2. Identité du responsable du traitement' : '2. Identidade do responsável pelo tratamento de dados'}
              </h2>
              <div className="text-gray-600">
                <p className="mb-2">{currentLanguage === 'EN' ? 'Mundenfeitado Unipessoal LDA' : currentLanguage === 'FR' ? 'Mundenfeitado Unipessoal LDA' : 'Mundenfeitado Unipessoal LDA'}</p>
                <p className="mb-2">
                  {currentLanguage === 'EN' ? 'Head office : avenida das descobertas, 53, 2 esq' : currentLanguage === 'FR' ? 'Siège social : avenida das descobertas, 53, 2 esq' : 'Sede : avenida das descobertas, 53, 2 esq'}
                </p>
                <p className="mb-2">
                  {currentLanguage === 'EN' ? '2670-385 Loures' : currentLanguage === 'FR' ? '2670-385 Loures' : '2670-385 Loures'}
                </p>
                <p className="mb-2">
                  {currentLanguage === 'EN' ? 'Portugal' : currentLanguage === 'FR' ? 'Portugal' : 'Portugal'}
                </p>
                <p className="mb-2">
                  {currentLanguage === 'EN' ? 'NIF : 518690288' : currentLanguage === 'FR' ? 'NIF : 518690288' : 'NIF : 518690288'}
                </p>
                <p className="mb-2">
                  {currentLanguage === 'EN' ? 'Email : contact@precieuse-joaillerie.com' : currentLanguage === 'FR' ? 'Email : contact@precieuse-joaillerie.com' : 'Email : contact@precieuse-joaillerie.com'}
                </p>
                <p>
                  {currentLanguage === 'EN' ? 'Data controller : Emeline Le Ray' : currentLanguage === 'FR' ? 'Responsable du traitement : Emeline Le Ray' : 'Responsável pelo tratamento de dados : Emeline Le Ray'}
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-light mb-4">
                {currentLanguage === 'EN' ? '3. Collected data' : currentLanguage === 'FR' ? '3. Données collectées' : '3. Dados coletados'}
              </h2>
              <p className="text-gray-600 mb-4">
                {currentLanguage === 'EN' ? 'We only collect the data strictly necessary for the purpose pursued. These data may include :' : currentLanguage === 'FR' ? 'Nous collectons uniquement les données strictement nécessaires à la finalité poursuivie. Ces données peuvent inclure :' : 'Coletamos apenas os dados estritamente necessários para a finalidade pretendida. Esses dados podem incluir :'}
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-4">
                <li>{currentLanguage === 'EN' ? 'First name and last name' : currentLanguage === 'FR' ? 'Nom et prénom' : 'Nome e sobrenome'}</li>
                <li>{currentLanguage === 'EN' ? 'Email address' : currentLanguage === 'FR' ? 'Adresse email' : 'Endereço de e-mail'}</li>
                <li>{currentLanguage === 'EN' ? 'Phone number' : currentLanguage === 'FR' ? 'Numéro de téléphone' : 'Número de telefone'}</li>
                <li>{currentLanguage === 'EN' ? 'Postal address (for orders and deliveries)' : currentLanguage === 'FR' ? 'Adresse postale (lors de commandes ou livraisons)' : 'Endereço postal (para pedidos e entregas)'}</li>
                <li>{currentLanguage === 'EN' ? 'Payment information (processed securely via our providers)' : currentLanguage === 'FR' ? 'Informations de paiement (traitées de manière sécurisée via nos prestataires)' : 'Informações de pagamento (processadas de forma segura por meio dos nossos provedores)'}</li>
                <li>{currentLanguage === 'EN' ? 'Navigation data and cookies (see section 6)' : currentLanguage === 'FR' ? 'Données de navigation et cookies (voir section 6)' : 'Dados de navegação e cookies (veja se o 6)'}</li>
              </ul>
              <p className="text-gray-600">
                {currentLanguage === 'EN' ? 'We do not collect any sensitive data (race, political opinion, health, etc.).' : currentLanguage === 'FR' ? 'Nous ne collectons aucune donnée sensible (origine raciale, opinion politique, santé, etc.).' : 'Não recolhemos quaisquer dados sensíveis (origem racial, opinião política, saúde, etc.).'}
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-light mb-4">
                {currentLanguage === 'EN' ? '4. Purpose of the processing' : currentLanguage === 'FR' ? '4. Finalités du traitement' : '4. Finalidades do processamento'}
              </h2>
              <p className="text-gray-600 mb-4">
                {currentLanguage === 'EN' ? 'Your data are collected for :' : currentLanguage === 'FR' ? 'Vos données sont collectées pour :' : 'Os seus dados são coletados para :'}
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-600">
                <li>
                  {currentLanguage === 'EN' ? 'Answering your requests (contact form, quote request, etc.)' : currentLanguage === 'FR' ? 'Répondre à vos demandes (formulaire de contact, demande de devis, etc.)' : 'Responder aos seus pedidos (formulário de contacto, pedido de orçamento, etc.)'}
                </li>
                <li>
                  {currentLanguage === 'EN' ? 'Processing your orders and ensuring their follow-up' : currentLanguage === 'FR' ? 'Traiter vos commandes et assurer leur suivi' : 'Processe os seus pedidos e garanta o seu acompanhamento'}
                </li>
                <li>
                  {currentLanguage === 'EN' ? 'Sending you our newsletter (if you have consented)' : currentLanguage === 'FR' ? 'Vous envoyer notre newsletter (si vous y avez consenti)' : 'Envio da nossa newsletter (caso tenha consentido)'}
                </li>
                <li>
                  {currentLanguage === 'EN' ? 'Analyzing the site traffic to improve its ergonomics and performance' : currentLanguage === 'FR' ? 'Analyser la fréquentation du site pour améliorer son ergonomie et ses performances' : 'Analisar o tráfego do website para melhorar a sua ergonomia e desempenho'}
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-light mb-4">{currentLanguage === 'EN' ? '5. Legal basis of the processing' : currentLanguage === 'FR' ? '5. Base légale du traitement' : '5. Base legal do processamento'}</h2>
              <p className="text-gray-600 mb-4">{currentLanguage === 'EN' ? 'The processing of your data is based on:' : currentLanguage === 'FR' ? 'Le traitement de vos données repose sur :' : 'O processamento de seus dados é baseado em:'}</p>
              <ul className="list-disc pl-6 space-y-2 text-gray-600">
                <li>{currentLanguage === 'EN' ? 'Your consent (newsletter subscription, cookies, form)' : currentLanguage === 'FR' ? 'Votre consentement (inscription newsletter, cookies, formulaire)' : 'Seu consentimento (inscrição na newsletter, cookies, formulário)'}</li>
                <li>{currentLanguage === 'EN' ? 'The execution of a contract (order on the site)' : currentLanguage === 'FR' ? 'L\'exécution d\'un contrat (commande sur le site)' : 'A execução de um contrato (pedido no site)'}</li>
                <li>{currentLanguage === 'EN' ? 'Our legitimate interest (improving the site, protecting against fraud)' : currentLanguage === 'FR' ? 'Notre intérêt légitime (amélioration du site, protection contre les fraudes)' : 'Nos interesses legítimos (melhoria do site, proteção contra fraudes)'}</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-light mb-4">{currentLanguage === 'EN' ? '6. Cookies and trackers' : currentLanguage === 'FR' ? '6. Cookies et traceurs' : '6. Cookies e rastreadores'}</h2>
              <p className="text-gray-600 mb-4">
                {currentLanguage === 'EN' ? 'The site uses cookies to:' : currentLanguage === 'FR' ? 'Le site utilise des cookies pour :' : 'O site utiliza cookies para :'}
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-4">
                <li>{currentLanguage === 'EN' ? 'Analyze traffic (via Google Analytics or equivalent tool)' : currentLanguage === 'FR' ? 'Analyser le trafic (via Google Analytics ou outil équivalent)' : 'Analisar o tráfego (no Google Analytics ou ferramenta equivalente)'}</li>
                <li>{currentLanguage === 'EN' ? 'Improve your navigation (remembering your cart, language, etc.)' : currentLanguage === 'FR' ? 'Améliorer votre navigation (mémorisation du panier, langue, etc.)' : 'Melhorar sua navegação (memorização do carrinho, idioma, etc.)'}</li>
                <li>{currentLanguage === 'EN' ? 'Offer you adapted content' : currentLanguage === 'FR' ? 'Vous proposer du contenu adapté' : 'Oferecer-lhe conteúdo adaptado'}</li>
              </ul>
              <p className="text-gray-600">
                {currentLanguage === 'EN' ? 'You can set your preferences at any time via the cookie banner or your browser settings.' : currentLanguage === 'FR' ? 'Vous pouvez paramétrer vos préférences à tout moment via la bannière cookie ou les réglages de votre navigateur.' : 'Você pode definir suas preferências a qualquer momento via a faixa de cookies ou as configurações do seu navegador.'}
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-light mb-4">{currentLanguage === 'EN' ? '7. Data retention period' : currentLanguage === 'FR' ? '7. Durée de conservation' : '7. Período de conservação de dados'}</h2>
              <p className="text-gray-600 mb-4">
                {currentLanguage === 'EN' ? 'We keep your data only for the necessary period to achieve the purpose, namely:' : currentLanguage === 'FR' ? 'Nous conservons vos données uniquement pour la durée nécessaire à la finalité poursuivie, à savoir :' : 'Nós conservamos os dados apenas pelo período necessário para atingir a finalidade, nomeadamente: '}
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-600">
                <li>{currentLanguage === 'EN' ? 'Up to 3 years after the last contact for marketing data' : currentLanguage === 'FR' ? "Jusqu'à 3 ans après le dernier contact pour les données marketing" : 'Até 3 anos após o último contato para os dados de marketing'}</li>
                <li>{currentLanguage === 'EN' ? 'Up to 10 years for data related to an order (accounting obligations)' : currentLanguage === 'FR' ? "Jusqu'à 10 ans pour les données liées à une commande (obligations comptables)" : 'Até 10 anos para os dados relacionados a uma encomenda (obrigações contábeis)'}</li>
                <li>{currentLanguage === 'EN' ? 'Until your request for deletion' : currentLanguage === 'FR' ? "Jusqu'à votre demande de suppression" : 'Até sua solicitação de exclusão'}</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-light mb-4">{currentLanguage === 'EN' ? '8. Recipients of the data' : currentLanguage === 'FR' ? '8. Destinataires des données' : '8. Destinatários dos dados'}</h2>
              <p className="text-gray-600 mb-4">
                {currentLanguage === 'EN' ? 'The data collected is intended exclusively for Mundenfeitado Unipessoal LDA and its trusted service providers (hosting, payment, logistics), strictly within the framework of their missions.' : currentLanguage === 'FR' ? 'Les données collectées sont destinées exclusivement à Mundenfeitado Unipessoal LDA et à ses prestataires de confiance (hébergement, paiement, logistique), strictement dans le cadre de leurs missions.' : 'Os dados recolhidos destinam-se exclusivamente à Mundenfeitado Unipessoal LDA e aos seus prestadores de serviços de confiança (hospedagem, pagamento, logística), no estrito âmbito das suas missões.'}
              </p>
              <p className="text-gray-600">
                {currentLanguage === 'EN' ? 'We never sell, rent or give your data to third parties for commercial purposes.' : currentLanguage === 'FR' ? 'Nous ne vendons, ne louons et ne cédons jamais vos données à des tiers à des fins commerciales.' : 'Nós nunca vendemos, alugamos ou cedemos seus dados a terceiros para fins comerciais.'}
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-light mb-4">{currentLanguage === 'EN' ? '9. Security' : currentLanguage === 'FR' ? '9. Sécurité' : '9. Segurança'}</h2>
              <p className="text-gray-600">
                {currentLanguage === 'EN' ? "We implement all the necessary technical and organizational measures to ensure the confidentiality, integrity and security of your personal data (SSL certificate, secure hosting, limited access…)." : currentLanguage === 'FR' ? "Nous mettons en œuvre toutes les mesures techniques et organisationnelles nécessaires pour assurer la confidentialité, l'intégrité et la sécurité de vos données personnelles (certificat SSL, hébergement sécurisé, limitation des accès…)." : "Nós implementamos todas as medidas técnicas e organizacionais necessárias para assegurar a confidencialidade, integridade e segurança de seus dados pessoais (certificado SSL, hospedagem segura, limitação de acessos…)."}
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-light mb-4">{currentLanguage === 'EN' ? '10. Your rights' : currentLanguage === 'FR' ? '10. Vos droits' : '10. Vos direitos'}</h2>
              <p className="text-gray-600 mb-4">{currentLanguage === 'EN' ? 'Conformément au RGPD, vous disposez des droits suivants :' : currentLanguage === 'FR' ? 'Conformément au RGPD, vous disposez des droits suivants :' : 'Conformemente ao RGPD, você possui os direitos seguintes :'} </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-4">
                {currentLanguage === 'EN' ? <li>Right of access: know the data we hold about you</li> : currentLanguage === 'FR' ? <li>Droit d'accès : connaître les données que nous détenons sur vous</li> : <li>Direito de acesso: saber os dados que temos sobre você</li>}
                {currentLanguage === 'EN' ? <li>Right of rectification: correct your information</li> : currentLanguage === 'FR' ? <li>Droit de rectification : corriger vos informations</li> : <li>Direito de retifica o: corrigir suas informações</li>}
                {currentLanguage === 'EN' ? <li>Right of erasure: request the deletion of your data</li> : currentLanguage === 'FR' ? <li>Droit d'effacement : demander la suppression de vos données</li> : <li>Direito de exclusão: solicitar a exclusão dos seus dados</li>}
                {currentLanguage === 'EN' ? <li>Right to data portability: receive your data in a structured format</li> : currentLanguage === 'FR' ? <li>Droit à la portabilité : recevoir vos données dans un format structuré</li> : <li>Direito portabilidade de dados: receber os seus dados em um formato estruturado</li>}
                {currentLanguage === 'EN' ? <li>Right to object or limit processing</li> : currentLanguage === 'FR' ? <li>Droit d'opposition ou de limitation du traitement</li> : <li>Direito de oposição ou limitação do tratamento</li>}
                {currentLanguage === 'EN' ? <li>Right to withdraw your consent at any time</li> : currentLanguage === 'FR' ? <li>Droit de retirer votre consentement à tout moment</li> : <li>Direito de retirar seu consentimento a qualquer momento</li>}
              </ul>
              <p className="text-gray-600 mb-4">
                {currentLanguage === 'EN' ? 'You can exercise these rights by contacting us at:' : currentLanguage === 'FR' ? 'Vous pouvez exercer ces droits en nous contactant à :' : 'Você pode exercer esses direitos entrando em contato conosco em :'}
              </p>
              <p className="text-gray-600 mb-4">📩 contact@precieuse-joaillerie.com</p>
              <p className="text-gray-600">
                {currentLanguage === 'EN' ? 'You also have the right to lodge a complaint with the CNPD (National Data Protection Commission - Portugal) if you believe that your rights are not being respected.' : currentLanguage === 'FR' ? "Vous avez également le droit d'introduire une réclamation auprès de la CNPD (Commission Nationale de Protection des Données - Portugal) si vous estimez que vos droits ne sont pas respectés." : "Você também tem o direito de apresentar uma reclamação o CNPD (Comiss o Nacional de Protec o de Dados - Portugal) se acreditar que seus direitos n o est o sendo respeitados."}
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-light mb-4">{currentLanguage === 'EN' ? '11. Contact' : currentLanguage === 'FR' ? '11. Contact' : '11. Contato'}</h2>
              <p className="text-gray-600 mb-4">
                {currentLanguage === 'EN' ? 'For any question about the protection of your data, you can contact us by email:' : currentLanguage === 'FR' ? 'Pour toute question relative à la protection de vos données, vous pouvez nous contacter par email :' : 'Para qualquer pergunta sobre a proteção de seus dados, voc pode entrar em contato conosco por email :'}
              </p>
              <p className="text-gray-600">📩 contact@precieuse-joaillerie.com</p>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}