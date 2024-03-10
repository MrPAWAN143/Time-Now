import React from 'react'
import { Link } from 'react-router-dom'
import logox from './assest/images/logo.jpg'
import searchicon from './assest/icons/search.svg'

export default function Header() {
  return (
   <>
    <header className='d-flex align-items-center'>
          <div className="container-sm-fluid container">
            <nav className='d-flex align-items-center justify-content-between w-100'>
              <div className='logo'>
                <Link to={'/'}> <img src={logox} className='logo' /></Link>
              </div>

              <div className='search container-sm-heddin'>
                <div className='input_bar d-flex align-items-center '>
                  <img src={searchicon} className='searchIcon' />
                  <input type='text' placeholder='Search...' className='searchbox border-0 ms-2' />

                </div>
              </div>


              <ul className='navbar-nav mb-2 mb-lg-0 d-flex flex-row justify-content-center align-items-center'>
                <li className='nav-item p-2'>
                  <Link to={'home'} className='nav-link ps-3 pe-3 pt-2 pb-2'>
                  Home
                    </Link>
                </li>
                <li className='nav-item p-2'>
                  <Link to={'about'} className='nav-link ps-3 pe-3 pt-2 pb-2'>About</Link>
                </li>
                <li className='nav-item p-2'>
                  <Link to={'shop'} className='nav-link ps-3 pe-3 pt-2 pb-2'>Shop</Link>
                </li>
                <li className='nav-item p-2'>
                  <Link to={'help'} className='nav-link ps-3 pe-3 pt-2 pb-2'>Help</Link>
                </li>
                <li className='nav-item p-2'>
                  <Link to={'cart'} className='nav-link ps-2 pe-3 pt-2 pb-2 text-dark cart position-relative'>

                    <span> Your Cart</span>
                    <span className='position-absolute notifcation'>2</span>

                  </Link>
                </li>
              </ul>
            </nav>

          </div>
        </header>
   </>

  )
}
