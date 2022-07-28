import { BsArrowRight } from "react-icons/bs";
import styles from "./getInTouch.module.css";
import Image from "next/image"

export default function GetInTouch({sectionName, sectionTitle, sectionText, sectionImg, sectionBtn}) {
  return (
    <div>
      <div className="container">
        <div className={styles.getInTouch}>
          <div className={styles.content}>
            <div className={styles.headings}>
              <div className="sectionName textCenter">
                <p>{sectionName}</p>
                <svg
                  className="sectionBorder"
                  height="14"
                  viewBox="0 0 186 14"
                  fill="none"
                >
                  <rect width="486" height="14" fill="#D1CDFF" />
                </svg>
              </div>
              <h2 className="sectionTitle">
                {sectionTitle}
              </h2>
            </div>
            <div className={styles.text}>
            {sectionText}
            </div>
            <div className="btn-purple">
             {sectionBtn}
              <span>
                <BsArrowRight />
              </span>
            </div>
          </div>
          <div className={styles.aboutImg}>
            <Image
              src={sectionImg}
              alt="Picture of the author"
              className={styles.image}
              layout="fill"
              objectFit="contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
