import { OrbitControls } from "@react-three/drei";
import { useState, useEffect } from "react";
import { Hero } from "./Hero";

export const Experience = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const heroScale = isMobile ? 2.8 : 2.2;
  const heroPosition = isMobile ? [0.5, -2, 0] : [0.3, -1.7, 0];

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <ambientLight intensity={2.5} />
      <directionalLight
        intensity={3}
        position={[-5, 5, 5]}
        castShadow
        shadow-mapSize={2048}
        shadow-bias={-0.0001}
      />
      <OrbitControls enableZoom={false} />
      <Hero scale={heroScale} position={heroPosition} />
    </>
  );
};
