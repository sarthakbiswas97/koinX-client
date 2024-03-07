import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import { IoTriangleSharp } from "react-icons/io5";
import { fetchTrendingCoins, Coin } from "../utility/coinGeckoApi";
import Image from "next/image";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const YouMayAlsoLike: React.FC = () => {
  const [trendingCoins, setTrendingCoins] = useState<Coin[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const coins = await fetchTrendingCoins();
      setTrendingCoins(coins);
    };

    fetchData();
  }, []);

  const PrevArrow = (props: any) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "gray" }}
        onClick={onClick}
      />
    );
  };

  const NextArrow = (props: any) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "gray" }}
        onClick={onClick}
      />
    );
  };

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <div>
      <div className="w-200 h-200 bg-white rounded-xl ml-14 mr-3 mt-5">
        <div className="mt-0 ml-4 mr-4">
          <h1 className="font-bold text-2xl mt-4 mb-4 ml-3">Sentiment</h1>
          <h2 className="font font-semibold ml-3">Key Events</h2>
          {trendingCoins.length > 0 ? (
            <Slider {...settings}>
              {trendingCoins.map((coin, index) => (
                <div
                  key={index}
                  className="carousel-item border-2 border-gray-300 p-4 rounded-lg"
                >
                  <div className="display flex items-center">
                    <img
                      src={coin.thumb}
                      alt={coin.name}
                      width={30}
                      height={40}
                      className="rounded-full"
                    />
                    <p className="ml-2">{`${coin.symbol}`}</p>
                    <div className="flex items-center text-sm">
                      <div
                        className={`flex items-center ${
                          coin.priceChange24h >= 0
                            ? "text-green-400"
                            : "text-red-400"
                        }`}
                      >
                        <div
                          className={`${
                            coin.priceChange24h >= 0
                              ? "bg-green-100"
                              : "bg-red-100"
                          } rounded-lg px-2 py-1 ml-1`}
                        >
                          <div className="display flex items-center">
                            {coin.priceChange24h >= 0 ? (
                              <IoTriangleSharp />
                            ) : (
                              <IoTriangleSharp className="transform rotate-180" />
                            )}
                            {`${coin.priceChange24h?.toFixed(2)}%`}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="carousel-item-content">
                    <div className="ml-2">
                      <p>{`${coin.priceUSD}`}</p>
                    </div>
                    <div className="ml-2">
                      <img
                        src={coin.sparkline}
                        alt="Sparkline"
                        width={150}
                        height={40}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          ) : (
            <p>Loading...</p>
          )}
        </div>
        <Image src="/estimate.png" alt="Logo" width={650} height={10} />
      </div>
    </div>
  );
};

export default YouMayAlsoLike;
