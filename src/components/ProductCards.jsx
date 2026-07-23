import React from "react";
import { Link } from "react-router-dom";
import { IconArrowRight } from "@tabler/icons-react";

function ProductCards({ product }) {
  return (
    <Link to={`/products/${product.id}`} className="group block h-full">
      <div className="flex h-full flex-col overflow-hidden rounded-[28px] border border-[#e2e2e2] bg-white p-3.5 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-[#705d00] hover:shadow-md">
        
        {/* Product Image Container */}
        <div className="relative overflow-hidden rounded-[22px] bg-[#f3f3f4] p-2">
          <img
            className="h-56 w-full rounded-[18px] object-cover transition-transform duration-500 group-hover:scale-105"
            src={product.image}
            alt={product.name}
          />
          <span className="absolute left-4 top-4 flex items-center gap-1 rounded-full border border-[#d0c6ab] bg-white/90 px-3 py-1 text-[11px] font-bold text-[#705d00] shadow-sm backdrop-blur-md">
             
            Featured
          </span>
        </div>

        {/* Product Info */}
        <div className="flex flex-1 flex-col justify-between p-3.5 pt-4">
          <div>
            <h2 className="line-clamp-1 font-display text-lg font-bold text-[#1a1c1c] transition duration-200 group-hover:text-[#705d00]">
              {product.name}
            </h2>
            <p className="mt-1.5 line-clamp-2 font-body text-xs text-[#5f5e5e] font-normal leading-relaxed">
              {product.description}
            </p>
          </div>

          <div className="mt-5 flex items-center justify-between border-t border-[#e2e2e2] pt-3.5">
            <div>
              <span className="text-xs text-[#5f5e5e] block font-medium">Price</span>
              <p className="font-display text-xl font-extrabold text-[#705d00]">
                ₹{product.price}
              </p>
            </div>

            <span className="flex items-center gap-1.5 rounded-xl bg-[#705d00] px-4 py-2 text-xs font-bold text-white transition duration-300 group-hover:bg-[#544600] group-hover:scale-105">
              View
              <IconArrowRight size={15} />
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default ProductCards;


