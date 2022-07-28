import Image from "next/image";
import React from "react";
import styles from "./HeroBanner.module.css";

export default function HeroBanner({HeroHeading, HeroText, HeroImage}) {
  return (
    <div className={styles.HeroBanner}>
      <div className={styles.bannerWrap}>
        <div className={styles.HeroText}>
          <p>{HeroHeading}</p>
          <h2>
            {HeroText}
          </h2>
        </div>
        <div className={styles.HeroImage}>
            <Image src={HeroImage}/>
        </div>
      </div>
    </div>
  );
}
