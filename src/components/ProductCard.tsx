import type { Product } from "@/types/Product";
import { RoastLevel } from "./RoastLevel";
import { Button } from "./ui/button";

export const ProductCard = ({ product }: { product: Product }) => {
  return (
    <div className="bg-zinc-100 p-6 rounded-lg">
      <h3 className="text-3xl font-licorice mb-4">{product.name}</h3>
      <div className="aspect-square mb-4">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover rounded-md"
        />
      </div>
      <div className="space-y-3">
        <div className="flex items-center gap-2">
          <span className="text-zinc-600">Roast:</span>
          <RoastLevel level={product.roast} />
        </div>
        <p className="font-medium">{product.price} DKK</p>
        <Button variant="outline" className="w-full bg-zinc-100">
          Add to cart
        </Button>
      </div>
    </div>
  );
};
