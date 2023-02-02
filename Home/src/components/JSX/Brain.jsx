import {
  Environment,
  OrbitControls,
  PerspectiveCamera,
  Stars,
  useGLTF,
} from "@react-three/drei";
import React, { useState, useEffect } from "react";
import { useLoader } from "@react-three/fiber";
import { BackSide, TextureLoader } from "three";
import { degToRad } from "three/src/math/MathUtils";
import useWindowDimension from "../../hooks/useWindowDimensions";

const Brain = props => {
  const { nodes, materials } = useGLTF("/models/brain.glb"),
    colorMap = useLoader(TextureLoader, "/backgrounds/landing.png");

  const [scale, setScale] = useState(1),
    { height, width } = useWindowDimension(),
    [target, setTarget] = useState([0, 0.6, 0]),
    [position, setPosition] = useState([1, 1, 1]);

  useEffect(() => {
    if (width < 850) {
      setScale(0.87);
      setPosition([2, 2, 2]);
    }

    if (width < 500) setScale(0.8);

    if (width < 400) {
      setScale(0.7);
      setTarget([0, 0.5, 0]);
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
        rotateSpeed={0.1}
        target={target}
        maxPolarAngle={degToRad(85)}
        maxDistance={1.6}
        minDistance={1}
        enablePan={false}
      />

      <group scale={scale} {...props} dispose={null}>
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

      <Stars />

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
