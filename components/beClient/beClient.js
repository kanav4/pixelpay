import ContactCard from "../Cards/contactCard/ContactCard";
import styles from "./beClient.module.css";
import LocationIcon from "../../public/Assets/location.png";
import EmailIcon from "../../public/Assets/mail.png";
import BellIcon from "../../public/Assets/bell.png";
import ScreenIcon from "../../public/Assets/screen.png";
import { MdAmpStories } from "react-icons/md";
import Application from "./Application";

export default function BeClient() {
  return (
    <>
      <div className={styles.beClient}>
        <div className="container">
          <div className="sectionHeader">
          <div className="sectionName textCenter">
              <p>Contact Us</p>
              <svg
                className="sectionBorder"
                height="14"
                viewBox="0 0 186 14"
                fill="none"
              >
                <rect width="486" height="14" fill="#D1CDFF" />
              </svg>
            </div>
            <h2 className="sectionTitle textCenter">Become a Client </h2>
          </div>
          <div className={styles.contactGrid}>
            <div className={styles.contactDetail}>
              <ContactCard
                contactIcon={LocationIcon}
                ContactDetail={"Location"}
                ContactInfo={
                  <span>
                    7th Floor, Awfis, <br />
                    Ambience Mall, Gurgaon
                  </span>
                }
              />
              <ContactCard
                contactIcon={EmailIcon}
                ContactDetail={"Email ID"}
                ContactInfo={
                  <span>
                    nfo@pixepaymedia.com <br />
                    hr@pixelpaymedia.com
                  </span>
                }
              />
              <ContactCard
                contactIcon={BellIcon}
                ContactDetail={"Phone No."}
                ContactInfo={
                  <span>
                    +91 9856 413 252 <br /> +91 8569 420 020
                  </span>
                }
              />
              <ContactCard
                contactIcon={ScreenIcon}
                ContactDetail={"Business Hours"}
                ContactInfo={
                  <span>
                    Monday - Friday <br /> 9:00 AM - 6:00 PM
                  </span>
                }
              />
            </div>
            <div className={styles.contactMap}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3506.141453295033!2d77.09419051528977!3d28.505391596574306!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d19358b009269%3A0xbf65549b8130f4b1!2sAwfis%20Gurgaon%20Ambience%20Mall!5e0!3m2!1sen!2sin!4v1658777489638!5m2!1sen!2sin"
                width="600"
                height="550"
                allowFullScreen=""
                loading="lazy"
                frameBorder="0"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.messageUs}>
        <div className="sectionHeader">
        <div className="sectionName textCenter">
              <p>Message Us</p>
              <svg
                className="sectionBorder"
                height="14"
                viewBox="0 0 186 14"
                fill="none"
              >
                <rect width="486" height="14" fill="#D1CDFF" />
              </svg>
            </div>
          <h2 className="sectionTitle textCenter">Become a Client </h2>
        </div>
        <Application />
      </div>
    </>
  );
}
