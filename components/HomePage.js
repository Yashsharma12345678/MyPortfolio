import React from "react";
import { CodeBracketIcon,ClockIcon,PencilIcon , Bars3Icon} from "@heroicons/react/24/outline";
import Link from "next/link";
import { useRecoilState } from "recoil";
import { modalState } from "@/atoms/modalAtom";



function HomePage() {
  

  const [open , setOpen] = useRecoilState(modalState);

  return (
  <>
    <div className="flex flex-col text-gray-400 justify-center items-center">
  <div onClick={()=>setOpen(true)} className="drawer cursor-pointer absolute top-5 left-5">
    <Bars3Icon  className=" w-5 opacity-80 "/>
  </div>
      {/* text */}
      <div className=" flex flex-col items-center justify-center mt-80 sm:mt-0 sm:h-screen">

      
      <div className="">
        <h1 className="text-gray-400 text-4xl sm:text-5xl md:text-6xl lg:text-6xl tracking-tight font-extrabold">
          <span className="text">H</span><span className="text">e</span><span className="text">y</span><span className="wave cursor-pointer">👋 </span>{" "}
         <span className="text">I</span><span className="text">m</span><span className="text"> Y</span><span className="text">a</span><span className="text">s</span><span className="text">h</span><span className="text"> S</span><span className="text">h</span><span className="text">a</span><span className="text">r</span><span className="text">m</span><span className="text">a</span><br className="hidden sm:block" />
        </h1>
      </div>
      <div className="text-xl md:text-3xl pt-5 mt-10">
        I am a 20 year old software developer
        {/* <span className="emoji monkey hidden sm:block " role="img" aria-label="monkey"></span> */}
      </div>
      <div className="flex ">
      <Link href="/Projects"><div className="btn flex">
          <CodeBracketIcon className="w-5 mr-2" />
          <button>Projects</button>
        </div></Link>
        <div className="">
        <Link href="/About"><div className="btn flex">
          <ClockIcon className="w-5 mr-2" />
          <button>About</button>
        </div></Link>
        </div>

        <Link href="/Contact">
        <div className="btn flex">
          <PencilIcon className="w-5 mr-2" />
          <button>Contact</button>
        </div>
        </Link>
      </div>

      {/* line */}
      {/* buttons */}
    </div>
    </div>
    </>
  );
}

export default HomePage;
