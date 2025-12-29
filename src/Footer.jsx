import React, { useLayoutEffect } from 'react'
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Twitter from './assets/t.svg'
import Insta from './assets/instaa.svg'
import Fb from './assets/f.svg'
import Toparrow from './assets/top-left.png'
gsap.registerPlugin(ScrollTrigger);
export default function Footer() {
    useLayoutEffect(()=>{
        const ctx = gsap.context(()=>{
                // const tl = gsap.timeline()
         gsap.from(".linkss .left-links ul li", {
    y: -20,
    duration: 0.5,
    opacity: 0,
    stagger: 0.1
});

gsap.from(".linkss .link-right ul li", {
    y: -20,
    duration: 0.5,
    opacity: 0,
    stagger: 0.1,
    scrollTrigger: {
        start: "top 70%",
        trigger: ".linkss"
    }
});

gsap.from(".links h1", {
    x: -20,
    duration: 0.5,
    opacity: 0,
    scrollTrigger: {
        start: "top 70%",
        trigger: ".links"
    }
});

gsap.from(".links input", {
    x: -20,
    duration: 0.5,
    opacity: 0,
    scrollTrigger: {
        start: "top 70%",
        trigger: ".links"
    }
});

gsap.from(".linksss h1, .linksss p", {
    x: 20,
    duration: 1,
    opacity: 0,
    scrollTrigger: {
        start: "top 70%",
        trigger: ".linksss"
    }
});

gsap.from(".linksss .social-icon img", {
    y: 30,
    duration: 1.4,
    opacity: 0,
    ease: "Power3.out",
    stagger: 0.1,
    scrollTrigger: {
        start: "top 70%",
        trigger: ".linksss"
    }
});





            })
         return () => ctx.revert();
    },[])
    return (
        <footer>
            <div className="last-sec">
                <div className="links">
                    <h1>Stay Connected with the World of Home Style</h1>
                    <input type='email' placeholder='Your Email Address' />
                    <div className="buttonwithContent">
                        <button>
                            <h3>More About Us</h3>
                            <img src={Toparrow} alt="arrow" />
                        </button>

                    </div>
                </div>
                <div className="linkss">
                    <div className="left-links">
                        <ul>
                            <li>Home</li>
                            <li>About </li>
                            <li>Shop</li>
                            <li>Blogs</li>
                            <li>Contact</li>
                        </ul>
                    </div>
                    <div className="link-right">
                        <ul>
                            <li>404 Error</li>
                            <li>Password Protected</li>
                            <li>Changelog</li>
                            <li>Style Guide </li>
                            <li>Licenses</li>
                        </ul>
                    </div>

                </div>
                <div className="linksss">
                    <h1>We’re just a call away.</h1>
                    <p>+1 (800) 456-7890</p>
                    <h1>Got a question?
                    </h1>
                    <p>recoded.flowsleek@.com</p>
                    <div className="social-icon">
                        <img src={Twitter}/>
                        <img src={Insta}/>
                        <img src={Fb}/>
                    </div>
                </div>

            </div>
            {/* <hr/> */}
        
        </footer>
    )
}
