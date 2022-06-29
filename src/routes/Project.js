import React from 'react'
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Heroimg2 from '../components/Heroimg2';
import PricingCard from '../components/PricingCard';
import Work from '../components/Work';
const Project = () => {
  return (
    <div>
      <Navbar />
      <Heroimg2 heading="Projects." text="Some of my recent Works." />
      <Work/>
      <PricingCard/>
      <Footer/>
    </div>
  )
}

export default Project
