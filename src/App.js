import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import CartPage from "./pages/CartPage";
import ProductDetailPage from "./pages/ProductDetailPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FavoritesPage from "./pages/FavoritesPage";
import ThankYou from "./components/ThankYou";
import Registration from "./components/Signup";
import Login from "./components/Signin";
import { useAuth } from './components/AutoContext';
import { SimpleFooter } from "./pages/Footer";
const App = () => {
  const { isAuthenticated } = useAuth();
  console.log(isAuthenticated);
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Signin" element={<Login/>} />
        <Route path="/Signup" element={<Registration/>} />
        <Route path="/product/:id" element={<ProductDetailPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/favorites" element={<FavoritesPage />} />
        <Route path="/thankyou" element={<ThankYou />} />
      </Routes>
      <SimpleFooter/>
    </BrowserRouter>
  );
}

export default App;
