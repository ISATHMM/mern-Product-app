import { useEffect, useState } from "react"
import axios from "axios"
import { useNavigate, useParams } from "react-router-dom"

function EditProduct() {

  const { id } = useParams()
  const navigate = useNavigate()

  const [formData, setFormData] = useState({
    name: "",
    price: "",
    qty: "",
    available: false,
    status: "created",
    rating: ""
  })

  useEffect(() => {
    getProduct()
  }, [])

  const getProduct = async () => {
    try {
      const res = await axios.get(`http://localhost:3000/products/${id}`)

      const product = res.data

      setFormData({
        name: product.name,
        price: product.price,
        qty: product.qty,
        available: product.available,
        status: product.status,
        rating: product.ratings.length > 0 ? product.ratings[0] : ""
      })

    } catch (error) {
      console.log(error)
    }
  }

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target

    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    const updatedData = {
      ...formData,
      ratings: formData.rating ? [Number(formData.rating)] : []
    }

    delete updatedData.rating

    await axios.patch(`http://localhost:3000/products/${id}`, updatedData)

    navigate("/ViewProduct")
  }

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100">

      <div className="bg-white p-8 rounded-2xl shadow-lg w-96">

        <h2 className="text-2xl font-bold text-center mb-6">
          ✏ Edit Product
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">

          <input
            type="text"
            name="name"
            placeholder="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full border p-2 rounded-lg"
            required
          />

          <input
            type="number"
            name="price"
            placeholder="price"
            value={formData.price}
            onChange={handleChange}
            className="w-full border p-2 rounded-lg"
            required
          />

          <input
            type="number"
            name="qty"
            placeholder="quantity"
            value={formData.qty}
            onChange={handleChange}
            className="w-full border p-2 rounded-lg"
            required
          />

          <select
            name="status"
            value={formData.status}
            onChange={handleChange}
            className="w-full border p-2 rounded-lg"
          >
            <option value="created">Created</option>
            <option value="updated">Updated</option>
          </select>

          <input
            type="number"
            name="rating"
            placeholder="rating (0-5)"
            min="0"
            max="5"
            value={formData.rating}
            onChange={handleChange}
            className="w-full border p-2 rounded-lg"
          />

          <div className="flex items-center space-x-2">
            <input
              type="checkbox"
              name="available"
              checked={formData.available}
              onChange={handleChange}
            />
            <label>Available</label>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700"
          >
            Update Product
          </button>

        </form>

      </div>

    </div>
  )
}

export default EditProduct