import { Link } from "react-router-dom"

function Home() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">

      <div className="text-center bg-white p-10 rounded-2xl shadow-lg max-w-xl">

        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Welcome to My Store 🚀
        </h1>

        <p className="text-gray-600 mb-6">
          Manage products easily with our modern system.
        </p>

        <Link
          to="/ViewProduct"
          className="bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition"
        >
          View Products
        </Link>

      </div>

    </div>
  )
}

export default Home