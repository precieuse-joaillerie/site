"use client";

import { useState } from 'react';
import { Navigation } from '@/components/ui/navigation';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Phone, Mail, Clock, MessageCircle, Sparkles } from 'lucide-react';
import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';
import { useFetch } from "@/hooks/useFetch";
import Loader from "@/components/Loader";
import toast from 'react-hot-toast';

export default function ContactPage() {
  const { currentLanguage } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const query = `
    *[_type == "contact"]
 `;
  const { data, isLoading, error } = useFetch(query);

  const phone = !data ? '' : data[0].phone;
  const email = !data ? '' : data[0].email;

  const successMessage = currentLanguage === 'FR' ? 'Message envoyé avec succès' : currentLanguage === 'EN' ? 'Message sent successfully' : 'Mensagem enviado com sucesso';
  const errorMessage = currentLanguage === 'FR' ? 'Message non envoyé' : currentLanguage === 'EN' ? 'Message not sent' : 'Mensagem não enviada';

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      if (!response.ok) {
        throw new Error('Failed to send message');
      }
      toast.success(successMessage);
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: '',
      });
    } catch (err) {
      console.error(err);
      toast.error(errorMessage);
      return
    }
  };


  const handleWhatsAppClick = () => {
    const formattedPhone = phone.replace(/\s|\+/g, '');
    window.open(`https://wa.me/${formattedPhone}`, '_blank');
  };

  if (isLoading) return <Loader />;
  if (error) return <div>Error</div>;
  const images = !data ? [] : data[0];

  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="h-[50vh] relative flex items-center justify-center">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundImage: `url("${images?.heroImage}")`,
          }}
        >
          <div className="absolute inset-0 bg-black/40" />
        </div>
        <div className="relative text-white text-center z-10">
          <h1 className="text-5xl md:text-7xl font-light mb-4 text-white">{currentLanguage === 'FR' ? 'Contact' : currentLanguage === 'EN' ? 'Contact' : 'Contato'}</h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto text-white">
            {currentLanguage === 'FR' ? 'Je suis là pour vous accompagner' : currentLanguage === 'EN' ? 'I am here to accompany you' : 'Estou aqui para te acompanhar'}
          </p>
        </div>
      </section>

      {/* Custom Jewelry Banner */}
      <div className="bg-rust/50 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-light mb-6">
            {currentLanguage === 'FR' ? 'Créons votre bijou sur-mesure' : currentLanguage === 'EN' ? 'We create your custom jewelry' : 'Criamos seu bijujo a medida'}
          </h2>
          <p className="text-lg max-w-2xl mx-auto mb-8">
            {currentLanguage === 'FR' ? 'Chaque création est unique, façonnée selon vos désirs. Découvrez un processus de création personnalisée et donnez vie à votre projet.' : currentLanguage === 'EN' ? 'Each creation is unique, shaped according to your desires. Discover a personalized creation process and bring your project to life.' : 'Cada criação é única, formada de acordo com seus desejos. Descubra um processo de criação personalizado e dê vida ao seu projeto.'}
          </p>
          <div className="flex justify-center">
            <Link href="/sur-mesure">
              <Button
                className="bg-white text-rust hover:bg-white/90 flex items-center gap-2"
                size="lg"
              >
                <Sparkles className="w-5 h-5" />
                {currentLanguage === 'FR' ? 'Créez votre bijou' : currentLanguage === 'EN' ? 'Create your custom jewelry' : 'Crie seu bijujo a medida'}
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Contact Options */}
      <section className="py-12 bg-powder/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl text-center font-light mb-8 text-teal">
            {currentLanguage === 'FR' ? 'Pour toutes autres questions' : currentLanguage === 'EN' ? 'For any other questions' : 'Para todas as outras perguntas'}
          </h2>
          <div className="flex flex-col md:flex-row justify-center gap-6 max-w-2xl mx-auto">
            <Button
              onClick={handleWhatsAppClick}
              className="bg-rust text-white hover:bg-rust/90 flex-1"
              size="lg"
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              {currentLanguage === 'FR' ? 'Contactez-moi sur WhatsApp' : currentLanguage === 'EN' ? 'Contact me on WhatsApp' : 'Contate-me no WhatsApp'}
            </Button>
            <Link href={`mailto:${email}`} className="flex-1">
              <Button
                className="bg-rust text-white hover:bg-rust/90 w-full"
                size="lg"
              >
                <Mail className="mr-2 h-5 w-5" />
                {currentLanguage === 'FR' ? 'Contactez-moi par email' : currentLanguage === 'EN' ? 'Contact me by email' : 'Contate-me por e-mail'}
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 max-w-5xl mx-auto">
            {/* Contact Form */}
            <div className="bg-powder p-8 rounded-lg h-fit">
              <h2 className="text-3xl md:text-4xl font-light mb-8 text-teal">{currentLanguage === 'FR' ? 'Écrivez-moi' : currentLanguage === 'EN' ? 'Write to me' : 'Escreva para mim'}</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Input
                    placeholder={currentLanguage === 'FR' ? 'Votre nom' : currentLanguage === 'EN' ? 'Your name' : 'Seu nome'}
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="border-teal/30 focus:border-rust bg-white text-teal"
                    required
                  />
                </div>
                <div>
                  <Input
                    type="email"
                    placeholder={currentLanguage === 'FR' ? 'Votre email' : currentLanguage === 'EN' ? 'Your email' : 'Seu email'}
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="border-teal/30 focus:border-rust bg-white text-teal"
                    required
                  />
                </div>
                <div>
                  <Input
                    type="tel"
                    placeholder={currentLanguage === 'FR' ? 'Votre téléphone' : currentLanguage === 'EN' ? 'Your phone' : 'Seu telefone'}
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="border-teal/30 focus:border-rust bg-white text-teal"
                    required
                  />
                </div>
                <div>
                  <Textarea
                    placeholder={currentLanguage === 'FR' ? 'Votre message' : currentLanguage === 'EN' ? 'Your message' : 'Seu mensagem'}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="border-teal/30 focus:border-rust min-h-[150px] bg-white text-teal"
                    required 
                    />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-rust text-white hover:bg-rust/90"
                >
                  {currentLanguage === 'FR' ? 'Envoyer' : currentLanguage === 'EN' ? 'Send' : 'Enviar'}
                </Button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="bg-powder p-8 rounded-lg h-fit">
              <h2 className="text-3xl md:text-4xl font-light mb-8 text-teal">{currentLanguage === 'FR' ? 'Coordonnées' : currentLanguage === 'EN' ? 'Contact Information' : 'Coordenadas'}</h2>
              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <Phone className="w-6 h-6 text-rust flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-1 text-teal">{currentLanguage === 'FR' ? 'Téléphone & WhatsApp' : currentLanguage === 'EN' ? 'Phone & WhatsApp' : 'Telefone & WhatsApp'}</h3>
                    <p className="text-teal">{phone}</p>
                    <p className="text-sm text-rust mt-1">{currentLanguage === 'FR' ? 'Disponible 7j/7' : currentLanguage === 'EN' ? 'Available 7 days a week' : 'Disponível 7 dias por semana'}</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Mail className="w-6 h-6 text-rust flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-1 text-teal">{currentLanguage === 'FR' ? 'Email' : currentLanguage === 'EN' ? 'Email' : 'Email'}</h3>
                    <p className="text-teal">{email}</p>
                    <p className="text-sm text-rust mt-1">{currentLanguage === 'FR' ? 'Réponse sous 24h, 7j/7' : currentLanguage === 'EN' ? 'Response within 24 hours, 7 days a week' : 'Resposta em 24 horas, 7 dias por semana'}</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Clock className="w-6 h-6 text-rust flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-1 text-teal">{currentLanguage === 'FR' ? 'Horaires' : currentLanguage === 'EN' ? 'Hours' : 'Horários'}</h3>
                    <p className="text-teal">
                      {currentLanguage === 'FR' ? <>Service client disponible 7j/7<br />Lundi - Dimanche : 9h - 20h</> : currentLanguage === 'EN' ? <>Service client available 7 days a week<br />Monday - Sunday : 9am - 8pm</> : <>Disponível 7 dias por semana<br />Segunda - Domingo : 9h - 20h</>}
                    </p>  
                  </div>
                </div>
              </div>
            </div>  
          </div>
        </div>
      </section>
    </main>
  );
}