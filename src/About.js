import React, { useState } from "react";
import "./About.css"
const About = () => {
  const [showSection1, setShowSection1] = useState(true);
  const [showSection2, setShowSection2] = useState(true);

  const toggleSection1 = () => {
    setShowSection1(true);
    setShowSection2(true);
  };
  const toggleSection2 = () => {
    setShowSection1(true);
    setShowSection2(false);
  };
  const toggleSection3 = () => {
    setShowSection1(false);
    setShowSection2(true);
  };
  const toggleSection4 = () => {
    setShowSection1(false);
    setShowSection2(false);
  };

  return (
    <div id="about">
      <div className="px-4 py-5 my-5 text-center">
        <h2>About Us</h2>
        <div className="about-vit-buttons" style={{display:'flex',justifyContent:'space-evenly', marginBottom: '20px'}}>
          <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
            <button
              type="button"
              className="btn btn-primary btn-lg px-4 gap-3"
              style={{
                backgroundColor: "transparent",
                border: "none",
                fontSize: "25px",
                border: "1px solid white",
                borderRadius: "40px",
                paddingBottom: "10px",
                color: "white",
                fontFamily:"Rockwell",
                padding: "10px 20px",
                textAlign: "center", 
              }}
              onClick={toggleSection1}
              onMouseEnter={(e) => {
                e.target.style.color = "black";
                e.target.style.backgroundColor = "white";
              }}
              onMouseLeave={(e) => {
                e.target.style.color = "white";
                e.target.style.backgroundColor = "transparent";
              }}
            >
              About VIT
            </button>
          </div>
          <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
            <button
              type="button"
              className="btn btn-primary btn-lg px-4 gap-3"
              style={{
                backgroundColor: "transparent",
                border: "none",
                fontSize: "25px",
                border: "1px solid white",
                borderRadius: "40px",
                paddingBottom: "10px",
                color: "white",
                fontFamily:"Rockwell",
                padding: "10px 20px",
                textAlign: "center",
              }}
              onClick={toggleSection2}
              onMouseEnter={(e) => {
                e.target.style.color = "black";
                e.target.style.backgroundColor = "white";
              }}
              onMouseLeave={(e) => {
                e.target.style.color = "white";
                e.target.style.backgroundColor = "transparent";
              }}
            >
              Student Welfare
            </button>
          </div>
        </div>
        <div className="col-lg-6 mx-auto" style={{width:'100%', display: 'flex', flexDirection:'column' , alignItems:'center', justifyItems:'center'}}>
          {showSection1 && showSection2 && (
            <div>
              <p className="lead mb-4" style={{fontFamily:'Rockwell', border: "2px solid white",padding:'2%', backgroundColor: "transparent" , borderRadius: "30px", width: '80%',marginLeft: '10%',
                paddingBottom: "10px",}}>
              Vellore Institute of Technology (VIT), a renowned institution in higher education and engineering, is situated in Vellore, India. With a history spanning over 35 years, it consistently maintains international standards. VIT has received recognition from the National Institutional Ranking Framework (NIRF) under the Ministry of Human Resources.
              </p>
            </div>
          )}
          {showSection1 && !showSection2 && (
            <div>
              <p className="lead mb-4" style={{fontFamily:'Rockwell', border: "2px solid white",padding:'2%', backgroundColor: "transparent" , borderRadius: "30px",width: '80%',marginLeft: '10%',
                paddingBottom: "10px",}}>
              The Office of Students Welfare carries out various activities which pique the various interests of students and ensures that every student finds an environment where they can learn and grow, together. With over 151 clubs and chapters which each have its unique set of initiatives and events, the amount of exposure is immense and unparalleled.
              </p>
            </div>
          )}
          {!showSection1 && showSection2 && (
            <div>
              <p className="lead mb-4" style={{fontFamily:'Rockwell', border: "2px solid white",padding:'2%', backgroundColor: "transparent" , borderRadius: "30px", width: '80%',marginLeft: '10%',
                paddingBottom: "10px",}}>
                  RoboVITics is a community of passionate tech enthusiasts, all driven by a common quest for knowledge and the pursuit of excellence. As the official Robotics Club of VIT Vellore, the club supports and fosters interest in various aspects in the field of robotics. This is achieved by providing hands-on workshops, informative seminars, and engaging practical sessions. Together, we embark on groundbreaking projects and cultivate accomplished teams, resulting in a wealth of experience and a rich tapestry of achievements.
              </p>
            </div>
          )}
          {!showSection1 && !showSection2 && (
            <div>
              <p className="lead mb-4" style={{fontFamily:'Rockwell', border: "2px solid white",padding:'2%', backgroundColor: "transparent" , borderRadius: "30px",width: '80%',marginLeft: '10%',
                paddingBottom: "10px",}}>
              Vortex360 is an event organised by RoboVITics and powered by
              AutoDesk is a 3-day CAD modelling design-a-thon where participants
              think outside the box and come up with amazing designs and expand
              the horizons of innovation to solve real-world problems.
              Vortex360 merges creativity and precision, offering a range of opportunities from CAD modeling to advanced business software.          
              </p>
            </div>
          )}
        </div>
        <div className="about-vit-buttons" style={{display:'flex',justifyContent:'space-evenly', marginBottom: '1px'}}>
          <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
            <button
              type="button"
              className="btn btn-primary btn-lg px-4 gap-3"
              style={{
                backgroundColor: "transparent",
                border: "none",
                fontSize: "25px",
                border: "1px solid white",
                borderRadius: "40px",
                paddingBottom: "10px",
                color: "white",
                fontFamily:"Rockwell",
                padding: "10px 20px",
                textAlign: "center", 
              }}
              onClick={toggleSection3}
              onMouseEnter={(e) => {
                e.target.style.color = "black";
                e.target.style.backgroundColor = "white";
              }}
              onMouseLeave={(e) => {
                e.target.style.color = "white";
                e.target.style.backgroundColor = "transparent";
              }}
            >
              About RoboVITics
            </button>
          </div>
          <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
            <button
              type="button"
              className="btn btn-primary btn-lg px-4 gap-3"
              style={{
                backgroundColor: "transparent",
                border: "none",
                fontSize: "25px",
                border: "1px solid white",
                borderRadius: "40px",
                paddingBottom: "10px",
                color: "white",
                fontFamily:"Rockwell",
                padding: "10px 20px",
                textAlign: "center",
              }}
              onClick={toggleSection4}
              onMouseEnter={(e) => {
                e.target.style.color = "black";
                e.target.style.backgroundColor = "white";
              }}
              onMouseLeave={(e) => {
                e.target.style.color = "white";
                e.target.style.backgroundColor = "transparent";
              }}
            >
              About Vortex360
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;