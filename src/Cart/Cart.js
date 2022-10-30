import React,{useState,useEffect} from 'react'
import './cart.css'
import EachProduct from './EachProduct';
import Footer from '../Footer/Footer';
import { db, auth } from "./../Firebase Configration/Firebase";

import SliderShared from './Slider';
import { useTranslation } from "react-i18next";
import {onAuthStateChanged } from 'firebase/auth';
import Paypal from '../paypal'
import { 
  doc,
  getDoc,
  updateDoc,
  arrayRemove,
  collection,
} from "firebase/firestore";
 


function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "gray" }}
        onClick={onClick}
      />
    );
  }
  
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "gray" }}
        onClick={onClick}
      />
    );
  }
   const Cart= () => {

      const { t, i18n } = useTranslation();
  
      const[Orders,setOrders]=useState([])
      const [email, setEmail] = useState("");

    const settings = {
        className: "slider variable-width",
        // dots: true,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        adaptiveHeight: true,
        variableWidth: true,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              // dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
      var itemsPrice = Orders.reduce((a, c) => a + c.Quantity * c.price, 0);
    var taxPrice = itemsPrice * 0.1;
    var shippingPrice = itemsPrice > 1000 ? 0 : 20;
    var totalPrice = itemsPrice + taxPrice + shippingPrice;
    const getproduct = async () => {
      await getDoc(doc(db, "users", email)).then((res) => {
        console.log(res.data());
        setOrders(res.data().order);
      });
    };
    // const cartDocRef = doc(db,  "users",`${email}`);
    useEffect(() => {
      onAuthStateChanged(auth, (user) => {
        if (user) {
          setEmail(user.email);
        }
      });
      // getproduct();
      console.log(Orders);
    },[itemsPrice]);
    useEffect(() => {
      console.log(email);
      if (email) {
        getproduct();
      }
    }, [email,itemsPrice]);
    const [checkout, setCheckOut ] = useState(false);
  return (
    <>

     <div className='cartComponent container'>
        <div className='container d-flex flex-column align-items-center'>
            <h2>{t("314.label")}</h2>
            {/* <p>{t("315.label")}</p> */}
            <div className='d-flex justify-content-between my-5 forResponsCart'>
                {/* eact product  */}
                <div className='d-flex border-5 flex-column'>

                <EachProduct />                
                
                </div>
                {/* end eact product  */}

                <div className='paymentSummary '>
                    <div className='px-4 py-4'>
                        <h2>{t("316.label")}</h2>
                        <div>
                            <div className=' d-flex  justify-content-between my-2'> 
                                <span>{t("317.label")}</span>
                                <span>{itemsPrice.toFixed(2)}<span> EGP</span></span>
                                
                            </div>
                            <div className=' d-flex  justify-content-between my-2'> 
                                <span>{t("318.label")}</span>
                               {taxPrice.toFixed(2)} EGP
                                
                            </div>
                            <div className=' d-flex  justify-content-between my-2'> 
                                <span>{t("320.label")}</span>
                               {shippingPrice.toFixed(2)}EGP
                                
                            </div>
                            <div></div>
                            <div className=' d-flex  justify-content-between my-2'> 
                                <span>{t("322.label")}</span>
                                <span style={{color:"#006CB7",fontSize:"18px",fontWeight:"500"}}>{totalPrice.toFixed(2)}<span> EGP</span></span>
                                
                            </div>
                            <div><span> {t("323.label")} </span><p>{t("324.label")}</p></div>
                            <button className='btn text-white '>{t("325.label")}</button>
                            <div></div>
                            {checkout ? (<Paypal />) : (
                            <button className='btn'onClick={() => { setCheckOut(true);}}>{t("327.label")}</button>  
                           )}
                            <div className='d-flex justify-content-around'>
                                <img src={"https://www.pngall.com/wp-content/uploads/2017/05/Visa-Logo-PNG-Pic.png"}/>
                                <img src={"https://www.pngitem.com/pimgs/m/1-17788_mastercard-logo-transparent-vector-logo-png-mastercard-png.png"}/>
                            </div>


                        </div>
                    </div>
                </div>
                

            </div>
            
           
        </div>
     </div>
    <SliderShared/>
     

    
    </>
  )
}
export default Cart;