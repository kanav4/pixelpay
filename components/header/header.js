import React, { useEffect } from "react";
import Link from "next/link";
import Image from 'next/image';
export default function Nav({ home }) {
  const [query, setQuery] = React.useState("");
  const onKeyUpHandle = (e) => {
    if (e.keyCode === 13) {
      e.preventDefault();
      window.location.href = "/search?q=" + e.target.value;
    }
  };
  useEffect(() => {
    const hamburger = document.querySelector(".hamburger");
    const navMenu = document.querySelector(".nav-menu");
    const y = document.querySelector("#mlogo");
    hamburger.addEventListener("click", mobileMenu);

    function mobileMenu() {
      y.classList.toggle("logoM");
      document.querySelector(".nav-logo").classList.toggle("hideLogo")
      document.querySelector("body").classList.toggle("noscroll");
      hamburger.classList.toggle("active");
      navMenu.classList.toggle("active");
    }

    function closeMenu() {
      document.querySelector(".nav-logo").classList.toggle("showLogo")
      hamburger.classList.remove("active");
      navMenu.classList.remove("active");
      document.querySelector("body").classList.remove("noscroll");
    }
  }, []);


  return (
    <>
      <div className="">
        <header className="headerx">
          <nav className="navbar">
            <div className="hamburger">
              <span className="bar"></span>
              <span className="bar"></span>
              <span className="bar"></span>
            </div>
            <div className="flex">
              <Link href="/">
                <a className="nav-logo">
                  <Image
                    className="logo"
                    src="/Assets/Pixel-pay-media-logo-03-1 2.png"
                    alt="header logo"
                    height={50}
                    width={85}
                    quality={50}
                    priority
                  />
                </a>
              </Link>
              {/* <div className="searchM serchLogo">
            <BsSearch></BsSearch>
            </div> */}
            </div>
            <div className="right-head">
              <ul className="nav-menu">
                <li className="nav-item">
                  <div id="mlogo" className="logoImg2">
                    <Image
                      className="logo"
                      src="/Assets/Pixel-pay-media-logo-03-1 2.png"
                      alt="header logo"
                      height={50}
                      width={85}
                      quality={50}
                      priority
                    />
                  </div>
                </li>
                <li className="nav-item">
                  <Link href={"/"}>
                    <a className="nav-link">Home</a>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link href={"/services"}>
                    <a className="nav-link">Services</a>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link href={"/about"}>
                    <a className="nav-link">About Us</a>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link href={"/career"}>
                    <a className="nav-link">Careers</a>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link href={"/blog"}>
                    <a className="nav-link">Blog</a>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link href={"/contact"}>
                    <a className="nav-link">Contact Us</a>
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
        </header>
      </div>
    </>

  );
}
