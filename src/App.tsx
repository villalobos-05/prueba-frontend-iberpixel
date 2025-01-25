import { useEffect, useState } from 'react'
import { getProducts } from './services/products'
import { Product } from './types/product'

function App() {
  const [products, setProducts] = useState<Product[]>([])

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const productsFetched = await getProducts()
        setProducts(productsFetched)
      } catch (e) {
        console.error(e)
      }
    }

    fetchProducts()
  }, [])

  return (
    <main>
      <div className='grid grid-cols-1 gap-14 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5'>
        {products.map((product) => (
          <div
            key={product.id}
            className='bg-secondary flex w-[210px] flex-col'
          >
            <img
              src={product.image}
              alt={product.title}
              className='min-h-48 rounded-t-lg object-cover'
            />
            <div className='flex h-full flex-col justify-between p-2'>
              <h3 className='text-lg font-bold' title={product.title}>
                {product.title}
              </h3>
              <div className='flex justify-between'>
                <span>{product.price}$</span>
                <span className='text-counter-bg/45'>{product.category}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  )
}

export default App
