import Image from 'next/image';
import React from 'react'
import styles from "./faceCard.module.css";

export default function FaceCard({name , des , person}) {

  return (
    <div className={styles.cardContainer}>
    <div className={styles.cardImgGrad}>
      <div className={styles.cardImg}>
        <Image
          src={person}
          width={100}
          height={100}
          layout="responsive"
        />
      </div>
    </div>
    <div className={styles.names}>
      <p>{name}</p>
      <span>{des}</span>
    </div>
  </div>
  )
}
