import React from "react";
import { useLoader } from "@react-three/fiber";
import { TextureLoader } from "three";

function Box({position,args}) {
  const texture = useLoader(TextureLoader, "/twitter.png");
  return (
    <mesh position={position} recieveShadow castShadow>
      <boxBufferGeometry args={args} />
      <meshPhysicalMaterial map={texture}  />
    </mesh>
  );
}

export default Box;