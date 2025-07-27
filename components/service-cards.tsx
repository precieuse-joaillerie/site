"use client";

import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Truck, RefreshCcw, Award, MessageCircle } from "lucide-react";
import { useLanguage } from '@/contexts/LanguageContext';

export function ServiceCards() {
  const { currentLanguage } = useLanguage();
  return (
    <section className="py-20 bg-powder/50">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          {[
            {
              icon: Truck,
              title: currentLanguage === 'EN' ? "Secure Delivery" : currentLanguage === 'PT' ? "Entrega Segura" : "Livraison Sécurisée",
              description: currentLanguage === 'EN' ? "Secure payment and delivery" : currentLanguage === 'PT' ? "Pagamento e entrega segura" : "Livraison et paiement 100% sécurisés",
              content: currentLanguage === 'EN' ? "Your jewelry is insured and delivered with a complete follow-up." : currentLanguage === 'PT' ? "O seu joia é assegurado e entregue com um seguimento completo." : "Votre bijou est assuré et livré en toute sécurité avec un suivi complet."
            },
            {
              icon: RefreshCcw,
              title: currentLanguage === 'EN' ? "Free Returns" : currentLanguage === 'PT' ? "Devoluções Grátis" : "Retour Gratuit",
              description: currentLanguage === 'EN' ? "30 days to try" : currentLanguage === 'PT' ? "30 dias para experimentar" : "30 jours pour essayer",
              content: currentLanguage === 'EN' ? "Free returns and resizing within 30 days." : currentLanguage === 'PT' ? "Devoluções e redimensionamento gratuitos em 30 dias." : "Retour et mise à taille gratuits sous 30 jours."
            },
            {
              icon: Award,
              title: currentLanguage === 'EN' ? "Certifications" : currentLanguage === 'PT' ? "Certificações" : "Certifications",
              description: currentLanguage === 'EN' ? "Official labels and certificates" : currentLanguage === 'PT' ? "Rótulos e certificados oficiais" : "Labels et certificats officiels",
              content: currentLanguage === 'EN' ? "RJC label and GIA and HRD certificates ensuring quality and ethics." : currentLanguage === 'PT' ? "Rótulo RJC e certificados GIA e HRD garantindo qualidade e ética." : "Label RJC et certificats GIA et HRD garantissant qualité et éthique."
            },
            {
              icon: MessageCircle,
              title: currentLanguage === 'EN' ? "Customer Service" : currentLanguage === 'PT' ? "Atendimento ao Cliente" : "Service Client",
              description: currentLanguage === 'EN' ? "Available 7 days a week on WhatsApp" : currentLanguage === 'PT' ? "Disponível 7 dias por semana no WhatsApp" : "Disponible 7j/7 sur WhatsApp",
              content: currentLanguage === 'EN' ? "I'm here to help you every day on WhatsApp." : currentLanguage === 'PT' ? "Estou aqui para ajudá-lo todos os dias no WhatsApp." : "Je me tiens à votre disposition tous les jours sur WhatsApp."
            }
          ].map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="h-full"
            >
              <Card className="bg-powder h-full flex flex-col">
                <CardHeader className="flex-shrink-0">
                  <service.icon className="w-8 h-8 mb-2 text-rust" />
                  <CardTitle className="text-teal text-lg">{service.title}</CardTitle>
                  <CardDescription className="text-teal text-sm" dangerouslySetInnerHTML={{ __html: service.description }} />
                </CardHeader>
                <CardContent className="flex-grow flex items-start">
                  <p className="text-sm text-teal" dangerouslySetInnerHTML={{ __html: service.content }} />
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}