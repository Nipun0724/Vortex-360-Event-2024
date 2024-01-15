import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
import { motion, animate, useInView, useAnimation } from "framer-motion";
const LandingPage = () => {
  const threeContainerRef = useRef(null);
  const inView = useInView(threeContainerRef, { once: true });
  const controls = useAnimation();
  if (inView) {
    controls.start("visible");
  }
  useEffect(() => {
    const scene = new THREE.Scene();
    scene.background = new THREE.Color("#000");
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.getElementById("three-container").appendChild(renderer.domElement);
    const loader = new GLTFLoader();
    loader.load(
      "/skull_salazar_downloadable/scene.gltf",
      (gltf) => {
        const model = gltf.scene;
        model.scale.set(2, 2, 2);
        scene.add(model);
        camera.position.set(0, 2 * 2, 5 * 2);
        const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
        scene.add(ambientLight);
        const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
        directionalLight.position.set(0, 1, 0);
        scene.add(directionalLight);
        const animate = function () {
          requestAnimationFrame(animate);
          model.rotation.y += 0.01;

          renderer.render(scene, camera);
        };
        renderer.setSize(
          threeContainerRef.current.clientWidth - 20,
          threeContainerRef.current.clientHeight
        );
        const handleResize = () => {
          const newWidth = window.innerWidth;
          const newHeight = window.innerHeight;

          camera.aspect = newWidth / newHeight;
          camera.updateProjectionMatrix();

          renderer.setSize(newWidth - 20, newHeight);
        };

        window.addEventListener("resize", handleResize);
        animate();
        return () => {
          window.removeEventListener("resize", handleResize);
          document
            .getElementById("three-container")
            .removeChild(renderer.domElement);
        };
      },
      undefined
    );
  }, []);

  return (
    <motion.div
      id="three-container"
      ref={threeContainerRef}
      style={{
        backgroundColor: "#000",
        width: "100%",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "-230px",
        paddingRight: "0px",
      }}
      variants={{
        hidden: { scale: 0.6 },
        visible: { scale: 1 },
      }}
      initial="hidden"
      animate={controls}
      transition={{ duration: 2 }}
    ></motion.div>
  );
};

export default LandingPage;
