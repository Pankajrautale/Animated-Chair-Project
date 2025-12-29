import React from 'react'
import './Discover.css'
import hoverarrow from './assets/hoverarrow.png'
import Box1 from './assets/box1.png';
import Box2 from './assets/b2.png'
import Box3 from './assets/b3.png'
import Box4 from './assets/b4.png'
import Cart1 from './assets/cart1.png'
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';


function Dicsover() {
    return (
        <>
            <section className='list-item'>
                <div className="heading">
                    <h1>Discover More</h1>
                </div>
                <div className="sofa-container1">
                    <div className="box1">
                        <div className="notch1">
                            <h2>Bench</h2>

                        </div>
                        <img src={Box1} />
                        {/* <div class="arrow-icon"> <img src={hoverarrow} /></div> */}
                        <div className="INFO">
                            <div className="price">
                                <h1>Florencia Bench</h1>
                                <h3>$499.00 USD</h3>

                            </div>
                            <img src={Cart1} id='cart' />
                        </div>
                    </div>
                        <div className="box1">
                            <div className="notch1">
                                <h2>Sofa</h2>

                            </div>
                            <img src={Box2} />
                            {/* <div class="arrow-icon"> <img src={hoverarrow} /></div> */}
                            <div className="INFO">
                                <div className="price">
                                    <h1>Contemporay Sofa</h1>
                                    <h3>$499.00 USD</h3>

                                </div>
                                <img src={Cart1} id='cart' />
                            </div>

                        </div>
                    <div className="box1">
                        <div className="notch1">
                            <h2>Table</h2>

                        </div>
                        <img src={Box3} />    <div class="arrow-icon"> <img src={hoverarrow} /></div>
                        <div className="INFO">
                            <div className="price">
                                <h1>Table Mini</h1>
                                <h3>$499.00 USD</h3>

                            </div>
                            <img src={Cart1} id='cart' />
                        </div>


                    </div>





                </div>
            </section>
        </>
    )
}

export default Dicsover