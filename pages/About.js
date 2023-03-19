import React from "react";
import { Canvas } from "@react-three/fiber";
import Box from "@/components/Box";
import Controls from "@/components/OrbitControls";
import TextSphere from "@/components/TextSphere";
// import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

function About() {
  // const gltf = useLoader(GLTFLoader, '/Donkey.gltf')
  return (
    <div className=" grid grid-cols-2  text-white bg-[#0C0E10]">
      <div className=" col-span-1">
        <div>
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
            <Box position={[10, 15, 0]} args={[50, 3, 50]} />

            {/* </Draggable> */}
            {/* <Model/> */}
            <Controls />
            {/* <Floor position={[0, -4, 0]}  /> */}
          </Canvas>
        </div>
        <div>
          <div className=" absolute top-64 left-14 sm:left-28 md:left-44 border border-r-blue-400 border-l-blue-400 border-t-blue-900 rounded-lg  border-b-blue-900 border-gray-800 w-1/2 md:w-1/3 h-1/2 lg:w-1/3  hover:scale-125 transition transform duration-150 ease-out">
            <h1 className=" text-blue-200 text-3xl text-center border-b-[0.2px] border-gray-900 p-3 font-bold ">
              About Me
            </h1>
            <div className="">
              <h3 className="text-gray-600 mt-8 text-lg mx-3 h-full ">
                I am 20 year old software developer. I have a serious passion
                for ui effects, animations, creative intuitive dynamic user
                experience . Well organished person, problem solver with high
                attention to detail
              </h3>
            </div>
          </div>
        </div>
      </div>
      <div className="hidden lg:block">
        <div className=" mt-20 col-span-1 text-[#08FDD8]">
          <TextSphere />
        </div>
      </div>

      {/* <div>
      <div className='absolute top-64 left-12 sm:left-28 md:left-44 border border-r-blue-400 border-l-blue-400 border-t-blue-900 rounded-lg  border-b-blue-900 border-gray-800 w-1/2 md:w-1/3 h-1/2 lg:w-1/3  hover:scale-125 transition transform duration-150 ease-out'>
      <h1 className=' text-blue-200 text-3xl text-center border-b-[0.2px] border-gray-900 p-3 font-bold '>About Me</h1>
      <div className=''>
      <h3 className='text-gray-600 mt-8 text-lg mx-3 h-full '>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe rem unde nisi dolorum reiciendis ratione perspiciatis dolorem nihil possimus blanditiis magnam totam, quis quod quae alias iusto suscipit eligendi nemo!</h3>
      </div>
      </div>
      </div>

      <div className=' text-[#08FDD8]'>
      
      <TextSphere/>
    </div> */}
    </div>
  );
}

export default About;
