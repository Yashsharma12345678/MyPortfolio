import { modalState } from "@/atoms/modalAtom";
import React, { Fragment } from "react";
import { useRecoilState } from "recoil";
import { Snapshot } from "recoil";
import { Transition, Dialog } from "@headlessui/react";
import {
  HomeIcon,
  ClockIcon,
  PencilIcon,
  ChevronUpDownIcon,
  KeyIcon,
  ClipboardDocumentIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";

function Modal() {
  const [open, setOpen] = useRecoilState(modalState);
  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog
        as="div"
        className="fixed z-10 inset-0 overflow-hidden"
        onClose={setOpen}
      >
        <div className="flex min-h-{800px} sm:min-h-screen sm:block sm:p-0">
          <Transition.Child
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className=" fixed inset-0 bg-[#1d2125] bg-opacity-75 transition-opacity " />
          </Transition.Child>

          {/* <span className="hidden  sm:inline-block sm:h-screen"> &#8208</span> */}

          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enterTo="opacity-100 translate-y-0 sm:scale-100 "
            leave="ease-in duration-200"
            leaveFrom="opacity-100 translate-y-0 sm:scale-100 "
            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          >
            <div className="inline-block align-bottom bg-[#0C0E10] border border-gray-400 rounded-md mx-6 my-4  overflow-hidden shadow-xl transform transition-all w-1/2 sm:my-16 sm:align-middle sm:max-w-sm sm:w-full sm-p-6">
              <div>
                <Link href="/"><div className="flex cursor-pointer text-white space-x-5 pl-5 p-1 mt-3 pb-2 hover:bg-gray-900 transition duration-500 transform ease-out">
                  <HomeIcon className="h-5" />
                  <p>Home</p>
                </div></Link>
                <Link href="/Projects"><div className="flex cursor-pointer text-white space-x-5 pl-5 p-1 mt-3 pb-2 hover:bg-gray-900 transition duration-500 transform ease-out">
                  <ChevronUpDownIcon className="h-5 -rotate-90" />
                  <p>Projects</p>
                </div></Link>
                <Link href="/About">
                <div className="flex cursor-pointer text-white space-x-5 pl-5 p-1 mt-3 pb-2 hover:bg-gray-900 transition duration-500 transform ease-out">
                  <ClockIcon className="h-5" />
                  <p>About</p>
                </div>
                </Link>
                <Link href="Contact">
                <div className="flex cursor-pointer text-white space-x-5 pl-5 p-1 mt-3 pb-2 hover:bg-gray-900 transition duration-500 transform ease-out">
                  <PencilIcon className="h-5" />
                  <p>Contact</p>
                </div>
                </Link>
                <div className="flex cursor-pointer text-white space-x-5 pl-5 p-1 mt-3 pb-2 hover:bg-gray-900 transition duration-500 transform ease-out">
                  <KeyIcon className="h-5" />
                  <p>Intel</p>
                </div>
              </div>
              <div className="border-t-2 border-gray-700">
                <div className="flex cursor-pointer text-white space-x-5 pl-5 p-1 mt-3 pb-2 hover:bg-gray-900 transition duration-500 transform ease-out">
                  <Image src="/twitter.png" height={25} width={25} />
                  <p>Twitter</p>
                </div>
                <Link
                  href="https://www.linkedin.com/in/yashsharma2723/"
                  target="_blank"
                >
                  <div className="flex cursor-pointer text-white space-x-5 pl-5 p-1 mt-3 pb-2 hover:bg-gray-900 transition duration-500 transform ease-out">
                    <Image src="/linkedin.png" height={25} width={25} />
                    <p>Linkedin</p>
                  </div>
                </Link>
                <Link
                  href="https://github.com/settings/profile"
                  target="_blank"
                >
                  <div className="flex cursor-pointer text-white space-x-5 pl-5 p-1 mt-3 pb-2 hover:bg-gray-900 transition duration-500 transform ease-out">
                    <Image
                      className="bg-white"
                      src="/github1.png"
                      height={25}
                      width={25}
                    />
                    <p>Github</p>
                  </div>
                </Link>
                <Link href="/yashResume.pdf" target="_blank">
                  <div className="flex text-white outline-none space-x-5 pl-5 p-1 mt-3 pb-2 mb-3 hover:bg-gray-900 transition border-0 duration-500 transform ease-out">
                    <ClipboardDocumentIcon className="h-7" />
                    <p>Resume</p>
                  </div>
                </Link>
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
}

export default Modal;
