import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { cartStore } from '@/stores/cart'
import { createFileRoute } from '@tanstack/react-router'
import { useAtom } from 'jotai'
import { FormEvent, useState } from 'react';
import { toast } from 'sonner';
import { z } from 'zod';

const schema = z.object({
  firstName: z.string().min(2).max(100),
  lastName: z.string().min(2).max(100),
  address: z.string().min(2).max(100),
  city: z.string().min(2).max(100),
  phone: z.string().min(2).max(100),
  province: z.string().min(2).max(100),
  country: z.string().min(2).max(100),
  shipping: z.string().refine((value) => ['FakeEx', 'FakeExExpress'].includes(value))
})

export const Route = createFileRoute('/checkout')({
  component: function Checkout() {

    const [shippingMethod, setShippingMethod] = useState('FakeEx');
    const [cart] = useAtom(cartStore);

    const total = cart.reduce((acc, item) => acc + (item.item.price * item.quantity), 0).toLocaleString()

    const submit = async (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      const formData = new FormData(e.currentTarget);
      const data = Object.fromEntries(formData.entries());

      try {
        if (cart.length === 0) throw new Error('Cart is empty');
        schema.parse(data);

      } catch (error: any) {
        console.error(error.errors);
        toast.error('Invalid form data');
        return;
      }
      console.log(data);
    }


    return (

      <div className="max-w-6xl mx-auto py-16 px-4">
        <h1 className="text-5xl font-licorice text-center mb-12">Checkout</h1>

        <form className="grid grid-cols-1 lg:grid-cols-2 gap-12" onSubmit={submit}>
          {/* Left Column - Customer Information */}
          <div className="space-y-6">
            <div className="space-y-4">
              <label className="block">
                <span className="text-zinc-800 mb-1 block">First name</span>
                <Input name="firstName" type="text" />
              </label>

              <label className="block">
                <span className="text-zinc-800 mb-1 block">Last name</span>
                <Input name="lastName" type="text" />
              </label>

              <label className="block">
                <span className="text-zinc-800 mb-1 block">Address</span>
                <Input name="address" type="text" />
              </label>

              <label className="block">
                <span className="text-zinc-800 mb-1 block">City</span>
                <Input name="city" type="text" />
              </label>

              <label className="block">
                <span className="text-zinc-800 mb-1 block">Phone</span>
                <Input name="phone" type="tel" />
              </label>

              <label className="block">
                <span className="text-zinc-800 mb-1 block">Province</span>
                <Input name="province" type="text" />
              </label>

              <label className="block">
                <span className="text-zinc-800 mb-1 block">Country</span>
                <Input name="country" type="text" />
              </label>
            </div>
          </div>


          <div>

            <div className="mb-8">
              {cart.map((item, index) => (
                <div key={index} className="flex justify-between items-center py-4 border-b border-zinc-200">
                  <div>
                    <span className="font-medium">{item.item.name}</span>
                    <span className="text-zinc-600 ml-2">x {item.quantity}</span>
                  </div>
                  <span>{item.quantity * item.item.price} Dkk</span>
                </div>
              ))}
              <div className="flex justify-between items-center py-4">
                <span className="font-medium">Total</span>
                <span className="font-medium">{total} Dkk</span>
              </div>
            </div>

            {/* Shipping Options */}
            <div className="bg-zinc-50 p-6 rounded-lg mb-8">
              <h3 className="font-medium mb-4">Choose shipping</h3>
              <div className="space-y-3">
                <label className="flex items-center justify-between">
                  <span>FakeEx</span>
                  <Input
                    type="radio"
                    name="shipping"
                    value="FakeEx"
                    checked={shippingMethod === 'FakeEx'}
                    onChange={(e) => setShippingMethod(e.target.value)}
                    className="w-4 h-4"
                  />
                </label>
                <label className="flex items-center justify-between">
                  <span>FakeEx Express</span>
                  <Input
                    type="radio"
                    name="shipping"
                    value="FakeExExpress"
                    checked={shippingMethod === 'FakeExExpress'}
                    onChange={(e) => setShippingMethod(e.target.value)}
                    className="w-4 h-4"
                  />
                </label>

              </div>
            </div>

            {/* Pay Button */}
            <Button className='w-full' disabled={cart.length === 0 || !shippingMethod}>
              Pay now
            </Button>
          </div>
        </form>
      </div>
    )

  }
})
