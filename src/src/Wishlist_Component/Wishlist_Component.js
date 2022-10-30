import React from 'react'
import Side_Account from '../Side_Account/Side_Account'
import Wishlist from './../My Wishlist/Wishlist';

export default function Wishlist_Component() {
  return (
    <>
    <div className='container'>
      <div className="row">
        <div className='col-md-2'>
            <Side_Account />
        </div>
        <div className="col-md-8">
          <Wishlist/>        
        </div>
      </div>
    </div>
    </>
  )
}