import Header from '@/components/Header'
import { ProductCard } from '@/components/ProductCard'
import { config } from '@/lib/config'
import { Product } from '@/types/Product'
import { createFileRoute } from '@tanstack/react-router'
import ky from 'ky'

export const Route = createFileRoute('/products/')({
  loader: async () => {
    const products = await ky.get(`${config.apiUrl}/products`).json<Product[]>()
    return { products }
  },
  component: function Products() {

    const { products } = Route.useLoaderData();

    return (
      <>
        <Header title='We Love Coffee And all the people who make it' />
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-5xl font-licorice text-center mb-12">
              Our picks for you
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {products.map((product, index) => (
                <ProductCard key={index} product={product} />
              ))}
            </div>
          </div>
        </section>
      </>
    )
  }
})
