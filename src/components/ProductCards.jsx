import React from "react";
import { Link } from "react-router-dom";
function ProductCards({ product }) {
  return (
    <>
      <Link to={`/products/${product.id}`}>
        <div className=" bg-white rounded-xl shadow-md hover:shadow-lg hover:scale-[1.02] transition-transform ">
          <img
            className="w-full h-56 object-cover rounded-lg mb-5"
            src={product.image}
            alt={product.name}
          />
          <h2 className="truncate text-gray-800 font-semibold text-lg ">
            {product.name}
          </h2>
          <p>{product.description}</p>
          <p className="font-medium text-gray-500">${product.price}</p>
        </div>
      </Link>
    </>
  );
}

export default ProductCards;
