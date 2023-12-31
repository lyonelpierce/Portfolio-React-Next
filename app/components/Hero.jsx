import React, { useRef, useEffect, useState } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import * as THREE from "three";

export function Hero(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("/hero.glb");
  const { actions, names } = useAnimations(animations, group);

  const [video] = useState(() => {
    const vid = document.createElement("video");
    vid.src = "/matrix.mp4";
    vid.crossOrigin = "Anonymous";
    vid.loop = true;
    vid.muted = true;
    vid.play();
    return vid;
  });

  useEffect(() => {
    actions[names[66]].reset().fadeIn(0.5).play();
    // actions[names[42]].reset().fadeIn(0.5).play();
  });
  0;
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group
          name="RGB_keyboard"
          position={[0.02, 0.68, 0.66]}
          rotation={[Math.PI, 0, Math.PI]}
          scale={0.38}
        >
          <group
            name="Cube007"
            position={[0, 0.02, 0.05]}
            rotation={[0.05, 0, 0]}
            scale={0.21}
          >
            <mesh
              name="Cube003_1"
              geometry={nodes.Cube003_1.geometry}
              material={materials["Material.004"]}
            />
            <mesh
              name="Cube003_2"
              geometry={nodes.Cube003_2.geometry}
              material={materials["Material.014"]}
            />
            <mesh
              name="Cube008"
              geometry={nodes.Cube008.geometry}
              material={materials["Material.005"]}
              position={[0.02, 0.13, -0.06]}
              rotation={[-1.58, 0, 0]}
              scale={[1.21, 1, 3.25]}
            />
            <mesh
              name="Cube009"
              geometry={nodes.Cube009.geometry}
              material={materials["Material.007"]}
              position={[2.54, 0.31, 0.68]}
              rotation={[-1.57, 0, 0]}
              scale={[0.08, 0.09, 0.01]}
            />
            <mesh
              name="Cube020"
              geometry={nodes.Cube020.geometry}
              material={materials["Material.004"]}
              position={[-2.11, 0.25, -0.14]}
              rotation={[-1.58, 0, 0]}
              scale={[1.21, 1, 0.61]}
            />
            <mesh
              name="Cylinder005"
              geometry={nodes.Cylinder005.geometry}
              material={materials["Material.025"]}
              position={[-1.98, 0.25, -1.27]}
              scale={0.03}
            />
            <mesh
              name="Cylinder006"
              geometry={nodes.Cylinder006.geometry}
              material={materials["Material.023"]}
              position={[1.87, 0.25, -1.33]}
              scale={[0.02, 0.03, 0.02]}
            />
            <mesh
              name="Cylinder007"
              geometry={nodes.Cylinder007.geometry}
              material={materials["Material.019"]}
              position={[-2.13, 0.25, -1.27]}
              scale={0.03}
            />
            <mesh
              name="Cylinder008"
              geometry={nodes.Cylinder008.geometry}
              material={materials["Material.017"]}
              position={[-2.16, 0.23, -1.4]}
              rotation={[1.58, 0, 0]}
              scale={[0.02, 0.06, 0.02]}
            />
            <mesh
              name="Cylinder009"
              geometry={nodes.Cylinder009.geometry}
              material={materials["Material.022"]}
              position={[-1.66, 0.25, -1.26]}
              scale={[0.02, 0.03, 0.02]}
            />
            <mesh
              name="Plane003"
              geometry={nodes.Plane003.geometry}
              material={materials["Material.028"]}
              position={[-2.28, 0.28, -1.27]}
              scale={[0.05, 0.05, 0.04]}
            />
            <mesh
              name="Text001"
              geometry={nodes.Text001.geometry}
              material={materials["Material.021"]}
              position={[0, 0.24, -1.27]}
              scale={[0.27, 0.27, 0.22]}
            />
            <mesh
              name="Text002"
              geometry={nodes.Text002.geometry}
              material={materials["Material.018"]}
              position={[1.52, 0.25, -1.22]}
              scale={[0.1, 0.19, 0.1]}
            />
            <mesh
              name="Text003"
              geometry={nodes.Text003.geometry}
              material={nodes.Text003.material}
              position={[-2.32, 0.14, -1.41]}
              rotation={[1.56, -0.01, 3.14]}
              scale={[0.03, 0.04, 0.03]}
            />
            <mesh
              name="Text004"
              geometry={nodes.Text004.geometry}
              material={nodes.Text004.material}
              position={[-1.99, 0.14, -1.41]}
              rotation={[1.56, -0.01, 3.14]}
              scale={[0.03, 0.04, 0.03]}
            />
            <mesh
              name="Text005"
              geometry={nodes.Text005.geometry}
              material={materials["Material.018"]}
              position={[1.69, 0.25, -1.22]}
              scale={[0.1, 0.19, 0.1]}
            />
            <mesh
              name="Text006"
              geometry={nodes.Text006.geometry}
              material={materials["Material.018"]}
              position={[1.87, 0.25, -1.22]}
              scale={[0.1, 0.19, 0.1]}
            />
            <mesh
              name="Text007"
              geometry={nodes.Text007.geometry}
              material={materials["Material.021"]}
              position={[-1.51, 0.27, -1.28]}
              scale={0.09}
            />
          </group>
        </group>
        <group
          name="Next_generation_gaming_chair_concept"
          position={[0.02, 0, 0]}
          scale={1.27}
        >
          <group name="type_c_1" position={[-0.36, 0.53, 0.3]} scale={0.12} />
          <group name="Usb_300" position={[-0.39, 0.53, 0.3]} scale={0.12} />
          <mesh
            name="Cube"
            geometry={nodes.Cube.geometry}
            material={materials["black skin"]}
            position={[-0.04, 0.3, 0.05]}
            scale={[0.17, 0.22, 0.29]}
          />
          <group
            name="Cube001"
            position={[0.17, 0.29, 0.05]}
            rotation={[-0.12, 0.05, -0.4]}
            scale={0.29}
          >
            <mesh
              name="Cube007_1"
              geometry={nodes.Cube007_1.geometry}
              material={materials["black skin"]}
            />
            <mesh
              name="Cube007_2"
              geometry={nodes.Cube007_2.geometry}
              material={materials.outline}
            />
          </group>
          <mesh
            name="Cube003"
            geometry={nodes.Cube003.geometry}
            material={materials["black skin"]}
            position={[-0.04, 0.29, 0.05]}
            scale={[0.18, 0.23, 0.29]}
          />
          <mesh
            name="Cube004"
            geometry={nodes.Cube004.geometry}
            material={materials["black skin"]}
            position={[0.16, 0.51, -0.02]}
            rotation={[0, 1.57, 0]}
            scale={0.25}
          />
          <mesh
            name="Cube005"
            geometry={nodes.Cube005.geometry}
            material={materials["Material.003"]}
            position={[-0.04, 0.66, -0.31]}
            rotation={[-0.13, Math.PI / 2, 0]}
            scale={0.02}
          />
          <mesh
            name="Cube006"
            geometry={nodes.Cube006.geometry}
            material={materials["Material.003"]}
            position={[-0.03, 1.19, -0.14]}
            rotation={[-0.61, Math.PI / 2, 0]}
            scale={0.22}
          />
          <mesh
            name="Cylinder"
            geometry={nodes.Cylinder.geometry}
            material={materials["Material.003"]}
            position={[0.54, 1.01, 0.3]}
            rotation={[0, 1.57, 0]}
            scale={[0.22, 0.17, 0.22]}
          />
          <group
            name="Cylinder001"
            position={[-0.38, 0.53, 0.3]}
            rotation={[Math.PI / 2, 0, 0]}
            scale={[1, 1, 1.34]}
          >
            <mesh
              name="Cylinder001_1"
              geometry={nodes.Cylinder001_1.geometry}
              material={materials.blue}
            />
            <mesh
              name="Cylinder001_2"
              geometry={nodes.Cylinder001_2.geometry}
              material={materials.gold}
            />
          </group>
          <mesh
            name="Cylinder002"
            geometry={nodes.Cylinder002.geometry}
            material={materials["Material.003"]}
            position={[-0.04, 1.19, -0.37]}
            rotation={[-Math.PI / 2, Math.PI / 2, 0]}
            scale={[0.04, 0.03, 0.04]}
          />
          <mesh
            name="Cylinder003"
            geometry={nodes.Cylinder003.geometry}
            material={materials["Material.003"]}
            position={[0.05, 1.19, -0.36]}
            rotation={[0, 1.57, 0]}
            scale={[0.23, 0.25, 0.23]}
          />
          <group
            name="Cylinder004"
            position={[-0.04, 0.53, 0.46]}
            rotation={[Math.PI / 2, 0, 0]}
            scale={[1, 1.16, 1]}
          >
            <mesh
              name="Cylinder005_1"
              geometry={nodes.Cylinder005_1.geometry}
              material={materials["black skin"]}
            />
            <mesh
              name="Cylinder005_2"
              geometry={nodes.Cylinder005_2.geometry}
              material={materials.hole}
            />
          </group>
          <mesh
            name="Plane"
            geometry={nodes.Plane.geometry}
            position={[-0.04, 1.05, 0.65]}
            rotation={[-3.14, 1.55, 1.57]}
            scale={[0.17, 0.22, 0.26]}
          >
            <meshStandardMaterial
              emissive={"green"}
              side={THREE.DoubleSide}
              transparent={true}
              opacity={0.2}
              emissiveIntensity={25}
            >
              <videoTexture attach="map" args={[video]} />
              <videoTexture attach="emissiveMap" args={[video]} />
            </meshStandardMaterial>
          </mesh>
          <group
            name="Plane001"
            position={[-0.04, 0.75, -0.25]}
            rotation={[1.61, 0, 0]}
            scale={[0.15, 0.16, 0.11]}
          >
            <mesh
              name="Plane001_1"
              geometry={nodes.Plane001_1.geometry}
              material={materials["black skin"]}
            />
            <mesh
              name="Plane001_2"
              geometry={nodes.Plane001_2.geometry}
              material={materials.outline}
            />
          </group>
          <mesh
            name="Plane002"
            geometry={nodes.Plane002.geometry}
            material={materials["black skin"]}
            position={[0.03, 0.92, -0.29]}
            rotation={[1.53, 0, 0]}
            scale={0.04}
          />
          <mesh
            name="Plane004"
            geometry={nodes.Plane004.geometry}
            material={materials["black skin"]}
            position={[-0.04, 0.72, -0.32]}
            rotation={[1.61, 0, 0]}
            scale={0.22}
          />
          <mesh
            name="Plane005"
            geometry={nodes.Plane005.geometry}
            material={materials["Material.006"]}
            position={[0.18, 0.27, -0.17]}
            rotation={[-0.12, 0.18, -1.53]}
            scale={0.01}
          />
          <mesh
            name="Plane006"
            geometry={nodes.Plane006.geometry}
            material={materials["Material.006"]}
            position={[0.18, 0.27, -0.17]}
            rotation={[-0.12, 0.18, -1.55]}
            scale={0.01}
          />
          <mesh
            name="Plane007"
            geometry={nodes.Plane007.geometry}
            material={materials["Material.006"]}
            position={[0.18, 0.27, -0.17]}
            rotation={[-0.12, 0.18, -1.55]}
            scale={0.01}
          />
          <mesh
            name="Plane008"
            geometry={nodes.Plane008.geometry}
            material={materials["Material.006"]}
            position={[-0.25, 0.27, -0.17]}
            rotation={[3.02, 0.18, -1.55]}
            scale={-0.01}
          />
          <mesh
            name="Plane009"
            geometry={nodes.Plane009.geometry}
            material={materials["Material.006"]}
            position={[-0.26, 0.27, -0.17]}
            rotation={[3.02, 0.18, -1.53]}
            scale={-0.01}
          />
          <mesh
            name="type_c"
            geometry={nodes.type_c.geometry}
            material={materials.metal}
            position={[-0.36, 0.53, 0.3]}
            rotation={[Math.PI / 2, 0, 0]}
          />
        </group>
        <group
          name="Gaming_Mouse"
          position={[-0.32, 0.68, 0.65]}
          rotation={[Math.PI, 0, Math.PI]}
          scale={2.76}
        >
          <mesh
            name="MouseThermaltakeBlack"
            geometry={nodes.MouseThermaltakeBlack.geometry}
            material={materials["Material.024"]}
            position={[0, 0.01, -0.02]}
            rotation={[Math.PI / 2, 0, 0]}
            scale={[0.03, 0.02, 0.02]}
          />
          <mesh
            name="MouseThermaltakeBlack001"
            geometry={nodes.MouseThermaltakeBlack001.geometry}
            material={materials["Material.031"]}
            position={[-0.01, 0.01, 0.01]}
            rotation={[Math.PI / 2, 0, 0]}
            scale={0.02}
          />
          <mesh
            name="MouseThermaltakeBlack002"
            geometry={nodes.MouseThermaltakeBlack002.geometry}
            material={materials["Material.030"]}
            position={[-0.02, 0.01, -0.01]}
            rotation={[Math.PI / 2, 0, 0]}
            scale={0.02}
          />
          <group
            name="MouseThermaltakeBlack003"
            position={[0, 0.01, -0.01]}
            rotation={[Math.PI / 2, 0, 0]}
            scale={0.02}
          >
            <mesh
              name="MouseThermaltakeBlack003_1"
              geometry={nodes.MouseThermaltakeBlack003_1.geometry}
              material={materials["main body"]}
            />
            <mesh
              name="MouseThermaltakeBlack003_2"
              geometry={nodes.MouseThermaltakeBlack003_2.geometry}
              material={materials["Material.016"]}
            />
            <mesh
              name="MouseThermaltakeBlack003_3"
              geometry={nodes.MouseThermaltakeBlack003_3.geometry}
              material={materials["Material.027"]}
            />
            <mesh
              name="MouseThermaltakeBlack003_4"
              geometry={nodes.MouseThermaltakeBlack003_4.geometry}
              material={materials["Material.029"]}
            />
          </group>
          <mesh
            name="MouseThermaltakeBlack004"
            geometry={nodes.MouseThermaltakeBlack004.geometry}
            material={materials["Material.024"]}
            position={[0, 0.01, -0.01]}
            rotation={[Math.PI / 2, 0, 0]}
            scale={0.02}
          />
          <mesh
            name="MouseThermaltakeBlack005"
            geometry={nodes.MouseThermaltakeBlack005.geometry}
            material={materials["Material.026"]}
            rotation={[Math.PI / 2, 0, 0]}
            scale={0.02}
          />
          <mesh
            name="MouseThermaltakeBlack007"
            geometry={nodes.MouseThermaltakeBlack007.geometry}
            material={materials["Material.024"]}
            position={[0, 0.01, -0.01]}
            rotation={[Math.PI / 2, 0, 0]}
            scale={0.02}
          />
          <mesh
            name="MouseThermaltakeBlack008"
            geometry={nodes.MouseThermaltakeBlack008.geometry}
            material={materials["main body.001"]}
            position={[0, 0.01, -0.02]}
            rotation={[Math.PI / 2, 0, 0]}
            scale={0.02}
          />
          <mesh
            name="MouseThermaltakeBlack009"
            geometry={nodes.MouseThermaltakeBlack009.geometry}
            material={materials["main body"]}
            position={[0, 0.01, 0]}
            rotation={[Math.PI / 2, 0, 0]}
            scale={0.02}
          />
          <mesh
            name="MouseThermaltakeBlack010"
            geometry={nodes.MouseThermaltakeBlack010.geometry}
            material={materials["Material.020"]}
            position={[-0.01, 0.01, 0]}
            rotation={[Math.PI / 2, 0, 0]}
            scale={0.02}
          />
          <mesh
            name="MouseThermaltakeBlack011"
            geometry={nodes.MouseThermaltakeBlack011.geometry}
            material={materials["main body"]}
            position={[0, 0.01, -0.01]}
            rotation={[Math.PI / 2, 0, 0]}
            scale={0.02}
          />
          <mesh
            name="MouseThermaltakeBlack012"
            geometry={nodes.MouseThermaltakeBlack012.geometry}
            material={materials["Material.009"]}
            position={[0, 0.01, -0.01]}
            rotation={[Math.PI / 2, 0, 0]}
            scale={0.02}
          />
          <mesh
            name="MouseThermaltakeBlack013"
            geometry={nodes.MouseThermaltakeBlack013.geometry}
            material={materials["Material.009"]}
            position={[0, 0.01, -0.01]}
            rotation={[Math.PI / 2, 0, 0]}
            scale={0.02}
          />
          <mesh
            name="MouseThermaltakeBlack014"
            geometry={nodes.MouseThermaltakeBlack014.geometry}
            material={materials["Material.011"]}
            position={[0, 0.01, -0.02]}
            rotation={[Math.PI / 2, 0, 0]}
            scale={0.02}
          />
          <group
            name="MouseThermaltakeBlack015"
            position={[0, 0.01, -0.01]}
            rotation={[Math.PI / 2, 0, 0]}
            scale={0.02}
          >
            <mesh
              name="MouseThermaltakeBlack015_1"
              geometry={nodes.MouseThermaltakeBlack015_1.geometry}
              material={materials["Material.009"]}
            />
            <mesh
              name="MouseThermaltakeBlack015_2"
              geometry={nodes.MouseThermaltakeBlack015_2.geometry}
              material={materials["Material.010"]}
            />
            <mesh
              name="MouseThermaltakeBlack015_3"
              geometry={nodes.MouseThermaltakeBlack015_3.geometry}
              material={materials["Material.012"]}
            />
          </group>
        </group>
        <group name="Gaming_Chair" position={[0, 0, 0.02]} scale={0.28}>
          <group
            name="Circle"
            position={[-1.05, 2.47, 0.28]}
            rotation={[0, -1.17, Math.PI / 2]}
            scale={0.12}
          >
            <mesh
              name="Circle_1"
              geometry={nodes.Circle_1.geometry}
              material={materials.Plastic}
            />
            <mesh
              name="Circle_2"
              geometry={nodes.Circle_2.geometry}
              material={materials.ShinyPlastic}
            />
          </group>
          <group
            name="Circle001"
            position={[-0.78, 2.47, -0.96]}
            rotation={[-Math.PI, -0.75, -Math.PI / 2]}
            scale={0.12}
          >
            <mesh
              name="Circle001_1"
              geometry={nodes.Circle001_1.geometry}
              material={materials.Plastic}
            />
            <mesh
              name="Circle001_2"
              geometry={nodes.Circle001_2.geometry}
              material={materials.ShinyPlastic}
            />
          </group>
          <group
            name="Circle002"
            position={[0.49, 2.47, -1.15]}
            rotation={[Math.PI, 0.45, -Math.PI / 2]}
            scale={0.12}
          >
            <mesh
              name="Circle002_1"
              geometry={nodes.Circle002_1.geometry}
              material={materials.Plastic}
            />
            <mesh
              name="Circle002_2"
              geometry={nodes.Circle002_2.geometry}
              material={materials.ShinyPlastic}
            />
          </group>
          <group
            name="Circle003"
            position={[1.06, 2.47, 0.04]}
            rotation={[Math.PI, 1.12, -Math.PI / 2]}
            scale={0.12}
          >
            <mesh
              name="Circle003_1"
              geometry={nodes.Circle003_1.geometry}
              material={materials.Plastic}
            />
            <mesh
              name="Circle003_2"
              geometry={nodes.Circle003_2.geometry}
              material={materials.ShinyPlastic}
            />
          </group>
          <group
            name="Circle004"
            position={[0.08, 2.47, 0.9]}
            rotation={[0, 1, Math.PI / 2]}
            scale={0.12}
          >
            <mesh
              name="Circle004_1"
              geometry={nodes.Circle004_1.geometry}
              material={materials.Plastic}
            />
            <mesh
              name="Circle004_2"
              geometry={nodes.Circle004_2.geometry}
              material={materials.ShinyPlastic}
            />
          </group>
          <mesh
            name="Cube012"
            geometry={nodes.Cube012.geometry}
            material={materials.ShinyPlastic}
            position={[-0.17, 0.55, -0.07]}
            rotation={[0, -0.82, 0]}
            scale={0.57}
          />
          <mesh
            name="Cylinder011"
            geometry={nodes.Cylinder011.geometry}
            material={materials.Plastic}
            position={[-0.05, 0.74, -0.18]}
            rotation={[0, -0.82, 0]}
          />
        </group>
        <group name="Armature" position={[0, 0, 0.01]}>
          <primitive object={nodes.Hips} />
        </group>
        <skinnedMesh
          name="Wolf3D_Avatar"
          geometry={nodes.Wolf3D_Avatar.geometry}
          material={materials["Wolf3D_Avatar.002"]}
          skeleton={nodes.Wolf3D_Avatar.skeleton}
          morphTargetDictionary={nodes.Wolf3D_Avatar.morphTargetDictionary}
          morphTargetInfluences={nodes.Wolf3D_Avatar.morphTargetInfluences}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/hero.glb");
