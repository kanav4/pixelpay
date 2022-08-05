import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BsArrowUp, BsFillTelephoneFill } from "react-icons/bs";
import { ImLocation2 } from "react-icons/im";
import { MdEmail } from "react-icons/md";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <div className={styles.FooterContainer}>
      <div className={styles.FooterWrap}>
        <div className={styles.goTop}>
          <BsArrowUp size={30} className={styles.topIcon} onClick={() => {
          window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
        }} />
        </div>
        <div className={styles.Branding}>
          <div className={styles.footerLogo}>
          <Image alt="PixelPay Media Logo" width={50} height={30} layout="responsive" src="/Assets/Pixel-pay-media-logo-03-1 2.png" />
          </div>
          <p className={styles.About}>
            Helping brands grow is our passion. From start-ups to established
            enterprises, we offer tailored solutions that increase leads, drive
            sales, and build awareness.
          </p>
        </div>
        <div className={styles.FooterMenu}>
          <h4>Our Links</h4>
          <ul>
          <li><Link href="/about"><a>About Us</a></Link></li>
          <li><Link href="/services"><a>Services</a></Link></li>
          <li><Link href="/career"><a>Careers </a></Link></li>
            <li><Link href="/blog"><a>Blog</a></Link></li>
            <li><Link href="/contact"><a>Contact Us</a></Link></li>
            <li><Link href="#"><a>Privacy Policy</a></Link></li>
          </ul>
        </div>
        <div className={styles.Contact}>
          <h4>Contact Us</h4>
          <p>
            <span><ImLocation2/></span> AWFIS, &amp; 7th floor Ambience Island, DLF Phase 3, Sector 24,
            Gurugram, Haryana 122022, India
          </p>
          <div className={styles.Emails}>
            <p> <span><MdEmail/> </span><Link href="mailto:info@pixelpaymedia.com"><a> info@pixelpaymedia.com</a></Link><Link href="mailto:marketing@pixelpaymedia.com"><a> marketing@pixelpaymedia.com</a></Link></p>
          </div>
          <div className={styles.Tel}>
          <p> <span><BsFillTelephoneFill/></span>  <Link href="tel:+91 896-545-4545"><a>+91 896-545-4545</a></Link><Link href="tel:+91 896-545-4545"><a>+91 896-545-4545</a></Link></p>
          </div>
        </div>
       
      </div>
      <div className={styles.copyrightText}>
          <p>© 2022 PixelPay Media Pvt. Ltd. All Rights Reserved.</p>
        </div>
    </div>
  );
}
