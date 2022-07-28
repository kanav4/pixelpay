import React from 'react';
import styles from './about.module.css';
import Image from 'next/image'
import { BsArrowRight } from "react-icons/bs";
import man from '../../public/Assets/man.png';
export default function AboutUs() {
    return (
        <div className='container'>
            <div className={styles.about}>
                <div className={styles.content}>
                    <div className={styles.headings}>
                    <div className="sectionName textCenter">
              <p>About Us</p>
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
                            We provide end to end digital marketing solutions to increase your online visibility.
                        </h2>
                    </div>
                    <div className={styles.text}>
                        <p>
                            Our highly experienced team specializes in delivering bespoke digital marketing campaigns that are designed to achieve your desired objectives. We believe that a holistic and integrated approach is necessary to achieve the desired results in today’s competitive digital landscape. That’s why we work with you, for you
                        </p>
                        <div>
                            <ul>
                                <li>
                                    To offer cost effective solutions that are created to augment your bottom line.
                                </li>
                                <li>
                                    To give you actionable insights that you can use to make better business decisions.
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className='btn-purple'>
                        <p>Explore Now</p> <span><BsArrowRight /></span>
                    </div>
                </div>
                <div className={styles.aboutImg} >
                    <Image
                        src={man}
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
