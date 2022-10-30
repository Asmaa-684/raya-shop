import React, { useState, useEffect } from 'react'
import { GrFormAdd } from "react-icons/gr";
import Slider from "react-slick";
import ProgressBar from 'react-bootstrap/ProgressBar';
import StarRating from "star-rating-react";
import mob3 from "../assets/mob3.jpg";
import { MdCompare, MdOutlineBook } from "react-icons/md";
import { FiHeart } from "react-icons/fi";
import { AiOutlineHeart } from "react-icons/ai"
import { FaRegShareSquare } from "react-icons/fa"
import { AiOutlineRight } from "react-icons/ai"
import { GoPlus } from "react-icons/go"
import { FaMinus } from "react-icons/fa"
import { BsCart2, BsShieldCheck } from "react-icons/bs"
import { BsJournalBookmark } from "react-icons/bs"
import { GrSecure } from "react-icons/gr"
import { BiStoreAlt } from "react-icons/bi"
import { db, auth } from "../Firebase Configration/Firebase";
import { updateDoc, doc, arrayUnion } from "firebase/firestore";
import { useDispatch } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { useTranslation } from "react-i18next";

export default function Product_Details(props) {
    const { t, i18n } = useTranslation();

    const [prd, setPrd] = useState({})
    const [email, setEmail] = useState("");

    const [spacification, setSpacification] = useState([])

    const addToCart = () => {
        const cartDocRef = doc(db, "users", email);
        updateDoc(cartDocRef, {
            order: arrayUnion({ ...prd, Quantity: 1 }),
        });
    };

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setEmail(user.email);
                console.log(user);
            }
        }, [email]);
        setPrd(props.location.prdObj);

        setSpacification(props.location.prdObj.specifications);
    }, [prd]);

    const [count, setCount] = useState(0);
    const inc = () => {
        setCount(count + 1);
    };
    const dec = () => {
        if (count > 0) setCount(count - 1);
    };


    const settings = {
        className: "slider variable-width",
        // dots: true,

        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
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


    const setting = {

        dots: false,
        dotsClass: "slick-thumb",
        infinite: true,
        speed: 200,
        slidesToShow: 1,
        slidesToScroll: 1,
        variableWidth: true,
        adaptiveHeight: true,
    };



    return (
        <>

            <div className='container'>
                <div className='row'>
                    <div className='col-12 flex-wrap d-flex p-2 m-2'>
                        <div className='m-3'>

                            <div className='Card_Details rounded-5 p-5 shadow-sm'>


                                <Slider className='d-flex justify-content-center align-items-center m-auto' {...setting}>
                                    <div className='Image_Card_Details d-flex justify-content-center align-items-center'>
                                        <img src={prd.img} width={"330rem"}  />
                                    </div>
                                    <div className='Image_Card_Details d-flex justify-content-center align-items-center'>
                                        <img src={prd.img} width={"330rem"}  />
                                    </div>
                                    <div className='Image_Card_Details d-flex justify-content-center align-items-center'>
                                        <img src={prd.img} width={"330rem"}  />
                                    </div>
                                    <div className='Image_Card_Details d-flex justify-content-center align-items-center'>
                                        <img src={prd.img} width={"330rem"}  />
                                    </div>
                                </Slider>

                            </div>


                        </div>
                        <div className='col-lg-6 col-12 m-3'>
                            <div className='col-12 d-flex'>
                                <div className='col-12 d-flex justify-content-between align-items-center'>
                                    <div className='d-flex'>
                                        <p className='details_title'>{prd.name}</p>
                                    </div>

                                    <div className='d-flex'>
                                        <span className='btn btn-details-style shadow-sm mx-1'><i class="bi bi-reply fs-5"></i></span>
                                        <span className='btn btn-details-style shadow-sm mx-1 grow'><AiOutlineHeart size={20} /></span>
                                    </div>
                                </div>
                                <div>
                                </div>
                            </div>
                            <div className='col-12 mt-4'>
                                <div className='d-flex justify-content-between'>
                                    <span className='product-price'>{prd.price}</span>
                                    <span className='badge badge_prop d-flex align-items-center px-3'>{prd.discount}% OFF</span>
                                </div>
                            </div>
                            <div className='col-12 d-flex align-items-center mt-4 Product_Specifications p-3'>
                                <div className='col-8'>
                                    {t("a.label")}
                                </div>
                                <div className='col-4'>
                                    <a href='#'>{t("b.label")} <AiOutlineRight /></a>
                                </div>
                            </div>
                            <div className='col-md-6 col-12 justify-content-between align-items-center mt-4 d-flex'>
                                <span className='Product_Description_txt'>{t("j.label")} </span>
                                <div>
                                    <button className='btn mx-3' onClick={dec}><FaMinus /></button>
                                    {count}
                                    <button className='btn mx-3' onClick={inc}><GoPlus /></button>
                                </div>
                            </div>
                            <div class="line col-md-6 col-12 mt-2"></div>

                            <div className='col-12 mt-4 d-flex'>
                                <button className='btn col-5 d-flex flex-grow-1 justify-content-center align-items-center me-2 Add_To_Cart px-5 py-3' onClick={() => addToCart()}><BsCart2 className='mx-2' size={25} />{t("c.label")} </button>
                                <button className='btn col-5 d-flex flex-grow-1 justify-content-center align-items-center ms-2 Add_To_Compare px-5 py-3'>{t("d.label")} </button>
                            </div>
                            <div className='col-12 mt-4 d-flex'>
                                <div className='d-flex justify-content-center align-items-center'>
                                    <div><BsJournalBookmark size={23} /></div>
                                    <div className='d-flex flex-column mx-3'>
                                        <span className='w-75'>{t("e.label")} </span>
                                        <span className='Product_Specifications_txt'>{t("f.label")} </span>
                                    </div>
                                </div>
                                <div className='d-flex justify-content-center align-items-center'>
                                    <div><BsJournalBookmark size={23} /></div>
                                    <div className='d-flex flex-column mx-3'>
                                        <span className='w-75'>{t("g.label")} </span>
                                        <span className='Product_Specifications_txt'>{t("h.label")} </span>
                                    </div>
                                </div>
                            </div>
                            <div class="line col-12 mt-2"></div>
                            <div className='col-12 mt-4 d-flex flex-wrap justify-content-evenly'>
                                <div className='d-flex justify-content-center align-items-center'>
                                    <div><BsShieldCheck size={30} /></div>
                                    <div className='d-flex flex-column mx-3'>
                                        <span>{t("i.label")} </span>
                                        <span className='Product_Specifications_txt'>{t("k.label")} </span>
                                    </div>
                                </div>
                                <div className='d-flex justify-content-center align-items-center'>
                                    <div><GrSecure size={30} /></div>
                                    <div className='d-flex flex-column mx-2'>
                                        <span>{t("l.label")} </span>
                                        <span className='Product_Specifications_txt'>{t("m.label")} </span>
                                    </div>
                                </div>
                                <div className='d-flex justify-content-center align-items-center'>
                                    <div><MdOutlineBook size={30} /></div>
                                    <div className='d-flex flex-column mx-2'>
                                        <span>{t("n.label")} </span>
                                        <span className='Product_Specifications_txt'>{t("o.label")} </span>
                                    </div>
                                </div>
                                <div className='d-flex justify-content-center align-items-center'>
                                    <div><BiStoreAlt size={30} /></div>
                                    <div className='d-flex flex-column mx-2'>
                                        <span>{t("p.label")} </span>
                                        <span className='Product_Specifications_txt'><a href='#'>{t("q.label")} </a></span>
                                    </div>
                                </div>
                            </div>
                            <div>
                            </div>
                        </div>
                    </div>
                    <div className='col-12 flex-column d-flex align-items-center justify-content-center'>


                        <div className='col-7'>
                            <div className='d-flex justify-content-center mt-5 mb-2'><h3 className='Details_Headers'>{t("r.label")} </h3></div>
                            {/* -------------------------------------------------------------------------------------------------------------------------------------------- */}
                            <a className="box p-0 m-0" data-bs-toggle="collapse" href="#Description" role="button" aria-expanded="false" aria-controls="collapseExample">
                                <div className='d-flex align-items-center justify-content-between'>
                                    <div>
                                        <span>{t("s.label")} </span>
                                    </div>
                                    <div>
                                        <span className='fs-1'><GrFormAdd /></span>
                                    </div>
                                </div>
                            </a>
                            <div className="collapse" id="Description">
                                <div className='d-flex flex-column '>
                                    <p className='Product_Description_txt'>Brand: Xiaomi</p>
                                    <p className='Product_Description_txt'>Memory Capacity: 128GB</p>
                                    <p className='Product_Description_txt'>Ram: 8GB</p>
                                    <p className='Product_Description_txt'>Color: Grey</p>
                                </div>
                            </div>
                            <div className="Description_Line"></div>
                            {/* -------------------------------------------------------------------------------------------------------------------------------------------- */}
                            <a className="box p-0 m-0" data-bs-toggle="collapse" href="#Specifications" role="button" aria-expanded="false" aria-controls="collapseExample">
                                <div className='d-flex align-items-center justify-content-between'>
                                    <div>
                                        <span>{t("x.label")} </span>
                                    </div>
                                    <div>
                                        <span className='fs-1'><GrFormAdd /></span>
                                    </div>
                                </div>
                            </a>
                            <div className="collapse" id="Specifications">

                                {spacification.map((ele, i) => {

                                    if (i % 2 == 0) {
                                        return (
                                            <div className='p-3 Product_Specifications_txt rounded-4 Product_Specifications'>
                                                <div className='d-flex justify-content-between'>
                                                    <span>{ele.name}</span><span>{ele.value}</span>
                                                </div>
                                            </div>
                                        )
                                    } else {
                                        return (
                                            <div className='p-3 Product_Specifications_txt rounded-4'>
                                                <div className='d-flex justify-content-between'>
                                                    <span>{ele.name}</span><span>{ele.value}</span>
                                                </div>
                                            </div>
                                        )
                                    }


                                })}



                            </div>
                            <div className="Description_Line my-2"></div>
                            {/* -------------------------------------------------------------------------------------------------------------------------------------------- */}
                            <a className="box p-0 m-0" data-bs-toggle="collapse" href="#Refund" role="button" aria-expanded="false" aria-controls="collapseExample">
                                <div className='d-flex align-items-center justify-content-between'>
                                    <div>
                                        <span>{t("y.label")} </span>
                                    </div>
                                    <div>
                                        <span className='fs-1'><GrFormAdd /></span>
                                    </div>
                                </div>
                            </a>
                            <div className="collapse" id="Refund">
                                <div className='Product_Description_txt'>
                                    <p className='Product_Specifications_txt'>   {t("z.label")} <a href='#'>{t("aw.label")}  </a></p>
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className='col-12 flex-column d-flex align-items-center justify-content-center'>
                        <div className='col-5 mt-5'>
                            <div className='d-flex justify-content-center my-5 '><h3 className='Details_Headers'>   {t("as.label")}</h3></div>
                            <div className='progress_Rating_bg'>
                                <div className='d-flex justify-content-evenly align-items-center'>
                                    <span>0</span><ProgressBar className='progress_Rating' now={0} /><span>5/5</span>
                                </div>
                                <div className='d-flex justify-content-evenly align-items-center'>
                                    <span>0</span><ProgressBar className='progress_Rating' now={0} /><span>5/5</span>
                                </div>
                                <div className='d-flex justify-content-evenly align-items-center'>
                                    <span>0</span><ProgressBar className='progress_Rating' now={0} /><span>5/5</span>
                                </div>
                                <div className='d-flex justify-content-evenly align-items-center'>
                                    <span>0</span><ProgressBar className='progress_Rating' now={0} /><span>5/5</span>
                                </div>
                                <div className='d-flex justify-content-evenly align-items-center'>
                                    <span>0</span><ProgressBar className='progress_Rating' now={0} /><span>5/5</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='col-12 mt-5'>
                        <div className='d-flex justify-content-center mt-5 mb-2'><h3 className='Details_Headers'>   {t("aq.label")}</h3></div>
                        <Slider className="slick-list col-10" {...settings}>

                            <div
                                className="slick-slide ProductCard flex-grow-1 d-flex flex-column shadow bg-white mx-3 my-2 position-relative"
                                style={{ width: "14.9rem" }}
                            >
                                <div className="d-flex position-absolute heart">
                                    <FiHeart className="loveBtn grow" />
                                </div>
                                <div className="my-4 d-flex justify-content-center">
                                    <img
                                        src={mob3}
                                        alt="Samsung"
                                        loading="lazy"
                                        className="ProductCard__Thumb object-contain grow mt-5"
                                    />
                                </div>
                                <div className="ProductCard__Details p-3 bg-white">
                                    <div>
                                        <StarRating size={5} value={0} disable />
                                    </div>
                                    <p className="font-body text-sm">
                                        Xiaomi Redmi Note 11S Dual SIM, 128GB, 6GB RAM, 4G LTE, Blue
                                    </p>
                                    <span className="product-price">7,200 EGP</span>
                                    <div

                                        class="border border-secondary-200 w-full mt-1 mb-3"
                                    ></div>
                                    <p className="font-body text-sm">
                                        From 480 EGP / 24 Months with Raya Installments
                                    </p>
                                    <button type="button" class="compareButton p-3 text-sm mb-2">
                                        <MdCompare className="mx-3" size={18} />
                                        {t("367.label")}
                                    </button>
                                </div>
                            </div>

                            <div
                                className="slick-slide ProductCard flex-grow-1 d-flex flex-column shadow bg-white mx-3 my-2 position-relative"
                                style={{ width: "14.9rem" }}
                            >
                                <div className="d-flex position-absolute heart">
                                    <FiHeart className="loveBtn grow" />
                                </div>
                                <div className="my-4 d-flex justify-content-center">
                                    <img
                                        src={mob3}
                                        alt="Samsung"
                                        loading="lazy"
                                        className="ProductCard__Thumb object-contain grow mt-5"
                                    />
                                </div>
                                <div className="ProductCard__Details p-3 bg-white">
                                    <div>
                                        <StarRating size={5} value={0} disable />
                                    </div>
                                    <p className="font-body text-sm">
                                        Xiaomi Redmi Note 11S Dual SIM, 128GB, 6GB RAM, 4G LTE, Blue
                                    </p>
                                    <span className="product-price">7,200 EGP</span>
                                    <div

                                        class="border border-secondary-200 w-full mt-1 mb-3"
                                    ></div>
                                    <p className="font-body text-sm">
                                        From 480 EGP / 24 Months with Raya Installments
                                    </p>
                                    <button type="button" class="compareButton p-3 text-sm mb-2">
                                        <MdCompare className="mx-3" size={18} />
                                        {t("367.label")}
                                    </button>
                                </div>
                            </div>
                            <div
                                className="slick-slide ProductCard flex-grow-1 d-flex flex-column shadow bg-white mx-3 my-2 position-relative"
                                style={{ width: "14.9rem" }}
                            >
                                <div className="d-flex position-absolute heart">
                                    <FiHeart className="loveBtn grow" />
                                </div>
                                <div className="my-4 d-flex justify-content-center">
                                    <img
                                        src={mob3}
                                        alt="Samsung"
                                        loading="lazy"
                                        className="ProductCard__Thumb object-contain grow mt-5"
                                    />
                                </div>
                                <div className="ProductCard__Details p-3 bg-white">
                                    <div>
                                        <StarRating size={5} value={0} disable />
                                    </div>
                                    <p className="font-body text-sm">
                                        Xiaomi Redmi Note 11S Dual SIM, 128GB, 6GB RAM, 4G LTE, Blue
                                    </p>
                                    <span className="product-price">7,200 EGP</span>
                                    <div

                                        class="border border-secondary-200 w-full mt-1 mb-3"
                                    ></div>
                                    <p className="font-body text-sm">
                                        From 480 EGP / 24 Months with Raya Installments
                                    </p>
                                    <button type="button" class="compareButton p-3 text-sm mb-2">
                                        <MdCompare className="mx-3" size={18} />
                                        {t("367.label")}
                                    </button>
                                </div>
                            </div>
                            <div
                                className="slick-slide ProductCard flex-grow-1 d-flex flex-column shadow bg-white mx-3 my-2 position-relative"
                                style={{ width: "14.9rem" }}
                            >
                                <div className="d-flex position-absolute heart">
                                    <FiHeart className="loveBtn grow" />
                                </div>
                                <div className="my-4 d-flex justify-content-center">
                                    <img
                                        src={mob3}
                                        alt="Samsung"
                                        loading="lazy"
                                        className="ProductCard__Thumb object-contain grow mt-5"
                                    />
                                </div>
                                <div className="ProductCard__Details p-3 bg-white">
                                    <div>
                                        <StarRating size={5} value={0} disable />
                                    </div>
                                    <p className="font-body text-sm">
                                        Xiaomi Redmi Note 11S Dual SIM, 128GB, 6GB RAM, 4G LTE, Blue
                                    </p>
                                    <span className="product-price">7,200 EGP</span>
                                    <div

                                        class="border border-secondary-200 w-full mt-1 mb-3"
                                    ></div>
                                    <p className="font-body text-sm">
                                        From 480 EGP / 24 Months with Raya Installments
                                    </p>
                                    <button type="button" class="compareButton p-3 text-sm mb-2">
                                        <MdCompare className="mx-3" size={18} />
                                        {t("367.label")}
                                    </button>
                                </div>
                            </div>
                            <div
                                className="slick-slide ProductCard flex-grow-1 d-flex flex-column shadow bg-white mx-3 my-2 position-relative"
                                style={{ width: "14.9rem" }}
                            >
                                <div className="d-flex position-absolute heart">
                                    <FiHeart className="loveBtn grow" />
                                </div>
                                <div className="my-4 d-flex justify-content-center">
                                    <img
                                        src={mob3}
                                        alt="Samsung"
                                        loading="lazy"
                                        className="ProductCard__Thumb object-contain grow mt-5"
                                    />
                                </div>
                                <div className="ProductCard__Details p-3 bg-white">
                                    <div>
                                        <StarRating size={5} value={0} disable />
                                    </div>
                                    <p className="font-body text-sm">
                                        Xiaomi Redmi Note 11S Dual SIM, 128GB, 6GB RAM, 4G LTE, Blue
                                    </p>
                                    <span className="product-price">7,200 EGP</span>
                                    <div

                                        class="border border-secondary-200 w-full mt-1 mb-3"
                                    ></div>
                                    <p className="font-body text-sm">
                                        From 480 EGP / 24 Months with Raya Installments
                                    </p>
                                    <button type="button" class="compareButton p-3 text-sm mb-2">
                                        <MdCompare className="mx-3" size={18} />
                                        {t("367.label")}
                                    </button>
                                </div>
                            </div>
                            <div
                                className="slick-slide ProductCard flex-grow-1 d-flex flex-column shadow bg-white mx-3 my-2 position-relative"
                                style={{ width: "14.9rem" }}
                            >
                                <div className="d-flex position-absolute heart">
                                    <FiHeart className="loveBtn grow" />
                                </div>
                                <div className="my-4 d-flex justify-content-center">
                                    <img
                                        src={mob3}
                                        alt="Samsung"
                                        loading="lazy"
                                        className="ProductCard__Thumb object-contain grow mt-5"
                                    />
                                </div>
                                <div className="ProductCard__Details p-3 bg-white">
                                    <div>
                                        <StarRating size={5} value={0} disable />
                                    </div>
                                    <p className="font-body text-sm">
                                        Xiaomi Redmi Note 11S Dual SIM, 128GB, 6GB RAM, 4G LTE, Blue
                                    </p>
                                    <span className="product-price">7,200 EGP</span>
                                    <div

                                        class="border border-secondary-200 w-full mt-1 mb-3"
                                    ></div>
                                    <p className="font-body text-sm">
                                        From 480 EGP / 24 Months with Raya Installments
                                    </p>
                                    <button type="button" class="compareButton p-3 text-sm mb-2">
                                        <MdCompare className="mx-3" size={18} />
                                        {t("367.label")}
                                    </button>
                                </div>
                            </div>
                            <div
                                className="slick-slide ProductCard flex-grow-1 d-flex flex-column shadow bg-white mx-3 my-2 position-relative"
                                style={{ width: "14.9rem" }}
                            >
                                <div className="d-flex position-absolute heart">
                                    <FiHeart className="loveBtn grow" />
                                </div>
                                <div className="my-4 d-flex justify-content-center">
                                    <img
                                        src={mob3}
                                        alt="Samsung"
                                        loading="lazy"
                                        className="ProductCard__Thumb object-contain grow mt-5"
                                    />
                                </div>
                                <div className="ProductCard__Details p-3 bg-white">
                                    <div>
                                        <StarRating size={5} value={0} disable />
                                    </div>
                                    <p className="font-body text-sm">
                                        Xiaomi Redmi Note 11S Dual SIM, 128GB, 6GB RAM, 4G LTE, Blue
                                    </p>
                                    <span className="product-price">7,200 EGP</span>
                                    <div

                                        class="border border-secondary-200 w-full mt-1 mb-3"
                                    ></div>
                                    <p className="font-body text-sm">
                                        From 480 EGP / 24 Months with Raya Installments
                                    </p>
                                    <button type="button" class="compareButton p-3 text-sm mb-2">
                                        <MdCompare className="mx-3" size={18} />
                                        {t("367.label")}
                                    </button>
                                </div>
                            </div>
                            <div
                                className="slick-slide ProductCard flex-grow-1 d-flex flex-column shadow bg-white mx-3 my-2 position-relative"
                                style={{ width: "14.9rem" }}
                            >
                                <div className="d-flex position-absolute heart">
                                    <FiHeart className="loveBtn grow" />
                                </div>
                                <div className="my-4 d-flex justify-content-center">
                                    <img
                                        src={mob3}
                                        alt="Samsung"
                                        loading="lazy"
                                        className="ProductCard__Thumb object-contain grow mt-5"
                                    />
                                </div>
                                <div className="ProductCard__Details p-3 bg-white">
                                    <div>
                                        <StarRating size={5} value={0} disable />
                                    </div>
                                    <p className="font-body text-sm">
                                        Xiaomi Redmi Note 11S Dual SIM, 128GB, 6GB RAM, 4G LTE, Blue
                                    </p>
                                    <span className="product-price">7,200 EGP</span>
                                    <div

                                        class="border border-secondary-200 w-full mt-1 mb-3"
                                    ></div>
                                    <p className="font-body text-sm">
                                        From 480 EGP / 24 Months with Raya Installments
                                    </p>
                                    <button type="button" class="compareButton p-3 text-sm mb-2">
                                        <MdCompare className="mx-3" size={18} />
                                        {t("367.label")}
                                    </button>
                                </div>
                            </div>
                            <div
                                className="slick-slide ProductCard flex-grow-1 d-flex flex-column shadow bg-white mx-3 my-2 position-relative"
                                style={{ width: "14.9rem" }}
                            >
                                <div className="d-flex position-absolute heart">
                                    <FiHeart className="loveBtn grow" />
                                </div>
                                <div className="my-4 d-flex justify-content-center">
                                    <img
                                        src={mob3}
                                        alt="Samsung"
                                        loading="lazy"
                                        className="ProductCard__Thumb object-contain grow mt-5"
                                    />
                                </div>
                                <div className="ProductCard__Details p-3 bg-white">
                                    <div>
                                        <StarRating size={5} value={0} disable />
                                    </div>
                                    <p className="font-body text-sm">
                                        Xiaomi Redmi Note 11S Dual SIM, 128GB, 6GB RAM, 4G LTE, Blue
                                    </p>
                                    <span className="product-price">7,200 EGP</span>
                                    <div

                                        class="border border-secondary-200 w-full mt-1 mb-3"
                                    ></div>
                                    <p className="font-body text-sm">
                                        From 480 EGP / 24 Months with Raya Installments
                                    </p>
                                    <button type="button" class="compareButton p-3 text-sm mb-2">
                                        <MdCompare className="mx-3" size={18} />
                                        {t("367.label")}
                                    </button>
                                </div>
                            </div>
                            <div
                                className="slick-slide ProductCard flex-grow-1 d-flex flex-column shadow bg-white mx-3 my-2 position-relative"
                                style={{ width: "14.9rem" }}
                            >
                                <div className="d-flex position-absolute heart">
                                    <FiHeart className="loveBtn grow" />
                                </div>
                                <div className="my-4 d-flex justify-content-center">
                                    <img
                                        src={mob3}
                                        alt="Samsung"
                                        loading="lazy"
                                        className="ProductCard__Thumb object-contain grow mt-5"
                                    />
                                </div>
                                <div className="ProductCard__Details p-3 bg-white">
                                    <div>
                                        <StarRating size={5} value={0} disable />
                                    </div>
                                    <p className="font-body text-sm">
                                        Xiaomi Redmi Note 11S Dual SIM, 128GB, 6GB RAM, 4G LTE, Blue
                                    </p>
                                    <span className="product-price">7,200 EGP</span>
                                    <div

                                        class="border border-secondary-200 w-full mt-1 mb-3"
                                    ></div>
                                    <p className="font-body text-sm">
                                        From 480 EGP / 24 Months with Raya Installments
                                    </p>
                                    <button type="button" class="compareButton p-3 text-sm mb-2">
                                        <MdCompare className="mx-3" size={18} />
                                        {t("367.label")}
                                    </button>
                                </div>
                            </div>
                        </Slider>
                    </div>
                </div>
            </div>


            <div className='container-fluid Viewed_Product'>

                <div className='container mt-5 py-5'>
                    <div className='d-flex justify-content-center mb-3 mb-2'><h3 className='Details_Headers'>  {t("r.label")} </h3></div>
                    <Slider className="slick-list" {...settings}>

                        <div
                            className="slick-slide ProductCard flex-grow-1 d-flex flex-column shadow bg-white mx-3 my-2 position-relative"
                            style={{ width: "14.9rem" }}
                        >
                            <div className="d-flex position-absolute heart">
                                <FiHeart className="loveBtn grow" />
                            </div>
                            <div className="my-4 d-flex justify-content-center">
                                <img
                                    src={mob3}
                                    alt="Samsung"
                                    loading="lazy"
                                    className="ProductCard__Thumb object-contain grow mt-5"
                                />
                            </div>
                            <div className="ProductCard__Details p-3 bg-white">
                                <div>
                                    <StarRating size={5} value={0} disable />
                                </div>
                                <p className="font-body text-sm">
                                    Xiaomi Redmi Note 11S Dual SIM, 128GB, 6GB RAM, 4G LTE, Blue
                                </p>
                                <span className="product-price">7,200 EGP</span>
                                <div

                                    class="border border-secondary-200 w-full mt-1 mb-3"
                                ></div>
                                <p className="font-body text-sm">
                                    From 480 EGP / 24 Months with Raya Installments
                                </p>
                                <button type="button" class="compareButton p-3 text-sm mb-2">
                                    <MdCompare className="mx-3" size={18} />
                                    {t("367.label")}
                                </button>
                            </div>
                        </div>
                        <div
                            className="slick-slide ProductCard flex-grow-1 d-flex flex-column shadow bg-white mx-3 my-2 position-relative"
                            style={{ width: "14.9rem" }}
                        >
                            <div className="d-flex position-absolute heart">
                                <FiHeart className="loveBtn grow" />
                            </div>
                            <div className="my-4 d-flex justify-content-center">
                                <img
                                    src={mob3}
                                    alt="Samsung"
                                    loading="lazy"
                                    className="ProductCard__Thumb object-contain grow mt-5"
                                />
                            </div>
                            <div className="ProductCard__Details p-3 bg-white">
                                <div>
                                    <StarRating size={5} value={0} disable />
                                </div>
                                <p className="font-body text-sm">
                                    Xiaomi Redmi Note 11S Dual SIM, 128GB, 6GB RAM, 4G LTE, Blue
                                </p>
                                <span className="product-price">7,200 EGP</span>
                                <div

                                    class="border border-secondary-200 w-full mt-1 mb-3"
                                ></div>
                                <p className="font-body text-sm">
                                    From 480 EGP / 24 Months with Raya Installments
                                </p>
                                <button type="button" class="compareButton p-3 text-sm mb-2">
                                    <MdCompare className="mx-3" size={18} />
                                    {t("367.label")}
                                </button>
                            </div>
                        </div>
                        <div
                            className="slick-slide ProductCard flex-grow-1 d-flex flex-column shadow bg-white mx-3 my-2 position-relative"
                            style={{ width: "14.9rem" }}
                        >
                            <div className="d-flex position-absolute heart">
                                <FiHeart className="loveBtn grow" />
                            </div>
                            <div className="my-4 d-flex justify-content-center">
                                <img
                                    src={mob3}
                                    alt="Samsung"
                                    loading="lazy"
                                    className="ProductCard__Thumb object-contain grow mt-5"
                                />
                            </div>
                            <div className="ProductCard__Details p-3 bg-white">
                                <div>
                                    <StarRating size={5} value={0} disable />
                                </div>
                                <p className="font-body text-sm">
                                    Xiaomi Redmi Note 11S Dual SIM, 128GB, 6GB RAM, 4G LTE, Blue
                                </p>
                                <span className="product-price">7,200 EGP</span>
                                <div

                                    class="border border-secondary-200 w-full mt-1 mb-3"
                                ></div>
                                <p className="font-body text-sm">
                                    From 480 EGP / 24 Months with Raya Installments
                                </p>
                                <button type="button" class="compareButton p-3 text-sm mb-2">
                                    <MdCompare className="mx-3" size={18} />
                                    {t("367.label")}
                                </button>
                            </div>
                        </div>

                    </Slider>
                </div>

            </div>

        </>
    )
}
