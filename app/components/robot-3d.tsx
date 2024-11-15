"use client";

import { OrbitControls, useAnimations, useGLTF } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useEffect, useRef } from "react";
import { Group } from "three";

useGLTF.preload("/robot_playground.glb");

export default function RobotScene() {
  return (
    <Canvas gl={{ antialias: true }} dpr={[1, 1.5]} className="relative h-svh">
      <directionalLight position={[-5, -5, 5]} intensity={4} />
      <OrbitControls enablePan={true} enableZoom={false} maxPolarAngle={Math.PI / 3} minPolarAngle={Math.PI / 3} />
      {/* <ScrollControls damping={0.5} pages={4}> */}
      <RobotModel />
      {/* </ScrollControls> */}
    </Canvas>
  );
}

function RobotModel() {
  const group = useRef<Group>(null);
  const { animations, scene } = useGLTF("/robot_playground.glb");
  const { actions } = useAnimations(animations, scene);
  useEffect(() => {
    if (actions["Experiment"]) {
      actions["Experiment"].play();
    }
  }, [actions]);

  return (
    <group ref={group}>
      <primitive object={scene} />
    </group>
  );
}
