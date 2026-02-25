import ViewProduct from "./components/ViewProduct"
import { Routes, Route } from "react-router-dom"
import Header from "./components/layout/Header"
import Footer from "./components/layout/Footer"
import Home from "./components/Home"
import AddProduct from "./components/AddProduct"
import EditProduct from "./components/EditProduct"

function App() {
  return (
    <>
      <Header />
      <Routes>
        {/* Default Page */}
        <Route path="/" element={<Home />} />

        {/* View Product Page */}
        <Route path="/ViewProduct" element={<ViewProduct />} />
        <Route path="/addproduct" element={<AddProduct />} />
        <Route path="/edit-product/:id" element={<EditProduct />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App