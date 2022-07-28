import Image from "next/image";
import styles from "./ContactCard.module.css";

export default function ContactCard({ contactIcon, ContactDetail, ContactInfo }) {
  return (
    <div className={styles.contactCard}>
      <div className={styles.ccWrap}>
        <div className={styles.ccIcon}>
          <Image src={contactIcon} width={60} height={60} />
          <div className={styles.ccIconBg}>
          <Image src={contactIcon} width={150} height={150}/></div>
        </div>
        <h3 className={styles.ccName}>{ContactDetail}</h3>
        <p className={styles.ccInfo}>
        {ContactInfo}
        </p>
      </div>
    </div>
  );
}
