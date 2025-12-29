import React, { useLayoutEffect } from 'react'
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Box1 from './assets/box1.png';
import Box2 from './assets/b2.png'
import Box3 from './assets/b3.png'
import Box4 from './assets/b4.png'
import Box5 from './assets/b5.png'
import Box6 from './assets/b6.png'
import Box7 from './assets/b7.png'
import Box8 from './assets/b8.png'
import hoverarrow from './assets/hoverarrow.png'
gsap.registerPlugin(ScrollTrigger);
function Categories() {
useLayoutEffect(()=>{
    let ctx = gsap.context(()=>{
            gsap.from(".heading h1",{
                
                
                scale:0.1,
                duration:1.3,
            })

        gsap.from(".box",{
            y:60,
            duration:1,
            opacity:0,
                scrollTrigger:{
                    trigger: ".box", 
                    start:"top 80%",
                }
        })

    })
        return () => ctx.revert();
},[])

    return (
        <>
            <section className='Categories-section'>
                <div className="heading">
                    <h1> Categories</h1>
                </div>

                <div className="sofa-container">
                    <div className="box">
                        <div className="notch">
                            <h2>Bench</h2>

                        </div>
                        <img src={Box1}id='pic'  />
                        <div class="arrow-icon">
                             <img src={hoverarrow}/></div>

                    </div>
                    <div className="box">
                        <div className="notch">
                            <h2>Sofa</h2>

                        </div>
                        <img src={Box2} id='pic' />
                            <div class="arrow-icon"> <img src={hoverarrow}/></div>

                    </div>
                    <div className="box">
                        <div className="notch">
                            <h2>Table</h2>

                        </div>
                        <img src={Box3}id='pic' />    <div class="arrow-icon"> <img src={hoverarrow}/></div>

                    </div>
                    <div className="box">
                        <div className="notch">
                            <h2>Wardrobe</h2>

                        </div>
                        <img src={Box4} id='pic' />    <div class="arrow-icon"> <img src={hoverarrow}/></div>

                    </div>
                    <div className="box">
                        <div className="notch">
                            <h2>Bed</h2>

                        </div>
                        <img src={Box5}id='pic' />    <div class="arrow-icon"> <img src={hoverarrow}/></div>

                    </div>
                    <div className="box">
                        <div className="notch">
                            <h2>Chair</h2>

                        </div>
                        <img src={Box6} id='pic'/>    <div class="arrow-icon"> <img src={hoverarrow}/></div>

                    </div>
                    <div className="box">
                        <div className="notch">
                            <h2>Buffet</h2>

                        </div>
                        <img src={Box7}id='pic' />    <div class="arrow-icon"> <img src={hoverarrow}/></div>

                    </div>
                    <div className="box">
                        <div className="notch">
                            <h2>Lamp</h2>

                        </div>
                        <img src={Box8} id='pic' />    <div class="arrow-icon"> <img src={hoverarrow}/></div>

                    </div>




                </div>

            </section>
        </>
    )
}

export default Categories