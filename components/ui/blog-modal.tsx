"use client";

import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { PortableText } from "@portabletext/react";
import { X } from "lucide-react";
import { imgUrlBuilder } from '../../utils/imgUrlBuilder';
import type { Article } from "@/types/article";

interface BlogModalProps {
  isOpen: boolean;
  onClose: () => void;
  article: Article;
  lng?: string;
}

const myPortableTextComponents = {
  types: {
    htmlEmbed: ({ value }: any) => (
      <div dangerouslySetInnerHTML={{ __html: value.code }} />
    ),
    image: ({ value }: any) => (
      <div className="my-[2rem]">
        {value?.asset?._ref && (
          <img
            src={imgUrlBuilder(value).width(800).height(500).url()}
            alt="Blog Image"
            className="max-w-full w-full md:w-2/3 h-auto rounded-lg shadow-md my-4"
          />
        )}
      </div>
    ),
  },
  marks: {
    strong: ({ children }: any) => (
      <strong className="font-bold">{children}</strong>
    ),
  },
};

export function BlogModal({ isOpen, onClose, article, lng }: BlogModalProps) {
  if (!article) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogTitle className="text-3xl font-light mb-4">
          {article.title}
        </DialogTitle>
        
        <div className="flex items-center gap-2 mb-6">
          <Badge variant="secondary" className="bg-bronze/10 text-bronze">
            {article.category}
          </Badge>
          {article.date && <span className="text-sm text-gray-500">{article.date}</span>}
        </div>

        <div className="aspect-video relative mb-8">
          <img
            src={article.image}
            alt={article.title}
            className="w-full h-full object-cover rounded-lg"
          />
        </div>

        <div className="prose max-w-none article-container">
          <PortableText
            value={article.content}
            components={myPortableTextComponents}
          />
        </div>

        <div className="mt-8 pt-6 border-t">
          <h3 className="text-lg font-semibold mb-4">{lng === 'FR' ? 'Mots-clés' : lng === 'PT' ? 'Palavras-chave' : 'Keywords'}</h3>
          <div className="flex flex-wrap gap-2">
            {article.keywords?.map((keyword) => (
              <Badge key={keyword} variant="outline">
                {keyword}
              </Badge>
            ))}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}