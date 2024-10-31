import { Product } from '@/types/Product'
import { createFileRoute } from '@tanstack/react-router'
import { config } from "@/lib/config"
import ky from 'ky'
import Container from '@/components/Container'
import Header from '@/components/Header'
import { Button } from '@/components/ui/button'
import { coffeeItems, testimonials } from '@/lib/data'


export const Route = createFileRoute('/')({

  loader: async () => {
    return await ky.get(`${config.apiUrl}/products`).json<Product[]>()
  },

  component: function Home() {
    return (
      <>
        <Header title='We Love Coffee And all the people who make it' />
        <div>

          {/* Coffee Cards Section */}
          <Container padding>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
              {coffeeItems.map((item, index) => (
                <div key={index} className="flex flex-col h-full">
                  <div className="flex-1">
                    <h1 className="text-4xl font-licorice text-center mb-4">{item.title}</h1>
                    <p className="text-zinc-500 text-lg mb-4">{item.text}</p>
                  </div>
                  <div className="w-full h-64">
                    <img
                      src={item.image}
                      alt={item.alt}
                      className="w-full h-full rounded-lg object-cover"
                    />
                  </div>
                </div>
              ))}
            </div>
          </Container>

          <div className="w-full bg-zinc-900 h-2" />

          {/*Shop now section */}
          <Container padding>
            <section className="bg-white py-16 px-4">
              <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-5xl font-licorice mb-6">Shop now</h2>

                <p className="text-lg text-zinc-700 mb-8 max-w-2xl mx-auto">
                  Our delicious coffees will get you brewing the best cup of coffee you ever tasted in
                  no time at all. And the best part of it? It is totally organic, fair trade and
                  sustainably sourced. So get brewing
                </p>

                <Button>
                  Go to products
                </Button>
              </div>
            </section>
          </Container>

          <div className="w-full bg-zinc-900 h-2" />

          {/* Testimonials Section */}
          <Container padding>

            <section className="bg-white py-16 px-4">
              <div className="max-w-6xl mx-auto">
                <h2 className="text-5xl font-licorice text-center mb-12">Testimonies</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                  {testimonials.map((testimonial, index) => (
                    <div key={index} className="text-center">
                      <h3 className="text-xl font-medium mb-4">{testimonial.name}</h3>
                      <p className="text-zinc-700">
                        <span>{'"'}{testimonial.text}{'"'}</span>
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </Container>

        </div>
      </>
    )
  }
})
