import HomePage from "@/components/HomePage";
import Modal from "@/components/Modal";
import "@/styles/globals.css";
import "@/styles/vanillacss.css";
import "@/styles/three.css";
import Script from "next/script";
import { RecoilRoot } from "recoil";
import TextSphere from "@/components/TextSphere";
import Maps from "@/components/Maps";

export default function App({ Component, pageProps }) {
  return (
    <>

      <RecoilRoot>
      <div className="">
        {/* hello */} 
        <canvas className=" canva absolute top-0 left-0 bg-[#0C0E10]  overflow-y-scroll scrollbar-hide"></canvas>
      {/* <HomePage/> */}
      <div className="relative">
      {/* <TextSphere/> */}
      
      {/* <Script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.6/dist/umd/popper.min.js" integrity="sha384-oBqDVmMz9ATKxIep9tiCxS/Z9fNfEXiDAYTujMAeBAsjFuCZSmKbSSUnQlmh/jp3" crossorigin="anonymous"></Script>
<Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.min.js" integrity="sha384-mQ93GR66B00ZXjt0YO5KlohRA5SY2XofN4zfuZxLkoj1gXtW8ANNCe9d5Y3eG5eD" crossorigin="anonymous"></Script>
      <Maps/> */}
      <Component {...pageProps} />
      </div>
      <Script type="module" src="/script.js"></Script> 
      </div>
      
      </RecoilRoot>
    </>
  );
}
