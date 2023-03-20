
import HomePage from "@/components/HomePage";
import Modal from "@/components/Modal";


export default function Home() {
  // const {isLoaded} = useLoadScript({
  //   googleMapsApiKey: "AIzaSyDPh73hAo05erjtXlS_AgJgcRsFspo_dZU",
  // })

  // if(!isLoaded) return <div>Loading...</div>


  return (
    <>
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
