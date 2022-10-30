import './App.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BrowserRouter as Router, Switch, Route, useLocation } from "react-router-dom";
import Home from './Home/home';
import Layout from './Layout/Layout';
import Navbar from './Navbar/navbar';
import Login from './Login/Login';
import Register from './Register/Register';
import Cart from './Cart/Cart';
import PayInstallment from './PayInstallment/PayInstallment';
import StoreLocator from './StoreLocator/StoreLocator';
import Footer from './Footer/Footer';
import Product_Details from './Product_Details/Product_Details';
import { SearchProvider } from './Shared/Contexts/SearchProvider';
import { getCategory } from './Shared/Firebase/Products_Functions';
import React, { Component, Suspense ,useEffect , useState} from "react";
import "./App.css";
import "./localize/i18n";
import Advantages from "./localize/Advantages"
import Compare from "./Compare/compare"
import useAuth from './useAuth';
import Protected from './protected/protected';
import LanguageSelector from "./localize/LanguageSelector"
import {CartProvider} from "./Shared/Contexts/cartContext"
import Wishlist from './My Wishlist/Wishlist';
import Overview_Component from './Overview_Component/Overview_Component';
import Wishlist_Component from './Wishlist_Component/Wishlist_Component';
import Installments_Component from './Installments_Component/Installments_Component';


function App() {


const [searchQuery, setSearchQuery] = useState("")
const [isAuth, login, logout] = useAuth(false)

  return (

    <div>
    <Suspense fallback={null}>




<Advantages />
<LanguageSelector />
</Suspense>
      <Router>
        <SearchProvider value={{ searchQuery, setSearchQuery }}>
       
            <div >
          <Navbar />
      
        
          <Switch>
             <Route path='/' exact component={Home} />
            <Route path='/Home' exact component={Home} />
            <Route path='/Mobiles&Tablets' exact component={Layout} />
            <Route path='/KitchenAppliances' exact component={Layout} />
            <Route path='/LargeAppliances' exact component={Layout} />
            <Route path='/Health&Beauty' exact component={Layout} />
            <Route path='/SmallAppliances' exact component={Layout} />
            <Route path='/Televisions' exact component={Layout} />
            <Route path='/Electronics' exact component={Layout} />
            <Route path='/Laptops&PCs' exact component={Layout} />
            <Route path='/Vehicles' exact component={Layout} />
            <Route path='/Details/:prdId' exact component={Product_Details} />
            <Route path='/login' exact component={Login} />
            <Route path='/register' exact component={Register} />
            <Route path='/cart'exact  component={Cart}  />
            <Route path='/wishlist' exact component={Wishlist_Component}/>
            <Route path='/Account_Overview' exact component={Overview_Component}/>
            <Route path='/Installments_Component' exact component={Installments_Component} />
            <Route path='/storeLocator' exact component={StoreLocator} />
          




               </Switch>
          <Footer />
          </div>
         
       </SearchProvider>

      </Router>




    </div>
  );
}

export default App;


 