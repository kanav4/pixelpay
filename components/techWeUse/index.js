import Image from "next/image";
import styles from "./techWeUse.module.css";
import { BsArrowRight } from "react-icons/bs";

export default function TechWeUse({title, content}) {
  return (
    <div className="container">
      <div className={styles.techContainer}>
        <div className={styles.text}>
          <div className="sectionHeader">
            <div className="sectionName textLeft">
              <p>Technology</p>
            </div>
            <h2 className="sectionTitle">{title}</h2>
            <p>
            {content}
            </p>
            <a href="/contact"> 
            <div className="btn-purple">
              <p>Get in Touch</p>
              <span>
                <BsArrowRight color="white" />
              </span>
            </div>
            </a>
          </div>
        </div>
        <div className={styles.techImgs}>
          <div className={styles.techHover}>
            <Image src="/Assets/aws.png"

              alt="tech stack"
              width={40}
              height={25}
              layout="responsive"
              objectFit="contain"
            />
          </div>
          <div className={styles.techHover}>
            <Image
              src="/Assets/Next.png"
              objectFit="contain"

              alt="Next Js"
              width={40}
              height={25}
              layout="responsive"

            />
          </div>

          <div className={styles.techHover}>
            <Image src="/Assets/Wordpress.png"
              alt="wordpress"
              width={40}
              height={25}
              layout="responsive"
              objectFit="contain"

            />
          </div>

          <div className={styles.techHover}>
            <Image src="/Assets/mongoDB.png"
              alt="mongoDB"
              width={40}
              height={25}
              layout="responsive"               objectFit="contain"
              />
              
          </div>

          <div className={styles.techHover}>
            <Image src="/Assets/Python.png"
              alt="Python"
              width={40}
              height={25}
              layout="responsive"              objectFit="contain"
              />
          </div>

          <div className={styles.techHover}>
            <Image src="/Assets/GraphQL.png"
              alt="GraphQL"
              width={40}
              height={25}
              layout="responsive"               objectFit="contain"
              />
          </div>
        </div>
      </div>
    </div>
  );
}
