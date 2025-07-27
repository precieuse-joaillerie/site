"use client";

import { useState } from 'react';
import { Navigation } from '@/components/ui/navigation';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { BlogModal } from '@/components/ui/blog-modal';
import type { Article } from '@/types/article';
import { useLanguage } from '@/contexts/LanguageContext';
import { useFetch } from "@/hooks/useFetch";
import Loader from "@/components/Loader";

const categ = {
  "Guide Pratique": {
    FR: "Guide Pratique",
    EN: "Practical Guide",
    PT: "Guia Prático"
  },
  "Expertise": {
    FR: "Expertise",
    EN: "Expertise",
    PT: "Especialização"
  },
  "Coulisses": {
    FR: "Coulisses",
    EN: "Behind the Scenes",
    PT: "Bastidores"
  },
  "Entretien": {
    FR: "Entretien",
    EN: "Maintenance",
    PT: "Manutenção"
  },
  "Autres": {
    FR: "Autres",
    EN: "Others",
    PT: "Outros"
  }
};

export default function BlogPage() {
  const { currentLanguage } = useLanguage();
  const currentLng = currentLanguage === 'EN' ? 'en' : currentLanguage === 'PT' ? 'pt' : 'fr';
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);
  const query = `*[_type == "blogPosts"]`;
  const { data, isLoading, error } = useFetch(query);
  const articles = data?.map((article) => ({
    slug:article.id,
    content: currentLanguage === 'EN' ? article.contentEn :  currentLanguage === 'PT' ? article.contentPt : article.contentFr,
    description:article.description[currentLng],
    title:article.title[currentLng],
    category:article.category,
    date:article.date,
    keywords:article.keywords[currentLng],
    image:article.image,
  })) || [];

  const filteredArticles = selectedCategory
    ? articles?.filter(article => article.category === selectedCategory)
    : articles;

  const handleArticleClick = (e: React.MouseEvent, article: Article) => {
    e.preventDefault();
    setSelectedArticle(article);
  };


  if (isLoading) return <Loader />;
  if (error) return <p>Error fetching articles</p>;

  return (
    <main className="min-h-screen overflow-x-hidden">
      <Navigation />
      
      {/* Hero Section */}
      <section className="h-[50vh] relative flex items-center justify-center">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundImage: 'url("https://lh3.googleusercontent.com/pw/AP1GczMop4r9K08BdjAwSNKw9jpyluibkLxvPRCssThWkiCPp6a20drbO3CNcVgMhK1rxZR-xixt8hHTCmVersi-AdAA6PYSV6Dfk5xgVniMI5dIlszLVIlDH8SLHjioUFeqiLKm7rvIhJps91KufTjC6_o=w2670-h1781-s-no-gm?authuser=0")',
          }}
        >
          <div className="absolute inset-0 bg-black/40" />
        </div>
        <div className="relative text-white text-center z-10 px-4">
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-light mb-4 text-white">{currentLanguage === 'EN' ? 'Blog' : currentLanguage === 'PT' ? 'Blogue' : 'Blog'}</h1>
          <p className="text-base md:text-lg lg:text-xl max-w-2xl mx-auto text-white">
            {currentLanguage === 'EN' ? 'Expert advice and jewelry news' : currentLanguage === 'PT' ? 'Conselhos de especialistas e notícias da joalheria' : 'Conseils d\'experts et actualités de la joaillerie'}
          </p>
        </div>
      </section>

      {/* Resources Section */}
      <section className="py-8 bg-powder/50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/blog/lexique">
              <Button 
                variant="outline" 
                size="lg"
                className="border-rust text-rust hover:bg-rust hover:text-white w-full sm:w-auto"
              >
                {currentLanguage === 'EN' ? 'Jewelry Glossary' : currentLanguage === 'PT' ? 'Lexicon de la Joaillerie' : 'Lexique de la Joaillerie'}
              </Button>
            </Link>
            <Link href="/blog/faq">
              <Button 
                variant="outline"
                size="lg"
                className="border-rust text-rust hover:bg-rust hover:text-white w-full sm:w-auto"
              >
                {currentLanguage === 'EN' ? 'Frequently Asked Questions' : currentLanguage === 'PT' ? 'Perguntas frequentes' : 'Questions Fréquentes'}
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Categories Sidebar */}
            <div className="w-full lg:w-64 flex-shrink-0">
              <h2 className="text-2xl font-light mb-6 text-teal">{currentLanguage === 'EN' ? 'Categories' : currentLanguage === 'PT' ? 'Categorias' : 'Catégories'}</h2>
              <div className="flex flex-col gap-2 sm:flex-row sm:flex-wrap lg:flex-col lg:gap-0 lg:space-y-2">
                <button
                  onClick={() => setSelectedCategory(null)}
                  className={cn(
                    "w-full lg:text-left text-center px-3 py-2 rounded-lg transition-colors text-sm sm:text-base sm:flex-1 lg:flex-none whitespace-nowrap",
                    !selectedCategory ? "bg-rust text-white" : "hover:bg-powder/50 text-teal"
                  )}
                >
                  {currentLanguage === 'EN' ? 'All articles' : currentLanguage === 'PT' ? 'Todos os artigos' : 'Tous les articles'}
                </button>
                {[...new Set(articles.map(article => article.category))].map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={cn(
                      "w-full lg:text-left text-center px-3 py-2 rounded-lg transition-colors text-sm sm:text-base sm:flex-1 lg:flex-none whitespace-nowrap",
                      selectedCategory === category ? "bg-rust text-white" : "hover:bg-powder/50 text-teal"
                    )}
                  >
                    {categ[category][currentLanguage]}
                  </button>
                ))}
              </div>
            </div>

            {/* Articles Grid */}
            <div className="flex-1">
              <div className="grid grid-cols-1 gap-2">
                {filteredArticles.map((article, index) => (
                  <motion.div
                    key={article.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <a
                      href={`/blog/${article.slug}`}
                      onClick={(e) => handleArticleClick(e, article)}
                      className="block"
                    >
                      <div className="group relative h-[300px] md:h-[400px] overflow-hidden rounded-lg">
                        <div 
                          className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                          style={{ backgroundImage: `url(${article.image})` }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent" />
                        <div className="absolute bottom-0 left-0 right-0 p-4 md:p-8 text-white">
                          <div className="mb-4">
                            <span className="inline-block px-4 py-1 rounded-full bg-rust/80 text-sm">
                              {categ[article.category][currentLanguage]}
                            </span>
                          </div>
                          <h2 className="text-xl md:text-2xl lg:text-3xl font-cormorant font-light mb-3 text-white">
                            {article.title}
                          </h2>
                          <p className="text-sm md:text-base text-white/80 font-montserrat line-clamp-2">
                            {article.description}
                          </p>
                        </div>
                      </div>
                    </a>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Modal */}
      <BlogModal
        isOpen={!!selectedArticle}
        onClose={() => setSelectedArticle(null)}
        article={selectedArticle!}
        lng={currentLanguage}
      />
    </main>
  );
}