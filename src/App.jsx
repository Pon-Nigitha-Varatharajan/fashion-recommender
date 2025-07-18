import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Upload from "./pages/Upload";
import Recommendations from "./pages/Recommendations";
import TryOn from "./pages/TryOn";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import ProductCategories from "./pages/ProductCategories";
import CategoryProducts from "./pages/CategoryProducts";
import ProductDetail from "./pages/ProductDetail";
import { CartProvider } from "./context/CartContext"; // ✅ added

function App() {
  return (
    <CartProvider> {/* ✅ Wrap everything */}
      <Router>
        <div className="bg-gray-50 min-h-screen flex flex-col">
          <Navbar />
          <div className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/upload" element={<Upload />} />
              <Route path="/recommendations" element={<Recommendations />} />
              <Route path="/tryon" element={<TryOn />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="/categories" element={<ProductCategories />} />
              <Route path="/categories/:category" element={<CategoryProducts />} />
              <Route path="/categories/:categoryName/:productId" element={<ProductDetail />} />
            </Routes>
          </div>
          <Footer />
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;
