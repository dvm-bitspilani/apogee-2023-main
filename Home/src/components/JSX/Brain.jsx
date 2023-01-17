import React from "react";
import {
  Environment,
  OrbitControls,
  PerspectiveCamera,
  useGLTF,
} from "@react-three/drei";
import * as THREE from "three";

const Brain = props => {
  const { nodes, materials } = useGLTF("/models/scene-transformed.glb");

  return (
    <>
      {/* Camera */}
      <PerspectiveCamera makeDefault position={[1, 1, 1]} />

      {/* Orbit Controls */}
      <OrbitControls
        autoRotate
        autoRotateSpeed={1}
        rotateSpeed={0.06}
        target={[0, 0.7, 0]}
        // maxPolarAngle={degToRad(110)}
        // minPolarAngle={degToRad(70)}
        maxDistance={1.4}
        minDistance={0.8}
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
          <meshBasicMaterial color="black" side={THREE.BackSide} />
        </mesh>
      </Environment>
    </>
  );
};

export default Brain;
useGLTF.preload("/models/scene-transformed.glb");
