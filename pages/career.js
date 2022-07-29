import React, { useState } from "react";
import Footer from "../components/footer";
import Nav from "../components/header/header";
import JobDesc from "../components/JobDesc/JobDesc";
import JobOpening from "../components/JobOpening/JobOpening";
import BannerImg from "/Assets/get-started.png"
import HeroBanner from "../components/HeroBanner/HeroBanner";


export default function Career() {
  const [state,setState]=useState(0);
  return (
    <>
      <Nav />
      <HeroBanner HeroImage={BannerImg} HeroHeading={"Career"} HeroText={" We provide end to end digital marketing solutions to increase your online visibility"}/>
      <JobOpening state={state} setState={setState}/>
      <Footer/>
    </>
  );
}
