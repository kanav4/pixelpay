import React from 'react';
import styles from './banner.module.css';
import Image from 'next/image'
import rocket from '../../public/Assets/image 9.png';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { BsArrowRight } from "react-icons/bs";


export default function Banner() {
    return (
        <div className={styles.banner}>
            <Carousel
                showThumbs={false}
                infiniteLoop={true}
                showStatus={false}
            >
                <div className='container'>
                    <div className={styles.bannerGrid}>
                        <div className={styles.bannerHeading}>
                            <h3>Growth Hacking Experts</h3>
                            <h1>Crafting Digital <br /> Solutions That Convert</h1>
                            <div className='btn-white'>
                                <p>Explore Now</p> <span><BsArrowRight /></span>
                            </div>
                        </div>
                        <div className={styles.bannerImg}>
                            <Image
                                src={rocket}
                                alt="Picture of the author"
                                width={500}
                                height={500}
                            />
                        </div>
                    </div>
                </div>
                <div className='container'>
                    <div className={styles.bannerGrid}>
                        <div className={styles.bannerHeading}>
                            <h3>Augmenting brand awareness</h3>
                            <h1>Through data-driven <br /> strategies</h1>
                            <div className='btn-white'>
                                <p>Explore Now</p> <span><BsArrowRight /></span>
                            </div>
                        </div>
                        <div className={styles.bannerImg}>
                            <Image
                                src={rocket}
                                alt="Picture of the author"
                                width={500}
                                height={500}
                            />
                        </div>
                    </div>
                </div>
                <div className='container'>
                    <div className={styles.bannerGrid}>
                        <div className={styles.bannerHeading}>
                            <h3>Driving tangible results</h3>
                            <h1>With our cutting-edge technology</h1>
                            <div className='btn-white'>
                                <p>Explore Now</p> <span><BsArrowRight /></span>
                            </div>
                        </div>
                        <div className={styles.bannerImg}>
                            <Image
                                src={rocket}
                                alt="Picture of the author"
                                width={500}
                                height={500}
                            />
                        </div>
                    </div>
                </div>
            </Carousel>
        </div>
    )
}
