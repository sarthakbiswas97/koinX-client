
import Image from "next/image";
import { IoIosArrowRoundForward } from "react-icons/io";
import TrendingCoins from "@/components/TrendingCoins";

const RightSide: React.FC = () => {

    return (
      <div>
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
          <TrendingCoins/>
          </div>
    )
}

export default RightSide;