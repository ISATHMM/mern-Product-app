import { useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"

function AddProduct() {

    const navigate = useNavigate()

    const [formData, setFormData] = useState({
        name: "",
        price: "",
        qty: "",
        available: false,
        status: "created",
        rating: ""   // single input
    })

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target

        setFormData({
            ...formData,
            [name]: type === "checkbox" ? checked : value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        // Convert rating to array (because model expects [Number])
        const dataToSend = {
            ...formData,
            ratings: formData.rating
                ? [Number(formData.rating)]
                : []
        }

        delete dataToSend.rating

        await axios.post("http://localhost:3000/products", dataToSend)

        navigate("/ViewProduct")
    }

    return (
        <div className="min-h-screen flex justify-center items-center bg-gray-100">

            <div className="bg-white p-8 rounded-2xl shadow-lg w-96">

                <h2 className="text-2xl font-bold text-center mb-6">
                    ➕ Add Product
                </h2>

                <form onSubmit={handleSubmit} className="space-y-4">

                    {/* Name */}
                    <input
                        type="text"
                        name="name"
                        placeholder="Product Name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full border p-2 rounded-lg"
                        required
                    />

                    {/* Price */}
                    <input
                        type="number"
                        name="price"
                        placeholder="Price"
                        value={formData.price}
                        onChange={handleChange}
                        className="w-full border p-2 rounded-lg"
                        required
                    />

                    {/* Quantity */}
                    <input
                        type="number"
                        name="qty"
                        placeholder="Quantity"
                        value={formData.qty}
                        onChange={handleChange}
                        className="w-full border p-2 rounded-lg"
                        required
                    />

                    {/* Status */}
                    <select
                        name="status"
                        value={formData.status}
                        onChange={handleChange}
                        className="w-full border p-2 rounded-lg"
                    >
                        <option value="created">Created</option>
                        <option value="updated">Updated</option>
                    </select>

                    {/* Rating */}
                    <input
                        type="number"
                        name="rating"
                        placeholder="Rating (1-5)"
                        min="0"
                        max="5"
                        value={formData.rating}
                        onChange={handleChange}
                        className="w-full border p-2 rounded-lg"
                    />

                    {/* Available */}
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
                        Save Product
                    </button>

                </form>

            </div>

        </div>
    )
}

export default AddProduct