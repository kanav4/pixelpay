import styles from "./whyUsCard.module.css";
import Image from "next/image";

export default function WhyUsCard({ title, content,ServiceIcon }) {
  return (
    <div className={styles.whyUsCard}>
      <div className={styles.wuWrap}>
        <div className={styles.wuInner}>
          <div className={styles.wuIcon}>
            <Image className={styles.wuimage} src={ServiceIcon} alt="Our Icons" width={60} height={60} layout="fill" />
          </div>
          <div className={styles.wuName}>
            <h3>{title}</h3>
          </div>
          <div className={styles.wuInfo}>
            <p>{content}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
