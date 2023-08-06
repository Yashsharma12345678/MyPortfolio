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

      <div className="relative  ">
      <HomePage />
      <Modal/>
      </div>
    </>
  );
}

