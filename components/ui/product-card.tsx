import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface Product {
  id: number;
  name: string;
  description: string;
  longDescription: string;
  price: string;
  features: string[];
  images: string[];
}

interface ProductCardProps {
  product: Product;
  onSelect: () => void;
  hideLearnMore?: boolean;
}

export function ProductCard({ product, onSelect, hideLearnMore = false }: ProductCardProps) {
  return (
    <Card className="overflow-hidden bg-white">
      <div className="aspect-square relative">
        <img
          src={product.images[0]}
          alt={product.name}
          className="w-full h-full object-cover"
           referrerPolicy="no-referrer"
        />
      </div>
      <CardContent className="p-6">
        <h3 className="text-2xl font-light mb-2">{product.name}</h3>
        <p className="text-gray-600 mb-4">{product.description}</p>
        <div className="space-y-4">
          <div className="text-lg font-semibold text-bronze">
            {product.price} €
          </div>
          <Button
            onClick={onSelect}
            className="w-full bg-bronze text-white hover:bg-bronze/90"
          >
            Contactez-nous
          </Button>
          {!hideLearnMore && (
            <Button
              variant="outline"
              onClick={onSelect}
              className="w-full border-bronze text-bronze hover:bg-bronze hover:text-white"
            >
              En savoir plus
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
}