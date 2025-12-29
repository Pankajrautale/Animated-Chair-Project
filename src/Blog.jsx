import React, { useLayoutEffect } from 'react'
import pic1 from './assets/bed1.png'
import pic2 from './assets/bed2.png'
import pic3 from './assets/bed3.png'
import Toparrow from './assets/top-left.png';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
export default function Blog() {
   useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
        gsap.from(".pair .box9", {
            y: 40,
            opacity: 0,
            duration: 2,
            ease: "power3.out",
            stagger: 0.25,
            scrollTrigger: {
                trigger: ".pair",
                start: "top 70%",   // ⭐ animation starts earlier
                toggleActions: "play none none reverse",
             
                // markers:true
            }
        });
    });

    return () => ctx.revert();
}, []);

    return (
        <>

            <section className='blog-section'>
                <div className="heading">
                    <h1> Latest Blog</h1>
                </div>

                <div className="pair">
                    <div className="box9">
                        <div className="img">
                            <img src={pic1} />
                        </div>

                        <div className="content-row">
                            <h5>Author: Ethan Moore</h5>
                            <div className="infoe">
                                Wood That’s Been Somewhere: Designing with Depth
                            </div>
                            <div className="buttonwithContent">
                                <button>
                                    <h3>More About Us</h3>
                                    <img src={Toparrow} alt="arrow" />
                                </button>

                            </div>
                        </div>
                    </div>
                    <div className="box9">
                        <div className="img">
                            <img src={pic2} />
                        </div>

                        <div className="content-row">
                            <h5>Author: Ethan Moore</h5>
                            <div className="infoe">
                                The Art of Furniture with a History
                            </div>
                            <div className="buttonwithContent">
                                <button>
                                    <h3>More About Us</h3>
                                    <img src={Toparrow} alt="arrow" />
                                </button>

                            </div>
                        </div>
                    </div>
                    <div className="box9">
                        <div className="img">
                            <img src={pic3} />
                        </div>

                        <div className="content-row">
                            <h5>Author: Ethan Moore</h5>
                            <div className="infoe">
                                The Eco-Friendly Appeal of Reclaimed Materials
                            </div>
                            <div className="buttonwithContent">
                                <button>
                                    <h3>More About Us</h3>
                                    <img src={Toparrow} alt="arrow" />
                                </button>

                            </div>
                        </div>
                    </div>
                </div>

            </section>
        </>
    )
}
