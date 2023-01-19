import {
  Environment,
  OrbitControls,
  PerspectiveCamera,
  useGLTF,
} from "@react-three/drei";
import React, { useState, useEffect } from "react";
import { useLoader } from "@react-three/fiber";
import { BackSide, TextureLoader } from "three";
import { degToRad } from "three/src/math/MathUtils";
import useWindowDimension from "../../hooks/useWindowDimensions";

const Brain = props => {
  const { nodes, materials } = useGLTF("/models/brain.glb");

  const colorMap = useLoader(TextureLoader, "/backgrounds/landing.png");

  const { height, width } = useWindowDimension(),
    [target, setTarget] = useState([0, 0.7, 0]),
    [position, setPosition] = useState([1, 1, 1]);

  useEffect(() => {
    if (width < 850) {
      setTarget([0, 0.65, 0]);
      setPosition([2, 2, 2]);
    }
  }, [width]);

  return (
    <>
      {/* Camera */}
      <PerspectiveCamera makeDefault position={position} />

      {/* Orbit Controls */}
      <OrbitControls
        autoRotate
        autoRotateSpeed={1}
        rotateSpeed={0.06}
        target={target}
        maxPolarAngle={degToRad(85)}
        maxDistance={2}
        minDistance={0.9}
      />

      <group {...props} dispose={null}>
        <mesh
          geometry={nodes.Brain_Model001.geometry}
          material={materials["Material.001"]}
          rotation={[Math.PI / 2, 0, 0]}
        />
        <mesh
          geometry={nodes.Brain_Model.geometry}
          material={materials["Material.002"]}
          position={[0, 0.1, 0]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.86}
        />
      </group>

      {/* Environmnet */}
      <Environment background>
        <mesh>
          <sphereGeometry args={[50, 100, 100]} />
          <meshBasicMaterial map={colorMap} side={BackSide} />
        </mesh>
      </Environment>
    </>
  );
};

export default Brain;
useGLTF.preload("/models/brain.glb");
