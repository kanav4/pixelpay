import { BsArrowRight } from "react-icons/bs";
import styles from "./contactBar.module.css"
export default function ContactBar() {
  return (
    <div className="bgNew">
      <div className="container">
        <div className={styles.contactus}>
          <div className={styles.contactusText}>
          <h3>Want to Scale Your Business?<br/>
Just Drop Us a Line.</h3>
          </div>
          <a href="/contact">
          <div className="btn-white">
            <p>Contact Us</p>
            <span>
              <BsArrowRight />
            </span>
          </div>
          </a>
        </div>
      </div>
    </div>
  );
}
