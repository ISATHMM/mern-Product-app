import { Link } from "react-router-dom"

function Header() {
    return (
        <header className="bg-blue-600 text-white p-4 shadow-md">
            <div className="container mx-auto flex justify-between items-center">

                {/* Logo */}
                <h1 className="text-2xl font-bold">
                    My Store
                </h1>

                {/* Navigation */}
                <nav className="flex items-center space-x-6">

                    <Link to="/" className="hover:underline">
                        Home
                    </Link>

                    <Link to="/ViewProduct" className="hover:underline">
                        Products
                    </Link>
                    <Link to="/addProduct" className="hover:underline">
                        Add Product
                    </Link>

                    {/* User Icon */}
                    <div className="text-2xl cursor-pointer hover:scale-110 transition">
                        👤
                    </div>

                </nav>

            </div>
        </header>
    )
}

export default Header