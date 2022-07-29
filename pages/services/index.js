import React from "react";
import GetInTouch from "../../components/getInTouch/getInTouch";
import Nav from "../../components/header/header";
import HeroBanner from "../../components/HeroBanner/HeroBanner";
import ServiceImg from "/Assets/Target.png";
import man from "/Assets/man.png";
import { BsArrowRight } from "react-icons/bs";
import TechWeUse from "../../components/techWeUse";
import styles from "./servicePage.module.css";
import WhyUsCard from "../../components/Cards/aboutWhyUs/whyUsCard";
import Footer from '../../components/footer'
import ContactBar from "../../components/contactBar/contactBar";
import OurValues from "../../components/ourValues/ourValues";

export default function ServicePage() {
  return (
    <div>
      <Nav />
      <HeroBanner
        HeroHeading={"Our Services"}
        HeroText={"We are Multi Channel Digital Marketing Experts"}
        HeroImage={ServiceImg}
      />
      <GetInTouch
        sectionName={"Services"}
        sectionTitle={"Your Brand Our Focus"}
        sectionText={
          <p>
            Our highly experienced team specializes in delivering bespoke
            digital marketing campaigns that are designed to achieve your
            desired objectives. We believe that a holistic and integrated
            approach is necessary to achieve the desired results in today’s
            competitive digital landscape. That’s why we work with you, for you
          </p>
        }
        sectionImg={man}
        sectionBtn={"Join Us"}
      />
      <div className="bg-blue">
        <OurValues />        
      </div>
      <TechWeUse />
     <ContactBar/>
      <div className="bg-blue">
        <div className="container">
          <div className={styles.whyUsAbout}>
            <div className="sectionHeader">
              <div className="sectionName textCenter">
                <p>Technology</p>
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
                Pour rocket fuel on your revenue
              </h2>
            </div>
            <div className={styles.whyUs}>
              <WhyUsCard
                title={"Open Source"}
                content={
                  "Provides better stability, security, and a proper functionality to have control over your brand with ease. Raise prospects with highly personalized content"
                }
              />
              <WhyUsCard
                title={"Open Source"}
                content={
                  "Provides better stability, security, and a proper functionality to have control over your brand with ease. Raise prospects with highly personalized content"
                }
              />
              <WhyUsCard
                title={"Open Source"}
                content={
                  "Provides better stability, security, and a proper functionality to have control over your brand with ease. Raise prospects with highly personalized content"
                }
              />
              <WhyUsCard
                title={"Future Proof"}
                content={
                  "Provides better stability, security, and a proper functionality to have control over your brand with ease. Raise prospects with highly personalized content"
                }
              />
              <WhyUsCard
                content={
                  "Provides better stability, security, and a proper functionality to have control over your brand with ease. Raise prospects with highly personalized content"
                }
              />
              <WhyUsCard
                content={
                  "Provides better stability, security, and a proper functionality to have control over your brand with ease. Raise prospects with highly personalized content"
                }
              />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
