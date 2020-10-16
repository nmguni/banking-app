import React, { useState } from "react";
import Navbar from "../components/Navbar";
import SideBar from "../components/SideBar";
import HeroSection from "../components/HeroSection";
import InfoSection from "../components/inforSection";
import {
  HomeObjOne,
  HomeObjTwo,
  HomeObjThree,
} from "../components/inforSection/Data";

const Home = () => {
  // set state to false
  const [isOpen, setIsOpen] = useState(false);

  // set state to true for toggle
  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <SideBar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <HeroSection />
      <InfoSection {...HomeObjOne} />
      <InfoSection {...HomeObjTwo} />
      <InfoSection {...HomeObjThree} />
    </>
  );
};

export default Home;
