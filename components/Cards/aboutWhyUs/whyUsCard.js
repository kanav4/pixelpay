import styles from "./whyUsCard.module.css";
import ServIcon from "/Assets/megaphone.png";
import Image from "next/image";

export default function WhyUsCard({ title, content }) {
  return (
    <div className={styles.whyUsCard}>
      <div className={styles.wuWrap}>
        <div className={styles.wuInner}>
          <div className={styles.wuIcon}>
            <Image src={ServIcon} width={60} height={60} />
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
