import React from "react";
import { Link } from "react-router-dom";
import { IconArrowRight, IconSparkles } from "@tabler/icons-react";

function ProductCards({ product }) {
  return (
    <Link to={`/products/${product.id}`} className="group block h-full">
      <div className="flex h-full flex-col overflow-hidden rounded-[28px] border border-[#FB87AC]/20 bg-[#160B18]/80 p-3.5 backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-[#FB87AC] hover:shadow-pink-glow">
        
        {/* Product Image Container */}
        <div className="relative overflow-hidden rounded-[22px] bg-[#201124] p-2">
          <img
            className="h-56 w-full rounded-[18px] object-cover transition-transform duration-500 group-hover:scale-108"
            src={product.image}
            alt={product.name}
          />
          <span className="absolute left-4 top-4 flex items-center gap-1 rounded-full border border-[#FB87AC]/40 bg-[#120814]/80 px-3 py-1 text-[11px] font-bold text-[#FB87AC] backdrop-blur-md shadow-pink-glow-sm">
            <IconSparkles size={13} />
            Featured
          </span>
        </div>

        {/* Product Info */}
        <div className="flex flex-1 flex-col justify-between p-3.5 pt-4">
          <div>
            <h2 className="line-clamp-1 text-lg font-bold text-white transition duration-200 group-hover:text-[#FB87AC]">
              {product.name}
            </h2>
            <p className="mt-1.5 line-clamp-2 text-xs text-slate-400 font-normal leading-relaxed">
              {product.description}
            </p>
          </div>

          <div className="mt-5 flex items-center justify-between border-t border-[#FB87AC]/15 pt-3.5">
            <div>
              <span className="text-xs text-slate-400 block font-medium">Price</span>
              <p className="text-xl font-extrabold text-[#FB87AC]">
                ₹{product.price}
              </p>
            </div>

            <span className="flex items-center gap-1.5 rounded-xl bg-gradient-to-r from-[#FB87AC] to-[#E86591] px-3.5 py-2 text-xs font-bold text-slate-950 transition duration-300 group-hover:shadow-pink-glow group-hover:scale-105">
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

