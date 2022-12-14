import Image from "next/image";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";
import styles from "./JobCard.module.css";

export default function JobCard({ ServIcon, active, item }) {


  return (
    <div className={active?styles.JobCardActive:styles.JobCard}>
      <div className={styles.jcWrap}>
        <div className={styles.jcHead}>
          <div className={styles.jcIcon}>
            <Image alt="jobcard" src="/Assets/video.png" width={60} height={60} />
          </div>
          <span className={styles.jcOpening}>{item.openings}</span>
        </div>
        <div className={styles.jcContent}>
          <div className={styles.jcContentWrap}>
            <p className={styles.jcRole}>{item.title}</p>
            <p className={styles.jcExpereince}>
              {item.experience} <br />{item.jobType} <br/> Gurgaon
            </p>
          </div>
          <Link href="#job_desc"><button className={styles.applyBtn}>Apply Now <BsArrowRight/></button></Link>
        </div>
      </div>
    </div>
  );
}
