import { BsArrowRight } from "react-icons/bs";
import styles from "./contactBar.module.css"
export default function ContactBar() {
  return (
    <div className="bgNew">
      <div className="container">
        <div className={styles.contactus}>
          <div className={styles.contactusText}>
            Give wings to your business <br /> with our out-of-the-box solutions
          </div>
          <div className="btn-white">
            <p>Contact Us</p>
            <span>
              <BsArrowRight />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
