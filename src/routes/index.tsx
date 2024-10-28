import { createFileRoute } from '@tanstack/react-router'
import { config } from "@/lib/config"
import ky from 'ky'
import { Product } from '@/types/Product'

export const Route = createFileRoute('/')({

  loader: async () => {
    return await ky.get(`${config.apiUrl}/producdts`).json<Product[]>()
  },

  component: function Home() {

    const data = Route.useLoaderData()
    console.log(data)

    return (
      <div>
        <h1 className='text-3xl font-bold'>Home</h1>
        <p>CHANGED HOMEPAGE!</p>
      </div>
    )
  }
})
