import Navbar from "./Navbar";
import Domains from "./Domains";
import Timeline1 from "./Timeline";
import Sponsors from "./Sponsors";
import Prizes from "./Prizes";
import FAQs from "./FAQs";
import Contact from "./Contact";
import React from "react";
import LandingPage from "./LandingPage";
import Timer from "./Timer";
import Mouse from "./Mouse";
import Overlay from "./Overlay";
import About from "./About";

const Main = () => {
  return (
    <div>
      <Navbar />
      <LandingPage />
      <About/>
      <Domains />
      <Timeline1 />
      <Sponsors />
      <Prizes />
      <FAQs />
      <Contact />
      <Mouse />
      <Overlay />
    </div>
  );
};

export default Main;
