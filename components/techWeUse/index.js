import Image from "next/image";
import styles from "./techWeUse.module.css";
import TechBanner from "../../public/Assets/techWeUse.png";
import { BsArrowRight } from "react-icons/bs";

export default function TechWeUse() {
  return (

    <div className="container">
      <div className={styles.techContainer}>
        <div className={styles.text}>
          <div className="sectionHeader">
          <div className="sectionName textCenter">
              <p>Technology</p>
              <svg
                className="sectionBorder"
                height="14"
                viewBox="0 0 186 14"
                fill="none"
              >
                <rect width="486" height="14" fill="#D1CDFF" />
              </svg>
            </div>
            <h2 className="sectionTitle">Frameworks and systems we use</h2>
            <p className="sectionDesc">
            We amalgamate technology with marketing to deliver digital excellence.
            </p>
            <div className="btn-purple">
              <p>Join Us</p>
              <span>
                <BsArrowRight color="white" />
              </span>
            </div>
          </div>
        </div>
        <div className={styles.aboutImg} >
          <Image
            src={TechBanner}
            alt="Picture of the author"
            className={styles.image}
            layout="fill"
            objectFit='contain'
          />
        </div>
      </div>
    </div>
  );
}
