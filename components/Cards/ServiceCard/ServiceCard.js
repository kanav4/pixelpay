import Image from "next/image";
import Link from "next/link"
import styles from "./ServiceCard.module.css";
import { BsArrowRight } from "react-icons/bs";

export default function ServiceCard({  index, title, content, ServiceIcon }) {
  return (
    <div className={styles.serviceCard}>
      <Link href="/services">
        <a>
      <div className={styles.scWrap}>
        <span className={styles.Openings}>0{index}</span>
        <div className={styles.scIcon}>
          <Image className={styles.image} src={ServiceIcon} alt="service icons" width={60} height={60}  />
        </div>
        <div className={styles.scName}>
          <h3>{title}</h3>
        </div>
        <div className={styles.scInfo}>
          <p>
            {content}
          </p>
        </div>
        <div className={styles.scReadmore}>
          <p>Read More</p><span><BsArrowRight /></span>
        </div>
      </div>
      </a>
      </Link>
    </div>
  );
}
