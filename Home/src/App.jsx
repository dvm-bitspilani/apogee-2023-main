import "./App.css";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import Landing from "./components/JSX/Landing";

function App() {
  return (
    <Canvas id="canvas-wrapper">
      <Suspense fallback={null}>
        <Landing />
      </Suspense>
    </Canvas>
  );
}

export default App;
