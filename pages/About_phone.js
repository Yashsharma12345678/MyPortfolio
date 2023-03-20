import React from "react";
import { Canvas, useLoader } from "@react-three/fiber";
import Box from "@/components/Box";
import Controls from "@/components/OrbitControls";
import LightBulb from "@/components/LightBulb";
// import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

function About_phone() {
  // const gltf = useLoader(GLTFLoader, '/Donkey.gltf')
  return (
    <div className="scene ">
      

      <Canvas
        shadows
        // className="canvas"
        camera={{
          position: [0, 50, 20],
        }}
        >
        <ambientLight color={"white"} intensity={0.6} />
        {/* <LightBulb position={[0, 3, 0]} /> */}
        {/* <Draggable> */}
        <Box position={[-10, 15, 0]} args={[10, 3, 10]} />

        {/* </Draggable> */}
        {/* <Model/> */}
        <Controls />
        {/* <Floor position={[0, -4, 0]}  /> */}
      </Canvas>
        
        
      <div className="absolute top-64 left-48 border border-r-blue-400 border-l-blue-400 border-t-blue-900 rounded-lg border-b-blue-900 border-gray-800 w-fit sm:w-1/2 h-1/3 hover:scale-125 transition transform duration-150 ease-in">
          
        <h1 className=" text-blue-400 text-3xl text-center  p-3 font-bold ">
          About Me
        </h1>

        <div className=" ">
          <h3 className="text-gray-600 mt-8 text-lg ml-5">
            I am 20 year old software developer. I have a serious passion for ui
            effects, animations, creative intuitive dynamic user experience
          </h3>
        
        </div>
      </div>
    </div>
  );
}

export default About_phone;
