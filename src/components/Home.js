import React from 'react'
import '../App.css';
import bk from './assest/images/background.jpg'

export default function Home() {


  return (
    <>

      <div className='container-xl-fluit pt-3 pb-3 border border-1'>

        <div className='container-fluid home'>
          {/* <video autoPlay muted loop id='myvideo' >
            <source src={video} type='video/mp4' />
          </video> */}
          <div className='backgroundImage position-relative' style={{ backgroundImage: `url(${bk})` }}>
            <div className='overlay'>
              <h3 className='display-5 text-white text-center headline'>
               <span >
                Welcome
               </span>
              </h3>





              <div className='items'>
                <div className='slider'>
                  <div className='item'>
                    <div className='ns-item'>

                    </div>
                  </div>
                  <div className='item'>
                    <div className='ns-item'>

                    </div>
                  </div>
                  <div className='item'>
                    <div className='ns-item'>

                    </div>
                  </div>
                  <div className='item'>
                    <div className='ns-item'>

                    </div>
                  </div>
                  <div className='item'>
                    <div className='ns-item'>

                    </div>
                  </div>
                  <div className='item'>
                    <div className='ns-item'>

                    </div>
                  </div>
                </div>


              </div>
              <div class="d-grid gap-2">
                <button type="button" class="btn btn-primary homeShop d-block m-auto rounded-0">Shop Now</button>
              </div>

            </div>

          </div>




        </div>
      </div>
    </>
  )
}
