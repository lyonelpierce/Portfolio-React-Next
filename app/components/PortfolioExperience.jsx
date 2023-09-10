import {
  Html,
  ContactShadows,
  Environment,
  PresentationControls,
} from "@react-three/drei";
import { Mac } from "./Mac";
import { Suspense } from "react";

export const PortfolioExperience = () => {
  return (
    <>
      <Suspense fallback={null}>
        <group rotation={[0, Math.PI, 0]} position={[0, 0, 0]}>
          <PresentationControls
            config={{ mass: 2, tension: 500 }}
            snap={{ mass: 4, tension: 1500 }}
            rotation={[0, 0.5, 0]}
            polar={[-Math.PI / 3, Math.PI / 3]}
            azimuth={[-Math.PI / 1.4, Math.PI / 2]}
          >
            <Mac scale={1} />
          </PresentationControls>
        </group>
        <Environment preset="city" />
      </Suspense>
      <ContactShadows position={[0, -4.5, 0]} scale={20} blur={2} far={4.5} />
    </>
  );
};
