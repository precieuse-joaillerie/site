"use client";
import axios from 'axios';
import { useState, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { Navigation } from '@/components/ui/navigation';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { FileText, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from 'framer-motion';
import { InlineWidget } from "react-calendly";
import { useLanguage } from '@/contexts/LanguageContext';
import { useFetch } from '@/hooks/useFetch';
import Loader from '@/components/Loader';
import toast from 'react-hot-toast';

export default function SurMesurePage() {
  const { currentLanguage } = useLanguage();
  const testimonials = currentLanguage === 'FR' ? [
    {
      name: "L. Nicola",
      text: "Merci à vous pour l'originalité de vos bijoux, mais surtout pour votre gentillesse, votre patience et votre compréhension ! Une vraie pro ! Je recommande fortement…"
    },
    {
      name: "M. Benoit",
      text: "Emeline est tout simplement une artiste ! Les bijoux qu'elle a créés pour moi se sont révélés être magnifiques, le résultat est au-delà de ce que j'avais imaginé… Je suis émue et enthousiasmée ! En un mot : Sublime ! Merci de tout cœur."
    },
    {
      name: "I. Echinops",
      text: "Toujours disponible, de bons conseils, et des prix justes. Merci beaucoup, vous êtes une vraie professionnelle."
    }
  ] : currentLanguage === 'EN' ? [
    {
      name: "L. Nicola",
      text: "Thank you for the originality of your jewelry, but above all for your kindness, patience and understanding! A true professional! I highly recommend you…"
    },
    {
      name: "M. Benoit",
      text: "Emeline is simply an artist! The jewelry she created for me turned out to be magnificent, the result is beyond what I had imagined… I am moved and thrilled! In one word: Sublime! Thank you from the bottom of my heart."
    },
    {
      name: "I. Echinops",
      text: "Always available, with good advice, and at fair prices. Thank you very much, you are a true professional."
    }
  ] : [
    {
      name: "L. Nicola",
      text: "Obrigado por originalidade dos seus jóias, mas sobretudo por sua gentileza, paciência e compreensão! Um verdadeiro profissional! Eu recomendo fortemente…"
    },
    {
      name: "M. Benoit",
      text: "Emeline é simplesmente uma artista! Os jóias que ela criou para mim se revelaram ser magníficos, o resultado é além do que eu havia imaginado… Eu estou emocionada e entusiasmada! Em uma palavra: Sublime! Obrigado de coração."
    },
    {
      name: "I. Echinops",
      text: "Sempre disponível, com bons conselhos, e preços justos. Obrigado muito, você é um verdadeiro profissional."
    }
  ];
  const router = useRouter();
  const searchParams = useSearchParams();
  const [showCalendly, setShowCalendly] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    birthDate: '',
    country: '',
    email: '',
    occasion: '',
    description: ''
  });

  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const successMessage = currentLanguage === 'FR' ? 'Message envoyé avec succès' : currentLanguage === 'EN' ? 'Message sent successfully' : 'Mensagem enviado com sucesso';
  const errorMessage = currentLanguage === 'FR' ? 'Message non envoyé' : currentLanguage === 'EN' ? 'Message not sent' : 'Mensagem não enviada';
  const query = `
    *[_type == "customMadeImages"]
  `;
  const { data, isLoading, error } = useFetch(query);

  useEffect(() => {
    if (window.location.hash === '#form') {
      const formSection = document.getElementById('form');
      if (formSection) {
        formSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const { status } = await axios.post('/api/custom', formData);
      if (![200, 201, 204].includes(status)) {
        throw new Error('Failed to send message');
      }
      toast.success(successMessage);
      setFormData({
        firstName: '',
        lastName: '',
        birthDate: '',
        country: '',
        email: '',
        occasion: '',
        description: '',
      });
    } catch (err) {
      console.error(err);
      toast.error(errorMessage);
      return
    }
  };

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  
  if (isLoading) return <Loader />;

  if (error) return <div>Error</div>;

  const images = !data ? [] : data[0];

  return (
    <main className="min-h-screen">
      <Navigation />
      
      <section className="h-[70vh] relative flex items-center justify-center">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundImage: `url(${images?.image1})`,
          }}
        >
          <div className="absolute inset-0 bg-black/40" />
        </div>
        <div className="relative text-white text-center z-10">
          <h1 className="text-5xl md:text-7xl font-light mb-4 text-white">
            {currentLanguage === 'EN' ? 'Custom Made Alliances' : currentLanguage === 'FR' ? 'Alliances Sur Mesure' : 'Alian as Feitas por Medida'}
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto text-white">
            {currentLanguage === 'EN' ? 'A unique piece that looks like you, carrying meaning.' : currentLanguage === 'FR' ? 'Une pièce unique qui vous ressemble, porteuse de sens.' : 'Uma pe a nica que se assemelha a voc , carregando significado.'}
            <br />
            {currentLanguage === 'EN' ? 'Handcrafted in 19.2 carat gold and certified natural stones.' : currentLanguage === 'FR' ? 'R alis e  la main en or 19,2 carats et pierres naturelles certifi es.' : 'Feita  m o em ouro de 19,2 quilates e pedras naturais certificadas.'}
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="space-y-6"
            >
              <h2 className="text-3xl md:text-4xl font-light text-teal">
                {currentLanguage === 'EN' ? 'The Art of Custom Made' : currentLanguage === 'FR' ? "L'Art du Sur Mesure" : 'A Arte do Feito por Medida'}
              </h2>
              <div className="space-y-4 text-teal">
                <p className="text-lg text-justify">
                  {
                    currentLanguage === "FR" ? "Chez Précieuse, chaque bijou commence par une rencontre. Celle d'un moment fort, d'un désir singulier, d'une émotion à transmettre." : currentLanguage === "EN" ? "At Précieuse, every piece of jewelry begins with an encounter. The encounter of a special moment, a singular desire, an emotion to convey." : "Na Précieuse, cada joia começa com um encontro. O encontro de um momento especial, um desejo singular, uma emoção a transmitir."
                  }
                </p>
                <p className="text-lg text-justify">
                  {
                    currentLanguage === "FR" ? "Ici, le sur-mesure n'est pas une option : c'est une évidence. L'écoute et le savoir-faire de notre joaillière s'unissent pour donner naissance à des pièces qui vous ressemblent." : currentLanguage === "EN" ? "Here, custom-made isn't an option: it's a given. Our jeweler's attentiveness and expertise combine to create pieces that reflect your personality." : "Aqui, personalizado não é uma opção: é uma certeza. A atenção e a experiência dos nossos joalheiros combinam-se para criar peças que refletem a sua personalidade." 
                  }
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative h-[600px]"
            >
              <img
                src={images?.image2}
                alt="L'art du sur mesure"
                className="w-full h-full object-cover rounded-lg shadow-xl"
                 referrerPolicy="no-referrer"
              />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl text-center font-light mb-4 text-teal">
            {currentLanguage === 'EN' ? 'They trust me' : currentLanguage === 'FR' ? 'Ils me font confiance' : 'Eles me confiam'}
          </h2>
          
          {/* Logo centré */}
          <div className="flex justify-center mb-6">
            <img
              src="https://lh3.googleusercontent.com/pw/AP1GczPNA8pMbPEl33W1RMC1hl_PpBbO7yNJmAgYgRaDhA0qCD5RXi6DaIEnmFtWUynU6PoKDSiaVt16craMWlNsxFfSFqai5OvcXKZS091tlormhLdI0ATAhsGZW4C49_hqGV9Z27I8U8raRMfoOVDtKgH0=w134-h99-s-no-gm?authuser=0"
              alt="Logo Précieuse"
              className="w-16 h-12 object-contain"
               referrerPolicy="no-referrer"
            />
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="relative px-16">
              <motion.div
                key={currentTestimonial}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="bg-powder rounded-lg p-6 md:p-8"
              >
                <p className="text-lg md:text-xl italic mb-6 text-teal" dangerouslySetInnerHTML={{ __html: testimonials[currentTestimonial].text }} />
                <div className="text-center">
                  <p className="font-semibold text-rust">{testimonials[currentTestimonial].name}</p>
                </div>
              </motion.div>

              <button
                onClick={prevTestimonial}
                className="absolute left-0 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/80 hover:bg-white transition-colors"
                aria-label="Témoignage précédent"
              >
                <ChevronLeft className="h-6 w-6 text-rust" />
              </button>

              <button
                onClick={nextTestimonial}
                className="absolute right-0 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/80 hover:bg-white transition-colors"
                aria-label="Témoignage suivant"
              >
                <ChevronRight className="h-6 w-6 text-rust" />
              </button>

              <div className="flex justify-center mt-6 gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    className={`w-2 h-2 rounded-full transition-colors ${
                      index === currentTestimonial ? "bg-rust" : "bg-teal/30"
                    }`}
                    aria-label={`Témoignage ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="process" className="py-12 scroll-mt-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl text-center font-light mb-12 text-teal">
            {currentLanguage === 'EN' ? 'Our Creation Process' : currentLanguage === 'FR' ? 'Notre Processus de Création' : 'Nossa Processo de Criação'}
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative h-[800px]"
            >
              <img
                src={images?.image3}
                alt="Processus de création"
                className="w-full h-full object-cover rounded-lg shadow-xl"
                 referrerPolicy="no-referrer"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="relative pl-8">
                <div className="absolute left-[21px] top-[30px] h-[calc(100%-115px)] w-[2px] bg-rust/20"></div>

                <div className="relative mb-8">
                  <div className="absolute left-0 top-[10px] w-11 h-11 rounded-full border-2 border-rust flex items-center justify-center text-rust font-semibold">1</div>
                  <div className="pl-16">
                    <h3 className="text-2xl font-light mb-2 text-teal">
                      {currentLanguage === 'EN'
                        ? 'Initial Exchange (a video call)'
                        : currentLanguage === 'FR'
                          ? 'Échange initial (un rendez-vous en visio)'
                          : 'Troca Inicial (uma chamada de vídeo)'}
                    </h3>
                    <div className="space-y-1 text-teal">
                      <p>
                        {currentLanguage === 'EN'
                          ? 'We take the time to listen to you: the desire, the occasion, the style.'
                          : currentLanguage === 'FR'
                            ? "On prend le temps de vous écouter : l'envie, l'occasion, le style."
                            : 'Nós levamos o tempo para ouvir você: o desejo, a ocasião, o estilo.'}
                      </p>
                      <p>
                        {currentLanguage === 'EN'
                          ? 'We define what your tastes are, your lifestyle, all the useful elements that will allow us to better understand you and shape a jewel that will live with you.'
                          : currentLanguage === 'FR'
                            ? 'On définit quels sont vos goûts, vos habitudes de vie, tous les éléments utiles qui permettront de mieux vous connaître et de façonner un bijou qui va vivre avec vous.'
                            : 'Definimos quais são seus gostos, seu estilo de vida, todos os elementos úteis que permitirão entender melhor você e criar um joia que viverá com você.'}
                      </p>
                      <p>
                        {currentLanguage === 'EN'
                          ? 'This is the starting point of your jewel.'
                          : currentLanguage === 'FR'
                            ? "C'est le point de départ de votre bijou."
                            : 'Este é o ponto de partida do seu joia.'}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="relative mb-8">
                  <div className="absolute left-0 top-[10px] w-11 h-11 rounded-full border-2 border-rust flex items-center justify-center text-rust font-semibold">2</div>
                  <div className="pl-16">
                    <h3 className="text-2xl font-light mb-2 text-teal">
                      {currentLanguage === 'EN'
                        ? 'Sketches & Proposals'
                        : currentLanguage === 'FR'
                          ? 'Croquis & Propositions'
                          : 'Desenhos & Propostas'}
                    </h3>
                    <div className="space-y-1 text-teal">
                      <p>
                        {currentLanguage === 'EN'
                          ? 'Three paths are proposed to you: shapes, stones, composition.'
                          : currentLanguage === 'FR'
                            ? 'Trois pistes vous sont proposées : formes, pierres, composition.'
                            : 'Três caminhos são propostos para você : formas, pedras, composição.'}
                      </p>
                      <p>
                        {currentLanguage === 'EN'
                          ? 'A dialogue is established, we adjust together during a second meeting.'
                          : currentLanguage === 'FR'
                            ? "Un dialogue s'installe, on ajuste ensemble lors d'un second rendez-vous."
                            : 'Um di logo é estabelecido, ajustamos juntos durante um segundo encontro.'}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="relative mb-8">
                  <div className="absolute left-0 top-[10px] w-11 h-11 rounded-full border-2 border-rust flex items-center justify-center text-rust font-semibold">3</div>
                  <div className="pl-16">
                    <h3 className="text-2xl font-light mb-2 text-teal">
                      {currentLanguage === 'EN'
                        ? 'Quote and validation'
                        : currentLanguage === 'FR'
                          ? 'Devis et validation'
                          : 'Cotação e validação'}
                    </h3>
                    <div className="space-y-1 text-teal">
                      <p>
                        {currentLanguage === 'EN'
                          ? 'You are sure of yourself, you love this proposal…'
                          : currentLanguage === 'FR'
                            ? 'Vous êtes sûr de vous, vous adorez cette proposition…'
                            : 'Voc  est  seguro de si mesmo, voc  ama essa proposta…'}
                      </p>
                      <p>
                        {currentLanguage === 'EN'
                          ? 'Once the model is validated, you receive a detailed quote. Total transparency.'
                          : currentLanguage === 'FR'
                            ? 'Une fois le mod le valid , vous recevez un devis d tail . Transparence totale.'
                            : 'Uma vez que o modelo é validado, voc  recebe um or amento detalhado. Transpar ncia total.'}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="relative mb-8">
                  <div className="absolute left-0 top-[10px] w-11 h-11 rounded-full border-2 border-rust flex items-center justify-center text-rust font-semibold">4</div>
                  <div className="pl-16">
                    <h3 className="text-2xl font-light mb-2 text-teal">
                      {currentLanguage === 'EN'
                        ? 'Secure payment'
                        : currentLanguage === 'FR'
                          ? 'Paiement sécurisé'
                          : 'Pagamento seguro'}
                    </h3>
                    <div className="text-teal">
                      <p>
                        {currentLanguage === 'EN'
                          ? 'The payment is made in a completely secure manner on a dedicated platform.'
                          : currentLanguage === 'FR'
                            ? 'Le paiement s\'effectue de mani re compl tement s curis  sur une plateforme d di e.'
                            : 'O pagamento é feito de forma completamente segura em uma plataforma dedicada.'}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="relative mb-8">
                  <div className="absolute left-0 top-[10px] w-11 h-11 rounded-full border-2 border-rust flex items-center justify-center text-rust font-semibold">5</div>
                  <div className="pl-16">
                    <h3 className="text-2xl font-light mb-2 text-teal">
                      {currentLanguage === 'EN'
                        ? 'Artisanal manufacturing'
                        : currentLanguage === 'FR'
                          ? 'Fabrication artisanale'
                          : 'Fabrica o artesanal'}
                    </h3>
                    <div className="space-y-1 text-teal">
                      <p>
                        {currentLanguage === 'EN'
                          ? 'The manufacturing process only starts once you have confirmed your agreement.'
                          : currentLanguage === 'FR'
                            ? "La fabrication ne commence qu'une fois votre accord confirmé."
                            : 'O processo de fabrica o s  come a uma vez que voc  tem confirmado seu acordo.'}
                      </p>
                      <p>
                        {currentLanguage === 'EN'
                          ? 'Each piece is handmade in our workshop in Portugal.'
                          : currentLanguage === 'FR'
                            ? 'Chaque pi ce est r alis e  la main dans notre atelier au Portugal.'
                            : 'Cada pe a   feita  m o em nosso ateli  no Portugal.'}
                      </p>
                      <p>
                        {currentLanguage === 'EN'
                          ? '19 carat gold, natural diamonds, and meticulous finishes.'
                          : currentLanguage === 'FR'
                            ? 'Or 19 carats garanti, diamants naturels certifi s, finitions   la loupe.'
                            : 'Ouro 19 quilates garantido, diamantes naturais certificados, acabamentos meticulosos.'}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="relative">
                  <div className="absolute left-0 top-[10px] w-11 h-11 rounded-full border-2 border-rust flex items-center justify-center text-rust font-semibold">6</div>
                  <div className="pl-16">
                    <h3 className="text-2xl font-light mb-2 text-teal">
                      {currentLanguage === 'EN'
                        ? 'Delivery and emotion'
                        : currentLanguage === 'FR'
                          ? 'Réception & émotion'
                          : 'Recepção & emoção'}
                    </h3>
                    <div className="space-y-1 text-teal">
                      <p>
                        {currentLanguage === 'EN'
                          ? 'Your jewelry is delivered in a wooden box, accompanied by a certificate and a personalized message.'
                          : currentLanguage === 'FR'
                            ? "Votre bijou est livré dans son boîtier, accompagné de son certificat et d'un mot personnalisé."
                            : 'O seu joia é entregue em uma caixa de madeira, acompanhada de um certificado e uma mensagem personalizada.'}
                      </p>
                      <p>
                        {currentLanguage === 'EN'
                          ? 'You will also receive maintenance recommendations and a follow-up service offer.'
                          : currentLanguage === 'FR'
                            ? "Vous recevez galement des conseils d'entretien et une offre de suivi et d'entretien."
                            : "Voc também recebe recomendações de manutenção e uma oferta de serviço de suporte."}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section id="form" className="py-12 bg-powder scroll-mt-32">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl text-center font-light mb-6 text-teal">
            {currentLanguage === 'EN'
              ? 'Start Your Project'
              : currentLanguage === 'FR'
                ? 'Commencez Votre Projet'
                : 'Comece seu Projeto'}
          </h2>
          <p className="text-center text-teal mb-8 max-w-2xl mx-auto">
            {currentLanguage === 'EN'
              ? 'Fill out the form below to talk to us about your project. Once sent, you can schedule a meeting with our team.'
              : currentLanguage === 'FR'
                ? 'Remplissez le formulaire ci-dessous pour nous parler de votre projet. Une fois envoyé , vous pourrez prendre rendez-vous avec notre  quipe.'
                : 'Preencha o formulário abaixo para nos falar sobre seu projeto. Uma vez enviado, voc  pode agendar uma reuni o com nossa equipe.'}
          </p>

          <div className="max-w-2xl mx-auto">
            {!showCalendly ? (
              <Card className="bg-powder">
                <CardContent className="pt-6">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="firstName" className="text-teal">
                          {currentLanguage === 'EN' ? 'First Name' : currentLanguage === 'FR' ? 'Prénom' : 'Nome'}
                        </Label>
                        <Input
                          id="firstName"
                          value={formData.firstName}
                          onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                          className="border-teal/30 focus:border-rust bg-powder text-teal"
                          required
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="lastName" className="text-teal">
                          {currentLanguage === 'EN' ? 'Last Name' : currentLanguage === 'FR' ? 'Nom' : 'Apelido'}
                        </Label>
                        <Input
                          id="lastName"
                          value={formData.lastName}
                          onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                          className="border-teal/30 focus:border-rust bg-powder text-teal"
                          required
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="birthDate" className="text-teal">
                          {currentLanguage === 'EN' ? 'Birth Date' : currentLanguage === 'FR' ? 'Date de naissance' : 'Data de nascimento'}
                        </Label>
                        <Input
                          id="birthDate"
                          type="date"
                          value={formData.birthDate}
                          onChange={(e) => setFormData({ ...formData, birthDate: e.target.value })}
                          className="border-teal/30 focus:border-rust bg-powder text-teal"
                          required
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="country" className="text-teal">
                          {currentLanguage === 'EN' ? 'Country of residence' : currentLanguage === 'FR' ? 'Pays de résidence' : 'País de residência'}
                        </Label>
                        <Input
                          id="country"
                          value={formData.country}
                          onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                          className="border-teal/30 focus:border-rust bg-powder text-teal"
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-teal">
                        {currentLanguage === 'EN' ? 'Email address' : currentLanguage === 'FR' ? 'Adresse email' : 'Endere o de email'}
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="border-teal/30 focus:border-rust bg-powder text-teal"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="occasion" className="text-teal">
                        {currentLanguage === 'EN' ? 'Occasion / Event to celebrate' : currentLanguage === 'FR' ? 'Occasion / événement à célébrer' : 'Ocas o / evento a celebrar'}
                      </Label>
                      <Input
                        id="occasion"
                        value={formData.occasion}
                        onChange={(e) => setFormData({ ...formData, occasion: e.target.value })}
                        className="border-teal/30 focus:border-rust bg-powder text-teal"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="description" className="text-teal">
                        {currentLanguage === 'EN' ? 'Project description and budget' : currentLanguage === 'FR' ? 'Description du projet et budget' : 'Descrição do projeto e orçamento'}
                      </Label>
                      <Textarea
                        id="description"
                        value={formData.description}
                        onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                        className="border-teal/30 focus:border-rust min-h-[150px] bg-powder text-teal"
                        placeholder={
                          currentLanguage === 'EN'
                            ? 'Describe your wishes, style, and budget...'
                            : currentLanguage === 'FR'
                              ? 'Décrivez vos envies, le style recherché, et votre budget...'
                              : 'Descreva seus desejos, estilo, e or amento...'
                        }
                        required
                      />
                    </div>

                    <div className="pt-6">
                      <Button
                        type="submit"
                        className="w-full bg-rust text-white hover:bg-rust/90 flex items-center justify-center gap-2"
                      >
                        {currentLanguage === 'EN' ? 'Schedule a meeting' : currentLanguage === 'FR' ? 'Prendre rendez-vous' : 'Agendar uma reuni o'}
                        <ArrowRight className="w-4 h-4" />
                      </Button>
                    </div>
                  </form>
                </CardContent>
              </Card>
            ) : (
              <Card className="bg-powder p-6">
                <InlineWidget url="https://calendly.com/" />
              </Card>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}