import React from "react";
import HeroBanner from "../components/HeroBanner/HeroBanner";
import Nav from "../components/header/header";
import ContactImage from "../public/Assets/contactimg.png";
import BeClient from "../components/beClient/beClient";
import Footer from "../components/footer";

export default function ContactUs() {
  return (
    <div>
      <Nav />
      <HeroBanner
        HeroImage={ContactImage}
        HeroHeading={"Contact"}
        HeroText={
          "Give wings to your business with our out-of-the-box solutions"
        }
      />
      <BeClient/>
      <Footer />
    </div>
  );
}
