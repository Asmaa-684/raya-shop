import React from 'react'
import Side_Account from '../Side_Account/Side_Account'

import Account_Setting from './../Account_Setting/Account_Setting';

export default function Setting_Component() {
  return (
    <>
    <div className='container'>
      <div className="row">
        <div className='col-md-2'>
            <Side_Account />
        </div>
        <div className="col-md-8">
          <Account_Setting/>        
        </div>
      </div>
    </div>
    </>
  )
}