import React from "react";
import GetInTouch from "../../components/getInTouch/getInTouch";
import Nav from "../../components/header/header";
import HeroBanner from "../../components/HeroBanner/HeroBanner";
import TechWeUse from "../../components/techWeUse";
import styles from "./servicePage.module.css";
import WhyUsCard from "../../components/Cards/aboutWhyUs/whyUsCard";
import Footer from "../../components/footer";
import ContactBar from "../../components/contactBar/contactBar";
import OurValues from "../../components/ourValues/ourValues";

export default function ServicePage() {
  return (
    <div>
      <Nav />
      <HeroBanner
        HeroHeading={"Our Services"}
        HeroText={
          "Crafting Effective and Measurable Strategies for Scaling Brands"
        }
        HeroImage="/Assets/Target.png"
      />
      <GetInTouch
        sectionName={"What we do?"}
        sectionTitle={"We Work With You, for You"}
        sectionText={
          <p>
            We offer a full suite of digital marketing services to help you
            reach your target audience and achieve your business goals. From SEO
            and PPC to social media and content marketing, we have the
            experience and expertise to help you succeed online. To do this, we
            employ a data-driven approach to digital marketing, constantly
            testing and refining our strategies to ensure maximum ROI.
          </p>
        }
        sectionImg="/Assets/man.png"
        sectionBtn={"Partner with us"}
      />
      <div className="bg-blue">
        <OurValues TabSectionTitle={"Our Services"} value={1} />
      </div>

      <TechWeUse title={"Our Tech Stack"} content={"The technology stack we use is constantly evolving as we strive to be at the forefront of innovation"}/>
      <ContactBar />
      <div className="bg-blue">
        <div className="container">
          <div className={styles.whyUsAbout}>
            <div className="sectionHeader">
              <div className="sectionName textCenter">
                <p> Why Technology?</p>
              </div>
              <h2 className="sectionTitle">
              Stay at the Forefront of Innovation
              </h2>
            </div>
            <div className={styles.whyUs}>
              <WhyUsCard
                title={"Automation "}
                ServiceIcon="/Assets/Automation.png"
                content={"Automating processes to improve efficiency"}
              />
              <WhyUsCard
                title={"Analytics "}
                ServiceIcon="/Assets/Analytics - Copy.png"

                content={"Applying data-driven insights to marketing efforts"}
              />
              <WhyUsCard
                title={"Targeting"}
                ServiceIcon="/Assets/targetting Icons.png"
                content={"Leveraging technology for more effective targeting"}
              />
              <WhyUsCard
                title={"Personalization "}
                ServiceIcon="/Assets/Personalisation.png"

                content={
                  "Tailoring content and experiences to individual users"
                }
              />
              <WhyUsCard
                title={"Future Proofing"}
                ServiceIcon="/Assets/Future proofing.png"

                content={"Staying ahead of the curve with new technology"}
              />
              <WhyUsCard
                title={"Scalability"}
                ServiceIcon="/Assets/scaling.png"

                content={"Using technology to support growth and expansion"}
              />
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
