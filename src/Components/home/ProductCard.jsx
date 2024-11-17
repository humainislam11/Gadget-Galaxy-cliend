
const ProductCard = ({product}) => {
  const {productTitle,category,brand,price,stock,shortDescription,image,sellerEmail} = product;
    return (
      <div className="  w-[315px] border border-black">
      <figure className=" ">
      <h1 className="font-semibold">Brand : {brand}</h1>
        <img
          src={image}
          alt="photo"
          className="w-[400px] h-[230px]" />
         
      </figure>
      
          <div className="card-body bg-[#E8E8E8] items-center text-center">
          <div className="flex gap-6">
  <h2 className="card-title font-bold bg-gra">{productTitle}</h2>
  <p className="font-semibold text-orange-500">${price}</p>
  </div>
        <p className="font-semibold text-[14px]">{shortDescription.length <50 ? `${shortDescription}` : `${shortDescription.slice(0,50)}...` }</p>

        <div className="">
          <h1 className="-ml-32 font-semibold">Category : {category}</h1>
          <h1 className="ml-[150px] -mt-[22px] font-semibold">Stock : {stock}</h1>
        </div>
        <div className="card-actions flex items-center justify-center">
          
          <button className="btn bg-[#E8E8E8] text-[#BB8506] border-b-4 border-[#BB8506]">Add To WishList</button>
        </div>
      </div>
    </div>
    );
};

export default ProductCard;