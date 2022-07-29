import Image from "next/image";
import styles from "./techWeUse.module.css";
import TechBanner from "/Assets/techWeUse.png";
import { BsArrowRight, BsWordpress } from "react-icons/bs";
import AWS from "/Assets/aws.png";
import Next from "/Assets/Next.png";
import Wordpress from "/Assets/Wordpress.png";
import mongoDB from "/Assets/mongoDB.png";
import Python from "/Assets/Python.png";
import GraphQL from "/Assets/GraphQL.png";

export default function TechWeUse() {
  return (
    <div className="container">
      <div className={styles.techContainer}>
        <div className={styles.text}>
          <div className="sectionHeader">
            <div className="sectionName textLeft">
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
            <h2 className="sectionTitle">Technology we use</h2>
            <p className="sectionDesc">
              We help clients stay competitive, reach new markets and augment
              shareholder value
            </p>
            <div className="btn-purple">
              <p>Join Us</p>
              <span>
                <BsArrowRight color="white" />
              </span>
            </div>
          </div>
        </div>
        <div className={styles.techImgs}>
          <div className={styles.techHover}>
            <Image src={AWS} />
          </div>
          <div className={styles.techHover}>
            <Image src={Next} />
          </div>

          <div className={styles.techHover}>
            <Image src={Wordpress} />
          </div>

          <div className={styles.techHover}>
            <Image src={mongoDB} />
          </div>

          <div className={styles.techHover}>
            <Image src={Python} />
          </div>

          <div className={styles.techHover}>
            <Image src={GraphQL} />
          </div>
        </div>
      </div>
    </div>
  );
}
