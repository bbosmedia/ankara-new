import React from "react";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import GallerPage from "./pages/Gallery/GallerPage";
import HomePage from "./pages/HomePage/HomePage";
import AboutPage from "./pages/AboutPage/AboutPage";
import OfferPage from "./pages/OfferPage/OfferPage";
import DeliveryPage from "./pages/DeliveryPage/DeliveryPage";
import RulesPage from "./pages/RulesPage/RulesPage";
import ActionsPage from "./pages/ActionsPage/ActionsPage";
import ContactsPage from "./pages/ContactsPage/ContactsPage";
import RestaurantsPage from "./pages/RestaurantsPage/RestaurantsPage";

function App() {
  const changeLanguage = () => {
    document.querySelector("html").setAttribute("lang", "en");
  };
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>

          {/* Main Page */}
          <Route path="/" element={<HomePage />} />
          <Route path="/uz" element={<HomePage lang="/uz" />} />
          <Route path="/en" element={<HomePage lang="/en" />} />

          {/* Gallery Page */}
          <Route path="/gallery" element={<GallerPage />} />
          <Route path="/uz/gallery" element={<GallerPage lang="/uz" />} />
          <Route path="/en/gallery" element={<GallerPage lang="/en" />} />

          <Route path="/about" element={<AboutPage />} />
          <Route path="/delivery" element={<DeliveryPage />} />
          <Route path="/offer" element={<OfferPage />} />
          <Route path="/rules" element={<RulesPage />} />
          <Route path="/actions" element={<ActionsPage />} />
          <Route path="/contacts" element={<ContactsPage />} />

          {/* Restaurants */}
          <Route path="/restaurants" element={<RestaurantsPage lang="/ru" />} />
          <Route
            path="/uz/restaurants"
            element={<RestaurantsPage lang="/uz" />}
          />
          <Route
            path="/en/restaurants"
            element={<RestaurantsPage lang="/en" />}
          />
        </Routes>

        {/* Footer */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
