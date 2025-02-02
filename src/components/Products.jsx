import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import products_fetch from '../redux/actionCreators'

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
          products.map(product => {
            const {
              description,
              images,
              price,
              rating,
              title,
              tags,
              id,
              thumbnail,
              shippingInformation,
              meta: dateOfCreation
            } = product

            const createdAt = new Date(dateOfCreation.createdAt)
            const dateOnly = createdAt.toISOString().split('T')[0]

            return (
              <div
                className="shadow-lg"
                key={id}>
                <div
                  className="flex justify-center "
                  title={title}>
                  <img
                    src={images[0]}
                    className="object-fit max-h-50"
                  />
                </div>
                <div className="bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
                  <div className="mb-8">
                    <div className="text-gray-900 font-bold text-xl mb-2">{title}</div>
                    <p className="text-gray-700 text-base">{description}</p>
                  </div>
                  <div className="flex items-center">
                    <img
                      className="w-10 h-10 rounded-full mr-4"
                      src={thumbnail}
                      alt="Avatar of Jonathan Reinink"
                    />
                    <div className="text-sm">
                      <p className="text-gray-900 leading-none">{shippingInformation}</p>
                      <p className="text-gray-600">{dateOnly}</p>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
      </section>
    </div>
  )
}
export default Products
