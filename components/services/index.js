import ServiceCard from "../Cards/ServiceCard/ServiceCard";
import styles from "./services.module.css";
import MediaBuyingIco from "../../public/Assets/4-3.png";
import eCommerceIco from "../../public/Assets/megaphone-dynamic-gradient.png";
import LeadGenIco from "../../public/Assets/video-camera-dynamic-gradient-min.png";
import Carousel from 'react-elastic-carousel';
import { BsArrowRight } from "react-icons/bs";
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
              From SEO to PPC and everything in between, we offer a range of
              services
            </h2>
          </div>
          <div className="container-carousel">
            <Carousel breakPoints={breakPoints}>
              <ServiceCard ServIcon={MediaBuyingIco} index={1} title={"Performance Marketing"} content={"Razor-sharp strategies to get you seen by your target audience when it matters most"} />
              <ServiceCard ServIcon={eCommerceIco} index={2} title={"E-Commerce"} content={"Increasing digital footfall for your brand with a holistic top-of-funnel strategy"} />
              <ServiceCard ServIcon={LeadGenIco} index={3} title={"Media Buying"} content={"Purchasing ad space to reach your target audience through cost-effective advertising"} />
              <ServiceCard ServIcon={MediaBuyingIco} index={4} title={"Lead Generation"} content={"Attracting and nurturing prospects until they’re ready to buy what you’re selling"} />
              <ServiceCard ServIcon={eCommerceIco} index={5} title={"Content Marketing"} content={"Creating and distributing engaging content that establishes you as an authority  "} />
              <ServiceCard ServIcon={LeadGenIco} index={6} title={"Search Engine Optimization"} content={"Get to the top of Google with our proven SEO strategies and expert advice"} />
              <ServiceCard ServIcon={MediaBuyingIco} index={7} title={"Martech"} content={"Leveraging technology to automate and optimize marketing processes "} />
            </Carousel>

          </div>
        </div>
      </div>
     <ContactBar/>
     
    </>
  );
}
