import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./assets/styles/App.css";
import Success from "./components/contact/Success";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/NavBar";
import Cart from "./components/products/Cart";
import Checkout from "./components/products/Checkout";
import ErrorPayment from "./components/products/ErrorPayment";
import SuccessPayment from "./components/products/SuccessPayment";
import AboutPage from "./pages/AboutPage";
import BlogPage from "./pages/BlogPage";
import ContactPage from "./pages/ContactPage";
import HomePage from "./pages/HomePage";
import Terms from "./pages/Terms";
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
          <Route path="/cart" element={<Cart />} />
          <Route
            path="/success"
            element={<Success scrollToTop={scrollToTop} />}
          />
          <Route
            path="/successPayment"
            element={<SuccessPayment scrollToTop={scrollToTop} />}
          />
          <Route
            path="/errorPayment"
            element={<ErrorPayment scrollToTop={scrollToTop} />}
          />
          <Route path="/terms" element={<Terms scrollToTop={scrollToTop} />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
        <Footer />
      </>
    </CartProvider>
  );
}

export default App;
