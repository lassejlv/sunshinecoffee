import { cartStore } from '@/stores/cart'
import { createFileRoute } from '@tanstack/react-router'
import { useAtom } from 'jotai'

export const Route = createFileRoute('/checkout')({
  component: function Checkout() {

    const [cart, setCart] = useAtom(cartStore);

    return (

      <>
        {cart.length}
      </>
    )

  }
})
