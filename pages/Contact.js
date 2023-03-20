import { addDoc, collection } from "firebase/firestore";
import React, { useRef, useState } from "react";
import { db } from "../firebase";

function Contact() {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [subject, setsubject] = useState("");
  const [message, setmessage] = useState("");

  const sendData = async (e) => {
    e.preventDefault();
    const nametosend = name;
    setname("");
    const emailtosend = email;
    setemail("");
    const subjecttosend = subject;
    setsubject("");
    const messagetosend = message;
    setmessage("");

    console.log(nametosend, messagetosend);

    await addDoc(collection(db, "UserData"), {
      name: nametosend,
      email: emailtosend,
      subject: subjecttosend,
      message: messagetosend,
    });
  };

  return (
    <div>
      <div className="  grid grid-cols-9 text-white">
      <div className=" col-span-1  "></div>

        <div className=" col-span-6 sm:col-span-3 ">
          <h1 className="htmltext select-none font hidden sm:block">
            {"</"}html{">"}
          </h1>
          <h1 className="htmltext select-none font hidden sm:block">
            {"<"}body{">"}
          </h1>

          <h1 className="htmltext select-none font hidden sm:block mt-5">
            {"<"}h2{">"}
          </h1>

          <h1 className="text-[#08FDD8] text-4xl mt-20 sm:mt-0 sm:text-4xl lg:text-6xl font-extrabold ">
            <span className="text cursor-pointer">C</span>
            <span className="text cursor-pointer">o</span>
            <span className="text cursor-pointer">n</span>
            <span className="text cursor-pointer">t</span>
            <span className="text cursor-pointer">a</span>
            <span className="text cursor-pointer">c</span>
            <span className="text cursor-pointer">t </span>
            <span className="text cursor-pointer">m</span>
            <span className="text cursor-pointer">e</span>
          </h1>
          <h1 className="htmltext select-none font hidden sm:block ">
            {"<"}h2{"/>"}
          </h1>
          <h1 className="htmltext select-none font hidden sm:block mx-4">
            {"<"}p{">"}
          </h1>

          <p className="mx-0 sm:mx-6 mt-4 sm:mt-0 text-gray-300 text-md  sm:text-md">
            I’m interested in freelance opportunities – especially ambitious or
            large projects. However, if you have other request or question,
            don’t hesitate to use the form
          </p>
          <h1 className="htmltext select-none font hidden sm:block mx-4">
            {"<"}p{"/>"}
          </h1>
          <h1 className="htmltext select-none font hidden sm:block ">
            {"<"}form{">"}
          </h1>

          <form action="" className="flex flex-col space-y-4 " id="contactForm">
            <div className="flex  space-x-2">
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setname(e.target.value)}
                placeholder="Name"
                className="input max-w-full "
              />
              <input
                type="text"
                id="email"
                value={email}
                onChange={(e) => setemail(e.target.value)}
                placeholder="Email"
                className="input "
              />
            </div>
            <input
              type="text"
              placeholder="Subject"
              value={subject}
              onChange={(e) => setsubject(e.target.value)}
              id="subject"
              className="input"
            />
            <textarea
              cols="10"
              rows="6"
              id="textarea"
              value={message}
              onChange={(e) => setmessage(e.target.value)}
              className="input"
              placeholder="Message"
            ></textarea>
            <div className=" py-2 flex justify-between">
              <div className="text-[#0C0E10]">hello</div>
              <button
                onClick={sendData}
                type="submit"
                className="border py-2 sm:py-4 px-2  mr-2 hover:bg-[#08FDD8] hover:rounded-lg hover:scale-125 transition transform duration-200 ease-out hover:text-white border-[#08FDD8] text-[#08FDD8]"
              >
                Send Messages
              </button>
            </div>
          </form>
          <h1 className="htmltext select-none font hidden sm:block mx-6">
            {"<"}form{"/>"}
          </h1>
          <h1 className="htmltext select-none font hidden sm:block mx-4">
            {"<"}body{"/>"}
          </h1>
          <h1 className="htmltext select-none font hidden sm:block ">
            {"<"}html{"/>"}
          </h1>

        </div>
        <div className=" col-span-1   "></div>

        <div className="col-span-4 border h-screen hidden sm:block">
        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d112015.36851403785!2d77.1588096!3d28.675276800000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1679332984854!5m2!1sen!2sin"  className="w-full h-full" allowfullscreen=""  referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </div>
    </div>
  );
}

export default Contact;
