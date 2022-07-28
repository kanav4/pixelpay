import Image from "next/image";
import styles from "./ServiceCard.module.css";
import { BsArrowRight } from "react-icons/bs";

export default function ServiceCard({ ServIcon , index , title , content }) {
  return (
    <div className={styles.serviceCard}>
      <div className={styles.scWrap}>
        <span className={styles.Openings}>0{index}</span>
        <div className={styles.scIcon}>
          <Image src={ServIcon} width={60} height={60} />
        </div>
        <p className={styles.caption}>Marketing</p>
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
    </div>
  );
}
