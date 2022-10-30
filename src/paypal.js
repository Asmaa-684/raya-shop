import React, { useRef, useEffect } from "react";


const Paypal = () => {
    
    const paypal = useRef();


useEffect(() => {
    window.paypal
      .Buttons({
        createOrder: (data, actions, err) => {
          return actions.order.create({
            intent: "CAPTURE",
            purchase_units: [
              {
                description: "Cool table",
                amount: {
                  currency_code: "USD",
                  value: 50.0,
                },},], });
        },
        onApprove: async (data, actions) => { // when approve 
          const order = await actions.order.capture();
          console.log("order success");
          console.log(order);
        },
        onError: (err) => {
          console.log(err);
        },
      })
      .render(paypal.current);
  }, []);

  return (
<div>
<div ref={paypal}></div>
</div>
  );
}


export default Paypal;


// ////////////////////////////////

// import React, { useRef, useEffect } from "react";

// export default function Paypal() {
//   const paypal = useRef();

//   useEffect(() => {
//     window.paypal
//       .Buttons({
//         createOrder: (data, actions, err) => {
//           return actions.order.create({
//             intent: "CAPTURE",
//             purchase_units: [
//               {
//                 description: "Cool looking table",
//                 amount: {
//                   currency_code: "USD",
//                   value: 650.0,
//                 },
//               },
//             ],
//           });
//         },
//         onApprove: async (data, actions) => {
//           const order = await actions.order.capture();
//           console.log(order);
//         },
//         onError: (err) => {
//           console.log(err);
//         },
//       })
//       .render(paypal.current);
//   }, []);

//   return (
// <div>
// <div ref={paypal}></div>
// </div>
//   );
// }

////////////////////////////////////



// import React from "react";
// import ReactDOM from "react-dom"


// const PayPalButton = paypal.Buttons.driver("react", { React, ReactDOM });

// const Paypal = () => {
//   const createOrder = (data, actions) => {
//     return actions.order.create({
//       purchase_units: [
//         {
//           amount: {
//             value: "0.01",
//           },
//         },
//       ],
//     });
//   };
//   const onApprove = (data, actions) => {
//     return actions.order.capture();
//   };
//   return (
// <PayPalButton
//       createOrder={(data, actions) => createOrder(data, actions)}
//       onApprove={(data, actions) => onApprove(data, actions)}
//     />
//   );
// }

// export default Paypal;

