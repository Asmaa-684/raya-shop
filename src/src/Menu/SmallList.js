import {GrFormAdd } from  "react-icons/gr";
import {IoIosArrowBack} from  "react-icons/io";
import { BsFillArrowRightSquareFill } from "react-icons/bs";
const SmallList  = (props) => {
    const navs = props.navs;
    const title = props.title;
    return ( 
        <div className="Small-list">

<div className='sidemenu'>
    <nav className='bg-primary-300 w-full h-full overflow-y-auto relative z-40'>
      <div className='mininav text-center '>
      <p className='collapstext'>The Easiest and Fastest instalment system</p></div>
      <br/>
    <div className='row'>
          <div className='col-4 ' href="#" onClick={() => props.moveData("Secnav")}>< IoIosArrowBack size={30}/>
       </div>  
         <span className='col-4 px-5 text-center fs-6 fw-bold display-1'>Small Appliances</span>
        </div>
        <br/>
         <div>
         <ul  className='typemob'>
          <li>
            <p>
          <a className="box" data-bs-toggle="collapse" href="#csw" role="button" aria-expanded="false" aria-controls="collapseExample">
            <div className='d-flex justify-content-between align-items-center'>
              <span>Vacuum Cleaners</span>
            <span className='fs-1'><GrFormAdd /></span>
            </div>
          </a>
        </p>
        <div className="collapse" id="csw">
        <ul className='sub2nav ms-4'>
          <p>Shop All Vacuum Cleaners</p>
          <li> Carpet Vacuum Cleaners</li>
  <li>Drum Vacuum Cleaners</li>
   <li>Handheld Vacuum Cleaners</li>
   <li>Steam Vacuum Cleaners</li> 
   <li> Stick Vacuum Cleaners</li>
  </ul>
  </div>
  </li>
  <hr/>
  <li>
        <p>
  <a className="box" data-bs-toggle="collapse" href="#cdd" role="button" aria-expanded="false" aria-controls="collapseExample">
            <div className='d-flex justify-content-between align-items-center'>
              <span>Irons</span>
            <span className='fs-1'><GrFormAdd /></span>
            </div>
          </a>
        </p>
        <div className="collapse" id="cdd">
        <ul className='sub2nav ms-4'>
          <p>Shop All Irons</p>
          <li> Garment Steamers</li>
  <li> Steam Generator</li>
  <li>Dry Irons</li>
</ul>
</div>
</li>
<hr/>
<li>
        <p>
  <a className="box" data-bs-toggle="collapse" href="#cde" role="button" aria-expanded="false" aria-controls="collapseExample">
            <div className='d-flex justify-content-between align-items-center'>
              <span>Scales</span>
            <span className='fs-1'><GrFormAdd /></span>
            </div>
          </a>
        </p>
        <div className="collapse" id="cde">
        <ul className='sub2nav ms-4'>
          <p>Shop All Scales </p>
          <li> Mechanical Kitchen Scale</li>
        <li>Body Scale </li> 
</ul>
</div>
</li>
<hr/>
<li>
        <p>
  <a className="box" data-bs-toggle="collapse" href="#cpb" role="button" aria-expanded="false" aria-controls="collapseExample">
            <div className='d-flex justify-content-between align-items-center'>
              <span>Heaters</span>
            <span className='fs-1'><GrFormAdd /></span>
            </div>
          </a>
        </p>
        <div className="collapse" id="cpb">
        <ul className='sub2nav ms-4'>
          <p>Shop All Heaters</p>
          <li> Radiant Heaters</li>
      <li> Ceramic Heaters</li>
      <li>Quartz Heaters</li>
</ul>
</div>
</li>
</ul>  
        <br/>
        <div >
    <a className='text-primary-500 font-bold flex items-center mt-2 nuxt-link-exact-active nuxt-link-active text-decoration-none'>
      <span className='w-12 h-12 rounded-xl mr-5 bg-primary-500 p-4 icon sprite-icons'><BsFillArrowRightSquareFill color='blue' size={50}/></span>
   <span className='collpstext'> Shop All Small Appliances</span>
    </a>
  </div>   </div>
        </nav>
        </div>

        </div>
        );
    }
     
    export default SmallList ;