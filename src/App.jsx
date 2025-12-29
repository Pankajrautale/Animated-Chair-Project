import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./App.css";
import Logo from "./assets/Logo.png";
import Cart from "./assets/Cart.png";
import Chai1 from "./assets/1.png";
import chair2 from "./assets/2.png";
import Arrowtop from "./assets/top-left.png";
import Lchair from "./assets/lchair.png";
import Menu from "./assets/menu.png";
import Res1 from "./assets/resp.png";

gsap.registerPlugin(ScrollTrigger);

function App() {
  const [open, setOpen] = useState(false);
  const dropRef = useRef(null);
  const btnRef = useRef(null);

  // Toggle dropdown
  const handleToggle = () => {
    setOpen((prev) => !prev);
  };

  // Click outside to close
  useEffect(() => {
    const handleOutside = (e) => {
      if (
        dropRef.current &&
        !dropRef.current.contains(e.target) &&
        btnRef.current &&
        !btnRef.current.contains(e.target)
      ) {
        setOpen(false);
      }
    };

    document.addEventListener("click", handleOutside);
    return () => document.removeEventListener("click", handleOutside);
  }, []);

  // GSAP animations
  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from("nav", { y: -20, duration: 2, opacity: 0 });
      gsap.from(".left-sec", { x: -100, duration: 1.5, opacity: 0 });
      gsap.from(".right-sec", { x: 100, duration: 1.5, opacity: 0 });
      gsap.from(".content", { y: -100, duration: 0.7, opacity: 0 });
      gsap.from(".content2", { y: 100, duration: 0.7, opacity: 0 });
    });

    return () => ctx.revert();
  }, []);

  return (
    <>
      {/* TOP HEADER */}
      <section className="Top-header">
        {Array(4)
          .fill(null)
          .map((_, i) => (
            <div className="marquee" key={i}>
              <h2>Transform Your Space – Save 30% Today!</h2>
            </div>
          ))}
      </section>

      {/* HERO */}
      <section className="hero-sec">
        <div className="hero-content">
          <div className="left-sec">
            <img src={Chai1} />
            <div className="content">
              <h1>Modern Living with Designer Furniture</h1>
              <h5>
                Discover modern designer furniture crafted for stylish and
                comfortable living spaces.
              </h5>
              <button>
                Explore Shop <img src={Arrowtop} />
              </button>
            </div>
          </div>

          <div className="right-sec">
            <img src={chair2} />
            <div className="content2">
              <div className="notch">
                <h2>Velmoor</h2>
              </div>
              <img src={Lchair} />
              <div className="discount">
                <h4>20% off</h4>
              </div>
            </div>
            <div className="content"></div>
          </div>
        </div>
      </section>

      {/* NAVBAR */}
      <nav>
        <img src={Logo} />
    
        <img src={Menu} id="menu" />

        <div className="link">
          <ul>
            <li>
              <a className="active" href="#">
                Home
              </a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Shop</a>
            </li>

            {/* Dropdown */}
            <li className="magic-box">
              <a ref={btnRef} id="pagesBtn" onClick={handleToggle}>
                Pages +
              </a>

              <div
                ref={dropRef}
                className={`dropdown ${open ? "active" : "remove"}`}
              >
                <div className="menu-col">
                  <h2>Pages</h2>
                  <p>Home</p>
                  <p>About</p>
                  <p>Blogs</p>
                  <p>Shop</p>
                  <p>Contact</p>
                </div>

                <div className="menu-col">
                  <h2>Cms</h2>
                  <p>Blog Details</p>
                  <p>Product Details</p>
                  <p>Categories Details</p>
                </div>

                <div className="menu-col">
                  <h2>Utility</h2>
                  <p>Style Guide</p>
                  <p>Changelog</p>
                  <p>Licences</p>
                  <p>404</p>
                  <p>Password Protected</p>
                </div>
              </div>
            </li>
          </ul>
        </div>
            <img src={Cart} id="cart" />
      </nav>
    </>
  );
}

export default App;
