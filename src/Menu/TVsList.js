import {GrFormAdd } from  "react-icons/gr";
import {IoIosArrowBack} from  "react-icons/io";
import { BsFillArrowRightSquareFill } from "react-icons/bs";
const TVsList  = (props) => {
    const navs = props.navs;
    const title = props.title;
    return ( 
        <div className="TVs-list">
<div className='sidemenu'>
    <nav className='bg-primary-300 w-full h-full overflow-y-auto relative z-40'>
      <div className='mininav text-center '>
      <p className='collapstext'>The Easiest and Fastest instalment system</p></div>
      <br/>
    <div className='row'>
          <div className='col-4 ' href="#" onClick={() => props.moveData("Secnav")}>< IoIosArrowBack size={30}/>
       </div>  
         <span className='col-4 px-5 text-center fs-6 fw-bold display-1'>Televisions</span>
        </div>
        <br/>
        <div>
         <ul  className='typemob'>
         
          <li>
            <p>
          <a className="box" data-bs-toggle="collapse" href="#ccc" role="button" aria-expanded="false" aria-controls="collapseExample">
            <div className='d-flex justify-content-between align-items-center'>
              <span>TVs</span>
            <span className='fs-1'><GrFormAdd /></span>
            </div>
          </a>
        </p>
        <div className="collapse" id="ccc">
        <ul className='sub2nav ms-4'>
          <p>Shop All TVs</p>
          <li>Samsung TV</li>
  <li>LG</li>
  <li>Toshiba TV</li>
  <li>Sony TV</li>
  <li>SARY TV</li>
  </ul>
  </div>
  <hr/>
  <li>
        <p>
  <a className="box" data-bs-toggle="collapse" href="#ccf" role="button" aria-expanded="false" aria-controls="collapseExample">
            <div className='d-flex justify-content-between align-items-center'>
              <span>TV Accessories</span>
            <span className='fs-1'><GrFormAdd /></span>
            </div>
          </a>
        </p>
        <div className="collapse" id="ccf">
          <p>Shop All TV Accessories</p>
            </div>
     </li>
          </li>
          <hr/>
          <li>
          <p>
  <a className="box" data-bs-toggle="collapse" href="#cck" role="button" aria-expanded="false" aria-controls="collapseExample">
            <div className='d-flex justify-content-between align-items-center'>
              <span>Receivers</span>
            <span className='fs-1'><GrFormAdd /></span>
            </div>
          </a>
        </p>
        <div className="collapse" id="cck">
          <p>Shop All Receivers</p>
            </div>
     </li>
         
          <hr/>
           <li>
           <p>
  <a className="box" data-bs-toggle="collapse" href="#ccs" role="button" aria-expanded="false" aria-controls="collapseExample">
            <div className='d-flex justify-content-between align-items-center'>
              <span>Home Theaters</span>
            <span className='fs-1'><GrFormAdd /></span>
            </div>
          </a>
        </p>
        <div className="collapse" id="ccs">
          <p>Shop All Home Theaters</p>
            </div>
          </li>
          <hr/>
         </ul>
        </div>
        <br/>
         <div >
        
    
    <img  className='px-5 justify-content-between' src={require("../assets/lg.webp")} /> 
    <img  className='px-5 justify-content-between' src={require("../assets/tor.webp")} />
    <img   className='px-5 justify-content-between' src={require("../assets/toa.webp")} /> 
    <img  className='px-5 justify-content-between' src={require("../assets/sam.webp")} /> 
    

  </div> 
  <br/>
  <div>
    <a className='text-primary-500 font-bold flex items-center mt-2 nuxt-link-exact-active nuxt-link-active text-decoration-none'>
      <span className='w-12 h-12 rounded-xl mr-5 bg-primary-500 p-4 icon sprite-icons'><BsFillArrowRightSquareFill color='blue' size={50}/></span>
   <span className='collpstext'> Shop All Televisions</span>
    </a>
  </div>  
  </nav>
  </div>





        </div>
         );
        }
         
        export default TVsList ;