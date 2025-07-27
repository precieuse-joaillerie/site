"use client";

import { Navigation } from '@/components/ui/navigation';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';

const faqs = [
  {
    question: {
      FR: "Combien de temps faut-il pour créer un bijou sur-mesure ?",
      EN: "How long does it take to create a custom jewel?",
      PT: "Quanto tempo leva para criar uma joia sob medida?"
    },
    answer: {
      FR: "En moyenne 6 à 8 semaines, selon la complexité du projet.",
      EN: "On average, 6 to 8 weeks, depending on the complexity of the project.",
      PT: "Em média, 6 a 8 semanas, dependendo da complexidade do projeto."
    }
  },
  {
    question: {
      FR: "Puis-je choisir mes pierres ?",
      EN: "Can I choose my stones?",
      PT: "Posso escolher minhas pedras?"
    },
    answer: {
      FR: "Bien sûr. Vous serez guidé(e) dans le choix des pierres : tailles, couleurs, significations.",
      EN: "Of course. You will be guided in choosing the stones: sizes, colors, meanings.",
      PT: "Claro. Você será orientado(a) na escolha das pedras: tamanhos, cores, significados."
    }
  },
  {
    question: {
      FR: "Le devis est-il gratuit ?",
      EN: "Is the quote free?",
      PT: "O orçamento é gratuito?"
    },
    answer: {
      FR: "Oui, le premier échange et les croquis sont gratuits. Le devis est transmis une fois le modèle validé.",
      EN: "Yes, the first exchange and sketches are free. The quote is provided once the model is approved.",
      PT: "Sim, a primeira troca e os esboços são gratuitos. O orçamento é fornecido uma vez que o modelo é aprovado."
    }
  },
  {
    question: {
      FR: "Et si j'ai une idée précise ?",
      EN: "What if I have a specific idea?",
      PT: "E se eu tiver uma ideia precisa?"
    },
    answer: {
      FR: "Parfait. Nous l'interprétons ensemble et apportons l'expertise technique et esthétique nécessaire.",
      EN: "Perfect. We interpret it together and provide the necessary technical and aesthetic expertise.",
      PT: "Perfeito. Nós interpretamos juntos e trazemos a expertise técnica e estética necessária."
    }
  },
  {
    question: {
      FR: "Puis-je offrir un bijou sur-mesure sans imposer un modèle ?",
      EN: "Can I give a custom jewel without imposing a model?",
      PT: "Posso oferecer uma joia sob medida sem impor um modelo?"
    },
    answer: {
      FR: "Oui, nous proposons une carte cadeau spéciale \"Création sur mesure\".",
      EN: "Yes, we offer a special gift card for 'Custom Creation'.",
      PT: "Sim, oferecemos um cartão-presente especial 'Criação Sob Medida'."
    }
  },
  {
    question: {
      FR: "Et après ?",
      EN: "And after?",
      PT: "E depois?"
    },
    answer: {
      FR: "Nous vous proposons un entretien annuel (polissage, vérification du serti) pour faire vivre votre bijou dans le temps.",
      EN: "We offer you an annual maintenance (polishing, setting verification) to keep your jewel alive over time.",
      PT: "Oferecemos uma manutenção anual (polimento, verificação do engaste) para manter sua joia viva ao longo do tempo."
    }
  },
  {
    question: {
      FR: "Pourquoi Précieuse est différente des autres marques de joaillerie ?",
      EN: "Why is Précieuse different from other jewelry brands?",
      PT: "Por que a Précieuse é diferente de outras marcas de joalheria?"
    },
    answer: {
      FR: "Parce que Précieuse est une marque alliant savoir faire ancestral, écoute personnalisée, authenticité et élégance à travers un parcours d'achat raisonné. L'engagement sincère de la marque est incarné dans chaque bijou.",
      EN: "Because Précieuse is a brand that combines ancestral know-how, personalized listening, authenticity, and elegance through a thoughtful purchasing journey. The brand's sincere commitment is embodied in every jewel.",
      PT: "Porque a Précieuse é uma marca que combina saber-fazer ancestral, escuta personalizada, autenticidade e elegância através de um percurso de compra consciente. O compromisso sincero da marca está incorporado em cada joia."
    }
  },
  {
    question: {
      FR: "Où fabriquez-vous mon bijou ?",
      EN: "Where do you make my jewel?",
      PT: "Onde você fabrica minha joia?"
    },
    answer: {
      FR: "Je fabrique mes bijoux au Portugal de manière raisonnée, sur commande.",
      EN: "I make my jewels in Portugal in a thoughtful manner, on demand.",
      PT: "Eu fabrico minhas joias em Portugal de maneira consciente, sob encomenda."
    }
  },
  {
    question: {
      FR: "Avez-vous une boutique ?",
      EN: "Do you have a store?",
      PT: "Você tem uma loja?"
    },
    answer: {
      FR: "Non, pas encore. J'espère y remédier rapidement.",
      EN: "No, not yet. I hope to remedy that soon.",
      PT: "Não, ainda não. Espero resolver isso em breve."
    }
  },
  {
    question: {
      FR: "Y aura-t-il des soldes ou des bons de réduction ?",
      EN: "Will there be sales or discount vouchers?",
      PT: "Haverá promoções ou cupons de desconto?"
    },
    answer: {
      FR: "Nous ne proposons jamais de soldes ou de bons de réductions, pour la bonne et simple raison que nous avons fait le choix de vous proposer une joaillerie à un prix juste tout au long de l'année.",
      EN: "We never offer sales or discount vouchers, for the simple reason that we have chosen to offer you jewelry at a fair price throughout the year.",
      PT: "Nunca oferecemos promoções ou cupons de desconto, pela simples razão de que escolhemos oferecer joias a um preço justo durante todo o ano."
    }
  },
  {
    question: {
      FR: "Proposez-vous toutes les tailles de doigt ?",
      EN: "Do you offer all ring sizes?",
      PT: "Você oferece todos os tamanhos de anel?"
    },
    answer: {
      FR: "Oui. Lorsque vous passez votre commande auprès de la joaillière, celle-ci s'assurera de bien choisir la taille avec vous.",
      EN: "Yes. When you place your order with the jeweler, she will ensure to choose the size with you.",
      PT: "Sim. Quando você faz seu pedido com a joalheira, ela se certificará de escolher o tamanho com você."
    }
  },
  {
    question: {
      FR: "Puis-je faire graver mes bijoux ?",
      EN: "Can I have my jewels engraved?",
      PT: "Posso gravar minhas joias?"
    },
    answer: {
      FR: "Oui bien sûr. Notre atelier propose ce type de service, dans la limite du possible évidemment.",
      EN: "Yes, of course. Our workshop offers this type of service, within the limits of what is possible, of course.",
      PT: "Sim, claro. Nossa oficina oferece esse tipo de serviço, dentro dos limites do possível, é claro."
    }
  },
  {
    question: {
      FR: "Puis-je faire réparer un bijou qui ne vient pas de chez Précieuse ?",
      EN: "Can I repair a jewel that does not come from Précieuse?",
      PT: "Posso consertar uma joia que não vem da Précieuse?"
    },
    answer: {
      FR: "Non. Pour des raisons évidentes de garanties, nous ne pouvons prendre en charge des bijoux qui ne sortent pas de nos ateliers. En revanche tous les bijoux Précieuse seront chouchoutés avec plaisir par nos joailliers.",
      EN: "No. For obvious warranty reasons, we cannot take care of jewels that do not come from our workshops. However, all Précieuse jewels will be lovingly cared for by our jewelers.",
      PT: "Não. Por razões óbvias de garantia, não podemos cuidar de joias que não saem de nossas oficinas. No entanto, todas as joias Précieuse serão tratadas com carinho por nossos joalheiros."
    }
  },
  {
    question: {
      FR: "De quelle qualité sont les pierres que vous vendez ?",
      EN: "What quality are the stones you sell?",
      PT: "Qual é a qualidade das pedras que você vende?"
    },
    answer: {
      FR: "Diamants GVS minimum certifiés GIA ou HRD pour les plus de 0,30ct. Cependant nous pouvons proposer toutes les qualités de pierres. En effet, notre service de sur mesure en ligne nous permet d'avoir la liberté de sertir n'importe quelle pierre sur vos bijoux Précieuse. Si vous désirez une pierre de couleur, la qualité sera définie avec la joaillière lors d'un rendez-vous en fonction de vos goûts et de votre budget.",
      EN: "Minimum GVS certified diamonds GIA or HRD for those over 0.30ct. However, we can offer all qualities of stones. Indeed, our online custom service allows us the freedom to set any stone on your Précieuse jewels. If you desire a colored stone, the quality will be defined with the jeweler during an appointment based on your tastes and budget.",
      PT: "Diamantes GVS mínimos certificados GIA ou HRD para os que têm mais de 0,30ct. No entanto, podemos oferecer todas as qualidades de pedras. De fato, nosso serviço de personalização online nos permite a liberdade de engastar qualquer pedra em suas joias Précieuse. Se você deseja uma pedra colorida, a qualidade será definida com a joalheira durante uma consulta, com base em seus gostos e orçamento."
    }
  },
  {
    question: {
      FR: "Vos pierres de couleurs sont-elles chauffées ?",
      EN: "Are your colored stones heated?",
      PT: "Suas pedras coloridas são aquecidas?"
    },
    answer: {
      FR: "Cela dépend de la pierre que vous choisissez et de la qualité. Certaines pierres comme la Tanzanite ou certains Saphirs sont rarement totalement naturels. En revanche, si vous tenez à avoir une pierre non chauffée, nous pouvons nous affairer à trouver la pierre de vos rêves.",
      EN: "It depends on the stone you choose and the quality. Some stones like Tanzanite or certain Sapphires are rarely completely natural. However, if you want to have an unheated stone, we can work to find the stone of your dreams.",
      PT: "Depende da pedra que você escolhe e da qualidade. Algumas pedras, como a Tanzanite ou certos Safiras, raramente são totalmente naturais. No entanto, se você deseja ter uma pedra não aquecida, podemos nos esforçar para encontrar a pedra dos seus sonhos."
    }
  },
  {
    question: {
      FR: "De quoi parle-t-on avec les certificats RJC, HRD, GIA ? Et le processus de Kimberly ?",
      EN: "What do we talk about with RJC, HRD, GIA certificates? And the Kimberly process?",
      PT: "Sobre o que falamos com os certificados RJC, HRD, GIA? E o processo de Kimberly?"
    },
    answer: {
      FR: "Certificats RJC : Qui veut dire Responsible Jewelry Council. C'est une organisation qui a été créée en 2005, permet de promouvoir et certifier au niveau mondial les pratiques responsables, éthiques et environnementales d'une entreprise sur l'ensemble de sa chaîne d'approvisionnement d'or et de diamant. Certificats HRD et GIA : HRD et GIA sont les initiales des deux plus grands laboratoires au monde certifiant les pierres précieuses. Nos diamants dépassant 0,30ct sont tous livrés avec leur certificat. Le processus de Kimberly : C'est un accord tacite entre 80 pays autour du monde qui s'engage à ne pas commercialiser des pierres issues de zones de conflits et à être transparent sur leur chaîne d'approvisionnement en pierres et en métaux précieux. La marque Précieuse s'engage évidemment à respecter tous ces aspects.",
      EN: "RJC Certificates: Which stands for Responsible Jewelry Council. It is an organization that was created in 2005, promoting and certifying responsible, ethical, and environmental practices of a company throughout its gold and diamond supply chain. HRD and GIA Certificates: HRD and GIA are the initials of the two largest laboratories in the world certifying precious stones. Our diamonds over 0.30ct are all delivered with their certificate. The Kimberly process: It is a tacit agreement among 80 countries around the world that commits to not marketing stones from conflict zones and to being transparent about their supply chain of stones and precious metals. The Précieuse brand is committed to respecting all these aspects.",
      PT: "Certificados RJC: Que significa Responsible Jewelry Council. É uma organização que foi criada em 2005, permitindo promover e certificar globalmente as práticas responsáveis, éticas e ambientais de uma empresa em toda a sua cadeia de suprimento de ouro e diamante. Certificados HRD e GIA: HRD e GIA são as iniciais dos dois maiores laboratórios do mundo que certificam pedras preciosas. Nossos diamantes com mais de 0,30ct são todos entregues com seu certificado. O processo de Kimberly: É um acordo tácito entre 80 países ao redor do mundo que se compromete a não comercializar pedras provenientes de zonas de conflito e a ser transparente sobre sua cadeia de suprimento de pedras e metais preciosos. A marca Précieuse se compromete, evidentemente, a respeitar todos esses aspectos."
    }
  },
  {
    question: {
      FR: "Quels modes de règlements acceptez-vous ?",
      EN: "What payment methods do you accept?",
      PT: "Quais métodos de pagamento você aceita?"
    },
    answer: {
      FR: "Virement bancaire ou PayPal. Ces modes de paiements nous permettent de vous garantir un maximum de sécurité.",
      EN: "Bank transfer or PayPal. These payment methods allow us to guarantee you maximum security.",
      PT: "Transferência bancária ou PayPal. Esses métodos de pagamento nos permitem garantir a você máxima segurança."
    }
  }
];


export default function FAQPage() {
  const { currentLanguage } = useLanguage();
  return (
    <main className="min-h-screen">
      <Navigation />
      
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <Link href="/blog">
            <Button variant="ghost" className="mb-8">
              <ArrowLeft className="mr-2 h-4 w-4" />
              {currentLanguage === 'FR' ? 'Retour au blog' : currentLanguage === 'PT' ? 'Voltar ao blog' : 'Back to blog'}
            </Button>
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl font-light mb-8">{currentLanguage === 'FR' ? 'Questions Fréquentes' : currentLanguage === 'PT' ? 'Perguntas Frequentes' : 'Frequently Asked Questions'}</h1>
            
            <div className="max-w-4xl">
              <Accordion type="single" collapsible className="space-y-4">
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`} className="bg-[#faf6f0] rounded-lg px-6">
                    <AccordionTrigger className="text-xl font-light">{faq.question[currentLanguage]}</AccordionTrigger>
                    <AccordionContent className="text-gray-600">
                      {faq.answer[currentLanguage]}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  );
}