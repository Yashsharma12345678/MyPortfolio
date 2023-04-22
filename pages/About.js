import React from "react";
import Link from "next/link";
import Image from "next/image";
import { CameraIcon} from "@heroicons/react/24/solid"
// import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

function About() {
  // const gltf = useLoader(GLTFLoader, '/Donkey.gltf')
  return (
    <div className="flex justify-between items-center  text-white">
      <div></div>
      <div className=" w-1/3 h-screen flex flex-col justify-center">
        <h3 className="text-gray-400 text-2xl sm:text-5xl font-bold">Hello, It's Me</h3>
        {/* <h1 className="text-white text-7xl font-bold mt-2"></h1> */}
        <h1 className="text-gray-400 text-4xl sm:text-5xl md:text-6xl lg:text-6xl tracking-tight font-extrabold">
         <span className="text"> Y</span><span className="text">a</span><span className="text">s</span><span className="text">h</span><span className="text"> S</span><span className="text">h</span><span className="text">a</span><span className="text">r</span><span className="text">m</span><span className="text">a</span><br className="hidden sm:block" />
        </h1>
        {/* <h3>And I'm a Fullstack Developer</h3> */}
        <h1 className="h1words mt-4">
          <span className="spanwords ">And I am a </span>
          <div class="message">
            <div class="word1">WEB Developer</div>
            <div class="word2">App Developer</div>
            <div class="word3">Os Developer</div>
          </div>
        </h1>

        <p className="text-xl mt-4 text-[#028fba] hidden md:block">
        I am a Web/App developer. I have a serious passion for UI effects,Animations and Creative inituitive.
        Well-Organised person,Problem solver,independent employee with high attention to detail.
        Interested in the entire frontend spectrum and working on ambitious projects with positive mindset.
        </p>
        {/* icons */}
        <div className="flex space-x-10 mt-4">
          <div>
            <Link
              href="https://www.linkedin.com/in/yashsharma2723/"
              target="_blank"
            >
              <div className="aboutLogos">
                <Image src="/linkedin.png" height={32} width={32} alt="image" />
              </div>
            </Link>
          </div>
          <div>
            <Link href="https://github.com/settings/profile" target="_blank">
              <div className="aboutLogos">
                <Image
                  className="bg-white"
                  src="/github1.png"
                  height={32}
                  width={32}
                  alt="image"
                />
              </div>
            </Link>
          </div>
          <div>
            <div className="aboutLogos">
              <Image src="/twitter.png" height={32} width={32} alt="image" />
            </div>
          </div>
          <div>
              <div className="aboutLogos">
                <CameraIcon className="h-8 w-8 text-white"/>
              </div>
          </div>
        </div>
        <Link href="/yashResume.pdf" target="_blank">
        <div>
          <button className="aboutbtn">Download CV</button>
        </div>
        </Link>
        {/* cv download button */}
      </div>
      <div className="w-1/2 flex items-center justify-center">
        <div className="border-[5px] absolute border-[#028fba] p-5 bg-[#028fba] rounded-md">
        {/* <img className="h-60 w-60  " src="/profilepic.jpeg" alt="" /> */}
        <Image src="/profilepic.jpeg" width={60} height={60} alt="profile" />
        </div>
      </div>
    </div>
  );
}

export default About;
