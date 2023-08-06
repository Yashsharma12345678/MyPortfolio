import HomePage from "@/components/HomePage";
import Modal from "@/components/Modal";
import "@/styles/globals.css";
import "@/styles/vanillacss.css";
import "@/styles/three.css";
import Script from "next/script";
import { RecoilRoot } from "recoil";
import TextSphere from "@/components/TextSphere";
import Maps from "@/components/Maps";
import Head from "next/head";
import { Toaster } from "react-hot-toast";

export default function App({ Component, pageProps }) {
  return (
    <>
      <RecoilRoot>
        <div className="">
          <canvas className=" canva absolute top-0 left-0 bg-[#0C0E10] overflow-y-scroll scrollbar-hide"></canvas>
          <div className="relative">
            <Component {...pageProps} />
            <Toaster/>
          </div>
          <Script type="module" src="/script.js"></Script>
        </div>
      </RecoilRoot>
    </>
  );
}
