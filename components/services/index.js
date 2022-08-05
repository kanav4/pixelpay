import ServiceCard from "../Cards/ServiceCard/ServiceCard";
import styles from "./services.module.css";
import ContactBar from "../contactBar/contactBar";



export default function Service() {

  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 500, itemsToShow: 2 },
    { width: 1000, itemsToShow: 3 },
  ]

  return (
    <>
      <div className={styles.serviceContainer}>
        <div className="sectionWrap">
          <div className="sectionHeader">
            <div className="sectionName textCenter">
              <p>Our Services</p>
            </div>
            <h2 className="sectionTitle textCenter">
            From SEO to PPC and Everything in Between, We Offer a Range of Services

            </h2>
          </div>
          <div className="container-carousel">

          </div>
        </div>
      </div>
      <ContactBar />

    </>
  );
}
