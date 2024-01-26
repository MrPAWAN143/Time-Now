import React from 'react'
import { Link } from 'react-router-dom'

export default function CartFooter() {
  return (
   <>
    <div className='cartfooter m-auto mb-0'>
            <ul className='footerNav d-flex '>
              <li className='flink'><Link to={'home'} className=''>Home</Link></li>
              <li className='flink'><Link to={'about'} className=''>About</Link></li>
              <li className='flink'><Link to={'shop'} className=''>Shop</Link></li>
              <li className='flink'><Link to={'help'} className=''>Help</Link></li>

            </ul>

          </div>
   </>
  )
}
