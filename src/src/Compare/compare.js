
import{RiDeleteBinLine}from "react-icons/ri";
import {FiHeart} from "react-icons/fi";
import mob3 from "../assets/mob3.jpg";
import StarRating from "star-rating-react";
import {MdCompare}from "react-icons/md";
import {BsCart2} from "react-icons/bs";
import {IoMdAdd} from "react-icons/io";

import {GrAdd} from "react-icons/gr";
 import './compare.css'

import { useState } from 'react';
import { useEffect } from 'react';

  const Compare = () => {
return(
 
<div className='container'>
                 <div className='row'>
                 <div className="maincompare">
    
    <div >
    <h1>

<span className="font-weight-bold px-4 text-dark">COMPARE</span>
<span className='display-4 text-dark'>PRODUCTS</span>
        </h1>
        <div className='d-flex justify-content-between align-items-center'>
            <div></div>
        <p className='text-center text-secondary px-5'>Compare</p>
       
<div>
       <RiDeleteBinLine color='red' size={30}/>
      
                <a href='#' className='text-danger text-decoration-underline fs-5'>clear all</a></div>
        </div>
        <div className='container'>
            <div className='row'>
                <div className='col-sm-3'>   
        <div
          className="slick-slide ProductCard flex-grow-1 d-flex flex-column shadow bg-white mx-3 my-2 position-relative"
          style={{ width: "17rem" }}
        >

          <div className="d-flex position-absolute heart">
             <div>
             <button className='offer px-2 mx-5 py-2 my-3 f-5'>15% OFF</button>
          
                </div> 

            <FiHeart className="loveBtn grow" />  <div className='px-2 py-3 my-3 '> <RiDeleteBinLine size={30} color='red'/></div>
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
              <BsCart2 className="mx-3" size={18} />
              Add To Card
            </button>
          </div>
        </div>
         </div>
         <div className='col-md-3'>   
        <div
          className="border slick-slide ProductCard flex-grow-1 d-flex flex-column shadow  mx-3 my-3 position-relative"
          style={{ width: "17rem" }}
        >
          <div className="d-flex position-absolute heart">
  
          </div> <a className='icon'><GrAdd size={20}/>Add products</a> 
          <div className="my-4 d-flex justify-content-center">
         
             <img className="ProductCard__Thumb object-contain grow mt-5"/> 
          </div>
          <div>
            <div>
           
            </div>
<div>
            </div>
          </div>
        </div>
         </div>
</div>

<br/>
<div>
<h4 className='text-dark px-5'>Specifications</h4>

     <form>
<div class="form-group">
<label className='fw-bold' for="exampleInput">Charger Type</label><br/><br/>
<input type="email" className="form-control comparelable" id="exampleInput" aria-describedby="Help" value="Car Charger"/>
</div>
</form>
<br/> 
<form>
<div class="form-group">
<label className='fw-bold' for="exampleInput">Delivery Time Inside Cairo & Giza</label><br/><br/>
<input type="email" className="form-control comparelable"  id="exampleInput" aria-describedby="Help" value="3-5 Business Days"/>
</div>
</form>
<br/> 
<form>
<div class="form-group">
<label className='fw-bold' for="exampleInput">Compatible With</label><br/><br/>
<input type="email" className="form-control comparelable" id="exampleInput" aria-describedby="Help" value="Mobiles & Tablets"/>
</div>
</form>
<br/> 
<form>
<div class="form-group">
<label className='fw-bold' for="exampleInput">Delivery Time Outside Cairo & Giza</label><br/><br/>
<input type="email" className="form-control comparelable" id="exampleInput" aria-describedby="Help" value="3-5 Business Days"/>
</div>
</form>
<br/> 
<form>
<div class="form-group">
<label className='fw-bold' for="exampleInput">Product Color</label><br/><br/>
<input type="email" className="form-control comparelable" id="exampleInput" aria-describedby="Help" value="Black"/>
</div>
</form>
<br/> 
<form>
<div class="form-group">
<label className='fw-bold' for="exampleInput">Delivery Cost</label><br/><br/> 
<input type="email" className="form-control comparelable" id="exampleInput" aria-describedby="Help" value=" Paid"/>
</div>
</form>
<br/> 
<form>
<div class="form-group">
<label className='fw-bold' for="exampleInput">Cash On Delivery (COD)</label><br/><br/>
<input type="email" className="form-control comparelable" id="exampleInput" aria-describedby="Help" value=" yes"/>
</div>
</form>
<br/> 
<form>
<div class="form-group">
<label className='fw-bold' for="exampleInput">Return Or Refund</label><br/><br/>
<input type="email" className="form-control comparelable" id="exampleInput" aria-describedby="Help" value="14 Days"/>
</div>
</form>
<br/> 
<form>
<div class="form-group">
<label className='fw-bold' for="exampleInput">Brand</label><br/><br/> 
<input type="email" className="form-control comparelable" id="exampleInput" aria-describedby="Help" value="Generic"/>
</div>
</form>
<br/> 
<form>
<div class="form-group">
<label className='fw-bold' for="exampleInput">Deal</label><br/><br/>
<input type="email" className="form-control comparelable" id="exampleInput" aria-describedby="Help" value=" NO"/>
</div>
</form>
<br/> 
<form>
<div class="form-group">
<label className='fw-bold' for="exampleInput">Seller SKU</label><br/><br/>
<input type="email" className="form-control comparelable" id="exampleInput" aria-describedby="Help" value=" 272370004000882-Flix"/>
</div>
</form>
<br/> 
<form>
<div class="form-group">
<label className='fw-bold' for="exampleInput">Cable Type</label><br/><br/> 
<input type="email" className="form-control comparelable" id="exampleInput" aria-describedby="Help" value="Charger Cable"/>
</div>
</form>
<br/> 
<form>
<div class="form-group">
<label className='fw-bold' for="exampleInput">Compatible With</label><br/><br/>
<input type="email" className="form-control comparelable" id="exampleInput" aria-describedby="Help" value=" Mobiles & Tablets"/>
</div>
</form>
<br/> 
<form>
<div class="form-group">
<label className='fw-bold' for="exampleInput">Cables Length</label><br/><br/>
<input type="email" className="form-control comparelable" id="exampleInput" aria-describedby="Help" value="1 Meter"/>
</div>
</form>
<br/> 

      </div> 
      </div> 
       </div>
       </div>
       </div>
       </div>
   
)
 }
export default Compare;