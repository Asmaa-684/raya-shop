import React from 'react'
import Slider from "react-slick";
import { MdCompare } from "react-icons/md";
import { FiHeart } from "react-icons/fi";

import mob3 from "../assets/mob3.jpg";

import StarRating from "star-rating-react";
 import { useTranslation } from "react-i18next";


function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={`${className} SharedSliderNext`}
        style={{ ...style, display: "block", background: "gray" }}
        onClick={onClick}
      />
    );
  }
  
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={`${className} SharedSliderPrev`}
        style={{ ...style, display: "block", background: "gray" }}
        onClick={onClick}
      />
    );
  }

 

  const SliderShared= () => {

      const { t, i18n } = useTranslation();
  


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




  return (
    <>
    
     {/* slider  */}
     
     <Slider className="slick-list col-10  SharedSliderComponent" {...settings}>
            

            <div
              className="slick-slide ProductCard  flex-grow-1 d-flex flex-column shadow bg-white mx-3 my-2 position-relative"
              style={{ width: "17rem" }}
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
                  data-v-6569f61a=""
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
              style={{ width: "17rem" }}
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
                  data-v-6569f61a=""
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
              style={{ width: "17rem" }}
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
                  data-v-6569f61a=""
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
              style={{ width: "17rem" }}
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
                  data-v-6569f61a=""
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
              style={{ width: "17rem" }}
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
                  data-v-6569f61a=""
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
              style={{ width: "17rem" }}
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
                  data-v-6569f61a=""
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
              style={{ width: "17rem" }}
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
                  data-v-6569f61a=""
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
              style={{ width: "17rem" }}
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
                  data-v-6569f61a=""
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
              style={{ width: "17rem" }}
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
                  data-v-6569f61a=""
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
              style={{ width: "17rem" }}
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
                  data-v-6569f61a=""
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
        


            {/* end slider  */}

            {/* <Footer/> */}
    
    </>
  )
}
 export default  SliderShared;