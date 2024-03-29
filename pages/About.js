import React from "react";
import Link from "next/link";
import Image from "next/image";
import { CameraIcon } from "@heroicons/react/24/solid";
// import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import {FiTwitter} from "react-icons/fi"
import {TiSocialLinkedin} from "react-icons/ti"
import {VscGithubInverted} from "react-icons/vsc"

function About() {
  // const gltf = useLoader(GLTFLoader, '/Donkey.gltf')

  
  return (
    <div className="flex justify-between items-center  text-white">
      <div></div>
      <div className=" w-1/3 h-screen flex flex-col justify-center">
        <h3 className="text-gray-400 text-2xl sm:text-5xl font-bold">
          Hello, Its Me
        </h3>
        {/* <h1 className="text-white text-7xl font-bold mt-2"></h1> */}
        <h1 className="text-gray-400 text-4xl sm:text-5xl md:text-6xl lg:text-6xl tracking-tight font-extrabold">
          <span className="text"> Y</span>
          <span className="text">a</span>
          <span className="text">s</span>
          <span className="text">h</span>
          <span className="text"> S</span>
          <span className="text">h</span>
          <span className="text">a</span>
          <span className="text">r</span>
          <span className="text">m</span>
          <span className="text">a</span>
          <br className="hidden sm:block" />
        </h1>
        {/* <h3>And I'm a Fullstack Developer</h3> */}
        <h1 className="h1words mt-4">
          <span className="spanwords">And I am a </span>
          <div class="message">
            <div class="word1">WEB Developer</div>
            <div class="word2">App Developer</div>
            <div class="word3">Os Developer</div>
          </div>
        </h1>

        <p className="text-xl mt-4 text-[#028fba] hidden md:block">
          I am a Web/App developer. I have a serious passion for UI
          effects,Animations and Creative inituitive. Well-Organised
          person,Problem solver,independent employee with high attention to
          detail. Interested in the entire frontend spectrum and working on
          ambitious projects with positive mindset.
        </p>
        {/* icons */}
        <div className="flex space-x-10 mt-4">
          <div>
            <Link
              href="https://www.linkedin.com/in/yashsharma2723/"
              target="_blank"
            >
              <div className="aboutLogos">
                <TiSocialLinkedin className="w-8 h-8"/>
                {/* <Image src="/linkedin.png" height={32} width={32} alt="image" /> */}
              </div>
            </Link>
          </div>
          <div>
            <Link href="https://github.com/settings/profile" target="_blank">
              <div className="aboutLogos">
                <VscGithubInverted className="w-8 h-8"/>
              </div>
            </Link>
          </div>
          <div>
            <div className="aboutLogos">
              <FiTwitter className="w-8 h-8 "/>
            </div>
          </div>
          <div>
            <div className="aboutLogos">
              <CameraIcon className="h-8 w-8 text-white" />
            </div>
          </div>
        </div>
        <Link href="/yashResume.pdf" target="_blank">
          <div>
            <button className="aboutbtn">Download CV</button>
          </div>
        </Link>
      </div>
      <div className = "w-1/2 flex items-center justify-center">
        <div className = "border-[5px] top-10 right--20 absolute border-[#028fba] p-5 bg-[#028fba] rounded-md">
          <Image
            src="/profilepic.jpeg"
            width={200}
            height={200}
            alt="profile"
          />
        </div>
      </div>
    </div>
  );
}

export default About;
