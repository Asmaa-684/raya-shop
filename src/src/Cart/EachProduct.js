import React,{useState,useEffect} from 'react'
import './cart.css'
import { AiOutlineHeart } from 'react-icons/ai';
import { BsTrash } from 'react-icons/bs';
import { useTranslation } from "react-i18next";
import { GoPlus } from "react-icons/go"
import { FaMinus } from "react-icons/fa"
import {db} from './../Firebase Configration/Firebase'
import { doc, getDoc,updateDoc, arrayRemove} from "firebase/firestore";
  const EachProduct= () => {
    
    
      const { t, i18n } = useTranslation();
      const[Orders,setOrders]=useState([])
      const [count, setCount] = useState(0);
      const inc = () => {
          setCount(count + 1);
      }
      const dec = () => {
          if (count > 0)
              setCount(count - 1);
      }
      const cartDocRef = doc(db, "users", "zAOBJskdgnppP4cwjfFt");
      useEffect(() => {
        const getproduct =async ()=>{
          await getDoc(doc(db, "users", "zAOBJskdgnppP4cwjfFt")).then((res)=>{
            setOrders(res.data().order)
            })
      }
    // console.log(Orders)
      getproduct();
        
    },)
    function onRemove(cart){
        updateDoc(cartDocRef, {
          order: arrayRemove(cart)
        },[]);
          }
          function onAdd(cart){

            const exist = Orders.find((x) => x.name === cart.name);
                setOrders(
                  Orders.map((x) =>
                    x.name === cart.name ? { ...exist, Quantity: exist.Quantity=exist.Quantity+1 } : x
                  )
                );
          
          // console.log(Orders)
            updateDoc(cartDocRef,
              { order: Orders },
              { merge: true }
              )
              }
          
          function onMinis(cart){
          
            const exist = Orders.find((x) => x.name === cart.name);
            setOrders(
              Orders.map((x) =>
                x.name === cart.name ? { ...exist, Quantity: exist.Quantity=exist.Quantity-1 } : x
              )
            );
          
          
            if( exist.Quantity===0)
            {
          
          const x = Orders.indexOf(cart);
          Orders.splice(x,1)
          
            }
          
          
          // console.log(Orders)
          updateDoc(cartDocRef,
          { order: Orders },
          { merge: true }
          )
            
          }
    
  return (<>
  {Orders.map((order,i) => (
    
 <div className='eachProduct d-flex px-3 py-3 bs-4 shadow mx-5'key={i}>
 <img src={order.img}/>
 <div className='d-flex flex-column '>
     <a href='#'></a>
     <div>
         <h6>Select Qty</h6>
         <div className='col-md-6 col-12 justify-content-between align-items-center mt-4 d-flex'>
                             <span className='Product_Description_txt'>{t("j.label")} </span>
                             <div>
                                 <button className='btn mx-3' onClick={()=>onMinis(order)}><FaMinus /></button>
                                 {order.Quantity}
                                 <button className='btn mx-3' onClick={()=>onAdd(order)}><GoPlus /></button>
                             </div>
                         </div>
     </div>
     
 </div>
 <div className='d-flex flex-column justify-content-between'>
     <div className='d-flex justify-content-between'>
         <button className='btn AiOutlineHeart '><AiOutlineHeart/></button>
         <button className='btn BsTrash'onClick={()=>onRemove(order)}><BsTrash/></button>
     </div>
     
     <div className='pb-4'><span>{order.price}<span> EGP</span></span></div>
 </div>
</div>


  ))}
   <div className='installment-plans-section'>
 <div className='row'>
     <div className='col col-lg-8'>
         {/* <p>{t("364.label")}{`${parseInt(itemData.cost/6)}`}{t("366.label")} </p> */}
     </div>
     <div className='col col-lg-4'>
         <a href='#'>{t("365.label")}</a>
     </div>
 </div>
</div>
</>
  )
}
export default EachProduct;