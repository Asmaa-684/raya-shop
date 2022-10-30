import React from 'react'
import Side_Account from '../Side_Account/Side_Account'
import Address_Book from './../address book/Address_Book';


export default function Address_Component() {
  return (
    <>
    <div className='container'>
      <div className="row">
        <div className='col-md-2'>
            <Side_Account />
        </div>
        <div className="col-md-8">
          <Address_Book/>        
        </div>
      </div>
    </div>
    </>
  )
}