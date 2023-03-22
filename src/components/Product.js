const Product = ({
  discount,
  discountPrice,
  newproduct,
  image,
  desc,
  primaryText,
  price,
}) => {
  return (
    <section className="w-60 relative">
      {discount ? (
        <div className="rounded-full h-10 text-white w-10 bg-pink-600 z-1 absolute left-48">
          <h1 className="mt-1">-{discount}%</h1>
        </div>
      ) : null}
      {newproduct ? (
        <div className="rounded-full h-10 text-white w-10 bg-cyan-300 z-1 absolute left-48">
          <h1 className=" mt-1 ml-1">{newproduct}</h1>
        </div>
      ) : null}
      <img className="w-60 h-60" src={image} alt="" />
      <div className="bg-gray-300">
        <h1 className="text-lg">{primaryText}</h1>
        <p className="text-sm text-gray-700">{desc}</p>
        <div className="flex gap-5">
          <h1 className="text-lg">Rp {price}</h1>
          {discountPrice ? (
            <h1 className="text-gray-500 line-through">{discountPrice}</h1>
          ) : null}
        </div>
      </div>
    </section>
  );
};

export default Product;
