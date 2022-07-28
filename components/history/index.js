import React from 'react'
import styles from './history.module.css';
import ima from '../../public/Assets/Rectangle 128.png'
import Image from 'next/image';
import Carousel from 'react-elastic-carousel';
import team1 from '../../public/Assets/team1.jpeg'
import team2 from '../../public/Assets/team2.jpeg'

export default function History() {
    return (
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
                Get to know our Story
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
                   2018
               </div>
               <div className={styles.storyContent}>
                   <h2>
                       Build new teams
                   </h2>
                   <p>
                       Our highly experienced team specializes in delivering bespoke digital marketing campaigns that are designed to achieve your desired objectives. We believe that a holistic and integrated approach is necessary to achieve the desired results in today’s competitive digital landscape. That’s why we work with you, for you
                   </p>
                   <p>
                       Our highly experienced team specializes in delivering bespoke digital marketing campaigns that are designed to achieve your desired objectives. We believe that
                   </p>
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
                   2019
               </div>
               <div className={styles.storyContent}>
                   <h2>
                       Build new teams
                   </h2>
                   <p>
                       Our highly experienced team specializes in delivering bespoke digital marketing campaigns that are designed to achieve your desired objectives. We believe that a holistic and integrated approach is necessary to achieve the desired results in today’s competitive digital landscape. That’s why we work with you, for you
                   </p>
                   <p>
                       Our highly experienced team specializes in delivering bespoke digital marketing campaigns that are designed to achieve your desired objectives. We believe that
                   </p>
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
                   2020
               </div>
               <div className={styles.storyContent}>
                   <h2>
                       Build new teams
                   </h2>
                   <p>
                       Our highly experienced team specializes in delivering bespoke digital marketing campaigns that are designed to achieve your desired objectives. We believe that a holistic and integrated approach is necessary to achieve the desired results in today’s competitive digital landscape. That’s why we work with you, for you
                   </p>
                   <p>
                       Our highly experienced team specializes in delivering bespoke digital marketing campaigns that are designed to achieve your desired objectives. We believe that
                   </p>
               </div>
           </div>
            </div>
            </Carousel>
      
        </div>
    )
}
