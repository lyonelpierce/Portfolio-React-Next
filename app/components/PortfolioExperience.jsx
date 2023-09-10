import { OrbitControls, ContactShadows, Environment } from "@react-three/drei";
import { Mac } from "./Mac";
import { Suspense } from "react";

export const PortfolioExperience = () => {
  return (
    <>
      <Suspense fallback={null}>
        <group rotation={[0, Math.PI, 0]} position={[0, 0, 0]}>
          <Mac scale={1} />
        </group>
        <Environment preset="city" />
      </Suspense>
      <ContactShadows position={[0, -4.5, 0]} scale={20} blur={2} far={4.5} />
      <OrbitControls
        enablePan={false}
        enableZoom={false}
        minPolarAngle={Math.PI / 2.2}
        maxPolarAngle={Math.PI / 2.2}
      />
    </>
  );
};
