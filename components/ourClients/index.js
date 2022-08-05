import React from 'react'
import styles from "./clients.module.css";
import { BsArrowRight } from "react-icons/bs";
import Image from 'next/image'

export default function Clients() {
    return (
        <div className={styles.clients}>
            <div className={styles.clientsWrap}>
            <div className={styles.content}>
                <div className={styles.headings}>
                <div className="sectionName">
              <p>Our Clients</p>
            </div>
                    <h2 className="sectionTitle">
                    Our Business Partners Come From All Walks of Life and All Corners of the World
                    </h2>
                </div>
                <div className={styles.text}>
                    <p>
                    
                    </p>
                </div>
                <a href='#contactDown'>
                <div className='btn-purple'>
                    <p>Partner with us</p> <span><BsArrowRight /></span>
                </div>
                </a>
            </div>
            <div className={styles.clientsImgContainer}>
                <div className={styles.div1}>
                    <Image
                        src="/Assets/Amazon logo.png"
                        alt="Picture of the author"
                        width={130}
                        height={40}
                    />
                </div>
                <div className={styles.div2}>
                    <Image
                          src="/Assets/Flipkart-logo.png"
                        alt="Picture of the author"
                        width={130}
                        height={40}
                    />
                </div>
                <div className={styles.div3}>
                    <Image
                        src="/Assets/Flipkart-logo.png"
                        alt="Picture of the author"
                        width={130}
                        height={40}
                    />
                </div>
                <div className={styles.div4}>
                    <Image
                  src="/Assets/Amazon logo.png"
                        alt="Picture of the author"
                        width={130}
                        height={40}
                    />
                </div>
                <div className={styles.div5}>
                    <Image
                     src="/Assets/Amazon logo.png"
                        alt="Picture of the author"
                        width={130}
                        height={40}
                    />
                </div>
                <div className={styles.div6}>
                    <Image
                   src="/Assets/Flipkart-logo.png"
                        alt="Picture of the author"
                        width={130}
                        height={40}
                    />
                </div>
            </div>
        </div>
        </div>
    )
}
