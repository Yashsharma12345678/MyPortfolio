import Head from "next/head";
import { Inter } from "@next/font/google";
import { useMemo } from "react";
import { GoogleMap,useLoadScript,Marker } from "@react-google-maps/api";
import HomePage from "@/components/HomePage";
import Projects from "@/pages/Projects";
import Script from "next/script";
import Blog from "@/components/Blog";
import Modal from "@/components/Modal";


export default function Home() {
  <Head>

<link rel="preconnect" href="https://fonts.googleapis.com"/>
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
<link href="https://fonts.googleapis.com/css2?family=Alex+Brush&display=swap" rel="stylesheet"/>
</Head>
  // const {isLoaded} = useLoadScript({
  //   googleMapsApiKey: "AIzaSyDPh73hAo05erjtXlS_AgJgcRsFspo_dZU",
  // })

  // if(!isLoaded) return <div>Loading...</div>


  return (
    <>
    {/* <Maps/> */}
      <div className="relative ">
      <HomePage />
      <Modal/>
      </div>
    </>
  );
}

// function Maps(){
//   return <GoogleMap zoom={10} center={{lat:44,lng:-80}}></GoogleMap>
// }
