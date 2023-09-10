import { OrbitControls } from "@react-three/drei";
import { Head } from "./Head";

export const HeadExperience = () => {
  return (
    <>
      <ambientLight intensity={2.5} />
      <directionalLight
        intensity={3}
        position={[45, 15, 50]}
        castShadow
        shadow-mapSize={2048}
        shadow-bias={-0.0001}
      />
      <OrbitControls enableZoom={false} />
      <Head scale={2} position={[0, -2.2, 0]} rotation={[0, -10.2, 0]} />
    </>
  );
};
