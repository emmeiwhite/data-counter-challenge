import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import products_fetch from '../redux/actionCreators'
import Product from './Product'

const Products = () => {
  const products = useSelector(state => state.products)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(products_fetch())
  }, [])

  if (products.loading) return <h1>Loading ...</h1>
  if (products.error) return <h1>Error ...</h1>

  return (
    <div className="p-5 sm:p-8 lg:p-12 m-auto">
      <h1 className="text-3xl my-4">Products:</h1>
      <section className="grid grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))] gap-8">
        {products &&
          products
            .slice()
            .reverse()
            .map(product => {
              return (
                <Product
                  {...product}
                  key={product.id}
                />
              )
            })}
      </section>
    </div>
  )
}
export default Products
