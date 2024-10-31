import { cartStore } from '@/stores/cart';
import { useAtom } from 'jotai';
import { ShoppingCart, User } from 'lucide-react';
import { Button } from './ui/button';
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { Link } from '@tanstack/react-router';
import { Badge } from './ui/badge';
import { Input } from './ui/input';
import { toast } from 'sonner';

const logoPath = '/coffeLight.png';

export default function Navbar() {
  const [cart, setCart] = useAtom(cartStore);

  return (
    <nav className='bg-dark-200 p-4'>
      <div className='max-w-7xl mx-auto px-4'>
        <div className='flex items-center justify-between'>
          {/* Left side */}
          <div className='text-gray-300 text-sm'></div>

          {/* Center with logo and title */}
          <div className='flex items-center space-x-2'>
            <div className='relative w-8 h-8 bg-black rounded-full flex items-center justify-center'>
              <Link to="/">
                <img src={logoPath} alt='Sunshine Coffee' width={32} height={32} className='object-contain cursor-pointer' loading='lazy' />
              </Link>
            </div>
          </div>

          {/* Right side */}
          <div className='flex items-center space-x-4'>
            <Button variant='ghost' className='text-white'>
              Europa
            </Button>
            <Sheet>
              <SheetTrigger>
                <div className='flex'>
                  <ShoppingCart className='text-white' size={24} />{' '}
                  {cart.length > 0 && <Badge className='bg-red-500 hover:bg-red-600 inline-block ml-2'>{cart.length}</Badge>}
                </div>
              </SheetTrigger>
              <SheetContent>
                <SheetHeader>
                  <SheetTitle className='font-licorice text-2xl text-center mt-10'>Shopping Cart</SheetTitle>
                  <SheetDescription></SheetDescription>
                </SheetHeader>

                <div className='grid grid-cols-1 gap-5'>
                  {cart.length > 0 && cart.map((item) => (
                    <div className='flex justify-between items-center' key={item.id}>
                      <p>{item.item.name}</p>
                      <div>
                        <Input type="number" defaultValue={item.quantity} onChange={(val) => {
                          const { value } = val.target;

                          if (value === '0') {
                            const confirm = window.confirm("Quantity is set to 0, are you sure you wanna delete it?")
                            if (!confirm) return;

                            setCart((prev) => prev.filter((i) => i.id !== item.id));
                            return toast.success('Item removed from cart');
                          }

                          // Update the quantity of the item
                          setCart((prev) => {
                            const index = prev.findIndex((i) => i.id === item.id);
                            prev[index].quantity = parseInt(value);
                            return [...prev];
                          });
                        }} />
                      </div>
                      <p>
                        {item.item.price} DKK
                      </p>
                    </div>
                  ))}
                </div>

                <div className='flex justify-between my-5'>
                  <p>Total</p>

                  <p>
                    {cart.reduce((acc, item) => acc + (item.item.price * item.quantity), 0)} DKK
                  </p>
                </div>

                <Link to="/checkout">
                  <Button variant='default' className='w-full'>
                    Checkout
                  </Button>
                </Link>
              </SheetContent>
            </Sheet>

            <Link to='/auth/login' className='text-white hover:text-gray-300 transition-colors'>
              <User size={24} />
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
