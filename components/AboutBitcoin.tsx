import React from "react";
import Image from "next/image";
import { IoIosArrowRoundForward } from "react-icons/io";

export default function AboutBitcoin() {
  return (
    <div>
      <div className="w-700 h-700 bg-white rounded-xl mt-4 ml-14 mr-3">
        <div className="m-4">
          <h1 className="font-semibold text-2xl">About Bitcoin</h1>
          <h1 className="font-semibold text-xl mt-4">What Is Bitcoin ?</h1>
          <p className="mt-2 border-slate-200 border-b-2">
            Bitcoin (BTC) is a cryptocurrency, a virtual currency designed to
            act as money and a form of payment outside the control of any one
            person, group, or entity, thus removing the need for third-party
            involvement in financial transactions. It is rewarded to blockchain
            miners for verifying transactions and can be purchased on several
            exchanges.
          </p>
          <h1 className="font-semibold text-xl mt-4">
            The standard Lorem Ipsum passage
          </h1>
          <p className="mt-2">
            "Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
            aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
            eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est,
            qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit,
            sed quia non numquam eius modi tempora incidunt ut labore et dolore
            magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis
            nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut
            aliquid ex ea commodi consequatur? Quis autem vel eum iure
            reprehenderit qui in ea voluptate velit esse quam nihil molestiae
            consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla
            pariatur?"
          </p>
          <p className="mt-2">
            "Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
            aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
            eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est,
            qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit
          </p>
          <p className="mt-2 border-slate-200 border-b-2">
            "But I must explain to you how all this mistaken idea of denouncing
            pleasure and praising pain was born and I will give you a complete
            account of the system, and expound the actual teachings of the great
            explorer of the truth, the master-builder of human happiness. No one
            rejects, dislikes, or avoids pleasure itself, because it is
            pleasure, but because those who do not know how to pursue pleasure
            rationally encounter consequences that are extremely painful.
          </p>
          <h1 className="font-semibold text-2xl mb-5 mt-5">Already Holding Bitcoin ?</h1>
          <div className="display flex gap-8">
          <div className="w-96 h-40 rounded-lg bg-gradient-to-r from-green-300 via-blue-500 to-indigo-600">
            <div className="display flex items-center">
              <div className="mt-4 px-4 py-2 rounded-lg">
                <Image
                  src="/trading.jpg"
                  alt="Logo"
                  width={130}
                  height={10}
                  className="rounded-lg"
                />
              </div>

              <div className="mt-2 ml-2">
                <h1 className="font-semibold text-white text-2xl">
                  Calculate your Profits
                </h1>
                <button className="bg-white text-black py-0 px-2 rounded-lg mt-4 border border-gray-300 hover:bg-gray-100 focus:outline-none focus:border-blue-500 focus:ring focus:ring-blue-200">
                  <div className="flex items-center font-semibold">
                    Check Now
                    <IoIosArrowRoundForward className="ml-2 text-3xl" />
                  </div>
                </button>
              </div>
            </div>
          </div>
          <div className="w-96 h-40 rounded-lg bg-gradient-to-r from-orange-300 via-red-400 to-red-500">
            <div className="display flex items-center">
              <div className="mt-4 px-4 py-2 rounded-lg">
                <Image
                  src="/trading.jpg"
                  alt="Logo"
                  width={150}
                  height={10}
                  className="rounded-lg"
                />
              </div>

              <div className="mt-2 ml-2">
                <h1 className="font-semibold text-white text-2xl">
                  Calculate your tax liability
                </h1>
                <button className="bg-white text-black py-0 px-2 rounded-lg mt-4 border border-gray-300 hover:bg-gray-100 focus:outline-none focus:border-blue-500 focus:ring focus:ring-blue-200">
                  <div className="flex items-center font-semibold">
                    Check Now
                    <IoIosArrowRoundForward className="ml-2 text-3xl" />
                  </div>
                </button>
              </div>
            </div>
          </div>
          </div>
          <div className="mt-7 border-t-2">
          But I must explain to you how all this mistaken idea of denouncing
            pleasure and praising pain was born and I will give you a complete
            account of the system, and expound the actual teachings of the great
            explorer of the truth, the master-builder of human happiness.
          </div>
        </div>
      </div>
    </div>
  );
}
