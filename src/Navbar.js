import { motion, useAnimation, useInView } from "framer-motion";
import React, { useEffect, useRef } from "react";
import { HashLink as Link } from "react-router-hash-link";
import Robovitics from "./RoboVITics_White_Logo.png"
import VIT from "./VIT_LOGO_WHITE.png"
const Navbar = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  if (inView) {
    if (window.innerWidth < 1000) {
      for (var i = 0; i < 6; i = i + 1) {
        document
          .querySelectorAll(".link")
          [i].addEventListener("click", function () {
            document.querySelector(".navbar-toggler").click();
          });
      }
      document.querySelector(".VIT1").style.display="none"
      document.querySelector(".RoboVITics1").style.display="none"
      document.querySelector(".VIT2").style.display="block"
      document.querySelector(".RoboVITics2").style.display="block"
    } else {
      if (document.getElementById("home")) {
        const nav = document.getElementById("home");
        var lastScrollY = window.scrollY;
        window.addEventListener("scroll", () => {
          if (lastScrollY <= window.scrollY) {
            controls.start("up");
          } else {
            controls.start("down");
          }
          lastScrollY = window.scrollY;
        });
      }
    }
  }
  const controls = useAnimation();
  useEffect(() => {
    setTimeout(() => {
      controls.start("visible");
    }, 2000);
  });

  return (
    <div id="home">
      <motion.nav
        class="navbar navbar-expand-lg navbar-dark fixed-top bg-none"
        id="home"
        ref={ref}
        variants={{
          hidden: { opacity: 0, y: -30 },
          visible: { opacity: 1, y: 0 },
          up: {
            y: -90,
            transition: {
              duration: 0,
            },
          },
          down: {
            y: -2,
            transition: {
              duration: 0,
            },
          },
        }}
        initial="hidden"
        animate={controls}
        transition={{ duration: 1 }}
      >
        <div class="container-fluid">
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarCollapse"
            aria-controls="navbarCollapse"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarCollapse">
            <ul class="navbar-nav me-auto mb-2">
              <div className="VIT1">
                <img src={VIT} style={{width:"200px",position:"absolute",top:"10px",left:"10px"}}/>
              </div>
              <li class="nav-item">
                <Link to="#home" class="link">
                  Home
                </Link>
              </li>
              <li class="nav-item">
                <Link to="#domains" class="link">
                  Tracks
                </Link>
              </li>
              <li class="nav-item">
                <Link to="#timeline" class="link">
                  Timeline
                </Link>
              </li>
              {/* <div className="mainIcon">
                <div className="mainLogo">
                  <a
                    class="navbar-brand"
                    href="https://robovitics.in/"
                    target="_blank"
                  >
                    <img
                      src="./robvitcs logo website-3.png"
                      alt=""
                      height="40px"
                    />
                  </a>
                </div>
              </div> */}
              <li class="nav-item">
                <Link to="#prizes" class="link">
                  Prizes
                </Link>
              </li>
              <li class="nav-item">
                <Link to="#faqs" class="link">
                  FAQs
                </Link>
              </li>
              <li class="nav-item">
                <Link to="#contact" class="link">
                  Contact Us
                </Link>
              </li>
              <div className="RoboVITics1">
                <img src={Robovitics} style={{width:"200px",position:"absolute",top:"20px",right:"20px"}}/>
              </div>
            </ul>
          </div>
        </div>
      </motion.nav>
      {/* <div className="pls">
        <motion.div
          className="mainIcon2"
          variants={{
            hidden: { opacity: 0, y: -30 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          animate={controls}
          transition={{ duration: 1 }}
        >
          <div className="mainLogo2">
            <a class="navbar-brand" href="#">
              <img src="./robvitcs logo website-3.png" alt="" height="40px" />
            </a>
          </div>
        </motion.div>
      </div> */}
      <div className="VIT2" style={{display:"none"}}>
                <img src={VIT} style={{width:"200px",position:"absolute",top:"30px",left:"60px",zIndex:"1"}}/>
              </div>
              <div className="RoboVITics2" style={{display:"none"}}>
                <img src={Robovitics} style={{width:"200px",position:"absolute",top:"400px",left:"70px",zIndex:"1"}}/>
              </div>
    </div>
  );
};

export default Navbar;
