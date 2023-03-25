import {
  Environment,
  OrbitControls,
  PerspectiveCamera,
  Scroll,
  ScrollControls,
  useGLTF,
} from "@react-three/drei";
import { useLoader } from "@react-three/fiber";
import gsap from "gsap";
import React, {
  createContext,
  useContext,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import { BackSide, TextureLoader } from "three";
import { degToRad } from "three/src/math/MathUtils";

import { ModalContext } from "../../App";
import Modal from "../../enums/Modal";
import useWindowDimension from "../../hooks/useWindowDimensions";

import About from "./About";
import BrainPopUp from "./BrainPopUp";
import Contact from "./Contact";
import Events from "./Events";
import LandingElements from "./LandingElements";
import Speakers from "./Speakers";

export const SpinContext = createContext();
const PAGES = 5;

const Brain = props => {
  const brainRef = useRef();
  const modal = useContext(ModalContext);

  const { nodes, materials } = useGLTF("/models/brain.glb");
  const colorMap = useLoader(TextureLoader, "/backgrounds/landing.png");

  const [matchesPhone, setMatchesPhone] = useState(
    window.matchMedia("(min-width: 500px)").matches
  );

  const [scale, setScale] = useState(0.9);
  const { height, width } = useWindowDimension();
  const [target, setTarget] = useState([0, 0.5, 0]);
  const [position, setPosition] = useState([1, 1, 1]);
  const [isSpinning, setSpinning] = useState(true);
  const [scrollDir, setScrollDir] = useState(0);
  const modalValue = modal.modalOpen.getValue().toLowerCase();

  const stylePos = {
    top: 0,
    position: "fixed",
  };

  const style = {
    backgroundColor: "#30303014",
    backdropFilter: "blur(9px)",
    width: "100vw",
  };

  const context = {
    isSpinning: isSpinning,
    stopSpin: () => setSpinning(false),
    startSpin: () => setSpinning(true),
  };

  const scroller = evt => {
    const newDir = (-1 * evt.deltaY) / Math.abs(evt.deltaY);
    if (newDir !== scrollDir) setScrollDir(newDir);
  };

  useEffect(() => {
    window
      .matchMedia("(min-width: 500px)")
      .addEventListener("change", e => setMatchesPhone(e.matchesPhone));
  });

  useEffect(() => {
    window.addEventListener("wheel", scroller);
    return () => window.removeEventListener("wheel", scroller);
  }, []);

  useEffect(() => {
    modalValue === "null" && context.startSpin();
  }, [modal.modalOpen]);

  useEffect(() => {
    if (width < 850) {
      setScale(0.7);
      setPosition([2, 2, 2]);
    }

    if (width < 500) {
      setScale(0.6);
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
          autoRotateSpeed={1.5}
          rotateSpeed={0.1}
          target={target}
          maxPolarAngle={degToRad(75)}
          maxDistance={1.7}
          minDistance={1.2}
          enablePan={false}
          enableRotate={!modal.is2D && matchesPhone}
          enableZoom={!modal.is2D && matchesPhone}
        />
      )}

      {/* Brain Model */}
      <group ref={brainRef} scale={scale} {...props} dispose={null}>
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
                rotation={[0, Math.PI / 2, (-1 * Math.PI) / 2]}
                index={1}
              />
              <BrainPopUp
                modal={Modal.About}
                position={[-0.1, 0.6, 0.64]}
                rotation={[0, 0, 0]}
                index={2}
              />
              <BrainPopUp
                modal={Modal.Speaker}
                position={[-0.2, 0.7, -0.59]}
                rotation={[0, Math.PI / 6, 0]}
                index={3}
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
    <ScrollControls pages={1} damping={0.1} distance={5}>
      {BRAIN_CHILDREN}

      <Scroll html>
        <div style={{ position: "relative" }}>
          <div style={{ ...stylePos, zIndex: "100000000000000000" }}>
            <LandingElements idx={0} pages={PAGES} scrollDir={scrollDir} />
          </div>
          <div style={{ ...style, ...stylePos }}>
            <About idx={1} pages={PAGES} scrollDir={scrollDir} />
            <Speakers idx={2} pages={PAGES} scrollDir={scrollDir} />
            <Events idx={3} pages={PAGES} scrollDir={scrollDir} />
            <Contact idx={3.9} pages={PAGES} scrollDir={scrollDir} />
          </div>
        </div>
      </Scroll>
    </ScrollControls>
  ) : (
    BRAIN_CHILDREN
  );
};

export default Brain;
useGLTF.preload("/models/brain.glb");
