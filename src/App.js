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
import { SearchProvider } from './Shared/Contexts/SearchProvider';
import { getCategory } from './Shared/Firebase/Products_Functions';
import React, { Component, Suspense ,useEffect , useState} from "react";
import "./App.css";
import "./localize/i18n";
import Advantages from "./localize/Advantages"
import Compares from "./Compare/compare"
import Compare from "./Compare/compare"

import Protected from './protected/protected';
import LanguageSelector from "./localize/LanguageSelector";
import {CartProvider} from "./Shared/Contexts/cartContext"
import Wishlist from './My Wishlist/Wishlist';
import Overview_Component from './Overview_Component/Overview_Component';
import Wishlist_Component from './Wishlist_Component/Wishlist_Component';
import Installments_Component from './Installments_Component/Installments_Component';
import Side_Account from './Side_Account/Side_Account';
import Account_Overview from './Account_Overview/Account_Overview';
import Account_Setting from './Account_Setting/Account_Setting';
import Address_Book from './address book/Address_Book';
import Slider from 'react-slick/lib/slider';
import Product_Card from './Shared/Product_Card/Product_Card';
import Product_Component from './Shared/Product_Component/Product_Component';
import Product_Details from './Product_Details/Product_Details';
import { ProductByCatProvider } from './Shared/Contexts/ProductByCatProvider';
import { onAuthStateChanged,} from "firebase/auth";
import {auth} from './Firebase Configration/Firebase'
import Address_Component from './Address_Component/Address_Component';
import Order_Component from './Orders_Component/Orders_Component';


function App() {
  const [searchQuery, setSearchQuery] = useState("")

  const [isAuth,setAuth]= useState()
useEffect(() => {
          onAuthStateChanged(auth, (currentUser) => {
            if (currentUser==null){
              setAuth(false)

              
            }else{
              setAuth(true)

            }
          });
        
        },)
    
  return (

    <div>
    <Suspense fallback={null}>

<LanguageSelector />
{/* <Introduction /> */}

<Advantages />
<LanguageSelector />
</Suspense>
<Router>
        <SearchProvider value={{ searchQuery, setSearchQuery }}>
        
            <div >
          <Navbar />
          {/* <Compare/> */}
        
          <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/Home' exact component={Home} />
            <Route path='/Compare' exact component={Compares} />
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
            <Protected path='/cart'exact  component={Cart} isLogin={isAuth} />
            <Route path='/payInstallment' exact component={PayInstallment} />
            <Route path='/storeLocator' exact component={StoreLocator} />
            <Route path='/wishlist' exact component={Wishlist_Component}/>
            <Route path='/Address_Component' exact component={Address_Component}/>
            <Route path='/order' exact component={Order_Component}/>
            
            <Route path='/Installments_Component' exact component={Installments_Component} />
            <Route path='/storeLocator' exact component={StoreLocator} />
            <Protected path="/MyAccount" component={Overview_Component} isLogin={isAuth}/>
          </Switch>
          {/* <Footer /> */}
          </div>
     
       </SearchProvider>

      </Router>




    </div>
  );
}

export default App;
 