import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import ItemId from "./pages/ItemId";
import Catalog from "./pages/Catalog";
import Footer from "./components/Footer";
import AboutUs from "./pages/AboutUs";

function App() {
  return (
    <Router>
      <>
        <Header />
        <Routes>
          <Route element={<Catalog />} path="/catalog" index />
          <Route element={<ItemId />} path="/catalog/:id" />
          <Route element={<AboutUs />} path="/about_us" />
        </Routes>
        <Footer />
      </>
    </Router>
  );
}

export default App;
