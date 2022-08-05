import React from 'react';
import styles from './banner.module.css';
import Image from 'next/image'
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
                                src="/Assets/crafting.png"
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
                            <h3>Augmenting Brand Awareness</h3>
                            <h1>Through Data-Driven <br />Strategies</h1>
                            <div className='btn-white'>
                                <p>Explore Now</p> <span><BsArrowRight /></span>
                            </div>
                        </div>
                        <div className={styles.bannerImg}>
                            <Image
                                src="/Assets/Banner Through data driven strategies.png"
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
                            <h3>Driving Tangible Results</h3>
                            <h1>With Our Cutting-Edge Technology</h1>
                            <div className='btn-white'>
                                <p>Explore Now</p> <span><BsArrowRight /></span>
                            </div>
                        </div>
                        <div className={styles.bannerImg}>
                            <Image
                                src="/Assets/cuttingedge.png"
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
