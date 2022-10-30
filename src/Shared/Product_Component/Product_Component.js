import React, { useEffect, useState } from "react";
import { MdCompare } from "react-icons/md";
import { FiHeart } from "react-icons/fi";
import StarRating from 'star-rating-react';
import { FaSortAmountDown } from "react-icons/fa";
import Product_Card from "../Product_Card/Product_Card";
import { useSelector } from "react-redux";




const Product_Component = (props) => {

    const [sort, setSort] = useState("")
    const [prd, setPrd] = useState([])

    const state = useSelector((state) => state.productComReducer.product)



    useEffect(() => {



        const items = JSON.parse(localStorage.getItem('data'));

        setPrd(items)

    }, [state]);

    return (<>

        <div className="mx-2">
            <div className="container-fluid px-0 mx-3">

                <div className="row d-flex flex-column flex-grow-1">

                    <div className="col-12 px-0 mx-0">

                        <div className="col-12 py-5">
                            <div className="d-flex mx-3 col-12 justify-content-between flex-wrap">
                                {state.length <= 0 ?
                                    <span className="col-md-6 col-12">{prd.length} Product</span>
                                    :
                                    <span className="col-md-6 col-12">{prd.length} Product</span>
                                }
                                <div className="d-flex">
                                    <FaSortAmountDown />
                                    <select className="d-flex px-5 border-bottom dropDown active" value="" onChange={e => setSort(e.target.value)}>
                                        <option className="dropdown-item" value="" selected disabled>Position</option>
                                        <option className="dropdown-item" value="A-Z">A-Z</option>
                                        <option className="dropdown-item" value="asc">Price (Low to High)</option>
                                        <option className="dropdown-item" value="des">Price (High to Low)</option>
                                    </select>
                                </div>
                            </div>
                        </div>


                        <div className="d-flex flex-wrap">
                            {state.length <= 0 ?
                                <Product_Card prd={prd} sort={sort} />
                                :
                                <Product_Card prd={state} sort={sort} />
                            }
                        </div>



                        <div className="endLine mt-5"><span>Showing 20 out of 2022</span></div>

                        <div className="d-flex align-items-center justify-content-center my-5">
                            <div className="mx-3">
                                <i class="bi bi-arrow-down loadMore btn text-light"></i>
                            </div>
                            <p className="mt-3">Load More</p>
                        </div>
                    </div>


                </div>
            </div>

        </div>


    </>);
}

export default Product_Component;