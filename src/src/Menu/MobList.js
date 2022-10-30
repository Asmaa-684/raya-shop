import React, {Component} from "react";
import {GrFormAdd } from  "react-icons/gr";
import {IoIosArrowBack} from  "react-icons/io";
import { BsFillArrowRightSquareFill } from "react-icons/bs";
const MobList = (props) => {
    const navs = props.navs;
    const title = props.title;

    return ( 
        <div className="Mob-list">
                         <div className='sidemenu'>
    <nav className='bg-primary-300 w-full h-full overflow-y-auto relative z-40'>
      <div className='mininav text-center '>
      <p className='collapstext'>The Easiest and Fastest instalment system</p></div>
      <br/>
</nav>
</div>
                <div className='row'>
                <div className='col-4 ' href="#" onClick={() => props.moveData("Secnav")}>< IoIosArrowBack size={30} />
             </div>  
               <span className='col-4 px-5 text-center fs-6 fw-bold display-1'>Mobiles & Tablets</span>
              </div>
              <br/>
              <div>
               <ul  className='typemob'>
                <li>
                 
           <p>
                <a className="box" data-bs-toggle="collapse" href="#b" role="button" aria-expanded="false" aria-controls="collapseExample">
                  <div className='d-flex justify-content-between align-items-center'>
                    <span>Mobile</span>
                  <span className='fs-1'><GrFormAdd /></span>
                  </div>
                </a>
              </p>
              <div className="collapse" id="b">
              <ul className='sub2nav ms-4'>
                <p>Shop All Mobiles</p>
           <li>Mobile Apple</li>
        <li>Mobile Samsung</li>
        <li>Mobile Xiaomi</li>
        <li>Mobile Oppo</li>
        <li>Mobile Realme</li>
        <li>Alcatel Phone</li>
          </ul>
          </div>
                </li>
                <hr/>
                <li>
                <p>
                <a className="box" data-bs-toggle="collapse" href="#c" role="button" aria-expanded="false" aria-controls="collapseExample">
                  <div className='d-flex justify-content-between align-items-center'>
                    <span>Mobile Accessories</span>
                  <span className='fs-1'><GrFormAdd /></span>
                  </div>
                </a>
              </p>
              <div className="collapse" id="c">
              <ul className='sub2nav ms-4'>
                <p>Shop All Mobile Accessories</p>
              
              <li>Power Banks</li>
              <li> Chargers & Adapters</li>
              <li>Charging Cables</li>
              <li> Headphones & Headsets</li>
              <li>Screen Protectors</li>
              <li> Speakers</li>
              <li>Smart Watches Accessories</li>
              <li> Smart Watches</li>
              <li>Memory Cards</li>
              <li> Mobile Cases & Covers</li>
             
                </ul>
                </div>
                </li>
                <hr/>
                <li>
                <p>
                <a className="box" data-bs-toggle="collapse" href="#qwe" role="button" aria-expanded="false" aria-controls="collapseExample">
                  <div className='d-flex justify-content-between align-items-center'>
                    <span>Tablet</span>
                  <span className='fs-1'><GrFormAdd /></span>
                  </div>
                </a>
              </p>
              <div className="collapse" id="qwe">
              
                <p>Shop All Tablet</p>
                
                </div>
                
                </li>
                <hr/>
                <li>
                <p>
                <a className="box" data-bs-toggle="collapse" href="#qwa" role="button" aria-expanded="false" aria-controls="collapseExample">
                  <div className='d-flex justify-content-between align-items-center'>
                    <span>Feature Phones</span>
                  <span className='fs-1'><GrFormAdd /></span>
                  </div>
                </a>
              </p>
              <div className="collapse" id="qwa">
              
                <p>Shop All Feature Phones</p>
                </div>
                
                </li>
               </ul>
              </div>
              <br/>
               <div >
          <img className='px-5 justify-content-between' src={require("../assets/oppo.webp")} /> 
          <img className='px-5 justify-content-between' src={require("../assets/apple.webp")} /> 
          <img className='px-5 justify-content-between' src={require("../assets/5.webp")} />
          <img className='px-5 justify-content-between' src={require("../assets/sam.webp")} /> 
        </div> 
        <br/>
        <div>
        <a className='text-primary-500 font-bold flex items-center mt-2 nuxt-link-exact-active nuxt-link-active text-decoration-none'>
            <span className='w-12 h-12 rounded-xl mr-5 bg-primary-500 p-4 icon sprite-icons'><BsFillArrowRightSquareFill color='blue' size={50}/></span>
         <span className='collpstext'> Shop All Mobiles & Tablets</span>
          </a>
</div>      
    
        </div>
     );
}

export default MobList;