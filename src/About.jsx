import React, { useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './App.css';
import Rightpic from './assets/right.png';
import Toparrow from './assets/top-left.png';

gsap.registerPlugin(ScrollTrigger);

function About() {
  useLayoutEffect(() => {
    // Create GSAP context for scoped animations
    const ctx = gsap.context(() => {
     
     gsap.to(".right-section .overlay", {
  x: "100%",
  duration: 2,
  // delay:1.5,
  opacity: 0,
  scrollTrigger: {
    trigger: ".right-section",
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
    <>
      <section className='About-sec'>
        <div className="heading">
          <h1>About Us</h1>
          
        </div>
        <div className="section">
          <div className="left-section">
            <h1>Premium Quality Designs Created For Your Home</h1>
            <p>
              Discover thoughtfully crafted furniture and decor pieces made to elevate
              your living spaces with lasting style and comfort.
            </p>
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
          <div className="right-section">
            <img src={Rightpic} alt="right" />
            <div className="overlay">sssss</div>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;