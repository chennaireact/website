import { useAnimations, useGLTF, useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useEffect, useRef } from "react";
import { Group } from "three";

useGLTF.preload("/robot_playground.glb");

export function Model() {
  const group = useRef<Group>(null);
  const { animations, scene } = useGLTF("/robot_playground.glb");
  const { actions, clips } = useAnimations(animations, scene);
  const scroll = useScroll();

  useEffect(() => {
    if (actions["Experiment"]) {
      actions["Experiment"].play();
      actions["Experiment"].paused = false;
    }
  }, [actions]);

  useFrame(() => {
    if (actions["Experiment"]) {
      const duration = actions["Experiment"].getClip().duration;
      actions["Experiment"].time = duration * scroll.offset;
    }
  });

  return (
    <group ref={group}>
      <primitive object={scene} />
    </group>
  );
}
