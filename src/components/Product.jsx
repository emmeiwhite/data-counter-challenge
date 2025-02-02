function Product({ id, title, images, description, thumbnail, shippingInformation, meta }) {
  const createdAt = new Date(meta.createdAt)
  let dateOnly = createdAt.toISOString().split('T')[0]
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
}
export default Product
