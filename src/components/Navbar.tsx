import { cartStore } from '@/stores/cart';
import { useAtom } from 'jotai';
import { ShoppingCart, User } from 'lucide-react';
import { Button } from './ui/button';
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { Link } from '@tanstack/react-router';
import { Badge } from './ui/badge';

const logoPath = '/coffeLight.png';

export default function Navbar() {
  const [cart, setCart] = useAtom(cartStore);

  return (
    <nav className='bg-dark-200 p-4 border-b border-green-500'>
      <div className='max-w-7xl mx-auto px-4'>
        <div className='flex items-center justify-between'>
          {/* Left side */}
          <div className='text-gray-300 text-sm'></div>

          {/* Center with logo and title */}
          <div className='flex items-center space-x-2'>
            <div className='relative w-8 h-8 bg-black rounded-full flex items-center justify-center'>
              <img src={logoPath} alt='Sunshine Coffee' width={24} height={24} className='object-contain' />
            </div>
            <h1 className='text-white text-xl font-serif italic'>Sunshine Coffee</h1>
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
