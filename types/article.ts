export type Article = {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string;
  date?: string;
  keywords?: string[];
  slug: string;
  content: Array<{
    _type: string;
    children: Array<{
      _type: string;
      text: string;
      marks: string[];
    }>;
    style?: string;
    level?: number;
    markDefs?: any[];
  }>;
}