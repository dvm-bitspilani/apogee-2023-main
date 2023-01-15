import React from "react";
import {
  Environment,
  OrbitControls,
  PerspectiveCamera,
  useGLTF,
} from "@react-three/drei";
import * as THREE from "three";
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { degToRad } from "three/src/math/MathUtils";

const Brain = props => {
  // Code to move the camera around
  // const OCR = useRef(null);
  // useFrame(state => {
  //   if (!!OCR.current) {
  //     const { x, y } = state.mouse;
  //     OCR.current.setAzimuthalAngle(-x * degToRad(180));
  //     OCR.current.setPolarAngle((2 + y) * degToRad(45));
  //     OCR.current.update();
  //   }
  // });

  const { nodes, materials } = useGLTF("/models/brain-transformed.glb");
  return (
    <>
      {/* Camera */}
      <PerspectiveCamera makeDefault position={[-0.75, 0.75, -0.75]} />
      <OrbitControls
        // ref={OCR}
        autoRotate
        keys={{
          LEFT: "ArrowLeft",
          UP: "ArrowUp",
          RIGHT: "ArrowRight",
          BOTTOM: "ArrowDown",
        }}
        autoRotateSpeed={1}
        rotateSpeed={0.06}
        zoomSpeed={10}
        enableZoom={false}
        target={[0, 0, 0]}
        maxPolarAngle={degToRad(110)}
        minPolarAngle={degToRad(70)}
        maxDistance={1.4}
        minDistance={0.6}
      />

      <pointLight args={["#B5F8FA", 0.1]} />

      <group {...props} dispose={null}>
        <mesh
          geometry={nodes.Brain_Model001.geometry}
          material={materials.Material}
          position={[0, -0.6, 0]}
          rotation={[Math.PI / 2, 0, 0]}
        />
      </group>

      {/* Environmnet */}
      {/* <Environment background>
        <mesh>
          <sphereGeometry args={[50, 100, 100]} />
          <meshBasicMaterial color="darkblue" side={THREE.BackSide} />
        </mesh>
      </Environment> */}
    </>
  );
};

export default Brain;
useGLTF.preload("/models/brain-transformed.glb");
