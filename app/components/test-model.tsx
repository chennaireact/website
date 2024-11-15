import { Html, ScrollControls, useAnimations, useGLTF, useProgress, useScroll } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense, useEffect, useRef } from "react";
import { Group } from "three";
useGLTF.preload("/robot_playground.glb");

export function Model() {
  const group = useRef<Group>(null);
  const { nodes, materials, animations, scene } = useGLTF("/robot_playground.glb");
  const { actions, clips } = useAnimations(animations, scene);
  const scroll = useScroll();

  useEffect(() => {
    console.log(actions);
    //@ts-ignore
    actions["Experiment"].play().paused = true;
  }, []);
  //   useFrame(
  //     () =>
  //       //@ts-ignore
  //       (actions["Experiment"].time =
  //         //@ts-ignore
  //         (actions["Experiment"].getClip().duration * scroll.offset) / 4)
  //   );
  return (
    <group ref={group}>
      <primitive object={scene} />
    </group>
  );
}

function Loader() {
  const { progress, active } = useProgress();

  return <Html center>{progress.toFixed(1)} % loaded</Html>;
}

export function Scene() {
  return (
    <Canvas gl={{ antialias: true }} dpr={[1, 1.5]} className="relative h-svh">
      <directionalLight position={[-5, -5, 5]} intensity={4} />
      <Suspense fallback={<Loader />}>
        <ScrollControls damping={0.5} pages={3}>
          <Model />
        </ScrollControls>
      </Suspense>
    </Canvas>
  );
}
