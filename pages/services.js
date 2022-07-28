import React from "react";
import GetInTouch from "../components/getInTouch/getInTouch";
import Nav from "../components/header/header";
import HeroBanner from "../components/HeroBanner/HeroBanner";
import ServiceImg from "/public/Assets/Target.png";
import man from "/public/Assets/man.png";
import { BsArrowRight } from "react-icons/bs";

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
       <div className="bgNew">
        <div className="container" >
          <div className="contactus">
            <div className="contactusText">
              Give wings to your business <br /> with our out-of-the-box solutions
            </div>
            <div className='btn-white'>
              <p>Contact Us</p> <span><BsArrowRight /></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
