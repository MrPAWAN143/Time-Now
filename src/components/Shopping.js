import React from 'react'
import CartFooter from './CartFooter'

export default function Shopping() {
    return (
        <>
            <div className="container shoppingmenu d-flex gap-3 mt-1">
                <div className="w-75  ps-5 pe-5 ">
                    <h3 className='text-white display-7 p-2 cartShoping'>Shopping Cart</h3>

                    <div className='justborder'>



                        <div className='addProducts d-flex align-items-center justify-space-evenely mb-3 p-2'>

                            <div className='cartImg '>
                                <img src={''} className='w-100 h-100 obeject-fit-cover' />
                            </div>
                            <div className='cartProductname d-flex'>

                                <span className='productNamex fs-5 '>
                                    Product Name

                                </span>
                                <span className='discripation text-white  ps-3  d-block'>
                                    Hellow the product is added your cart
                                </span>
                                <span className='productName fs-7 text-warning ps-3 d-block'>
                                    $2999

                                </span>
                            </div>
                            <div className='quantity'>
                                <input type='number' className='cartQuantity text-center' min="1" maxLength="2" placeholder='0' />
                            </div>

                        </div>

                        <div className='addProducts d-flex align-items-center justify-space-evenely p-2 '>

                            <div className='border border-1 cartImg '>
                                <img src={''} className='w-100 h-100 obeject-fit-cover' />
                            </div>
                            <div className='cartProductname d-flex'>

                                <span className='productNamex fs-5 '>
                                    Product Name

                                </span>
                                <span className='discripation text-white  ps-3  d-block'>
                                    Hellow the product is added your cart
                                </span>
                                <span className='productName fs-7 text-warning ps-3 d-block'>
                                    $2999

                                </span>
                            </div>
                            <div className='quantity'>
                                <input type='number' className='cartQuantity text-center' min="1" maxLength="2" placeholder='0' />
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

                    <strong className='text-white coupon'>Enter Coupon Code</strong>

                    <div className='bill '>
                        <div className='subtotal d-flex justify-content-between'>
                            <span>Subtotal</span>
                            <span>$500</span>
                        </div>
                        <div className='shoppingx d-flex justify-content-between'>
                            <span>Shopping</span>
                            <span>Free</span>
                        </div>
                        <div className='Tex d-flex justify-content-between'>
                            <span>Texes</span>
                            <span>$4</span>
                        </div>


                    </div>

                    <div className='total d-flex justify-content-between ps-3 pe-3 pt-2 pb-2 '>
                        <span className=''>TOTAL</span>
                        <span className=''>$887</span>

                    </div>



                </div>

            </div>

            <CartFooter/>

        </>


    )
}
