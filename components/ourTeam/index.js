import Link from "next/link";
import FaceCard from "../Cards/faceCard";
import styles from "./ourTeam.module.css";

export default function OurTeam() {
  return (
    <div className={styles.teamContainer}>
      <div className="container">
        <div className="sectionHeader">
        <div className="sectionName textCenter">
              <p>Our Team</p>
            </div>
          <h2 className="sectionTitle textCenter">
          We’re a Team That’s Always Willing to Go the Extra Mile
          </h2>
        </div>
        <div className={styles.faceCardContainer}>
          <Link href="https://in.linkedin.com/in/vaibhavlall"><a target="_blank" rel="nofollow"><FaceCard name={"Vaibhav Lall"} des={"Founder"} person='/Assets/vaibhav.png' /></a></Link>
          <Link href="https://in.linkedin.com/in/vanya-gambhir"><a target="_blank" rel="nofollow"> <FaceCard name={"Vanya Gambhir"} des={"CEO"} person='/Assets/vanya.png' /></a></Link>
          <Link href="https://in.linkedin.com/in/abhishek-sharma-01a6ba105"><a target="_blank" rel="nofollow">  <FaceCard name={"Abhishek Sharma"} des={"Tech Lead"} person='/Assets/abhi.png' /></a></Link>
        </div>
      </div>
    </div>
  );
}
