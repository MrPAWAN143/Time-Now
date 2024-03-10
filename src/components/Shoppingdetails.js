import React from 'react'
import { Link } from 'react-router-dom'
import CartFooter from './CartFooter'
import Watchstor_1 from './assest/images/Watchstore_1.webp'
import Watchstor_2 from './assest/images/Watchstore_2.webp'

export default function Shoppingdetails() {
  return (
    <>
      <div className="container shoppingmenu d-flex gap-3 mt-1">
        <div className="w-75  ps-5 pe-5 ">
          <h3 className='text-white display-7 p-2 cartShoping'>Shopping Details</h3>


          <div className='justborder p-4'>
            <form action='' method='' className='mainform'>


              <div className='FullName d-flex align-items-center justify-content-between'>

                <input type='text' className='name form' placeholder='First Name' />
                <input type='text' className='name form' placeholder='Last Name' />

              </div>

              <div className='address mt-4'>
                <input type='text' className='address1 form' placeholder='Address' />

              </div>

              <div className='address mt-4'>
                <input type='text' className='address1 form' placeholder='Address 2' />

              </div>

              <div className='FullName d-flex align-items-center justify-content-between mt-4'>

                <select className='form name country'>
                  <option className='form' value="">Country</option>
                  <option value="India">India</option>
                  <option value="Australia">Australia</option>
                  <option value="US">US</option>
                  <option value="Canada">Canada</option>
                  <option value="Dubai">Dubai</option>
                  <option value="New Zealand">New Zealand</option>
                  <option value="Russia">Russia</option>
                  <option value="Mexico">Mexico</option>
                  <option value="Saudi">Saudi Arab</option>
                  <option value="China">China</option>
                  <option value="Taiwan">Taiwan</option>
                  <option value="Japan">Japan</option>
                  <option value="South Korea">South Korea</option>
                  <option value="United kingdom">United kingdom</option>
                  <option value="Sri Lanka">Sri Lanka</option>
                  <option value="Nepal">Nepal</option>


                </select>

                <input type='text' className='name form' placeholder='City' />

              </div>

              <div className='FullName d-flex align-items-center justify-content-between mt-4'>

                <input type='tel' className='name form' placeholder='Zip/Postal Code' />
                <input type='tel' className='name form' placeholder='Phone Number' />

              </div>

            </form>

            <div className='FullName d-flex align-items-center justify-content-between mt-4'>
              <div className='freeshipping d-flex '>

                <input type='radio' className='freeshop me-3' name='dileverydate' id='freeshipping'/>
                <label for="freeshipping">
                  <span className='fs-6'>
                    Free Shipping
                  </span>
                  <br/>
                  <span className='fs-7'>
                    Between 2-5 working days
                  </span>
                </label>

              </div>


              <div className='freeshipping d-flex '>

                <input type='radio' className='freeshop me-3' name='dileverydate' id='freeshipping1'/>
                <label for="freeshipping1">
                  <span className='fs-6'>
                    Next Day delivery -$20
                  </span>
                  <br/>
                  <span className='fs-7'>
                   24h From checkout
                  </span>
                </label>

              </div>
            </div>


          </div>



          <div className='cartButton mt-5 ms-4 mb-5'>
            <button className='next'>Next</button>
            <button className='cancel'>Cancel</button>

          </div>


        </div>

        <div className="w-25 ">
          <h3 className='text-white display-7 p-2 cartShoping'>Summary</h3>

          <div className='justborder'>
            <div className='addProducts d-flex align-items-center justify-space-evenely  p-2'>

              <div className='CDImg'>
                <img src={Watchstor_1} className='w-100 h-100 obeject-fit-cover' />
              </div>
              <div className='CDcartProductname d-flex '>

                <span className='CDproductNamex fs-5 '>
                  Product Name

                </span>

                <span className='productName fs-7 text-warning d-block mt-2'>
                  $2999

                </span>
              </div>


            </div>

            <div className=' d-flex align-items-center justify-space-evenely p-2'>

              <div className='CDImg'>
                <img src={Watchstor_2} className='w-100 h-100 obeject-fit-cover' />
              </div>
              <div className='CDcartProductname d-flex '>

                <span className='CDproductNamex fs-5 '>
                  Product Name

                </span>

                <span className='productName fs-7 text-warning d-block mt-2'>
                  $2999

                </span>
              </div>


            </div>

          </div>

          <strong className='text-white coupon p-2 pt-3 pb-3'>Enter Coupon Code</strong>


          <div className='bill '>
            <div className='subtotal d-flex justify-content-between'>
              <span>Subtotal</span>
              <span>$5890</span>
            </div>
            <div className='shoppingx d-flex justify-content-between'>
              <span>Shopping</span>
              <span>Free</span>
            </div>
            <div className='Tex d-flex justify-content-between'>
              <span>Texes</span>
              <span>$199</span>
            </div>


          </div>

          <div className='total d-flex justify-content-between ps-3 pe-3 pt-2 pb-2 '>
            <span className=''>TOTAL</span>
            <span className=''>$5999</span>

          </div>



        </div>




      </div>
       <CartFooter/>
    </>
  )
}
