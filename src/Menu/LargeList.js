import {GrFormAdd } from  "react-icons/gr";
import {IoIosArrowBack} from  "react-icons/io";
import { BsFillArrowRightSquareFill } from "react-icons/bs";
const LargeList  = (props) => {
    const navs = props.navs;
    const title = props.title;
    return ( 
        <div className="Large-list">
<div className='sidemenu'>
    <nav className='bg-primary-300 w-full h-full overflow-y-auto relative z-40'>
      <div className='mininav text-center '>
      <p className='collapstext'>The Easiest and Fastest instalment system</p></div>
      <br/>
    <div className='row'>
          <div className='col-4 ' onClick={() => props.moveData("Secnav")}>< IoIosArrowBack size={30}/>
       </div>  
         <span className='col-4 px-5 text-center fs-6 fw-bold display-1'>Large Appliances</span>
        </div>
        <br/>
         <div>
         <ul  className='typemob'>
          <li>
            <p>
          <a className="box" data-bs-toggle="collapse" href="#ckj" role="button" aria-expanded="false" aria-controls="collapseExample">
            <div className='d-flex justify-content-between align-items-center'>
              <span>Air Conditioners</span>
            <span className='fs-1'><GrFormAdd /></span>
            </div>
          </a>
        </p>
        <div className="collapse" id="ckj">
        <ul className='sub2nav ms-4'>
          <p>Shop All Air Conditioners</p>
          <li>Unionaire Air Conditioner</li>
  <li>Carrier Air Conditioner</li>
  <li> LG Air Conditioner</li>
  <li> Midea Air Conditioner</li>
  </ul>
  </div>
  </li>
  <hr/>
  <li>
        <p>
  <a className="box" data-bs-toggle="collapse" href="#cpo" role="button" aria-expanded="false" aria-controls="collapseExample">
            <div className='d-flex justify-content-between align-items-center'>
              <span>Cookers</span>
            <span className='fs-1'><GrFormAdd /></span>
            </div>
          </a>
        </p>
        <div className="collapse" id="cpo">
        <ul className='sub2nav ms-4'>
          <p>Shop All TV Accessories</p>
          <li> Fresh Cookers</li>
  <li> La Germania Cookers</li>
  <li> UnionAire Cookers</li>
  <li>Zanussi Cookers</li>
</ul>
</div>
</li>
<hr/>
<li>
        <p>
  <a className="box" data-bs-toggle="collapse" href="#cpr" role="button" aria-expanded="false" aria-controls="collapseExample">
            <div className='d-flex justify-content-between align-items-center'>
              <span>Freezers</span>
            <span className='fs-1'><GrFormAdd /></span>
            </div>
          </a>
        </p>
        <div className="collapse" id="cpr">
        <ul className='sub2nav ms-4'>
          <p>Shop All Freezers</p>
          <li>Beko Freezers</li>
  <li>W.Alaska Freezers</li>
  <li> Fresh Freezers</li>
  <li>Toshiba Freezers</li>
</ul>
</div>
</li>
<hr/>
<li>
        <p>
  <a className="box" data-bs-toggle="collapse" href="#cpe" role="button" aria-expanded="false" aria-controls="collapseExample">
            <div className='d-flex justify-content-between align-items-center'>
              <span>Washing Machines</span>
            <span className='fs-1'><GrFormAdd /></span>
            </div>
          </a>
        </p>
        <div className="collapse" id="cpe">
        <ul className='sub2nav ms-4'>
          <p>Shop All Washing Machines</p>
          <li>Zanussi washing Machines</li>
        <li> Fresh washing Machines</li>
        <li> Toshiba washing Machines</li>
        <li>LG washing Machines</li>
</ul>
</div>
</li>
</ul>  
        <br/>
        <div >
    <a className='text-primary-500 font-bold flex items-center mt-2 nuxt-link-exact-active nuxt-link-active text-decoration-none'>
      <span className='w-12 h-12 rounded-xl mr-5 bg-primary-500 p-4 icon sprite-icons'><BsFillArrowRightSquareFill color='blue' size={50}/></span>
   <span className='collpstext'> Shop All Large Appliances</span>
    </a>
  </div>   </div>
        </nav>
        </div>

        </div>

);
}
 
export default LargeList ;