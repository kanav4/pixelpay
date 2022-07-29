import FaceCard from "../Cards/faceCard";
import styles from "./ourTeam.module.css";
import vl from '/Assets/vaibhav.png'
import vanya from '/Assets/vanya.png'
import kaju from '/Assets/abhi.png'

export default function OurTeam() {
  return (
    <div className={styles.teamContainer}>
      <div className="container">
        <div className="sectionHeader">
        <div className="sectionName textCenter">
              <p>Our Team</p>
              <svg
                className="sectionBorder"
                height="14"
                viewBox="0 0 186 14"
                fill="none"
              >
                <rect width="486" height="14" fill="#D1CDFF" />
              </svg>
            </div>
          <h2 className="sectionTitle textCenter">
            We're a team that's always willing to go the extra mile
          </h2>
        </div>
        <div className={styles.faceCardContainer}>
          <FaceCard name={"Vaibhav Lall"} des={"Founder"} person={vl} />
          <FaceCard name={"Vanya Gambhir"} des={"CEO"} person={vanya} />
          <FaceCard name={"Abhishek Sharma"} des={"Tech Lead"} person={kaju} />
        </div>
      </div>
    </div>
  );
}
