import React from "react";
import { AiFillExclamationCircle } from "react-icons/ai";
import Carousel from "../components/Carousel";
import { IoNewspaperOutline } from "react-icons/io5";
import Image from "next/image";

interface HomeProps {}

const Senti: React.FC<HomeProps> = () => {
  const items = [
    { image: "favicon.ico", alt: "Item 1", title: "Item 1 Title" },
    { image: "favicon.ico", alt: "Item 2", title: "Item 2 Title" },
    { image: "favicon.ico", alt: "Item 3", title: "Item 3 Title" },
    { image: "favicon.ico", alt: "Item 3", title: "Item 3 Title" },
    { image: "favicon.ico", alt: "Item 3", title: "Item 3 Title" },
    // Add more items as needed
  ];

  return (
    <div>
      <div className="w-200 h-200 bg-white rounded-xl ml-14 mr-3 mt-5">
        <div className="m-5">
          <h1 className="font-bold text-xl">Sentiment</h1>
          <div className="display flex items-center">
            <h2 className="font-semibold text-slate-500 text-lg mr-2">
              Key Events
            </h2>
            <AiFillExclamationCircle
              style={{ transform: "rotate(180deg)", fill: "gray" }}
            />
          </div>
        </div>
        <Carousel items={items} />
        <div className="display flex items-center ml-6">
            <h2 className="font-semibold text-slate-500 text-lg mr-2">
              Analyst Estimates
            </h2>
            <AiFillExclamationCircle
              style={{ transform: "rotate(180deg)", fill: "gray" }}
            />
        </div>
        <Image
        src="/estimate.png"
        alt="Logo"
        width={700}
        height={700}
        />
      </div>
    </div>
  );
};

export default Senti;
