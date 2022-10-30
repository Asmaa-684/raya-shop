import React from 'react'
import { useState, useEffect } from 'react'
import { db } from '../../../src/Firebase Configration/Firebase'
import { addDoc, collection, doc, getDoc, getDocs, limit, query, setDoc, where } from 'firebase/firestore';
export const getCategory = async () => {
    const data = await getDocs(collection(db, "Category"));

    return (
        (data.docs.map((doc) => ({ ...doc.data(), main_id: doc.id })
        ))
    )
};

export const getallmaincategory = async (mainCategory) => {
    const datas = await getDocs(collection(db, `Category/${mainCategory.main_id}/${mainCategory.main_category}`))
    
    return (
        (datas.docs.map((docs) => ({ ...docs.data(), sub_id: docs.id, ...mainCategory })
        ))
    )
};



export const getallsubcategory = async (subCategory) => {
    const datas = await getDocs(collection(db, `Category/${subCategory.main_id}/${subCategory.main_category}/${subCategory.sub_id}/${subCategory.sub_category}`));

    return (
        (datas.docs.map((docs) => ({ ...docs.data(), child_id: docs.id, ...subCategory })
        ))
    )
};

export const getallchildcategory = async (category_path) => {
    const datas = await getDocs(collection(db, `Category/${category_path.main_id}/${category_path.main_category}/${category_path.sub_id}/${category_path.sub_category}/${category_path.child_id}/${category_path.child_category}`));

    return (
        (datas.docs.map((docs) => ({ ...docs.data(), prd_id: docs.id, category_path })
        ))
    )
};

// ----------------------------------------------------------------

export const getchildbadge = async (subCategory) => {
    const datas = await getDocs(collection(db, `Category/${subCategory.main_id}/${subCategory.main_category}/${subCategory.sub_id}/${subCategory.sub_category}`));

    return (
        (datas.docs.map((docs) => ({ ...docs.data(), child_id: docs.id})
        ))
    )
};


// export const createUser = async () => {
//     await addDoc(collection(db, "Category/XDfIBIvIOQV1hDSDAujY/Laptops & PCs/655hnkSftuVKN4iA6LX3/Laptops/FJe1msObJu2cPH3aTs43/Asus"), x);
//   };


  

// const x = {
//     img: "https://firebasestorage.googleapis.com/v0/b/rayashop-test1-d4f6b.appspot.com/o/Asus%20Laptop%2FAsus.jpeg?alt=media&token=fccc4cf8-39c2-4a0d-8bc2-c2c8fce55d3f",
//     name: "Asus X509FA-BR951T Laptop, Intel Core i3-10110U",
//     qty: 2,
//     price: 41200,
//     discount : 42,
//     specifications: [
//         {name:"Processor Type", value:"Intel Core i7-11370H"},
//         {name:"Processor Brand", value:"Intel"},
//         {name:"Processor Family", value:"Intel Core i7"},
//         {name:"Processor Core", value:"Quad Core"},
//         {name:"Processor Speed", value:"More Than 2.5 GHz"},
//         {name:"Screen Size", value:"15 - 15.9 Inch"},
//         {name:"Graphics Card Capacity", value:"4 GB"},
//         {name:"Graphics Card Brand", value:"NVIDIA"},
//         {name:"Hard Disk Capacity", value:"1 TB"},
//         {name:"RAM Capacity", value:"16 GB"},
//         {name:"Laptop Family", value:"Laptop"},
//         {name:"Laptop Usage", value:"Gaming Laptop"},
//         {name:"HDMI Port", value:"Yes"},
//         {name:"Touch Screen", value:"No"},
//         {name:"Battery Capacity", value:"3-cell, 52.5 Wh Li-ion polymer"},
//         {name:"Operating System", value:"DOS"},
//         {name:"Product Color", value:"Pink"},
//         {name:"Model", value:"Pavillion 15-DK2019NE"},
//         {name:"SKU", value:"Pavillion-15-DK2019NE-BS"},
//     ]
    
// }

