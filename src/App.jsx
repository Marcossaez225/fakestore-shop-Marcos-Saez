import { Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import Category from "./pages/Category"
import Detail from "./pages/Detail"
import CartPage from "./pages/CartPage"

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/category/:name" element={<Category />} />
        <Route path="/product/:id" element={<Detail />} />
        <Route path="/cart" element={<CartPage />} />
      </Routes>
    </>
  )
}

export default App

