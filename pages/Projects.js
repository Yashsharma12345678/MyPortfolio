
import React from "react";
import Card from "../components/card";

function Projects() {
  return (

    <div className="h-screen  overflow-y-auto py-32 scrollbar-hide">
    <div className="flex flex-col items-center justify-center">
    {/* <Contacts/>  */}
      <Card title="Gamehub" desc="this is a gaming site in which we can play various games together" link="https://gamebits.vercel.app/" />
      <Card title="YashCart" desc="This is basically a ecommerce site 🙂" link="https://gamebits.vercel.app/"  />
      <Card title="Jarvis" desc="This is a openAi project " link="https://chatwithjarvy.vercel.app/"  />
      <Card title="InstaClone" desc="This is a social-media platform where we meet many friends" link="https://gamebits.vercel.app/" />
      <Card title="PhotoGallery" desc="This is the only platform where you can get any picture by just writing its name" link="https://phomtogallery.vercel.app/" />
      <Card title="VideoGallery" desc="This is the only platform where you can get any Video by just writing its name" link="https://gamebits.vercel.app/" />
      <Card title="YashTV" desc="Here you get all trending movies"/>
      <Card title="Doodle" desc="It is a Search engine where you can get any information " link="https://gamebits.vercel.app/" />
      <Card title="YChat" desc="This is a chatting site." link="https://gamebits.vercel.app/" />
    </div>
    </div>
  );
}

export default Projects;
