import React from 'react'
import styles from "./clients.module.css";
import { BsArrowRight } from "react-icons/bs";
import Image from 'next/image'
import amazon from '../../public/Assets/Amazon logo.png';
import agoda from '../../public/Assets/Agoda-1-02-02 1.png';
import flipkart from '../../public/Assets/Flipkart-logo.png';

export default function Clients() {
    return (
        <div className={styles.clients}>
            <div className={styles.content}>
                <div className={styles.headings}>
                <div className="sectionName textCenter">
              <p>Our Clients</p>
              <svg
                className="sectionBorder"
                height="14"
                viewBox="0 0 186 14"
                fill="none"
              >
                <rect width="486" height="14" fill="#D1CDFF" />
              </svg>
            </div>
                    <h2 className="sectionTitle">
                    Our clients come from all walks of life and all corners of the world
                    </h2>
                </div>
                <div className={styles.text}>
                    <p>
                    
                    </p>
                </div>
                <div className='btn-purple'>
                    <p>Explore Now</p> <span><BsArrowRight /></span>
                </div>
            </div>
            <div className={styles.clientsImgContainer}>
                <div className={styles.div1}>
                    <Image
                        src={amazon}
                        alt="Picture of the author"
                        width={130}
                        height={40}
                    />
                </div>
                <div className={styles.div2}>
                    <Image
                        src={flipkart}
                        alt="Picture of the author"
                        width={130}
                        height={40}
              
                    />
                </div>
                <div className={styles.div3}>
                    <Image
                        src={flipkart}
                        alt="Picture of the author"
                        width={130}
                        height={40}
                    />
                </div>
                <div className={styles.div4}>
                    <Image
                        src={amazon}
                        alt="Picture of the author"
                        width={130}
                        height={40}
                    />
                </div>
                <div className={styles.div5}>
                    <Image
                        src={amazon}
                        alt="Picture of the author"
                        width={130}
                        height={40}
                    />
                </div>
                <div className={styles.div6}>
                    <Image
                        src={flipkart}
                        alt="Picture of the author"
                        width={130}
                        height={40}
                    />
                </div>
            </div>
        </div>
    )
}
