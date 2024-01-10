import React from 'react'
import '../App.css';
import bk from './assest/images/background.jpg'
import video from './../default.mp4'

export default function Home() {


  return (
    <>

      <div className='container-xl-fluit pt-3 pb-3'>

        <div className=' home'>
          {/* <video autoPlay muted loop id='myvideo' >
            <source src={video} type='video/mp4' />
          </video> */}

          <div className='backgroundImage position-relative' style={{ backgroundImage: `url(${bk})` }}>
            <video className='my-video' muted={true} autoPlay={true} loop={true}>
              <source src={video}></source>
            </video>
            <div className='overlay'>
              <div className='hero-content'>
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
      </div>
    </>
  )
}
