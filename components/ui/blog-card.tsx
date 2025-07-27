"use client";

import Link from 'next/link';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';

interface Article {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string;
  date: string;
  keywords: string[];
  slug: string;
}

interface BlogCardProps {
  article: Article;
}

export function BlogCard({ article }: BlogCardProps) {
  return (
    <Link href={`/blog/${article.slug}`}>
      <Card className="group h-full overflow-hidden transition-all duration-300 hover:shadow-lg">
        <CardHeader className="p-0">
          <div className="aspect-[16/10] overflow-hidden">
            <img
             referrerPolicy="no-referrer"
              src={article.image}
              alt={article.title}
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
          </div>
        </CardHeader>
        <CardContent className="p-6">
          <div className="flex items-center gap-2 mb-4">
            <Badge variant="secondary" className="bg-rose/20 text-bronze">
              {article.category}
            </Badge>
            <span className="text-sm text-gray-500">{article.date}</span>
          </div>
          <h3 className="text-xl font-light mb-2 group-hover:text-bronze transition-colors">
            {article.title}
          </h3>
          <p className="text-gray-600 text-sm line-clamp-2">
            {article.description}
          </p>
        </CardContent>
        <CardFooter className="px-6 pb-6 pt-0">
          <div className="flex flex-wrap gap-2">
            {article.keywords.map((keyword) => (
              <Badge key={keyword} variant="outline" className="text-xs">
                {keyword}
              </Badge>
            ))}
          </div>
        </CardFooter>
      </Card>
    </Link>
  );
}