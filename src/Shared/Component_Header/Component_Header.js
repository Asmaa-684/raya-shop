import React, { useEffect, useState } from 'react'
import Slider from "react-slick";


export default function Component_Header(props) {

    const subCategory = props.subCategory

    const header = props.header

 

    var settings = {
        className: "slider variable-width",
        dots: false,
        infinite: false,
        centerMode: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        variableWidth: true
    };

    // console.log(props.subCategory)

    return (
        <>
            <div className='container-fluid mt-4'>
                <div className="row col-12">
                    <div className="d-flex justify-content-center">
                        <h1 className="pageHeader">{header}</h1>
                    </div>
                    <div className="mb-5">
                        <div className="container">
                            <Slider {...settings}>

                                {subCategory.map(ele => {

                                    if(ele.child_category == null | undefined){
                                        return (
                                            <div class="compareButton p-3 m-2 d-flex justify-content-center">{ele.sub_category}</div>
                                        )
                                    }else{
                                        return (
                                            <div class="compareButton p-3 m-2 d-flex justify-content-center">{ele.child_category}</div>
                                        )
                                    }
                                })}

                            </Slider>
                        </div>
                    </div>
                </div>


            </div>

        </>
    )
}
