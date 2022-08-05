import Image from "next/image";
import styles from "./ContactCard.module.css";

export default function ContactCard({ contactIcon, ContactDetail, ContactInfo }) {
  return (
    <div className={styles.contactCard}>
      <div className={styles.ccWrap}>
        <div className={styles.ccIcon}>
          <Image src={contactIcon} alt="contact icons" width={60} height={60} layout="responsive" />
          <div className={styles.ccIconBg}>
          <Image src={contactIcon} alt="contact icons" width={150} height={150}  layout="responsive"   /></div>
        </div>
        <h3 className={styles.ccName}>{ContactDetail}</h3>
        <p className={styles.ccInfo}>
        {ContactInfo}
        </p>
      </div>
    </div>
  );
}
