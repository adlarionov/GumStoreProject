import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import ItemId from "./pages/ItemId";
import Catalog from "./pages/Catalog";
import Footer from "./components/Footer";
import AboutUs from "./pages/AboutUs";
import Delivery from "./pages/Delivery";
import Cart from "./pages/Cart";
import Favorite from "./pages/Favorite";

function App() {
  return (
    <Router>
      <>
        <Header />
        <Routes>
          <Route element={<Catalog />} path="/catalog" index />

          <Route element={<Delivery />} path="/delivery" />
          <Route element={<ItemId />} path="/catalog/:id" />
          <Route element={<AboutUs />} path="/about_us" />

          <Route element={<Favorite />} path="/favorite" />
          <Route element={<Cart />} path="/cart" />
        </Routes>
        <Footer />
      </>
    </Router>
  );
}

export default App;
