import styles from "./bigCard.module.css";
import Link from "next/link";
import {google} from '..//Assets/image 4-1.png'
export default function BigCard({ posts }) {
  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
    // posts.featured_media === 0
    //   ? ""
    //   : posts._embedded["wp:featuredmedia"][0]["source_url"];

  // var sectionStyle = {
  //   background: "url("+ pbg +")",
  //   backgroundSize: "cover",
  //   backgroundPosition: "top"
  // };

  return (
    <div className={styles.bigCard}>
      {/* <Link href={"/" + posts.slug}> */}
        <a>
          <div className={styles.overlay}>
            <div className={styles.cardImg}>
            </div>
          </div>
        </a>
      {/* </Link> */}
      <div className={styles.postContentOverlay}>
        {/* <Link href={"/" + posts.slug}> */}
          <a>
            <h3 className={styles.cardTitle}>
              {/* {capitalizeFirstLetter(posts.title.rendered)} */}
              Search Intent & SEO – Quick & Easy Guide For Beginners
            </h3>
          </a>
        {/* </Link> */}
        <div className={styles.cardMeta}>
          <span className={styles.cardTime}>8 mins read</span>
          <span className={styles.cardViews}>12k views</span>
        </div>
      </div>
    </div>
  );
}
