import React from "react";
import { Link } from "react-router-dom";
function ProductCards({ product }) {
  return (
    <Link to={`/products/${product.id}`} className="group block">
      <div className="h-full overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
        <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-4">
          <img
            className="h-56 w-full rounded-xl object-cover transition duration-300 group-hover:scale-105"
            src={product.image}
            alt={product.name}
          />
        </div>
        <div className="p-4">
          <p className="mb-2 inline-block rounded-full bg-green-50 px-2 py-1 text-xs font-semibold text-green-700">
            Premium Pick
          </p>
          <h2 className="truncate text-lg font-semibold text-gray-800">
            {product.name}
          </h2>
          <p className="mt-2 line-clamp-2 text-sm text-gray-600">
            {product.description}
          </p>
          <div className="mt-4 flex items-center justify-between">
            <p className="text-xl font-bold text-[#2874f0]">${product.price}</p>
            <span className="rounded-full bg-[#2874f0] px-3 py-1 text-sm font-medium text-white">
              View Details
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default ProductCards;
