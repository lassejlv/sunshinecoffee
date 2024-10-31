import type { Product } from "@/types/Product";
import { RoastLevel } from "./RoastLevel";
import { Button } from "./ui/button";
import { useAtom } from "jotai";
import { cartStore } from "@/stores/cart";
import { toast } from "sonner";

export const ProductCard = ({ product }: { product: Product }) => {
  const [cart, setCart] = useAtom(cartStore);

  const handleAddToCart = () => {
    const alreadyInCart = cart.find((item) => item.id === product.id)

    // Update quantity if already in cart
    if (alreadyInCart) {
      const updatedCart = cart.map((item) => {
        if (item.id === product.id) {
          return { ...item, quantity: item.quantity + 1 }
        }
        return item
      })
      setCart(updatedCart)
      toast.success('Added to cart!')
      return
    } else {
      const cartItem = { id: product.id, item: product, quantity: 1 }
      setCart([...cart, cartItem])
      toast.success('Added to cart!')
    }
  }

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
        <Button variant="outline" className="w-full bg-zinc-100" onClick={handleAddToCart}>
          Add to cart
        </Button>
      </div>
    </div>
  );
};
