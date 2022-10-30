import React from 'react'
import Account_Overview from '../Account_Overview/Account_Overview'
import Side_Account from '../Side_Account/Side_Account'
import Cart from './../Cart/Cart';

export default function Overview_Component() {
  return (
    <>
    <div className='container'>
      <div className="row">
        <div className='col-md-2'>
            <Side_Account />
        </div>
        <div className="col-md-8">
          <Cart/>        
        </div>
      </div>
    </div>
    </>
  )
}