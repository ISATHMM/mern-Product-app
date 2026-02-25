import { useEffect, useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"

function ViewProduct() {

  const [products, setProducts] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    getProducts()
  }, [])

  const getProducts = async () => {
    try {
      const res = await axios.get("http://localhost:3000/products")
      setProducts(res.data)
    } catch (error) {
      console.log(error)
    }
  }

  const deleteProduct = async (id) => {
    try {

      const confirmDelete = window.confirm("Are you sure you want to delete this product?")
      if (!confirmDelete) return

      await axios.delete(`http://localhost:3000/products/${id}`)

      // Remove product from UI instantly
      setProducts(products.filter((product) => product._id !== id))

    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div className="min-h-screen bg-gray-100 py-10 px-6">

      <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">
        Product List
      </h2>

      {/* Responsive 5 cards per row */}
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">

        {products.map((product) => (
          <div
            key={product._id}
            className="group bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden"
          >

            {/* Header */}
            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 px-4 py-3">
              <h3 className="text-base font-semibold text-white truncate">
                {product.name}
              </h3>
            </div>

            {/* Body */}
            <div className="p-4 space-y-2 text-xs text-gray-600">

              <p className="flex justify-between">
                <span className="font-medium text-gray-700">Status</span>
                <span>{product.status}</span>
              </p>

              <p className="flex justify-between">
                <span className="font-medium text-gray-700">Price</span>
                <span className="text-blue-600 font-semibold">
                  ${product.price}
                </span>
              </p>

              <p className="flex justify-between">
                <span className="font-medium text-gray-700">Qty</span>
                <span>{product.qty}</span>
              </p>

              <p className="flex justify-between">
                <span className="font-medium text-gray-700">Created</span>
                <span>
                  {new Date(product.createdAt).toLocaleDateString()}
                </span>
              </p>

              <p className="flex justify-between">
                <span className="font-medium text-gray-700">Ratings</span>
                <span className="text-yellow-500">
                  {product.ratings && product.ratings.length > 0
                    ? product.ratings.join(", ")
                    : "No Ratings"}
                </span>
              </p>

              {/* Availability */}
              <div>
                {product.available ? (
                  <span className="text-green-600 text-xs font-medium">
                    ● Available
                  </span>
                ) : (
                  <span className="text-red-600 text-xs font-medium">
                    ● Not Available
                  </span>
                )}
              </div>

              {/* Buttons */}
              <div className="flex gap-2 pt-2">
                <button
                  onClick={() => deleteProduct(product._id)}
                  className="flex-1 bg-red-500 hover:bg-red-600 text-white py-1 rounded-lg text-xs transition"
                >
                  Delete
                </button>

                <button
                  onClick={() => navigate(`/edit-product/${product._id}`)}
                  className="flex-1 bg-amber-500 hover:bg-amber-600 text-white py-1 rounded-lg text-xs transition"
                >
                  Edit
                </button>
              </div>

            </div>

          </div>
        ))}

      </div>

    </div>
  )
}

export default ViewProduct