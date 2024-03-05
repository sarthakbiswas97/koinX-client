import Image from "next/image";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import { IoIosArrowRoundForward } from "react-icons/io";
import { RiArrowRightDoubleLine } from "react-icons/ri";
import TrendingCoins from "@/components/TrendingCoins";
import axios from "axios";
import { AiFillExclamationCircle } from "react-icons/ai";

import Senti from "@/components/Sentiment";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <Navbar />
      <div className="display flex">
        <div className="mt-4 ml-16 font-extralight text-slate-500">
          Cryptocurrencies
        </div>
        <RiArrowRightDoubleLine className="mt-5 ml-1 text-slate-800" />
        <div className="mt-4">Bitcoin</div>
      </div>
      <div className="grid grid-cols-9 h-screen w-screen">
        <div className="col-span-6">
          <div className="w-200 h-200 bg-white rounded-xl ml-14 mr-3">
            <Image
              src="/btcchart.png"
              alt="Logo"
              width={700}
              height={700}
              className="mt-4"
            />
          </div>
          <div className="ml-12 mr-3">
            <Image
              src="/performance.png"
              alt="Logo"
              width={900}
              height={900}
              className="mt-4"
            />
          </div>
          <Senti />
        </div>
        {/* right side portion */}
        <div className="col-span-3 mt-4">
          <div className="flex flex-col items-center justify-center w-200 h-200 bg-blue-700 rounded-3xl mx-auto mr-3 ml-3">
            <h1 className="text-center text-white font-bold mt-14">
              Get Started with KoinX for FREE
            </h1>
            <p className="m-4 text-center text-white">
              With our range of features that you can equip for free, KoinX
              allows you to be more educated and aware of your tax reports
            </p>
            <div className="mt-7">
              <Image
                src="/getstarted.png"
                alt="Logo"
                width={200}
                height={700}
              />
            </div>
            <button className="bg-white text-black py-2 px-4 rounded border border-gray-300 hover:bg-gray-100 focus:outline-none focus:border-blue-500 focus:ring focus:ring-blue-200 mt-10 mb-4">
              <div className="flex items-center font-semibold">
                Get Started for FREE
                <IoIosArrowRoundForward className="ml-2 text-3xl" />
              </div>
            </button>
          </div>
          <TrendingCoins />
        </div>
      </div>
    </div>
  );
}
