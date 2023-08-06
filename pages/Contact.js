import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  onSnapshot,
  orderBy,
  query,
  serverTimestamp,
  setDoc
} from "firebase/firestore";
import React, { useEffect, useRef, useState } from "react";
import { db } from "../firebase";
import { toast } from "react-hot-toast";
var profanity = require("profanity-hindi");



function Contact() {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [subject, setsubject] = useState("");
  const [message, setmessage] = useState("");
  const [internetstate, setinternetstate] = useState("");
  const [formData, setFormData] = useState([]);
  const [loading,setLoading] = useState(false);

  useEffect(() => {
    if (typeof window != "undefined") {
      window.navigator.onLine ? setinternetstate("on") : setinternetstate("off")
    }
  }, [internetstate])

  useEffect(
    () =>
      onSnapshot(
        query(collection(db, "UserData"),
          orderBy("timestamp")),
        snapshot => {
          setFormData(snapshot.docs);
          
        }
      ), [db]
  );

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
    const notification = toast.loading('Your message has been uploading')

    if (nametosend != '' && email != '' && subject != '' && message != '') {
      if (!profanity.isMessageDirty(nametosend) && !profanity.isMessageDirty(email) && !profanity.isMessageDirty(message) && !profanity.isMessageDirty(subject)) {
        await addDoc(collection(db, "UserData"), {
          name: nametosend,
          email: emailtosend,
          subject: subjecttosend,
          message: messagetosend,
          timestamp: serverTimestamp()
        });
        
        

        toast.success('Successfully Uploaded ,Thankyou for connecting...', {
          id: notification
        })
        setLoading(false)
      }
      else {
        toast.error("Please don't use abuse words...", {
          id: notification
        })
      }
    }
    else {
      toast.error('Must filled all fields...', {
        id: notification
      })
    }
  };

  return (
    <div>
      <div className="  grid grid-cols-9 text-white">
        <div className=" col-span-1  "></div>
        {internetstate == "off" ?
          (<div className=" col-span-9 sm:col-span-3 ">
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
                  required
                  value={name}
                  onChange={(e) => setname(e.target.value)}
                  placeholder="Name"
                  className="input max-w-full "
                />
                <input
                  type="text"
                  id="email"
                  required
                  value={email}
                  onChange={(e) => setemail(e.target.value)}
                  placeholder="Email"
                  className="input "
                />
              </div>
              <input
                type="text"
                required
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

          </div>) :
          (<div className=" col-span-6 sm:col-span-3 ">
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
              I’m interested in freelance opportunities – especially ambitious on
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

          </div>)}
        <div className=" col-span-1   "></div>


        {<div className="col-span-4 pl-4 hidden md:flex md:flex-col h-screen overflow-y-auto border-l-[10px] border-gray-900 ">
          <h1 className="text-4xl text-center font-semibold mt-5 text-gray-200 animate-pulse ">Previous Suggestions </h1>
          <div className="mt-24 flex flex-col  mb-24">
            {formData.map((item) => {
              return (
                <>
                <div className="p-2 w-full ">
                  <div className=" flex items-center border-gray-200 border p-4 rounded-lg">
                    <div className="flex-grow">
                      <h2 className=" title-font font-medium text-lg text-blue-300">{item.data().email}</h2>
                      <div className="flex justify-between  ">
                      <p className=" text-red-300 text-md ">{item.data().message }</p>
                        {/* {
                        loading && <h1 className="font-bold">{new Date(item.data().timestamp.seconds*1000).toLocaleString()}</h1>
                        } */}
                      </div>
                    </div>
                  </div>
                </div>
                </>
              )
            })}
          </div> 
        </div>}
      </div>
    </div>
  );
}

export default Contact;
