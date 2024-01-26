import React from 'react'
import { Link } from 'react-router-dom'
import ShoppingMenu from './Shopping'
import Shoppingdetails from './Shoppingdetails'
import Payment from './Payment'

export default function YourCart() {
  return (
    <>

      <div className='container-fluit text-white cart_manu'>
        <div className=''>


          <div className='container d-flex align-items-center justify-content-between shopping mt-5 mb-5'>

            <div className='cart_item position-relative'>
              <div className='yourcart h-100 d-flex align-items-center justify-content-center'>
                <Link to={'/home'} className='nav-link p-2'> <span className=''>
                 1. Shopping Cart
                </span>
                </Link>

              </div>
             

            </div>
           

            <div className='cart_item position-relative'>
              <div className='yourcart h-100 d-flex align-items-center justify-content-center'>
                <Link to={''} className='nav-link p-2'> <span className=''>
                 2. Shopping Details
                </span>
                </Link>
              </div>

            </div>

            <div className='cart_item position-relative'>
              <div className='yourcart h-100 d-flex align-items-center justify-content-center'>
                <Link to={'/home'} className='nav-link p-2'> <span className=''>
                3. Payment Options
                </span>
                </Link>
              </div>

            </div>

          </div>

          <ShoppingMenu/>
          <Shoppingdetails/>
          <Payment/>
        </div>

      </div>

    </>
  )
}
