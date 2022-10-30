import React, { useContext, useEffect, useState } from 'react'
import { MdCompare } from "react-icons/md";
import { FiHeart } from "react-icons/fi";
import StarRating from 'star-rating-react';
import { FaSortAmountDown } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { search } from '../Contexts/SearchProvider';
import Product_Details from './../../Product_Details/Product_Details';
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from 'react-redux';
import Compare from '../../store/actions/compare';
import { Check } from 'react-bootstrap-icons';
import CompareCase from '../../store/actions/comparecase';
import { db } from '../../Firebase Configration/Firebase'
import { updateDoc, doc, arrayUnion } from 'firebase/firestore';
import cookies from "js-cookie";
import {auth} from  '../../Firebase Configration/Firebase'
import { onAuthStateChanged } from 'firebase/auth';


const Product_Card = (props) => {

    const { t, i18n } = useTranslation();
    const currentLanguageCode = cookies.get("i18next");

    const products = props.prd

    const sort = props.sort

    const [iscomplete, setIscomplete] = useState(false)

    const { searchQuery, setSearchQuery } = useContext(search)
    const dispatch = useDispatch()
    const [email, setEmail] = useState('')
    const compArray = useSelector((state) => state.compareReducer.compare)

    function sorts(a, b) {
        if (sort === "asc") {
            if (a.price > b.price) return 1;
            if (a.price < b.price) return -1;
        } else if (sort === "des") {
            if (a.price > b.price) return -1;
            if (a.price < b.price) return 1;
        } else if (sort === "A-Z") {
            if (a.name < b.name) { return -1; }
            if (a.name > b.name) { return 1; }
            return 0;
        } else {
            return
        }

    }

    function addToCompare(prd) {
        if (compArray.length < 4) {
            if (compArray.length == 0 || compArray[0].category_path.sub_category == prd.category_path.sub_category) {


                dispatch(Compare(prd))

            } else {
                return
            }

        } else {
            return
        }


    }

    function delToCompare(prd) {
        const isFound = compArray.some(element => {
            if (element.prd_id === prd.prd_id) {
                return true;
            }

            return false;
        });

        if (isFound) {
            console.log(isFound)
            let index = compArray.findIndex(function (o) {
                return o.prd_id === prd.prd_id
            })

            compArray.splice(index, 1)

            dispatch(CompareCase(compArray))

        } else {
            return
        }

    }

    const addToWishlist = (prd) => { 
        
        const cartDocRef = doc(db, `users/${email}`);
        updateDoc(cartDocRef, {
          wishlist: arrayUnion({...prd, "Quantity":1, }),
        });
        };
      

    useEffect(() => {

        onAuthStateChanged(auth, (user) => {

            if (user)
  
  {
  
      setEmail(user.email)
      console.log(user)
  
  }
  
  });

    }, [sort]);




    return (
        products.sort(sorts).filter(prds => prds.name.toLowerCase().includes(searchQuery)).map(function (prd) {

            return (
                <div key={prd.prd_id} className="ProductCard ms-3 d-flex flex-column flex-grow-1 shadow bg-white mx-1 my-2 position-relative" style={{ width: "14.8rem" }}>
                    {prd.discount > 0 ? <div className='badge badgeDiscount ms-3 position-absolute d-flex justify-content-center align-items-center mt-4 '>{prd.discount}% OFF</div>
                        : <div></div>
                    }
                    
                        <div className="d-flex position-absolute heart">
                            <FiHeart className="loveBtn grow" onClick={() => addToWishlist(prd)}/>
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
                        {compArray.find(ele => {
                            if (ele.prd_id === prd.prd_id) {
                                return (
                                    <button type="button" class="compareButtonAdded p-3 btn-warning text-sm mb-2" >
                                        Added
                                    </button>)
                            }
                        })
                            ?
                            <button type="button" class="compareButtonAdded p-3 btn-warning text-sm mb-2" onClick={() => delToCompare(prd)}>
                                Added
                            </button>
                            :
                            <button type="button" class="compareButton p-3 text-sm mb-2" onClick={() => addToCompare(prd)}>
                                <MdCompare className="mx-1" size={18} />
                                {t("367.label")}
                            </button>
                        }
                    </div>
                </div>

            )
        })
    )
}




export default Product_Card;


