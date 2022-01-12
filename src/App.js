import React, { useState, useEffect } from "react";
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
import GalleryItemPage from "./pages/GalleryItemPage/GalleryItemPage";
import NotFoundPage from "./pages/NotFounPage/NotFoundPage";
import SubActionPage from "./pages/SubActionPage/SubActionPage";
import SubReatauranPage from "./pages/SubRestaurantPage/SubReatauranPage";
import ChangeLanguageModal from "./components/Modals/ChangeLanguageModal";
import ComputerMenuModal from "./components/Modals/ComputerMenuModal";
import ProductMainPage from "./pages/ProductMainPage/ProductMainPage";
import CartMenu from "./components/CartMenu/CartMenu";
import MenuPage from "./pages/MenuPage/MenuPage";
import ProfilePage from "./pages/ProfilePage/ProfilePage";
import RegisterAndLogin from "./components/RegisterAndLoginModel/RegisterAndLogin";
import CheckoutPage from "./pages/CheckoutPage/CheckoutPage";
import { useDispatch } from 'react-redux'
import {updateFoodMenu} from './redux/FoodMenu'
import axios from "axios";
import PrivateRoute from "./PrivateRoute";

function App() {
  const dispatch = useDispatch();
  const [sitelang, setSitelang] = useState(false);
  const [computermenu, setComputermenu] = useState(false);
  const [cartmenu, setCartMenu] = useState(false);
  const [logimodel, setLoginmoedel] = useState(false)

  const langModel = () =>{
    setSitelang(!sitelang);
  }

  const changeComputerMenu = () =>{
    setComputermenu(!computermenu);
  }

  const openCartMenu = () =>{
    setCartMenu(!cartmenu);
  }

  const changeLogin = () =>{
    setLoginmoedel(!logimodel);
  }

  const fetchMenuItems = async() =>{
    try{
        var items = await axios.get('https://api.ankara.uz/shop/category')
        if(items.status === 200){
            dispatch(updateFoodMenu(items.data));
        }
    }catch(e){
        console.log(e);
    }
  }
  useEffect(() => {
    fetchMenuItems();
  }, [])

  return (
    <Router>
      <div className="App">
        <Header langModel={langModel} changeComputerMenu={changeComputerMenu} openCartMenu={openCartMenu} changeLogin={changeLogin} />
        <Routes>

          {/* Main Page */}
          <Route path="/" element={<HomePage lang='' />} />
          <Route path="/uz" element={<HomePage lang="/uz" />} />
          <Route path="/en" element={<HomePage lang="/en" />} />

          {/* Menu Page */}
          <Route  path="/menu" element={<MenuPage lang='/ru' />} />
          <Route  path="/uz/menu" element={<MenuPage lang='/uz' />} />
          <Route  path="/en/menu" element={<MenuPage lang='/en' />} />

          <Route  path="/menu/:id" element={<MenuPage lang='/ru' />} />
          <Route  path="/uz/menu/:id" element={<MenuPage lang='/uz' />} />
          <Route  path="/en/menu/:id" element={<MenuPage lang='/en' />} />

          {/* Gallery Page */}
          <Route path="/gallery" element={<GallerPage />} />
          <Route path="/uz/gallery" element={<GallerPage lang="/uz" />} />
          <Route path="/en/gallery" element={<GallerPage lang="/en" />} />

           {/* Gallery SubPage */}
           <Route path="/gallery/:id" element={<GalleryItemPage />} />
          <Route path="/uz/gallery/:id" element={<GalleryItemPage lang="/uz" />} />
          <Route path="/en/gallery/:id" element={<GalleryItemPage lang="/en" />} />

          {/* About Page */}
          <Route path="/about" element={<AboutPage />} />

          {/* Delivery Page */}
          <Route path="/delivery" element={<DeliveryPage lang='' />} />
          <Route path="/uz/delivery" element={<DeliveryPage lang='/uz' />} />
          <Route path="/en/delivery" element={<DeliveryPage lang='/en' />} />



          <Route path="/offer" element={<OfferPage />} />
          <Route path="/rules" element={<RulesPage />} />

          {/* Actions Page */}
          <Route path="/actions" element={<ActionsPage lang="" />} />
          <Route path="/uz/actions" element={<ActionsPage lang="/uz" />} />
          <Route path="/en/actions" element={<ActionsPage lang="/en" />} />

          {/* Sub Action Page */}
          <Route path="/actions/:id" element={<SubActionPage lang="" />} />
          <Route path="/uz/actions/:id" element={<SubActionPage lang="/uz" />} />
          <Route path="/en/actions/:id" element={<SubActionPage lang="/en" />} />

          {/* Contacts */}
          <Route path="/contacts" element={<ContactsPage />} />

          {/* Restaurants */}
          <Route path="/restaurants" element={<RestaurantsPage lang="/ru" />} />
          <Route path="/uz/restaurants" element={<RestaurantsPage lang="/uz" />} />
          <Route path="/en/restaurants" element={<RestaurantsPage lang="/en" />} />

          {/* SubRestaurants */}
          <Route path="/restaurants/:id" element={<SubReatauranPage lang="" />} />
          <Route path="/uz/restaurants/:id" element={<SubReatauranPage lang="/uz" />} />
          <Route path="/en/restaurants/:id" element={<SubReatauranPage lang="/en" />} />

          <Route path='/product/:id' element={<ProductMainPage lang='' />} />
          <Route path='/uz/product/:id' element={<ProductMainPage lang='/uz' />} />
          <Route path='/en/product/:id' element={<ProductMainPage lang='/en' />} />

          <Route element={<PrivateRoute />}>
            <Route path="/profile" element={<ProfilePage lang="/ru" />} />
          </Route>
          <Route element={<PrivateRoute />}>
            <Route path="/uz/profile" element={<ProfilePage lang="/uz" />} />
          </Route>
          <Route element={<PrivateRoute />}>
            <Route path="/en/profile" element={<ProfilePage lang="/en" />} />
          </Route>

          <Route path="/checkout" element={<CheckoutPage lang='/ru' />} />
          <Route path="/uz/checkout" element={<CheckoutPage lang='/uz' />} />
          <Route path="/en/checkout" element={<CheckoutPage lang='/en' />} />

          <Route path='*' element={<NotFoundPage />}  />
        </Routes>

        {/* Footer */}
        <Footer />
        <ChangeLanguageModal sitelang={sitelang} langModel={langModel} />
        <ComputerMenuModal computerMenu={computermenu} changeComputerMenu={changeComputerMenu} />
        {cartmenu && <CartMenu openCartMenu={openCartMenu} />}
        {logimodel && <RegisterAndLogin changeLogin={changeLogin} />}
      </div>
    </Router>
  );
}

export default App;
