import React from "react";
import { useEffect, useState } from "react";
import ProductCards from "../components/ProductCards";
function ProductList() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const BASE_URL = import.meta.env.VITE_DJANGO_BASE_URL;
  useEffect(() => {
    fetch(`${BASE_URL}/api/products/`)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch products");
        }
        return res.json();
      })
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading..</div>;
  }
  if (error) {
    return <div>Error:{error}</div>;
  }
  return (
    <>
      <div className="min-h-screen bg-gray-200 ">
        <h1 className="text-3xl text-center py-6 bg-white shadow-md font-bold ">
          Products List
        </h1>
        <div className="sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-5  grid grid-cols-1 ">
          {products.length > 0 ? (
            products.map((product) => (
              <ProductCards key={product.id} product={product} />
            ))
          ) : (
            <p className="text-center   text-gray-500 col-span-full">No Products Available..</p>
          )}
        </div>
      </div>
    </>
  );
}

export default ProductList;
