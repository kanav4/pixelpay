import React from 'react';
import HeroBanner from '../components/HeroBanner/HeroBanner';
import Nav from '../components/header/header';
import ContactImage from '../public/Assets/contactimg.png';
import BeClient from '../components/beClient/beClient';
import Footer from '../components/footer';
import ContactFormm from '../components/ContactFormm';

export default function ContactUs() {
  return (
    <div>
      <Nav />
      <HeroBanner
        HeroImage={ContactImage}
        HeroHeading={'Contact'}
        HeroText={
          'We’ll Help You Get Your Digital Marketing Strategy off the Ground'
        }
      />
      <BeClient />
      <ContactFormm />
      <Footer />
    </div>
  );
}
