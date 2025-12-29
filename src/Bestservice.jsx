import React, { useLayoutEffect } from 'react'
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Se1 from './assets/service1.png'
import Se4 from './assets/se4.png'
import Se2 from './assets/service2.png'
import Call from './assets/call.png'
import Truck from './assets/truck.png'
import Return from './assets/return.png'
import Toparrow from './assets/top-left.png';
gsap.registerPlugin(ScrollTrigger);
export default function Bestservice() {

  useLayoutEffect(() => {
    // Create GSAP context for scoped animations
    const ctx = gsap.context(() => {

      gsap.to(".left-section1 .overlay", {
        y: "100%",
        duration: 2,
        // delay:1.5,
        opacity: 0,
        scrollTrigger: {
          trigger: ".left-section1",
          start: "top 80%",
          // end:"buttom 20%",
          toggleActions: "play none none reverse"
          // ,markers:true

        }
      });
    });

    // Cleanup on component unmount
    return () => ctx.revert();
  }, []);


  return (
    <section className='Delivery'>
      <div className="left-section1">
        <img src={Se1} />
        <div className="overlay">sssss</div>
      </div>

      <div className="right-section1">
        <div className="right1">
          <div className="topic">
            <h1>Best Services That We Have</h1>
            
            <button>Explore Shop</button>
          </div>

          <div className="return-policy">
            <div className="policy">
              <img src={Call} />
              <h4>Available to you 24/7</h4>
            </div>

            <div className="policy">
              <img src={Truck} />
              <h4>Free shipping</h4>
            </div>

            <div className="policy">
              <img src={Return} />
              <h4>Free Returns</h4>
            </div>
          </div>
        </div>

        <div className="right2">
          <img src={Se4} />
        </div>

      </div>
    </section>
  )
}
