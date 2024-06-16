import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./assets/styles/App.css";
import Success from "./components/contact/Success";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/NavBar";
import Cart from "./components/products/Cart";
import AboutPage from "./pages/AboutPage";
import BlogPage from "./pages/BlogPage";
import ContactPage from "./pages/ContactPage";
import HomePage from "./pages/HomePage";
import CartProvider from "./utils/CartContext";

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <CartProvider>
      <>
        <Navbar handleToggle={handleToggle} isOpen={isOpen} />
        <Routes>
          <Route path="/" element={<HomePage scrollToTop={scrollToTop} />} />
          <Route
            path="/about"
            element={<AboutPage scrollToTop={scrollToTop} />}
          />
          <Route
            path="/blog"
            element={<BlogPage scrollToTop={scrollToTop} />}
          />
          <Route
            path="/contact"
            element={<ContactPage scrollToTop={scrollToTop} />}
          />
          <Route path="/cart" element={<Cart scrollToTop={scrollToTop} />} />
          <Route
            path="/success"
            element={<Success scrollToTop={scrollToTop} />}
          />
        </Routes>
        <Footer />
      </>
    </CartProvider>
  );
}

export default App;
