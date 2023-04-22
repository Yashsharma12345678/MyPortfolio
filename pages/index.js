
import HomePage from "@/components/HomePage";
import Modal from "@/components/Modal";
import Head from "next/head";


export default function Home() {

  return (

    <>
    <Head>
      <title>portfolio</title>
      <link rel="shortcut icon" href="/favicon3.png" />
    </Head>
    {/* <Maps/> */}
      <div className="relative  ">
      <HomePage />
      <Modal/>
      </div>
    </>
  );
}

// function Maps(){
//   return <GoogleMap zoom={10} center={{lat:44,lng:-80}}></GoogleMap>
// }
