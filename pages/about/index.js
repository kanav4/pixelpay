import React, { useState } from "react";
import Nav from "../../components/header/header";
import HeroBanner from "../../components/HeroBanner/HeroBanner";
import styles from "./aboutpage.module.css";
import WhyUsCard from "../../components/Cards/aboutWhyUs/whyUsCard";
import { BsArrowRight } from "react-icons/bs";
import FaceCard from "../../components/Cards/faceCard";
import History from "../../components/history";
import OurValues from "../../components/ourValues/ourValues";
import Footer from "../../components/footer";
import GetInTouch from "../../components/getInTouch/getInTouch";
import ContactBar from "../../components/contactBar/contactBar";


export default function AboutPage() {


  return (
    <div>
      <Nav />
      <HeroBanner
        HeroImage="/Assets/blogBanner.png"
        HeroHeading={"About Us"}
        HeroText={
          "Scaling Your Business With Efficient Digital Marketing Strategies"
        }
      />
      <History />
      <div className="bg-blue">
        <div className="container">
          <div className={styles.whyUsAbout}>
            <div className="sectionHeader">
              <div className="sectionName textCenter">
                <p>Why Us</p>
              </div>

              <h2 className="sectionTitle textCenter">
              Giving Your Business the Boost It Needs to Succeed
              </h2>
            </div>
            <div className={styles.whyUs}>
              <WhyUsCard
                ServiceIcon="/Assets/Data Driven Approach.png"
                title={"Data Driven Approach"}
                content={"Analyzing data is at the heart of what we do"}
              />
              <WhyUsCard
                title={"Innovative Thinking"}
                ServiceIcon="/Assets/Innovative thinking.png"
                content={
                  "Constantly thinking outside the box to come up with new ideas"
                }
              />
              <WhyUsCard
                title={"Industry Experts"}
                
                ServiceIcon="/Assets/Industry experts.png"
                content={
                  "Embracing change and always staying ahead of the curve"
                }
              />
              <WhyUsCard
                title={"Collaborative Outlook"}
                ServiceIcon="/Assets/Collaborative outlook.png"
                content={
                  "Fostering a collaborative environment where great minds can work together"
                }
              />
              <WhyUsCard
                title={"Flexible Solutions"}
                ServiceIcon="/Assets/Flexible solutions.png"
                content={"Tailoring our services to fit your specific needs"}
              />
              <WhyUsCard
                title={"Proven Track Record"}
                ServiceIcon="/Assets/Proven track record.png"
                content={"Bringing over a decade of experience to the table"}
              />
            </div>
          </div>
        </div>
      </div>
      <ContactBar />
      <div className={styles.aboutValues}>
        <OurValues TabSectionTitle={"Our Values"} value={0} />
      </div>
      <div className={styles.teamContainer}>
        <div className="container">
          <div className="sectionHeader">
            <div className="sectionName textCenter">
              <p>Our Team</p>
            </div>
            <h2 className="sectionTitle textCenter">
            Meet the Talented Individuals Who Keep Our Ship Sailing Smoothly
            </h2>
          </div>
          <div className={styles.teamMembers1}>
            <div className={styles.faceCardContainer}>
              <FaceCard
                name={"Abhishek Sharma"}
                des={"Tech Lead"}
                person="/Assets/Abhishek.png"
              />
              <FaceCard
                name={"Anuj Mahajan"}
                des={"Marketing Lead"}
                person="/Assets/Anuj.png"
              />
              <FaceCard
                name={"Swati Shukla"}
                des={"Content Lead"}
                person="/Assets/Swati.png"
              />
            </div>
            <div className={styles.teamMembers2}>
              <FaceCard
                name={"Tarun Rao"}
                des={"SEO Lead"}
                person="/Assets/Tarun.png"
              />
              <FaceCard
                name={"Aastha Nagpal"}
                des={"People Function Lead"}
                person="/Assets/Aastha.png"
              />
              <FaceCard
                name={"Parth Dixit"}
                des={"Marketing Lead"}
                person="/Assets/Parth.png"
              />
              <FaceCard
                name={"Vishal Khandelwal"}
                des={"Design Lead"}
                person="/Assets/Vishal.png"
              />
            </div>
            <a href="/career">
              <div className="btn-purple">
                <p>Join Our Team</p>{" "}
                <span>
                  <BsArrowRight />
                </span>
              </div>
            </a>
          </div>
        </div>

      </div>
      <GetInTouch
        sectionName={"Get in Touch"}
        sectionTitle={"Need Help Driving Traffic to Your Website?"      }
        sectionText={<>
          <p>
            Looking to improve your conversion rate? Our team of digital
            marketing experts can help.
            </p>
            <p> Contact us today to learn more about our services and how we can
            help scale your business to the next level.
          </p>
          </> }
        sectionImg="/Assets/imagesabout.png"
        sectionBtn={"Let's work together"}
      />
      <Footer />
    </div>
  );
}
