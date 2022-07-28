import Image from 'next/image';
import styles from './BlogCard.module.css';
import { BsArrowRight } from "react-icons/bs";

export default function zBlogCard({blogImg}) {
  return (
    <div className={styles.card}>
      <div className={styles.imgContainer}>
        <Image
          className="logo"
          src={blogImg}
          alt="header logo"
          height={290}
          width={391}
          objectFit="cover"
        />
      </div>
      <div className={styles.datetime}>BY Vaibhav Lall | 19-July-2022</div>
      <div className={styles.heading}>
        Search Intent & SEO –<br /> Quick & Easy Guide For Beginners...
      </div>
      <div className={styles.scReadmore}>
          <p>Read More</p><span><BsArrowRight /></span>
        </div>
    </div>
  );
}
