import React, { useLayoutEffect, useRef } from 'react'
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Toparrow from './assets/top-left.png';
import Cart1 from './assets/cart1.png'
import Product1 from './assets/lux1.png'
import Product2 from './assets/lux2.png'

gsap.registerPlugin(ScrollTrigger);

export default function Latestp() {

 

    return (
        <section className='product-section' >
            <div className="heading">
                <h1>Latest Product</h1>
            </div>

            <div className="container3">

                <div className="left-section">
                    <h1>Premium quality designs created for your home</h1>
                    <p>Discover thoughtfully crafted furniture and decor pieces made to elevate your living spaces with lasting style and comfort.</p>

                    <div className="buttonwithContent">
                        <button>
                            <h3>More About Us</h3>
                            <img src={Toparrow} alt="arrow" />
                        </button>
                        <button>
                            <h3>Contact Us</h3>
                            <img src={Toparrow} width="20" alt="arrow" />
                        </button>
                    </div>
                </div>

                <div className="box3">
                    <div className="notch1"><h2>Sofa</h2></div>
                    <img src={Product1} />
                    <div className="INFO">
                        <div className="price">
                            <h1>Wicker Couch</h1>
                            <h3>$499.00 USD</h3>
                        </div>
                        <img src={Cart1} id='cart' />
                    </div>
                </div>

                <div className="box3">
                    <div className="notch1"><h2>Bed</h2></div>
                    <img src={Product2} />
                    <div className="INFO">
                        <div className="price">
                            <h1>Chaise Lounge</h1>
                            <h3>$499.00 USD</h3>
                        </div>
                        <img src={Cart1} id='cart' />
                    </div>
                </div>
            </div>
        </section>
    )
}
