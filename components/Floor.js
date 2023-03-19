import React from "react";

function Floor(props) {
  return (
    <mesh {...props} recieveShadow>
      <boxBufferGeometry args={[200,0.5,200]} />
      <meshPhysicalMaterial color="#D99058" opacity={0.8} />
    </mesh>
  );
}

export default Floor;