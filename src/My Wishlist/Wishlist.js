import React, { useEffect } from "react";
import { MdCompare } from "react-icons/md";
import { FiHeart } from "react-icons/fi";
import StarRating from "star-rating-react";
import addFavorites from "../store/actions/favoriteAction";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { db, auth } from "./../Firebase Configration/Firebase";
import { onAuthStateChanged } from "firebase/auth";
import { doc, getDoc, updateDoc, arrayRemove } from "firebase/firestore";
import { useTranslation } from "react-i18next";
import { RiOrderPlayLine } from "react-icons/ri";
import { Link } from 'react-router-dom';
import cookies from "js-cookie";

const Wishlist = () => {
  const [email, setEmail] = useState("");
  const [favorite, setFavorite] = useState([]);
  const { t, i18n } = useTranslation();
  const currentLanguageCode = cookies.get("i18next");
  const getproduct = async () => {
    await getDoc(doc(db, "users", email)).then((res) => {
      setFavorite(res.data().wishlist);
    });
  };
  // const cartDocRef = doc(db, "users",email);
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setEmail(user.email);
        console.log(user);
      }
    });

    console.log(favorite);
  },[favorite]);
  useEffect(() => {
    console.log(email);
    if (email) {
      getproduct();
    }
  }, [email,favorite]);
  function onRemove(cart) {
    updateDoc(
      doc(db, "users", email),
      {
        wishlist: arrayRemove(cart),
      },
      []
    );
  }

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-12 my-5 ms-3">
            <h3 className="pageHeader">{t("aa.label")}</h3>
            {/* <p className='Product_Description_txt'>{t("ak.label")}</p> */}
          </div>

          <div className="col-12 d-flex flex-wrap justify-content-center">
            {favorite.map((prd, i) => (
              <div key={prd.prd_id} className="ProductCard ms-3 d-flex flex-column shadow bg-white mx-1 my-2 position-relative" style={{ width: "14.8rem" }}>
              {prd.discount > 0 ? <div className='badge badgeDiscount ms-3 position-absolute d-flex justify-content-center align-items-center mt-4 '>{prd.discount}% OFF</div>
                  : <div></div>
              }
              
                  <div className="d-flex position-absolute heart">
                      <FiHeart className="loveBtn grow" onClick={() => onRemove(prd)}/>
                  </div>
                  <Link to={{ pathname: `/Details/${prd.prd_id}`, prdObj: prd }} style={{ textDecoration: 'none', color: 'black' }}>
                  <div className="my-4 d-flex justify-content-center">
                      <img src={prd.img} alt='Samsung' loading="lazy" className="object-contain grow mt-5" width={"70%"} height={"150rem"} />
                  </div>
              </Link>
              <div className="ProductCard__Details p-3 bg-white">
                  <Link to={{ pathname: `/Details/${prd.prd_id}`, prdObj: prd }} style={{ textDecoration: 'none', color: 'black' }}>
                      <div>
                          <StarRating size={5} value={0} disable />
                      </div>
                      {currentLanguageCode === 'ar' ? (<p className="font-body text-sm textcarddec" >{prd.nameAR}</p>) : (<p className="font-body text-sm textcarddec" >{prd.name}</p>)}

                      {/* <p className="font-body text-sm textcarddec" >{prd.name}</p> */}

                      {prd.discount <= 0 || prd.discount == null ?
                          <div className='d-flex align-items-center'>
                              <span className="product-price">{prd.price}</span>
                          </div>
                          :
                          <div className='d-flex align-items-center'>
                              <span className="product-price">{(prd.price * (100 - prd.discount)) / 100}</span>
                              <span className='ms-3 text-decoration-line-through'>{prd.price}</span>
                          </div>

                      }

                      <div class="border border-secondary-200 w-full mt-1 mb-3"></div>
                      <p className="font-body text-sm">{t("ww.label")}</p>
                  </Link>
                
                     
                  
              </div>
          </div>
            ))}
          </div>

          <div className="endLine my-5">
            <span>Showing 20 out of 2022</span>
          </div>
        </div>
      </div>
    </>
  );
};
export default Wishlist;

