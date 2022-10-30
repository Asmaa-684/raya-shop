import React, { useEffect, useState } from 'react'
import SideFilter from '../SideFilter/SideFilter';
import Product_Component from '../Shared/Product_Component/Product_Component';
import Component_Header from '../Shared/Component_Header/Component_Header';
import { useSelector } from 'react-redux';
import { MdCompare } from 'react-icons/md';
import { t } from 'i18next';
import { useDispatch } from 'react-redux';
import CompareCase from './../store/actions/comparecase';
import { RiDeleteBinLine } from 'react-icons/ri';
import { Link } from 'react-router-dom';



export default function Layout() {



    const state = useSelector((state) => state)
    const compArray = useSelector((state) => state.compareReducer.compare)

    let childCatObj = state.productComReducer.childCatObj
    let headerBadges = state.productComReducer.headerBadge
    let headerName = state.productComReducer.header
    let product = state.productComReducer.product

    const dispatch = useDispatch()

    function deleteAllCompare() {

        dispatch(CompareCase([]))

    }

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
                            <div className='col-10 position-relative '>

                                <Product_Component prd={product} />
                            </div>
                        </div>
                        <div>
                        </div>

                    </div>
                </div>
                {compArray.length > 0 ?
                <div className='d-flex justify-content-center'>
                    <div className='col-12 mb-3 comp shadow-lg d-flex align-items-center justify-content-between'>
                        <div className='d-flex align-items-center ms-5'>
                            <h5 className='me-3'>Compare Products</h5>
                            <span>{compArray.length} Products of 4</span>
                        </div>
                        <div className='d-flex align-items-center me-5'>
                            <div className='d-flex'>
                                <RiDeleteBinLine color='red' size={30} />
                                <a href='#' className='text-danger text-decoration-underline fs-5' onClick={() => deleteAllCompare()}>clear all</a>
                            </div>
                            <Link to='./Compare' style={{ textDecoration: 'none'}}>
                            <button type="button" class="compareButtonAdded d-flex justify-content-center align-items-center px-4 ms-3 text-sm">
                                <h5 className='px-5 mx-3'>Compare Products</h5>
                            </button>
                            </Link>
                        </div>
                    </div>
                </div>
                
                :
                
                <></>
}
            </div>



        </>
    )
}
