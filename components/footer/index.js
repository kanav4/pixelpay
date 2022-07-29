import Image from "next/image";
import React from "react";
import { BsArrowUp, BsFillTelephoneFill } from "react-icons/bs";
import { ImLocation2 } from "react-icons/im";
import { MdEmail } from "react-icons/md";
import FooterLogo from "/Assets/Pixel-pay-media-logo-03-1 2.png";
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
          <Image src={FooterLogo} />
          <p className={styles.About}>
            Helping brands grow is our passion. From start-ups to established
            enterprises, we offer tailored solutions that increase leads, drive
            sales, and build awareness.
          </p>
        </div>
        <div className={styles.FooterMenu}>
          <h4>Our Links</h4>
          <ul>
            <li>Contact US</li>
            <li>About US</li>
            <li>FAQ</li>
            <li>Privacy Policy</li>
            <li>Terms &amp; Conditions</li>
            <li>Blog</li>
            <li>Partner With Us</li>
          </ul>
        </div>
        <div className={styles.Contact}>
          <h4>Contact Us</h4>
          <p>
            <ImLocation2/> AWFIS, &amp; 7th floor Ambience Island, DLF Phase 3, Sector 24,
            Gurugram, Haryana 122022, India
          </p>
          <div className={styles.Emails}>
            <p><MdEmail/> info@pixelpaymedia.com</p>
            <p><MdEmail/> services@pixelpaymedia.com</p>
          </div>
          <div className={styles.Tel}>
            <p><BsFillTelephoneFill/> +91 896-545-4545</p>
            <p><BsFillTelephoneFill/> +91 896-545-4545</p>
          </div>
        </div>
      </div>
    </div>
  );
}
