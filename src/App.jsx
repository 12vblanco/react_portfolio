import { Route, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";
// import CartProvider from "./aux/CartContext";
import { theme } from "./branding/theme";
import Navbar from "./components/navbar/NavBar";
import Douglas from "./screens/Douglas";
import FraxinusSmall from "./screens/FraxinusSmall";
import Leylandii from "./screens/Leylandii";
import Platanoides from "./screens/Platanoides";
import PrunusAvium from "./screens/PrunusAvium";
import PrunusSerrulata from "./screens/PrunusSerrulata";
import PrunusTwin from "./screens/PrunusTwin";
import RoundAsh from "./screens/RoundAsh";
import Sycamore from "./screens/Sycamore";
import About from "pages/AboutPage.jsx";
import Blog from "pages/BlogPage.jsx";
import Contact from "pages/ContactPage.jsx";
import Home from "pages/HomePage.jsx";
import "./styles/App.css";

function App() {
  return (
    // <CartProvider>
    <ThemeProvider theme={theme}>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={About} />
        <Route path="/blog" element={Blog} />
        <Route path="/Contact" element={Contact} />
        {/* <Route path="/cart" element={Cart} /> */}
        <Route path="/leylandii" element={<Leylandii />} />
        <Route path="/prunusSerrulata" element={<PrunusSerrulata />} />
        <Route path="/fraxinusSmall" element={<FraxinusSmall />} />
        <Route path="/sycamore" element={<Sycamore />} />
        <Route path="/platanoides" element={<Platanoides />} />
        <Route path="/douglas" element={<Douglas />} />
        <Route path="/prunusTwin" element={<PrunusTwin />} />
        <Route path="/roundAsh" element={<RoundAsh />} />
        <Route path="/prunusAvium" element={<PrunusAvium />} />
        <Route path="/success" element={<success />} />
      </Routes>
    </ThemeProvider>
    // </CartProvider>
  );
}

export default App;
