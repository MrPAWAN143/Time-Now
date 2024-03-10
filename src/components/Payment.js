import React from 'react'
import '../App.css'
import CartFooter from './CartFooter'
import Watchstor_1 from './assest/images/Watchstore_1.webp'
import Watchstor_2 from './assest/images/Watchstore_2.webp'

export default function Payment() {
  return (
    <>
      <div className="container shoppingmenu d-flex gap-3 mt-1">
        <div className="w-75  ps-5 pe-5">
          <h3 className='text-white display-7 p-2 cartShoping'>Payment Method</h3>


          <div className='justborder p-4'>
            <div className='creditcard'>
              <div className=' d-flex '>

                <input type='radio' className='freeshop me-3' name='dileverydate' id='credtcard' />
                <label for="credtcard">
                  <span className='fs-5'>
                    Credit card
                  </span>
                  <br />
                  <span className='carddis'>
                    but also the leap into electronic typesetting, remaining
                  </span>
                </label>

              </div>

              <div className='d-flex align-items-center mt-4 justify-content-between'>
                <input type='tel' className='form w-50 enterCard' maxLength={16} minLength={16}  placeholder='0000   0000   0000   0000'/>
                <input type='tel' className='form expry enterCard' placeholder='MM/YY'/>
                <input type='tel' className='form expry enterCard' placeholder='Cvv'/>
                
              </div>
              <div className='address mt-4'>
                <input type='text' className='address1 form' placeholder='Holder Name' />

              </div>

            </div>


            <div className='creditcard paypal'>
              <div className=' d-flex '>

                <input type='radio' className='freeshop me-3' name='dileverydate' id='paypal' />
                <label for="paypal">
                  <span className='fs-5'>
                    PayPal
                  </span>
                  <br />
                  <span className='carddis'>
                    but also the leap into electronic typesetting, remaining
                    but also the leap into electronic typesetting, remaining
                    but also the leap into electronic typesetting, remaining
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
