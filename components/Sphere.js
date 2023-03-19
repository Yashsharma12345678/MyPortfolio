import React from "react";
import { useLoader } from "@react-three/fiber";
import { TextureLoader } from "three";

function Box(props) {
  const texture = useLoader(TextureLoader, "/profilepic.jpeg");
  return (
    <mesh {...props} recieveShadow castShadow>
      <spBufferGeometry args={[10,0.5,10]} />
      <meshPhysicalMaterial map={texture}  />
    </mesh>
  );
}

export default Box;