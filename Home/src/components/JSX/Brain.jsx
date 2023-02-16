import {
  Environment,
  OrbitControls,
  PerspectiveCamera,
  Scroll,
  ScrollControls,
  useGLTF,
} from "@react-three/drei";
import { useLoader } from "@react-three/fiber";
import React, { createContext, useContext, useEffect, useState } from "react";
import { BackSide, TextureLoader } from "three";
import { degToRad } from "three/src/math/MathUtils";
import { ModalContext } from "../../App";
import Modal from "../../enums/Modal";
import useWindowDimension from "../../hooks/useWindowDimensions";
import BrainPopUp from "./BrainPopUp";
import Contact from "./Contact";
import Events from "./Events";
import LandingElements from "./LandingElements";

export const SpinContext = createContext();

const Brain = props => {
  const { nodes, materials } = useGLTF("/models/brain.glb"),
    colorMap = useLoader(TextureLoader, "/backgrounds/landing.png");

  const [scale, setScale] = useState(0.9),
    { height, width } = useWindowDimension(),
    [target, setTarget] = useState([0, 0.6, 0]),
    [position, setPosition] = useState([1, 1, 1]),
    [isSpinning, setSpinning] = useState(true);

  const modal = useContext(ModalContext);
  const modalValue = modal.modalOpen.getValue().toLowerCase();

  const context = {
    isSpinning: isSpinning,
    stopSpin: () => setSpinning(false),
    startSpin: () => setSpinning(true),
  };

  useEffect(() => {
    modalValue === "null" && context.startSpin();
  }, [modal.modalOpen]);

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

  const BRAIN_CHILDREN = (
    <>
      {/* Camera */}
      <PerspectiveCamera makeDefault position={position} />

      {/* Orbit Controls */}
      {isSpinning && !modal.displayModal && (
        <OrbitControls
          autoRotate
          autoRotateSpeed={1}
          rotateSpeed={0.1}
          target={target}
          maxPolarAngle={degToRad(75)}
          maxDistance={1.8}
          minDistance={1.6}
          enablePan={false}
          enableRotate={!modal.is2D}
          enableZoom={!modal.is2D}
        />
      )}

      {/* Brain Model */}
      <group scale={scale} {...props} dispose={null}>
        <mesh
          geometry={nodes.Brain_Model001_1.geometry}
          material={materials["Material.001"]}
          rotation={[Math.PI / 2, 0, 0]}
        />
        <mesh
          geometry={nodes.Brain_Model.geometry}
          material={materials["Material.002"]}
          position={[0, 0.45, -0.1]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.86}
        />
        <mesh
          geometry={nodes.Brain_Model001.geometry}
          material={materials["Material.003"]}
          rotation={[Math.PI / 2, 0, 0]}
          position={[0, 0.45, -0.15]}
        />

        {/* Brain Popups */}
        {!modal.is2D ? (
          <mesh>
            <SpinContext.Provider value={context}>
              <BrainPopUp
                modal={Modal.Contact}
                position={[0.5, 0.5, 0]}
                rotation={[0, Math.PI / 2, 0]}
                index={0}
              />
              <BrainPopUp
                modal={Modal.Event}
                position={[-0.42, 0.8, 0.2]}
                rotation={[0, Math.PI / 2, 0]}
                index={1}
              />
            </SpinContext.Provider>
          </mesh>
        ) : (
          <></>
        )}
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

  return modal.is2D ? (
    <ScrollControls pages={3} damping={0.5}>
      {BRAIN_CHILDREN}
      <Scroll html>
        <LandingElements />
        <Events />
        <Contact />
        <div style={{ height: "10px" }} />
      </Scroll>
    </ScrollControls>
  ) : (
    <>{BRAIN_CHILDREN}</>
  );
};

export default Brain;
useGLTF.preload("/models/brain.glb");
