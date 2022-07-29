import React from 'react'
import styles from './history.module.css';
import ima from '/Assets/Rectangle 128.png'
import Image from 'next/image';
import Carousel from 'react-elastic-carousel';
import team1 from '/Assets/team1.jpeg'
import team2 from '/Assets/team2.jpeg'

export default function History() {
    return (
        <div className={styles.history}>
        <div className='container'>
            <div className="sectionName textCenter">
                <p>Our Journey</p>
                <svg
                    className="sectionBorder"
                    height="14"
                    viewBox="0 0 186 14"
                    fill="none"
                >
                    <rect width="486" height="14" fill="#D1CDFF" />
                </svg>
            </div>
            <h2 className="sectionTitle textCenter">
            From a humble beginning to becoming a force to be reckoned with in the digital marketing landscape.
            </h2>
            <Carousel pagination={false} showThumbs={false} >
            <div className={styles.ourStory}>
           <div className={styles.aboutImg}>
               <Image
                    className={styles.image}
                   src={ima}
                   alt="header logo"
                   layout="fill"
                   objectFit='cover'
               />
           </div>
           <div className={styles.story}>
               <div className={styles.year}>
               Year 1 
               </div>
               <div className={styles.storyContent}>
                   <h2>
                   It all started with a simple realization!
                   </h2>
                   <p>Everyone has that "aha!" moment - when they suddenly realize what they're meant to do in life. Ours happened when we realized we were passionate about helping businesses grow through digital marketing. We loved seeing the tangible results of our hard work and knew that this was what we were meant to do. So, we took our skills and put them to work - helping businesses large and small reach their full potential online.</p>
                   <p>Since then, we've never looked back. We're constantly innovating and evolving our approach to digital marketing, always striving to be at the forefront of the latest trends and techniques. But one thing has remained constant: our commitment to helping our clients grow. </p>
               </div>
           </div>
            </div>
            <div className={styles.ourStory}>
           <div className={styles.aboutImg}>
               <Image
                    className={styles.image}
                   src={team2}
                   alt="header logo"
                   layout="fill"
                   objectFit='cover'
               />
           </div>
           <div className={styles.story}>
               <div className={styles.year}>
                  Year 2
               </div>
               <div className={styles.storyContent}>
                   <h2>
                   The importance of a strong foundation!                   </h2>
                   <p>We started with a small team of passionate individuals who were experts in their field. None of us had any idea how to run a business, but we were driven by our passion and determination to succeed. We quickly realized that we needed to build a strong foundation if we wanted to scale our business. So, we set out to learn everything we could about digital marketing.  </p>
                   <p>We read books, took courses, and experimented with different strategies. We made a lot of mistakes, but we also had a lot of success. As we grew, we added more experts to our team and continued to expand our services. </p>
               </div>
           </div>
            </div>
            <div className={styles.ourStory}>
           <div className={styles.aboutImg}>
               <Image
                    className={styles.image}
                   src={team1}
                   alt="header logo"
                   layout="fill"
                   objectFit='cover'
               />
           </div>
           <div className={styles.story}>
               <div className={styles.year}>
                   Year 3
               </div>
               <div className={styles.storyContent}>
                   <h2>
                   Onwards and upwards we go!
                   </h2>
                   <p>Today, we're a flourishing digital marketing agency with a team of over 30 experts. We've helped hundreds of businesses grow online, and we're passionate about what we do. We're constantly evolving and expanding our services to keep up with the latest trends and technologies. And we're always looking for new ways to help our clients succeed. </p>
                   <p>We're not your typical digital marketing company. We go above and beyond to make sure our clients are happy and successful. If you're looking for creative, outside-the-box thinkers who will do whatever it takes to help your business grow, you've come to the right place. We can't wait to help you reach your full potential! </p>
               </div>
           </div>
            </div>
            </Carousel>
      
        </div>
        </div>
    )
}
