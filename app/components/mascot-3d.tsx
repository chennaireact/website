import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

export const Mascot3D = () => {
  return (
    <Canvas>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <OrbitControls
      //   enablePan={false}
      //   enableZoom={false}
      //   maxPolarAngle={Math.PI / 2}
      //   minPolarAngle={Math.PI / 2}
      />
      <mesh>
        <boxGeometry />
        <meshBasicMaterial color={"red"} />
      </mesh>
    </Canvas>
  );
};

// export const Mascot3D = () => {
//   return (
//     <Canvas>
//       <ambientLight />
//       <pointLight position={[10, 10, 10]} />
//       <OrbitControls
//         enablePan={false}
//         enableZoom={false}
//         maxPolarAngle={Math.PI / 2} // Restricting vertical movement
//         minPolarAngle={Math.PI / 2} // Preventing any movement other than X-axis
//       />
//       <mesh>
//         <boxGeometry />
//         <meshBasicMaterial color={"red"} />
//       </mesh>
//     </Canvas>
//   );
// };
