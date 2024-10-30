import { Product } from '@/types/Product'
import { createFileRoute } from '@tanstack/react-router'
import { config } from "@/lib/config"
import { useAtom } from 'jotai'
import { cartStore } from '@/stores/cart'
import { toast } from 'sonner'
import ky from 'ky'
import Container from '@/components/Container'
import Header from '@/components/Header'


export const Route = createFileRoute('/')({

  loader: async () => {
    return await ky.get(`${config.apiUrl}/products`).json<Product[]>()
  },

  component: function Home() {
    const [cart, setCart] = useAtom(cartStore)



    const data = Route.useLoaderData()
    console.log(data)

    return (
      <>
        <Header title='We Love Coffee And all the people who make it' />
        <Container padding>
          <div className="grid grid-cols-1 md:grid-cols-3">
            {data.map((product) => (
              <div key={product.id}>
                <h2>{product.name}</h2>
                <p>{product.price}</p>
                <button onClick={() => {
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
                }}>Add to cart</button>
              </div>
            ))}
          </div>
        </Container>
      </>
    )
  }
})
