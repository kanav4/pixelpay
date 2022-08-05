import { BsArrowRight } from "react-icons/bs";
import styles from "./getInTouch.module.css";
import Image from "next/image"

export default function GetInTouch({sectionName, sectionTitle, sectionText, sectionImg, sectionBtn}) {
  return (
      <div className="container">
        <div className={styles.getInTouch}>
          <div className={styles.content}>
            <div className={styles.headings}>
              <div className="sectionName">
                <p>{sectionName}</p>
              </div>
              <h2 className="sectionTitle">
                {sectionTitle}
              </h2>
            </div>
            <div className={styles.text}>
            {sectionText}
            </div>
            <a href="/contact">
            <div className="btn-purple">
             {sectionBtn}
              <span>
                <BsArrowRight />
              </span>
            </div>
            </a>
          </div>
          <div className={styles.aboutImg}>
            <Image
              src={sectionImg}
              alt="Picture of the author"
              className={styles.image}
              layout="fill"
              width={100}
              height={100}
              objectFit="contain"
            />
          </div>
        </div>
      </div>
  );
}
