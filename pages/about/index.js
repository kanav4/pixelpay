import React, { useState } from "react";
import Nav from "../../components/header/header";
import HeroBanner from "../../components/HeroBanner/HeroBanner";
import AboutBanner from "/Assets/blogBanner.png";
import styles from "./aboutpage.module.css";
import WhyUsCard from "../../components/Cards/aboutWhyUs/whyUsCard";
import { BsArrowRight } from "react-icons/bs";
import FaceCard from "../../components/Cards/faceCard";
import Abhishek from "/Assets/Profile photos/abhishek.png";
import Anuj from "/Assets/Profile photos/anuj.png";
import Swati from "/Assets/Profile photos/swati.png";
import Parth from "/Assets/Profile photos/parth.png";
import Aastha from "/Assets/Profile photos/aastha.png";
import Vishal from "/Assets/Profile photos/vishal.png";
import Tarun from "/Assets/Profile photos/tarun.png";
import History from "../../components/history";
import OurValues from "../../components/ourValues/ourValues";
import Footer from "../../components/footer";
import GetInTouch from "../../components/getInTouch/getInTouch";
import getInTouchImg from "/Assets/getintouch.png"
import ContactBar from "../../components/contactBar/contactBar";


export default function AboutPage() {
  

  return (
    <div>
      <Nav />
      <HeroBanner
        HeroImage={AboutBanner}
        HeroHeading={"About Us"}
        HeroText={
          "Scaling your business with efficient digital marketing strategies"
        }
      />
      <History />
      <div className="bg-blue">
        <div className="container">
          <div className={styles.whyUsAbout}>
            <div className="sectionHeader">
              <div className="sectionName textCenter">
                <p>Why Us</p>
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
                Giving your business the boost it needs to succeed
              </h2>
            </div>
            <div className={styles.whyUs}>
              <WhyUsCard
                title={"Data Driven Approach"}
                content={"Analyzing data is at the heart of what we do"}
              />
              <WhyUsCard
                title={"Innovative thinking"}
                content={
                  "Constantly thinking outside the box to come up with new ideas"
                }
              />
              <WhyUsCard
                title={"Industry experts"}
                content={
                  "Embracing change and always staying ahead of the curve"
                }
              />
              <WhyUsCard
                title={"Collaborative outlook"}
                content={
                  "Fostering a collaborative environment where great minds can work together"
                }
              />
              <WhyUsCard
                title={"Flexible solutions"}
                content={"Tailoring our services to fit your specific needs"}
              />
              <WhyUsCard
                title={"Proven track record"}
                content={"Bringing over a decade of experience to the table"}
              />
            </div>
          </div>
        </div>
      </div>
     <ContactBar/>
      <OurValues />
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
              Meet the talented individuals who keep our ship sailing smoothly
            </h2>
          </div>
          <div className={styles.teamMembers1}
          >
            <div className={styles.faceCardContainer}>
              <FaceCard
                name={"Abhishek Sharma"}
                des={"Tech Lead"}
                person={Abhishek}
              />
              <FaceCard
                name={"Anuj Mahajan"}
                des={"Marketing Lead"}
                person={Anuj}
              />
              <FaceCard
                name={"Swati Shukla"}
                des={"Content Lead"}
                person={Swati}
              />
            </div>
            <div className={styles.teamMembers2}
            >
              <FaceCard name={"Tarun Rao"} des={"SEO Lead"} person={Tarun} />
              <FaceCard
                name={"Aastha Nagpal"}
                des={"People Function Lead"}
                person={Aastha}
              />
              <FaceCard
                name={"Parth Dixit"}
                des={"Marketing Lead"}
                person={Parth}
              />
              <FaceCard
                name={"Vishal Khandelwal"}
                des={"Design Lead"}
                person={Vishal}
              />
            </div>

            <div className="btn-purple">
              <p>Join Our Team</p>{" "}
              <span>
                <BsArrowRight />
              </span>
            </div>
          </div>
        </div>
      </div>
      <GetInTouch
        sectionName={"Get in touch"}
        sectionTitle={"Need help driving traffic to your website?"}
        sectionText={
          <p>
            Looking to improve your conversion rate? Our team of digital
            marketing experts can help.
            <br />
            Contact us today to learn more about our services and how we can
            help scale your business to the next level.
          </p>
        }
        sectionImg={getInTouchImg}
        sectionBtn={"Let's work together"}
      />
      <Footer />
    </div>
  );
}
