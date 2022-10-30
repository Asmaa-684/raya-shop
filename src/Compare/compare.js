
import { RiDeleteBinLine } from "react-icons/ri";
import { FiHeart } from "react-icons/fi";
import mob3 from "../assets/mob3.jpg";
import StarRating from "star-rating-react";
import { MdCompare } from "react-icons/md";
import { BsCart2 } from "react-icons/bs";
import { IoMdAdd } from "react-icons/io";
import { GrAdd } from "react-icons/gr";
import './compare.css'
import { useDispatch, useSelector } from "react-redux";
import compareReducer from './../store/reducers/compareReducer';
import Product_Card from "../Shared/Product_Card/Product_Card";
import { Link } from "react-router-dom";
import { t } from "i18next";
import CompareCase from './../store/actions/comparecase';
import {FaTrash} from "react-icons/fa";

const Compare = () => {

  const comparePrd = useSelector((state) => state.compareReducer.compare)

  const dispatch = useDispatch()

  function deleteAllCompare(){

    dispatch(CompareCase([]))

  }

  function deleteSomeCompare(prd){

    let index = comparePrd.findIndex(function(o){
      return o.prd_id === prd.prd_id
    })

    comparePrd.splice(index, 1)

    dispatch(CompareCase(comparePrd))

  }

  return (

    <div className='container'>
      <div className='row'>
        <div className="maincompare">

          <div >
            <h1 className="d-flex justify-content-center align-items-center">

              <span className="font-weight-bold px-4 text-dark">COMPARE</span>
              <span className='display-4 text-dark'>PRODUCTS</span>
            </h1>
            <div className='d-flex justify-content-between align-items-center'>
              <div></div>
              <p className='text-center text-secondary px-5'>Compare</p>

              <div>
                <RiDeleteBinLine color='red' size={30} />

                <a href='#' className='text-danger text-decoration-underline fs-5' onClick={() => deleteAllCompare()}>clear all</a>
                </div>
            </div>
            <div className='container'>
              <div className='row'>
                <div className='d-flex justify-content-evenly'>
                  {comparePrd.map(prd => {
                    return (
                      <div key={prd.prd_id} className="ProductCard ms-3 d-flex flex-column shadow bg-white mx-1 my-2" style={{ width: "16.8rem" }}>
                        {prd.discount > 0 ? <div className='badge badgeDiscount ms-3 position-absolute d-flex justify-content-center align-items-center mt-4 '>{prd.discount}% OFF</div>
                          : <div></div>
                        }
                        <div className="d-flex heart justify-content-end pe-4 pt-3 grow" onClick={() => deleteSomeCompare(prd)}>
                            <FaTrash size={30} color={"#d30000"} />
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
                            <p className="font-body text-sm textcarddec" >{prd.name}</p>

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
                    )
                  })}
                  {comparePrd.length < 4 ?
                    <div className='ProductCard ms-3 d-flex flex-column mx-1 my-2'>
                      <div
                        className="border slick-slide ProductCard flex-grow-1 d-flex flex-column shadow  mx-3 my-3 position-relative"
                        style={{ width: "17rem" }}
                      >
                        <div className="d-flex position-absolute heart">

                        </div> <a className='icon'><GrAdd size={20} />Add products</a>
                        <div className="my-4 d-flex justify-content-center">

                          <img className="ProductCard__Thumb object-contain grow mt-5" />
                        </div>
                        <div>
                          <div>

                          </div>
                          <div>
                          </div>
                        </div>
                      </div>
                    </div>
                    :
                    <div></div>
                  }
                </div>

              </div>

              <br />
              <div>
                <h4 className='text-dark px-5'>Specifications</h4>


                <br />
                
                {comparePrd.map((ele, i) => {
                  return (
                  <div key={i}>
                    {ele.specifications.map((sp,i) =>{
                    
                          return (
                            <div key={i} className="my-3">
                              <span className="mx-2">{sp.name}</span>
                              <div className='p-3 Product_Specifications_txt d-flex rounded-4 Product_Specifications'>
                              <div className="d-flex justify-content-evenly align-items-lg-center">
                                <div>{sp.value}</div>
                                </div>
                            </div>
                            </div>
                          )
                        
                    })}
                  </div>
                  )
                })}
                <br />

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}
export default Compare;

// if (i % 2 == 0) {
//   return (
    
//     <div className='p-3 Product_Specifications_txt rounded-4 Product_Specifications'>
//      <div>{ele.name}</div>
//     </div>
//   )
// } else {
//   return (
//     <div className='p-3 Product_Specifications_txt rounded-4'>
//       <div>{ele.name}</div>
//     </div>
//   )
// }

