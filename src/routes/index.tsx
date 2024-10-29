import { Product } from '@/types/Product'
import { createFileRoute } from '@tanstack/react-router'
import { config } from "@/lib/config"
import { useAtom } from 'jotai'
import { cartStore } from '@/stores/cart'
import { toast } from 'sonner'
import ky from 'ky'
import Container from '@/components/Container'


export const Route = createFileRoute('/')({

  loader: async () => {
    return await ky.get(`${config.apiUrl}/products`).json<Product[]>()
  },

  component: function Home() {
    const [cart, setCart] = useAtom(cartStore)



    const data = Route.useLoaderData()
    console.log(data)

    return (
      <Container padding>
        <h1 className='text-3xl font-bold'>Home</h1>

        <div className="grid grid-cols-1 md:grid-cols-3">
          {data.map((product) => (
            <div key={product.id}>
              <h2>{product.name}</h2>
              <p>{product.price}</p>
              <button onClick={() => {
                const cartItem = { id: product.id, item: product, quantity: 1 };
                setCart([...cart, cartItem])
                toast.success('Added to cart!')
              }}>Add to cart</button>
            </div>
          ))}
        </div>
      </Container>
    )
  }
})
