"use client";

import { useState } from 'react';
import { Navigation } from '@/components/ui/navigation';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { MessageCircle, ChevronDown, ChevronUp, ExternalLink } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { useLanguage } from '@/contexts/LanguageContext';
import { useFetch } from "@/hooks/useFetch";
import Loader from "@/components/Loader";

interface CollapsibleSectionProps {
  title: string;
  children: React.ReactNode;
  isOpen: boolean;
  onToggle: () => void;
}

function CollapsibleSection({ title, children, isOpen, onToggle }: CollapsibleSectionProps) {
  return (
    <div className="border-b border-teal/20">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between py-4 text-left hover:bg-powder/30 transition-colors"
      >
        <h4 className="text-lg font-semibold text-teal">{title}</h4>
        {isOpen ? (
          <ChevronUp className="w-5 h-5 text-rust" />
        ) : (
          <ChevronDown className="w-5 h-5 text-rust" />
        )}
      </button>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="pb-6"
        >
          {children}
        </motion.div>
      )}
    </div>
  );
}

export default function JewelryPage() {
  const [openSections, setOpenSections] = useState<{ [key: string]: boolean }>({});
  const { currentLanguage } = useLanguage();
  const query = `
    *[_type == "productsPageImages"]
  `;
  const { data, isLoading, error } = useFetch(query);

  if (isLoading) return <Loader />;
  if (error) return <div>Error</div>;

  const images = !data ? [] : data[0];

  const products = [
    {
      id: 1,
      name: "Eugénie",
      price: "7 500",
      description: {
        FR: "La bague de princesse par excellence.\n\nUn bijou que l'on porte avec fierté, témoin éclatant d'une personnalité affirmée et des moments forts d'une vie.\n\nInspirée de l'esprit des bagues marquises anciennes, cette création en revisite l'allure intemporelle, pour un éclat dont on ne se lasse jamais.\n\nElle se marie parfaitement avec notre modèle Louise.",
        EN: "The ultimate princess ring.\n\nA jewel worn with pride, a shining witness to a strong personality and the significant moments of life.\n\nInspired by the spirit of ancient marquise rings, this creation revisits the timeless allure for a brilliance that never fades.\n\nIt pairs perfectly with our model Louise.",
        PT: "O anel de princesa por excelência.\n\nUma joia que se usa com orgulho, testemunha brilhante de uma personalidade forte e dos momentos marcantes da vida.\n\nInspirada no espírito dos anéis marquise antigos, esta criação revisita a elegância atemporal, para um brilho que nunca se cansa.\n\nEla combina perfeitamente com nosso modelo Louise."
      },
      relatedProduct: "Louise",
      relatedProductId: 5,
      image: images?.image2,
      technicalDetails: {
        weight: {
          FR: "5 g d'or 19 carats, travaillé entièrement à la main",
          EN: "5 g of 19-carat gold, fully handcrafted",
          PT: "5 g de ouro 19 quilates, totalmente trabalhado à mão"
        },
        diamonds: [
          {
            FR: "1 diamant navette 8x4 mm (caratage précisé, certificat GIA ou HRD fourni)",
            EN: "1 marquise diamond 8x4 mm (specified carat weight, GIA or HRD certificate provided)",
            PT: "1 diamante marquise 8x4 mm (peso em quilates especificado, certificado GIA ou HRD fornecido)"
          },
          {
            FR: "4 diamants navette 3x1,5 mm (caratage précisé)",
            EN: "4 marquise diamonds 3x1.5 mm (specified carat weight)",
            PT: "4 diamantes marquise 3x1,5 mm (peso em quilates especificado)"
          },
          {
            FR: "6 diamants baguette 2x1,5 mm (caratage précisé)",
            EN: "6 baguette diamonds 2x1.5 mm (specified carat weight)",
            PT: "6 diamantes baguete 2x1,5 mm (peso em quilates especificado)"
          },
          {
            FR: "4 diamants ronds 1,5 mm (caratage précisé)",
            EN: "4 round diamonds 1.5 mm (specified carat weight)",
            PT: "4 diamantes redondos 1,5 mm (peso em quilates especificado)"
          },
          {
            FR: "2 diamants ronds 2 mm (caratage précisé)",
            EN: "2 round diamonds 2 mm (specified carat weight)",
            PT: "2 diamantes redondos 2 mm (peso em quilates especificado)"
          }
        ],
        sizing: {
          FR: "Tour de doigt à définir ensemble",
          EN: "Ring size to be defined together",
          PT: "Tamanho do anel a ser definido em conjunto"
        }
      },
      care: {
        durability: {
          FR: "Pensée pour traverser le temps, cette pièce a été conçue comme un véritable joyau du quotidien.\n\nGrâce à la robustesse de ses matériaux, elle peut être portée chaque jour, comme une seconde peau, ou réservée aux grandes occasions selon vos envies.",
          EN: "Designed to stand the test of time, this piece was created as a true everyday jewel.\n\nThanks to the durability of its materials, it can be worn every day, like a second skin, or reserved for special occasions according to your desires.",
          PT: "Pensada para resistir ao tempo, esta peça foi criada como uma verdadeira joia do dia a dia.\n\nGraças à robustez dos seus materiais, pode ser usada todos os dias, como uma segunda pele, ou reservada para grandes ocasiões, conforme o seu desejo."
        },
        recommendations: [
          {
            FR: "Votre bijou résiste parfaitement à l'eau, y compris aux baignades en mer.",
            EN: "Your jewel is perfectly water-resistant, including swimming in the sea.",
            PT: "Sua joia é perfeitamente resistente à água, incluindo natação no mar."
          },
          {
            FR: "Il est néanmoins conseillé d'éviter les activités à risque (jardinage, bricolage, sports de contact) afin de préserver son éclat.",
            EN: "However, it is advisable to avoid risky activities (gardening, DIY, contact sports) to preserve its shine.",
            PT: "No entanto, é aconselhável evitar atividades de risco (jardinagem, bricolagem, esportes de contato) para preservar seu brilho."
          },
          {
            FR: "Une vérification annuelle dans nos ateliers est recommandée :",
            EN: "An annual check in our workshops is recommended:",
            PT: "Uma verificação anual em nossas oficinas é recomendada:"
          },
          {
            FR: "Pour assurer la solidité du serti et prévenir toute usure du métal.",
            EN: "To ensure the strength of the setting and prevent any wear of the metal.",
            PT: "Para garantir a resistência do engaste e prevenir qualquer desgaste do metal."
          },
          {
            FR: "Pour redonner tout son éclat à votre bijou grâce à un nettoyage professionnel.",
            EN: "To restore all its shine to your jewel through professional cleaning.",
            PT: "Para devolver todo o seu brilho à sua joia através de uma limpeza profissional."
          },
          {
            FR: "Souscrivez à notre service d'entretien annuel et confiez-nous votre bijou pour qu'il retrouve toute sa noblesse.",
            EN: "Subscribe to our annual maintenance service and entrust us with your jewel so that it regains all its nobility.",
            PT: "Assine nosso serviço de manutenção anual e confie-nos sua joia para que ela recupere toda a sua nobreza."
          }
        ]
      },
      fabrication: {
        process: {
          FR: "Chaque création est entièrement réalisée à la main, dans la plus pure tradition joaillière, au sein de notre atelier au Portugal.\n\nUn savoir-faire artisanal exigeant, mêlant précision, patience et passion.",
          EN: "Each creation is entirely handcrafted, in the purest jewelry tradition, within our workshop in Portugal.\n\nA demanding artisanal know-how, combining precision, patience, and passion.",
          PT: "Cada criação é totalmente feita à mão, na mais pura tradição joalheira, em nosso ateliê em Portugal.\n\nUm saber-fazer artesanal exigente, que combina precisão, paciência e paixão."
        },
        customization: [
          {
            FR: "Disponible en or jaune, rose ou blanc 19 carats.",
            EN: "Available in yellow, rose, or white 19-carat gold.",
            PT: "Disponível em ouro amarelo, rosa ou branco de 19 quilates."
          },
          {
            FR: "Qualité de diamant standard : GVS.",
            EN: "Standard diamond quality: GVS.",
            PT: "Qualidade de diamante padrão: GVS."
          },
          {
            FR: "Sur demande : qualité exceptionnelle D Flawless (devis personnalisé).",
            EN: "On request: exceptional quality D Flawless (custom quote).",
            PT: "Sob demanda: qualidade excepcional D Flawless (orçamento personalizado)."
          },
          {
            FR: "Certificat GIA ou HRD fourni pour tout diamant supérieur à 0,30 carat.",
            EN: "GIA or HRD certificate provided for any diamond over 0.30 carat.",
            PT: "Certificado GIA ou HRD fornecido para qualquer diamante superior a 0,30 quilate."
          },
          {
            FR: "Possibilité de remplacer les diamants par d'autres pierres précieuses ou fines de votre choix.",
            EN: "Possibility to replace diamonds with other precious or semi-precious stones of your choice.",
            PT: "Possibilidade de substituir os diamantes por outras pedras preciosas ou semipreciosas de sua escolha."
          },
          {
            FR: "Chaque projet de personnalisation fait l'objet d'un devis spécifique et d'un accompagnement sur-mesure.",
            EN: "Each customization project is subject to a specific quote and tailored support.",
            PT: "Cada projeto de personalização é objeto de um orçamento específico e de um acompanhamento personalizado."
          }
        ]
      },
      delivery: {
        timeline: {
          FR: "Délai de fabrication et livraison : 8 semaines.",
          EN: "Manufacturing and delivery time: 8 weeks.",
          PT: "Prazo de fabricação e entrega: 8 semanas."
        },
        shipping: {
          FR: "Expédition sécurisée et suivie via notre partenaire DHL.",
          EN: "Secure and tracked shipping via our partner DHL.",
          PT: "Envio seguro e rastreado via nosso parceiro DHL."
        },
        returns: {
          FR: "Retour gratuit sous 30 jours après réception de votre bijou.",
          EN: "Free returns within 30 days after receiving your jewel.",
          PT: "Devoluções gratuitas dentro de 30 dias após o recebimento da sua joia."
        },
        sizing: {
          FR: "Remise à taille offerte pour un ajustement parfait.",
          EN: "Free resizing for a perfect fit.",
          PT: "Redimensionamento gratuito para um ajuste perfeito."
        },
        support: {
          FR: "Service client disponible 7j/7 pour vous accompagner.",
          EN: "Customer service available 7 days a week to assist you.",
          PT: "Atendimento ao cliente disponível 7 dias por semana para ajudá-lo."
        }
      }
    },
    {
      id: 2,
      name: "Aurore",
      price: "3 500",
      description: {
        FR: "Avec son charme vintage et sa délicate sobriété, cette bague se glisse sur votre main comme une évidence. Discrète mais lumineuse, elle capte la lumière sans jamais en faire trop. Une pièce pensée pour celles qui veulent briller tout en finesse, au quotidien comme dans les instants choisis.",
        EN: "With its vintage charm and delicate sobriety, this ring slips onto your hand as if it were meant to be. Discreet yet luminous, it captures light without ever overdoing it. A piece designed for those who want to shine with finesse, both daily and in chosen moments.",
        PT: "Com seu charme vintage e sua delicada sobriedade, este anel desliza na sua mão como se fosse uma evidência. Discreto, mas luminoso, capta a luz sem nunca exagerar. Uma peça pensada para quem quer brilhar com sutileza, no dia a dia e nos momentos escolhidos."
      },
      image: images?.image3,
      technicalDetails: {
        weight: {
          FR: "Env. 3 g d'or 19,2 carats",
          EN: "Approx. 3 g of 19.2-carat gold",
          PT: "Aproximadamente 3 g de ouro 19,2 quilates"
        },
        diamonds: [
          {
            FR: "2 diamants triangles de 4x4x4 mm",
            EN: "2 triangular diamonds 4x4x4 mm",
            PT: "2 diamantes triangulares 4x4x4 mm"
          },
          {
            FR: "4 diamants ronds de 1,2 mm",
            EN: "4 round diamonds 1.2 mm",
            PT: "4 diamantes redondos 1,2 mm"
          }
        ]
      },
      care: {
        durability: {
          FR: "Pensée pour traverser le temps, cette pièce a été conçue comme un véritable joyau du quotidien.\n\nGrâce à la robustesse de ses matériaux, elle peut être portée chaque jour, comme une seconde peau, ou réservée aux grandes occasions selon vos envies.",
          EN: "Designed to stand the test of time, this piece was created as a true everyday jewel.\n\nThanks to the strength of its materials, it can be worn daily like a second skin, or reserved for special occasions as you desire.",
          PT: "Pensada para resistir ao tempo, esta peça foi concebida como uma verdadeira joia do dia a dia.\n\nGraças à robustez dos seus materiais, pode ser usada diariamente como uma segunda pele, ou reservada para grandes ocasiões, conforme o seu desejo."
        },
        recommendations: [
          {
            FR: "Votre bijou résiste parfaitement à l'eau, y compris aux baignades en mer.",
            EN: "Your jewel is perfectly water-resistant, including swimming in the sea.",
            PT: "Sua joia é perfeitamente resistente à água, incluindo natação no mar."
          },
          {
            FR: "Il est néanmoins conseillé d'éviter les activités à risque (jardinage, bricolage, sports de contact) afin de préserver son éclat.",
            EN: "However, it is advisable to avoid risky activities (gardening, DIY, contact sports) to preserve its shine.",
            PT: "No entanto, é aconselhável evitar atividades de risco (jardinagem, bricolagem, esportes de contato) para preservar seu brilho."
          },
          {
            FR: "Une vérification annuelle dans nos ateliers est recommandée :",
            EN: "An annual check in our workshops is recommended:",
            PT: "Recomenda-se uma verificação anual em nossos ateliers:"
          },
          {
            FR: "Pour assurer la solidité du serti et prévenir toute usure du métal.",
            EN: "To ensure setting integrity and prevent metal wear.",
            PT: "Para garantir a integridade da cravação e evitar desgaste do metal."
          },
          {
            FR: "Pour redonner tout son éclat à votre bijou grâce à un nettoyage professionnel.",
            EN: "To restore your jewel’s full brilliance with professional cleaning.",
            PT: "Para restaurar todo o brilho da sua joia com limpeza profissional."
          },
          {
            FR: "Souscrivez à notre service d'entretien annuel et confiez-nous votre bijou pour qu'il retrouve toute sa noblesse.",
            EN: "Subscribe to our annual maintenance service and entrust us with your jewel to restore its full nobility.",
            PT: "Assine nosso serviço anual de manutenção e confie-nos sua joia para recuperar toda a sua nobreza."
          }
        ]
      },
      fabrication: {
        process: {
          FR: "Chaque création est entièrement réalisée à la main, dans la plus pure tradition joaillière, au sein de notre atelier au Portugal.\n\nUn savoir-faire artisanal exigeant, mêlant précision, patience et passion.",
          EN: "Each creation is entirely handcrafted in the purest jewelry tradition, in our workshop in Portugal.\n\nA demanding artisanal expertise blending precision, patience, and passion.",
          PT: "Cada criação é totalmente feita à mão, na mais pura tradição joalheira, em nosso ateliê em Portugal.\n\nUm saber-fazer artesanal exigente que combina precisão, paciência e paixão."
        },
        customization: [
          {
            FR: "Disponible en or jaune, rose ou blanc 19,2 carats.",
            EN: "Available in 19‑carat yellow, rose, or white gold.",
            PT: "Disponível em ouro amarelo, rosa ou branco de 19 quilates."
          },
          {
            FR: "Qualité de diamant standard : GVS.",
            EN: "Standard diamond quality: GVS.",
            PT: "Qualidade padrão de diamante: GVS."
          },
          {
            FR: "Sur demande : qualité exceptionnelle D Flawless (devis personnalisé).",
            EN: "On request: exceptional D Flawless quality (custom quote).",
            PT: "Sob consulta: qualidade excepcional D Flawless (orçamento personalizado)."
          },
          {
            FR: "Certificat GIA ou HRD fourni pour tout diamant supérieur à 0,30 carat.",
            EN: "GIA or HRD certificate provided for any diamond over 0.30 carat.",
            PT: "Certificado GIA ou HRD fornecido para qualquer diamante acima de 0,30 quilate."
          },
          {
            FR: "Possibilité de remplacer les diamants par d'autres pierres précieuses ou fines de votre choix.",
            EN: "Option to replace diamonds with other precious or semi-precious stones of your choice.",
            PT: "Opção de substituir os diamantes por outras pedras preciosas ou semipreciosas à sua escolha."
          },
          {
            FR: "Chaque projet de personnalisation fait l'objet d'un devis spécifique et d'un accompagnement sur-mesure.",
            EN: "Each customization project comes with a specific quote and tailored support.",
            PT: "Cada projeto de personalização inclui orçamento específico e apoio personalizado."
          }
        ]
      },
      delivery: {
        timeline: {
          FR: "Délai de fabrication et livraison : 8 semaines.",
          EN: "Production and delivery time: 8 weeks.",
          PT: "Prazo de produção e entrega: 8 semanas."
        },
        shipping: {
          FR: "Expédition sécurisée et suivie via notre partenaire DHL.",
          EN: "Secure, tracked shipping via our partner DHL.",
          PT: "Envio seguro e rastreado com nosso parceiro DHL."
        },
        returns: {
          FR: "Retour gratuit sous 30 jours après réception de votre bijou.",
          EN: "Free returns within 30 days after receiving your jewel.",
          PT: "Devoluções gratuitas em até 30 dias após o recebimento da sua joia."
        },
        sizing: {
          FR: "Remise à taille offerte pour un ajustement parfait.",
          EN: "Free resizing for a perfect fit.",
          PT: "Redimensionamento gratuito para um ajuste perfeito."
        },
        support: {
          FR: "Service client disponible 7j/7 pour vous accompagner.",
          EN: "Customer service available 7 days a week to assist you.",
          PT: "Atendimento ao cliente disponível 7 dias por semana para ajudar você."
        }
      }
    },
    {
      id: 3,
      name: "Joséphine",
      price: "6 500",
      description: {
        FR: "La bague entourage. On en hérite, on l'admire depuis l'enfance sur les mains de nos aïeuls. On la rêve. Elle se transmet et on l'arbore comme un joyau familial, un objet réconfortant chargé de souvenirs.",
        EN: "The entourage ring. It's inherited, admired since childhood on our ancestors' hands. We dream it. It's passed down and worn as a family heirloom, a comforting object laden with memories.",
        PT: "O anel entourage. É herdado, admirado desde a infância nas mãos dos nossos antepassados. Sonhamos com ele. É transmitido e envergado como uma joia de família, um objeto reconfortante carregado de memórias."
      },
      image: images?.image4,
      technicalDetails: {
        weight: {
          FR: "5 g d'or 19,2 carats",
          EN: "5 g of 19.2‑carat gold",
          PT: "5 g de ouro 19,2 quilates"
        },
        diamonds: [
          {
            FR: "2 diamants poires 5 x 3 mm",
            EN: "2 pear‑cut diamonds 5 x 3 mm",
            PT: "2 diamantes pera 5 x 3 mm"
          },
          {
            FR: "2 diamants poires 4 x 3 mm",
            EN: "2 pear‑cut diamonds 4 x 3 mm",
            PT: "2 diamantes pera 4 x 3 mm"
          },
          {
            FR: "12 diamants ronds 1,8 mm",
            EN: "12 round diamonds 1.8 mm",
            PT: "12 diamantes redondos 1,8 mm"
          },
          {
            FR: "4 diamants ronds 1,7 mm",
            EN: "4 round diamonds 1.7 mm",
            PT: "4 diamantes redondos 1,7 mm"
          },
          {
            FR: "4 diamant ronds 1,5 mm",
            EN: "4 round diamonds 1.5 mm",
            PT: "4 diamantes redondos 1,5 mm"
          },
          {
            FR: "2 diamants navettes 4x2 mm",
            EN: "2 marquise diamonds 4 x 2 mm",
            PT: "2 diamantes marquise 4 x 2 mm"
          }
        ]
      },
      care: {
        durability: {
          FR: "Pensée pour traverser le temps, cette pièce a été conçue comme un véritable joyau du quotidien.\n\nGrâce à la robustesse de ses matériaux, elle peut être portée chaque jour, comme une seconde peau, ou réservée aux grandes occasions selon vos envies.",
          EN: "Designed to stand the test of time, this piece was created as a true everyday jewel.\n\nThanks to the strength of its materials, it can be worn daily like a second skin, or reserved for special occasions as you desire.",
          PT: "Pensada para resistir ao tempo, esta peça foi concebida como uma verdadeira joia do dia a dia.\n\nGraças à durabilidade dos seus materiais, pode ser usada diariamente como uma segunda pele, ou reservada para ocasiões especiais, conforme desejar."
        },
        recommendations: [
          {
            FR: "Votre bijou résiste parfaitement à l'eau, y compris aux baignades en mer.",
            EN: "Your jewel is fully water-resistant, even during sea swims.",
            PT: "Sua joia é totalmente resistente à água, mesmo em banhos de mar."
          },
          {
            FR: "Il est néanmoins conseillé d'éviter les activités à risque (jardinage, bricolage, sports de contact) afin de préserver son éclat.",
            EN: "However, it's advised to avoid risky activities (gardening, DIY, contact sports) to protect its shine.",
            PT: "No entanto, aconselha-se evitar atividades de risco (jardinagem, bricolagem, esportes de contato) para preservar seu brilho."
          },
          {
            FR: "Une vérification annuelle dans nos ateliers est recommandée :",
            EN: "An annual check in our workshops is recommended:",
            PT: "Recomenda-se uma verificação anual em nossos ateliers:"
          },
          {
            FR: "Pour assurer la solidité du serti et prévenir toute usure du métal.",
            EN: "To ensure setting integrity and prevent metal wear.",
            PT: "Para garantir a integridade da cravação e evitar desgaste do metal."
          },
          {
            FR: "Pour redonner tout son éclat à votre bijou grâce à un nettoyage professionnel.",
            EN: "To restore your jewel’s full brilliance with professional cleaning.",
            PT: "Para restaurar todo o brilho da sua joia com limpeza profissional."
          },
          {
            FR: "Souscrivez à notre service d'entretien annuel et confiez-nous votre bijou pour qu'il retrouve toute sa noblesse.",
            EN: "Subscribe to our annual maintenance service and entrust us with your jewel to restore its full nobility.",
            PT: "Assine nosso serviço anual de manutenção e confie-nos sua joia para recuperar toda a sua nobreza."
          }
        ]
      },
      fabrication: {
        process: {
          FR: "Chaque création est entièrement réalisée à la main, dans la plus pure tradition joaillière, au sein de notre atelier au Portugal.\n\nUn savoir-faire artisanal exigeant, mêlant précision, patience et passion.",
          EN: "Each creation is entirely handcrafted in the purest jewelry tradition, in our workshop in Portugal.\n\nA demanding artisanal expertise blending precision, patience, and passion.",
          PT: "Cada criação é totalmente feita à mão, na mais pura tradição joalheira, em nosso atelier em Portugal.\n\nUm saber-fazer artesanal exigente que combina precisão, paciência e paixão."
        },
        customization: [
          {
            FR: "Disponible en or jaune, rose ou blanc 19,2 carats.",
            EN: "Available in 19‑carat yellow, rose, or white gold.",
            PT: "Disponível em ouro amarelo, rosa ou branco de 19 quilates."
          },
          {
            FR: "Qualité de diamant standard : GVS.",
            EN: "Standard diamond quality: GVS.",
            PT: "Qualidade padrão de diamante: GVS."
          },
          {
            FR: "Sur demande : qualité exceptionnelle D Flawless (devis personnalisé).",
            EN: "On request: exceptional D Flawless quality (custom quote).",
            PT: "Sob consulta: qualidade excepcional D Flawless (orçamento personalizado)."
          },
          {
            FR: "Certificat GIA ou HRD fourni pour tout diamant supérieur à 0,30 carat.",
            EN: "GIA or HRD certificate provided for any diamond over 0.30 carat.",
            PT: "Certificado GIA ou HRD fornecido para qualquer diamante acima de 0,30 quilate."
          },
          {
            FR: "Possibilité de remplacer les diamants par d'autres pierres précieuses ou fines de votre choix.",
            EN: "Option to replace diamonds with other precious or semi-precious stones of your choice.",
            PT: "Opção de substituir os diamantes por outras pedras preciosas ou semipreciosas à sua escolha."
          },
          {
            FR: "Chaque projet de personnalisation fait l'objet d'un devis spécifique et d'un accompagnement sur-mesure.",
            EN: "Each customization project comes with a specific quote and tailored support.",
            PT: "Cada projeto de personalização inclui orçamento específico e apoio personalizado."
          }
        ]
      },
      delivery: {
        timeline: {
          FR: "Délai de fabrication et livraison : 8 semaines.",
          EN: "Production and delivery time: 8 weeks.",
          PT: "Prazo de produção e entrega: 8 semanas."
        },
        shipping: {
          FR: "Expédition sécurisée et suivie via notre partenaire DHL.",
          EN: "Secure, tracked shipping via our partner DHL.",
          PT: "Envio seguro e rastreado com nosso parceiro DHL."
        },
        returns: {
          FR: "Retour gratuit sous 30 jours après réception de votre bijou.",
          EN: "Free returns within 30 days after receiving your jewel.",
          PT: "Devoluções gratuitas em até 30 dias após o recebimento da sua joia."
        },
        sizing: {
          FR: "Remise à taille offerte pour un ajustement parfait.",
          EN: "Free resizing for a perfect fit.",
          PT: "Redimensionamento gratuito para um ajuste perfeito."
        },
        support: {
          FR: "Service client disponible 7j/7 pour vous accompagner.",
          EN: "Customer service available 7 days a week to assist you.",
          PT: "Atendimento ao cliente disponível 7 dias por semana para ajudar você."
        }
      }
    },
    {
      id: 4,
      name: "Thelma",
      price: "3 600",
      description: {
        FR: "L'élégance de la poire relevée par quelque diamants rond. Tel un diadème qui orne le doigt, cette pièce a la personnalité affirmée viendra a merveille marquer dune pierre blanche les plus beaux moments de vie.\n\nElle se marie parfaitement avec notre modèle Louise.",
        EN: "The elegance of the pear highlighted by some round diamonds. Like a tiara adorning the finger, this piece with a strong personality will beautifully mark the most beautiful moments of life with a white stone.\n\nIt pairs perfectly with our model Louise.",
        PT: "A elegância da pêra realçada por alguns diamantes redondos. Como uma tiara que adorna o dedo, esta peça de personalidade forte marcará maravilhosamente os mais belos momentos da vida com uma pedra branca.\n\nEla combina perfeitamente com nosso modelo Louise."
      },
      relatedProduct: "Louise",
      relatedProductId: 5,
      image: images?.image5,
      technicalDetails: {
        weight: {
          FR: "3 g d'or 19,2 carats",
          EN: "3 g of 19.2-carat gold",
          PT: "3 g de ouro 19,2 quilates"
        },
        diamonds: [
          {
            FR: "1 diamant poire 5x4 mm",
            EN: "1 pear-cut diamond 5x4 mm",
            PT: "1 diamante pera 5x4 mm"
          },
          {
            FR: "2 diamants ronds 2,5 mm",
            EN: "2 round diamonds 2.5 mm",
            PT: "2 diamantes redondos 2,5 mm"
          },
          {
            FR: "2 diamants ronds 1,5 mm",
            EN: "2 round diamonds 1.5 mm",
            PT: "2 diamantes redondos 1,5 mm"
          }
        ]
      },
      care: {
        durability: {
          FR: "Pensée pour traverser le temps, cette pièce a été conçue comme un véritable joyau du quotidien.\n\nGrâce à la robustesse de ses matériaux, elle peut être portée chaque jour, comme une seconde peau, ou réservée aux grandes occasions selon vos envies.",
          EN: "Designed to stand the test of time, this piece was created as a true everyday jewel.\n\nThanks to the strength of its materials, it can be worn daily like a second skin, or reserved for special occasions as you desire.",
          PT: "Pensada para resistir ao tempo, esta peça foi concebida como uma verdadeira joia do dia a dia.\n\nGraças à robustez dos seus materiais, pode ser usada diariamente como uma segunda pele, ou reservada para grandes ocasiões, conforme o seu desejo."
        },
        recommendations: [
          {
            FR: "Votre bijou résiste parfaitement à l'eau, y compris aux baignades en mer.",
            EN: "Your jewel is perfectly water-resistant, including swimming in the sea.",
            PT: "Sua joia é perfeitamente resistente à água, incluindo natação no mar."
          },
          {
            FR: "Il est néanmoins conseillé d'éviter les activités à risque (jardinage, bricolage, sports de contact) afin de préserver son éclat.",
            EN: "However, it is advisable to avoid risky activities (gardening, DIY, contact sports) to preserve its shine.",
            PT: "No entanto, é aconselhável evitar atividades de risco (jardinagem, bricolagem, esportes de contato) para preservar seu brilho."
          },
          {
            FR: "Une vérification annuelle dans nos ateliers est recommandée :",
            EN: "An annual check in our workshops is recommended:",
            PT: "Recomenda-se uma verificação anual em nossos ateliers:"
          },
          {
            FR: "Pour assurer la solidité du serti et prévenir toute usure du métal.",
            EN: "To ensure setting integrity and prevent metal wear.",
            PT: "Para garantir a integridade da cravação e evitar desgaste do metal."
          },
          {
            FR: "Pour redonner tout son éclat à votre bijou grâce à un nettoyage professionnel.",
            EN: "To restore your jewel’s full brilliance with professional cleaning.",
            PT: "Para restaurar todo o brilho da sua joia com limpeza profissional."
          },
          {
            FR: "Souscrivez à notre service d'entretien annuel et confiez-nous votre bijou pour qu'il retrouve toute sa noblesse.",
            EN: "Subscribe to our annual maintenance service and entrust us with your jewel to restore its full nobility.",
            PT: "Assine nosso serviço anual de manutenção e confie-nos sua joia para recuperar toda a sua nobreza."
          }
        ]
      },
      fabrication: {
        process: {
          FR: "Chaque création est entièrement réalisée à la main, dans la plus pure tradition joaillière, au sein de notre atelier au Portugal.\n\nUn savoir-faire artisanal exigeant, mêlant précision, patience et passion.",
          EN: "Each creation is entirely handcrafted in the purest jewelry tradition, in our workshop in Portugal.\n\nA demanding artisanal expertise blending precision, patience, and passion.",
          PT: "Cada criação é totalmente feita à mão, na mais pura tradição joalheira, em nosso ateliê em Portugal.\n\nUm saber-fazer artesanal exigente que combina precisão, paciência e paixão."
        },
        customization: [
          {
            FR: "Disponible en or jaune, rose ou blanc 19,2 carats.",
            EN: "Available in 19‑carat yellow, rose, or white gold.",
            PT: "Disponível em ouro amarelo, rosa ou branco de 19 quilates."
          },
          {
            FR: "Qualité de diamant standard : GVS.",
            EN: "Standard diamond quality: GVS.",
            PT: "Qualidade padrão de diamante: GVS."
          },
          {
            FR: "Sur demande : qualité exceptionnelle D Flawless (devis personnalisé).",
            EN: "On request: exceptional D Flawless quality (custom quote).",
            PT: "Sob consulta: qualidade excepcional D Flawless (orçamento personalizado)."
          },
          {
            FR: "Certificat GIA ou HRD fourni pour tout diamant supérieur à 0,30 carat.",
            EN: "GIA or HRD certificate provided for any diamond over 0.30 carat.",
            PT: "Certificado GIA ou HRD fornecido para qualquer diamante acima de 0,30 quilate."
          },
          {
            FR: "Possibilité de remplacer les diamants par d'autres pierres précieuses ou fines de votre choix.",
            EN: "Option to replace diamonds with other precious or semi-precious stones of your choice.",
            PT: "Opção de substituir os diamantes por outras pedras preciosas ou semipreciosas de sua escolha."
          },
          {
            FR: "Chaque projet de personnalisation fait l'objet d'un devis spécifique et d'un accompagnement sur-mesure.",
            EN: "Each customization project comes with a specific quote and tailored support.",
            PT: "Cada projeto de personalização inclui orçamento específico e apoio personalizado."
          }
        ]
      },
      delivery: {
        timeline: {
          FR: "Délai de fabrication et livraison : 8 semaines.",
          EN: "Production and delivery time: 8 weeks.",
          PT: "Prazo de produção e entrega: 8 semanas."
        },
        shipping: {
          FR: "Expédition sécurisée et suivie via notre partenaire DHL.",
          EN: "Secure, tracked shipping via our partner DHL.",
          PT: "Envio seguro e rastreado com nosso parceiro DHL."
        },
        returns: {
          FR: "Retour gratuit sous 30 jours après réception de votre bijou.",
          EN: "Free returns within 30 days after receiving your jewel.",
          PT: "Devoluções gratuitas em até 30 dias após o recebimento da sua joia."
        },
        sizing: {
          FR: "Remise à taille offerte pour un ajustement parfait.",
          EN: "Free resizing for a perfect fit.",
          PT: "Redimensionamento gratuito para um ajuste perfeito."
        },
        support: {
          FR: "Service client disponible 7j/7 pour vous accompagner.",
          EN: "Customer service available 7 days a week to assist you.",
          PT: "Atendimento ao cliente disponível 7 dias por semana para ajudar você."
        }
      }
    },
    {
      id: 5,
      name: "Louise",
      price: "2 500",
      description: {
        FR: "L'alliance comme un murmure d'éternité… Brillante sans ostentation, unique sans exagération, elle incarne ce lien précieux que vous avez choisi. Seul bijou que l'on ne quitte jamais, elle traverse les jours et les années à vos côtés, fidèle reflet de votre amour. Pensée pour se marier parfaitement à votre bague de fiançailles, mais aussi à votre quotidien, elle se porte seule pour sa délicatesse, ou en duo avec votre bague de fiançailles pour sublimer l'ensemble. Une promesse d'élégance, pour la vie.\n\nElle se marie parfaitement avec notre modèle Thelma.",
        EN: "The alliance as a whisper of eternity... Shining without ostentation, unique without exaggeration, it embodies the precious bond you have chosen. The only jewel you never take off, it traverses days and years by your side, a faithful reflection of your love. Designed to pair perfectly with your engagement ring, but also for your daily life, it can be worn alone for its delicacy, or in duo with your engagement ring to enhance the whole. A promise of elegance, for life.",
        PT: "A aliança como um sussurro de eternidade... Brilhante sem ostentação, única sem exagero, ela encarna o vínculo precioso que você escolheu. A única joia que você nunca tira, ela atravessa dias e anos ao seu lado, um reflexo fiel do seu amor. Pensada para se casar perfeitamente com seu anel de noivado, mas também para o seu dia a dia, pode ser usada sozinha pela sua delicadeza, ou em dueto com seu anel de noivado para sublimar o conjunto. Uma promessa de elegância, para a vida."
      },
      relatedProduct: "Thelma",
      relatedProductId: 4,
      image: images?.image6,
      technicalDetails: {
        weight: {
          FR: "Env. 2,5 g d'or 19,2 carats",
          EN: "Approx. 2.5 g of 19.2-carat gold",
          PT: "Aproximadamente 2,5 g de ouro 19,2 quilates"
        },
        diamonds: [
          {
            FR: "3 diamants navettes 4x2 mm",
            EN: "3 marquise diamonds 4x2 mm",
            PT: "3 diamantes marquise 4x2 mm"
          },
          {
            FR: "2 diamants rond 2,4 mm",
            EN: "2 round diamonds 2.4 mm",
            PT: "2 diamantes redondos 2,4 mm"
          },
          {
            FR: "2 diamants ronds 2 mm",
            EN: "2 round diamonds 2 mm",
            PT: "2 diamantes redondos 2 mm"
          }
        ]
      },
      care: {
        durability: {
          FR: "Pensée pour traverser le temps, cette pièce a été conçue comme un véritable joyau du quotidien.\n\nGrâce à la robustesse de ses matériaux, elle peut être portée chaque jour, comme une seconde peau, ou réservée aux grandes occasions selon vos envies.",
          EN: "Designed to stand the test of time, this piece was created as a true everyday jewel.\n\nThanks to the strength of its materials, it can be worn daily like a second skin, or reserved for special occasions as you desire.",
          PT: "Pensada para resistir ao tempo, esta peça foi concebida como uma verdadeira joia do dia a dia.\n\nGraças à robustez dos seus materiais, pode ser usada diariamente como uma segunda pele, ou reservada para grandes ocasiões, conforme o seu desejo."
        },
        recommendations: [
          {
            FR: "Votre bijou résiste parfaitement à l'eau, y compris aux baignades en mer.",
            EN: "Your jewel is perfectly water-resistant, including swimming in the sea.",
            PT: "Sua joia é perfeitamente resistente à água, incluindo natação no mar."
          },
          {
            FR: "Il est néanmoins conseillé d'éviter les activités à risque (jardinage, bricolage, sports de contact) afin de préserver son éclat.",
            EN: "However, it is advisable to avoid risky activities (gardening, DIY, contact sports) to preserve its shine.",
            PT: "No entanto, é aconselhável evitar atividades de risco (jardinagem, bricolagem, esportes de contato) para preservar seu brilho."
          },
          {
            FR: "Une vérification annuelle dans nos ateliers est recommandée :",
            EN: "An annual check in our workshops is recommended:",
            PT: "Recomenda-se uma verificação anual em nossos ateliers:"
          },
          {
            FR: "Pour assurer la solidité du serti et prévenir toute usure du métal.",
            EN: "To ensure the strength of the setting and prevent any wear of the metal.",
            PT: "Para garantir a resistência do engaste e prevenir qualquer desgaste do metal."
          },
          {
            FR: "Pour redonner tout son éclat à votre bijou grâce à un nettoyage professionnel.",
            EN: "To restore all its shine to your jewel through professional cleaning.",
            PT: "Para devolver todo o seu brilho à sua joia através de uma limpeza profissional."
          },
          {
            FR: "Souscrivez à notre service d'entretien annuel et confiez-nous votre bijou pour qu'il retrouve toute sa noblesse.",
            EN: "Subscribe to our annual maintenance service and entrust us with your jewel so that it regains all its nobility.",
            PT: "Assine nosso serviço de manutenção anual e confie-nos sua joia para que ela recupere toda a sua nobreza."
          }
        ]
      },
      fabrication: {
        process: {
          FR: "Chaque création est entièrement réalisée à la main, dans la plus pure tradition joaillière, au sein de notre atelier au Portugal.\n\nUn savoir-faire artisanal exigeant, mêlant précision, patience et passion.",
          EN: "Each creation is entirely handcrafted in the purest jewelry tradition, in our workshop in Portugal.\n\nA demanding artisanal expertise blending precision, patience, and passion.",
          PT: "Cada criação é totalmente feita à mão, na mais pura tradição joalheira, em nosso ateliê em Portugal.\n\nUm saber-fazer artesanal exigente que combina precisão, paciência e paixão."
        },
        customization: [
          {
            FR: "Disponible en or jaune, rose ou blanc 19,2 carats.",
            EN: "Available in 19‑carat yellow, rose, or white gold.",
            PT: "Disponível em ouro amarelo, rosa ou branco de 19 quilates."
          },
          {
            FR: "Qualité de diamant standard : GVS.",
            EN: "Standard diamond quality: GVS.",
            PT: "Qualidade padrão de diamante: GVS."
          },
          {
            FR: "Sur demande : qualité exceptionnelle D Flawless (devis personnalisé).",
            EN: "On request: exceptional D Flawless quality (custom quote).",
            PT: "Sob demanda: qualidade excepcional D Flawless (orçamento personalizado)."
          },
          {
            FR: "Certificat GIA ou HRD fourni pour tout diamant supérieur à 0,30 carat.",
            EN: "GIA or HRD certificate provided for any diamond over 0.30 carat.",
            PT: "Certificado GIA ou HRD fornecido para qualquer diamante acima de 0,30 quilate."
          },
          {
            FR: "Possibilité de remplacer les diamants par d'autres pierres précieuses ou fines de votre choix.",
            EN: "Option to replace diamonds with other precious or semi-precious stones of your choice.",
            PT: "Opção de substituir os diamantes por outras pedras preciosas ou semipreciosas à sua escolha."
          },
          {
            FR: "Chaque projet de personnalisation fait l'objet d'un devis spécifique et d'un accompagnement sur-mesure.",
            EN: "Each customization project comes with a specific quote and tailored support.",
            PT: "Cada projeto de personalização inclui orçamento específico e apoio personalizado."
          }
        ]
      },
      delivery: {
        timeline: {
          FR: "Délai de fabrication et livraison : 8 semaines.",
          EN: "Production and delivery time: 8 weeks.",
          PT: "Prazo de produção e entrega: 8 semanas."
        },
        shipping: {
          FR: "Expédition sécurisée et suivie via notre partenaire DHL.",
          EN: "Secure, tracked shipping via our partner DHL.",
          PT: "Envio seguro e rastreado com nosso parceiro DHL."
        },
        returns: {
          FR: "Retour gratuit sous 30 jours après réception de votre bijou.",
          EN: "Free returns within 30 days after receiving your jewel.",
          PT: "Devoluções gratuitas em até 30 dias após o recebimento da sua joia."
        },
        sizing: {
          FR: "Remise à taille offerte pour un ajustement parfait.",
          EN: "Free resizing for a perfect fit.",
          PT: "Redimensionamento gratuito para um ajuste perfeito."
        },
        support: {
          FR: "Service client disponible 7j/7 pour vous accompagner.",
          EN: "Customer service available 7 days a week to assist you.",
          PT: "Atendimento ao cliente disponível 7 dias por semana para ajudar você."
        }
      }
    }
  ];
  
  const toggleSection = (productId: number, section: string) => {
    const key = `${productId}-${section}`;
    setOpenSections(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  const handleContactClick = (productName: string) => {
    const phone = !data ? '' : data[0].phone;
    const formattedPhone = phone.replace(/\s|\+/g, '');
    const message = encodeURIComponent(`Bonjour, je suis intéressé(e) par ${productName}. Pouvez-vous m'en dire plus ?`);
    window.open(`https://wa.me/${formattedPhone}?text=${message}`, '_blank');
  };

  const handleMoreInfoClick = (productName: string) => {
    const phone = !data ? '' : data[0].phone; 
    const formattedPhone = phone.replace(/\s|\+/g, '');
    const message = encodeURIComponent(`Bonjour, j'aimerais recevoir plus d'informations sur ${productName}. Merci !`);
   window.open(`https://wa.me/${formattedPhone}?text=${message}`, '_blank');
  };

  const scrollToProduct = (productId: number) => {
    const element = document.getElementById(`product-${productId}`);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <main className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="h-[70vh] relative flex items-center justify-center">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${images?.image1})`,
          }}
        >
          <div className="absolute inset-0 bg-black/40" />
        </div>
        <div className="relative h-full flex items-center justify-center text-white">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-light mb-4 text-white">
              {currentLanguage === "FR" ? "Des créations d'exception" : currentLanguage === "PT" ? "Criações excepcionais" : "Exceptional creations"}<br />{currentLanguage === "FR" ? "serties main" : currentLanguage === "PT" ? "sertas principais" : "main series"}
            </h1>
            <p className="text-lg md:text-xl text-white">
              {currentLanguage === "FR" ? "Chaque bijou célèbre ce que vous avez d'unique à exprimer" : currentLanguage === "PT" ? "Cada joia celebra o que você tem de único para expressar" : "Each jewel celebrates what you have unique to express"}
            </p>
          </div>
        </div>
      </section>

      {/* Navigation par photos */}
      <section className="py-12 bg-powder/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl text-center font-light mb-8 text-teal">{currentLanguage === "FR" ? "Mes Créations" : currentLanguage === "PT" ? "Minhas Criações" : "My Creations"}</h2>
          <div className="flex justify-center">
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4 max-w-4xl">
              {products.map((product) => (
                <motion.button
                  key={product.id}
                  onClick={() => scrollToProduct(product.id)}
                  className="group relative aspect-square overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <img
                   referrerPolicy="no-referrer"
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="text-white text-lg font-light">{product.name}</span>
                  </div>
                </motion.button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Fiches produits détaillées */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="space-y-24 max-w-6xl mx-auto">
            {products.map((product, index) => (
              <motion.div
                key={product.id}
                id={`product-${product.id}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="scroll-mt-24"
              >
                <div className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 items-start`}>
                  {/* Image */}
                  <div className="w-full lg:w-2/5">
                    <div className="relative aspect-square overflow-hidden rounded-lg shadow-xl">
                      <img
                       referrerPolicy="no-referrer"
                        src={product.image}
                        alt={product.name}
                        className={`w-full h-full object-cover ${product.id === 1 ? 'scale-[1.16]' : ''}`}
                        loading="lazy"
                      />
                    </div>
                    
                    {/* Bouton Recevoir plus d'informations - Style discret */}
                    <div className="mt-6">
                      <Button
                        onClick={() => handleMoreInfoClick(product.name)}
                        variant="outline"
                        className="w-full border-teal/30 text-teal hover:bg-teal/5 hover:border-teal/50 transition-colors"
                        size="lg"
                      >
                       {currentLanguage === "FR" ? "Recevoir plus d'informations" : currentLanguage === "PT" ? "Receber mais informações" : "Receive more information"}
                      </Button>
                    </div>
                  </div>

                  {/* Contenu */}
                  <div className="w-full lg:w-3/5 space-y-6">
                    <div className="flex items-center gap-4">
                      <h3 className="text-4xl font-light text-teal">{product.name}</h3>
                      <Badge variant="outline" className="bg-rust/10 text-rust border-rust">
                        {currentLanguage === "FR" ? "Création exclusive" : currentLanguage === "PT" ? "Criação exclusiva" : "Exclusive creation"}
                      </Badge>
                    </div>

                    <p className="text-3xl text-rust font-light">{product.price} €</p>

                    {/* Description principale */}
                    <div className="space-y-4">
                      {product.description[currentLanguage].split('\n\n').map((paragraph, i) => {
                        if (paragraph.includes('Elle se marie parfaitement avec notre modèle')) {
                          return (
                            <p key={i} className="text-teal">
                              {paragraph.split('Elle se marie parfaitement avec notre modèle ')[0]}
                              {currentLanguage === 'FR' ? 'Elle se marie parfaitement avec notre modèle' : currentLanguage === 'PT'? 'Combina perfeitamente com o nosso modelo' : 'It fits perfectly with our model'}{' '}
                              <button
                                onClick={() => scrollToProduct(product.relatedProductId!)}
                                className="text-rust hover:underline font-medium inline-flex items-center gap-1"
                              >
                                {product.relatedProduct}
                                <ExternalLink className="w-4 h-4" />
                              </button>
                              .
                            </p>
                          );
                        }
                        return (
                          <p key={i} className="text-teal">
                            {paragraph}
                          </p>
                        );
                      })}
                    </div>

                    {/* Sections pliables */}
                    <div className="bg-powder/50 rounded-lg p-6 space-y-0">
                      {/* Détails techniques */}
                      <CollapsibleSection
                        title={currentLanguage === "FR" ? "Détails techniques" : currentLanguage === "PT" ? "Detalhes técnicos" : "Technical details"}
                        isOpen={openSections[`${product.id}-technical`] || false}
                        onToggle={() => toggleSection(product.id, 'technical')}
                      >
                        <div className="space-y-4 text-teal">
                          <p className="font-medium">{product.technicalDetails.weight[currentLanguage]}</p>
                          <div>
                            <p className="font-medium mb-2">Diamants naturels GVS :</p>
                            <ul className="space-y-1">
                              {product.technicalDetails.diamonds.map((diamond, i) => (
                                <li key={i} className="flex items-start gap-2">
                                  <span className="w-2 h-2 rounded-full bg-rust mt-2 flex-shrink-0" />
                                  <span>{diamond[currentLanguage]}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                          {product.technicalDetails.sizing && (
                            <p className="font-medium">{product.technicalDetails.sizing[currentLanguage]}</p>
                          )}
                        </div>
                      </CollapsibleSection>

                      {/* Conseils d'entretien */}
                      <CollapsibleSection
                        title={currentLanguage === "FR" ? "Conseils d'entretien & promesse de durabilité" : currentLanguage === "PT" ? "Conselhos de manutenção & promessa de durabilidade" : "Maintenance tips & durability promise"}
                        isOpen={openSections[`${product.id}-care`] || false}
                        onToggle={() => toggleSection(product.id, 'care')}
                      >
                        <div className="space-y-4 text-teal">
                          {product.care.durability[currentLanguage].split('\n\n').map((paragraph, i) => (
                            <p key={i}>{paragraph}</p>
                          ))}
                          <div>
                            <p className="font-medium mb-2">{currentLanguage === 'FR' ? 'Nos recommandations' : currentLanguage === 'PT'? 'Nossas recomendações' : 'Our recommendations'}</p>
                            <ul className="space-y-1">
                              {product.care.recommendations.map((rec, i) => (
                                <li key={i} className="flex items-start gap-2">
                                  <span className="w-2 h-2 rounded-full bg-rust mt-2 flex-shrink-0" />
                                  <span>{rec[currentLanguage]}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </CollapsibleSection>

                      {/* Fabrication & Personnalisation */}
                      <CollapsibleSection
                        title={currentLanguage === "FR" ? "Fabrication & Personnalisation" : currentLanguage === "PT" ? "Fabricação & Personalização" : "Fabrication & Personalization"}
                        isOpen={openSections[`${product.id}-fabrication`] || false}
                        onToggle={() => toggleSection(product.id, 'fabrication')}
                      >
                        <div className="space-y-4 text-teal">
                          {product.fabrication.process[currentLanguage].split('\n\n').map((paragraph, i) => (
                            <p key={i}>{paragraph}</p>
                          ))}
                          <div>
                            <p className="font-medium mb-2">Options de personnalisation :</p>
                            <ul className="space-y-1">
                              {product.fabrication.customization.map((option, i) => (
                                <li key={i} className="flex items-start gap-2">
                                  <span className="w-2 h-2 rounded-full bg-rust mt-2 flex-shrink-0" />
                                  <span>{option[currentLanguage]}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </CollapsibleSection>

                      {/* Livraison & Retours */}
                      <CollapsibleSection
                        title={currentLanguage === "FR" ? "Livraison & Retours" : currentLanguage === "PT" ? "Entrega & Devolução" : "Delivery & Returns"}
                        isOpen={openSections[`${product.id}-delivery`] || false}
                        onToggle={() => toggleSection(product.id, 'delivery')}
                      >
                        <div className="space-y-2 text-teal">
                          <p className="flex items-start gap-2">
                            <span className="w-2 h-2 rounded-full bg-rust mt-2 flex-shrink-0" />
                            <span>{product.delivery.timeline[currentLanguage]}</span>
                          </p>
                          <p className="flex items-start gap-2">
                            <span className="w-2 h-2 rounded-full bg-rust mt-2 flex-shrink-0" />
                            <span>{product.delivery.shipping[currentLanguage]}</span>
                          </p>
                          <p className="flex items-start gap-2">
                            <span className="w-2 h-2 rounded-full bg-rust mt-2 flex-shrink-0" />
                            <span>{product.delivery.returns[currentLanguage]}</span>
                          </p>
                          <p className="flex items-start gap-2">
                            <span className="w-2 h-2 rounded-full bg-rust mt-2 flex-shrink-0" />
                            <span>{product.delivery.sizing[currentLanguage]}</span>
                          </p>
                          <p className="flex items-start gap-2">
                            <span className="w-2 h-2 rounded-full bg-rust mt-2 flex-shrink-0" />
                            <span>{product.delivery.support[currentLanguage]}</span>
                          </p>
                        </div>
                      </CollapsibleSection>
                    </div>

                    {/* Bouton contact */}
                    <Button
                      onClick={() => handleContactClick(product.name)}
                      className="w-full sm:w-auto bg-rust text-white hover:bg-rust/90 mt-6"
                      size="lg"
                    >
                      <MessageCircle className="w-5 h-5 mr-2" />
                      {currentLanguage === 'FR' ? 'Contactez-moi' : currentLanguage === 'PT'? 'Contate-me' : 'Contact me'}
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section CTA */}
      <section className="py-20 bg-powder/50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-light mb-6 text-teal">
            {currentLanguage === 'FR' ? 'Vous avez une question sur mes créations ?' : currentLanguage === 'PT'? 'Você tem uma pergunta sobre minhas criações ?' : 'You have a question about my creations ?'}
          </h2>
          <p className="text-teal mb-4 max-w-2xl mx-auto">
            {currentLanguage === 'FR' ? 'Je suis à votre disposition pour vous guider et répondre à toutes vos questions.' : currentLanguage === 'PT'? 'Estou à sua disposição para guiá-lo e responder a todas as suas perguntas.' : 'I am available to guide you and answer all your questions.'}
          </p>
          <p className="text-rust font-medium">
            {currentLanguage === 'FR' ? 'Disponible 7j/7 sur WhatsApp' : currentLanguage === 'PT'? 'Disponível 7 dias por semana no WhatsApp' : 'Available 7 days a week on WhatsApp'}
          </p>
        </div>
      </section>
    </main>
  );
}