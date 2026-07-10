import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  // back to home navigate btn
  const navigate = useNavigate();
  const BASEURL = import.meta.env.VITE_DJANGO_BASE_URL;

  useEffect(() => {
    fetch(`${BASEURL}/api/products/${id}/`)
      .then((res) => {
        if (!res.ok) {
          throw new Error("failed to fetch product details");
        }
        return res.json();
      })
      .then((data) => {
        setProduct(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, [id, BASEURL]);

  if (loading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error:{error}</div>;
  }
  if (!product) {
    return <div>No Product Found...</div>;
  }

  return (
    <>
      <div className="min-h-screen bg-gray-100 flex justify-center items-center py-10 ">
        <div className="bg-white w-full max-w-3xl shadow-lg rounded-2xl ">
          <div className="flex flex-col md:flex-row gap-8 ">
            <img
              src={`${product.image}`}
              alt={product.name}
              className="w-full md:w-1/2 h-auto object-cover rounded-lg "
            />
            <div className="flex-1">
              <h1>{product.name}</h1>
              <p>{product.description}</p>
              <p>{product.price}</p>
              <button className="bg-black text-white px-4 py-2 rounded-lg">
                Add to Cart
              </button>
            </div>
          </div>
          <button
            onClick={() => navigate("/")}
            className=" cursor-pointer underline hover:scale-[1.02] text-blue-500 px-4 py-2 rounded-lg"
          >
            {" "}
            Back To Home
          </button>
        </div>
      </div>
    </>
  );
}

export default ProductDetails;
