import React from 'react';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import GallerPage from './pages/Gallery/GallerPage';
import HomePage from './pages/HomePage/HomePage';
import AboutPage from './pages/AboutPage/AboutPage';
import OfferPage from './pages/OfferPage/OfferPage';
import DeliveryPage from './pages/DeliveryPage/DeliveryPage';
import RulesPage from './pages/RulesPage/RulesPage';
import ActionsPage from './pages/ActionsPage/ActionsPage';
import ContactsPage from './pages/ContactsPage/ContactsPage';
import SiterRu from './SiterRu';
import RestaurantsPage from './pages/RestaurantsPage/RestaurantsPage';

function App() {
  const changeLanguage = () =>{
    document.querySelector("html").setAttribute("lang", "en");
  }
  return (
    <Router>
      <div className="App">
          <Header />
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/gallery" element={<GallerPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/delivery" element={<DeliveryPage />} />
              <Route path="/offer" element={<OfferPage />} />
              <Route path="/rules" element={<RulesPage />} />
              <Route path="/actions" element={<ActionsPage />} />
              <Route path="/contacts" element={<ContactsPage />} />
              <Route path="/restaurants" element={<RestaurantsPage />} />
            </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
