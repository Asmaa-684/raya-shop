import React, { useEffect, useState } from 'react'
import SideFilter from '../SideFilter/SideFilter';
import Product_Component from '../Shared/Product_Component/Product_Component';
import Component_Header from '../Shared/Component_Header/Component_Header';
import { useSelector } from 'react-redux';



export default function Layout() {



    const state = useSelector((state) => state)
   

    let childCatObj = state.childCatObj
    let headerBadges = state.headerBadge
    let headerName = state.header
    let product = state.product

  

    useEffect(() => {

        

    }, []);


    

    return (
        <>

            <div className='container-fulid'>
                <div className='row p-0 m-0'>
                    <div className='d-flex flex-column'>
                        <div>
                            <Component_Header subCategory={headerBadges} header={headerName} />
                        </div>

                        <div className='container col-12 d-flex'>
                            <div className='col-md-2 d-md-block d-none'>
                                <SideFilter />
                            </div>
                            <div className='col-10'>
                                <Product_Component prd={product}/>
                            </div>
                        </div>
                        <div>
                        </div>

                    </div>
                </div>
            </div>



        </>
    )
}
