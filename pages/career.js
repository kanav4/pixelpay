import React, { useState } from 'react';
import Footer from '../components/footer';
import Nav from '../components/header/header';
import JobOpening from '../components/JobOpening/JobOpening';
import HeroBanner from '../components/HeroBanner/HeroBanner';
import Application from '../components/Application';

export default function Career({data}) {
  const [state, setState] = useState(0);
  return (
    <>
      <Nav />
      <HeroBanner
        HeroImage="/Assets/get-started.png"
        HeroHeading={'Career'}
        HeroText={
          " Be a Part of a Team That’s Constantly Innovating and Pushing Boundaries."
        }
      />
      <JobOpening data={data.jobs} state={state} setState={setState} />
      <Application />
      <Footer />
    </>
  );
}
export async function getStaticProps() {

  const res = await fetch(
  'https://mcusc4mgvi.execute-api.ap-south-1.amazonaws.com/production/v1/jobdescriptions'
  )
  const data = await res.json()

  return {
    props: {
      data,
    },
    revalidate: 600,
  };
}