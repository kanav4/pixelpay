import React from 'react';
import styles from './about.module.css';
import Image from 'next/image'
import { BsArrowRight, BsCheckCircleFill } from "react-icons/bs";

export default function AboutUs() {
    return (
        <div className='container'>
            <div className={styles.about}>
                <div className={styles.content}>
                    <div className={styles.headings}>
                    <div className="sectionName">
              <p>About Us</p>
            </div>
                        <h2 className="sectionTitle">
                        We Provide End to End Digital Marketing Solutions to Increase Your Online Visibility.
                        </h2>
                    </div>
                    <div className={styles.text}>
                        <p>
                            Our highly experienced team specializes in delivering bespoke digital marketing campaigns that are designed to achieve your desired objectives. We believe that a holistic and integrated approach is necessary to achieve the desired results in today’s competitive digital landscape. That’s why we work with you, for you
                        </p>
                        <div>
                            <ul>
                                <li><span><BsCheckCircleFill/></span>
                                    To offer cost effective solutions that are created to augment your bottom line.
                                </li>
                                <li><span><BsCheckCircleFill/></span>
                                    To give you actionable insights that you can use to make better business decisions.
                                </li>
                            </ul>
                        </div>
                    </div>
                    <a href='/about'>
                    <div className='btn-purple'>
                        <p>Know More</p> <span><BsArrowRight /></span>
                    </div>
                    </a>
                </div>
                <div className={styles.aboutImg} >
                    <Image
                        src="/Assets/man.png"
                        alt="Picture of the author"
                        className={styles.image}
                        layout="fill"
                        objectFit='contain'
                    />
                </div>
            </div>
        </div>
    )
}
