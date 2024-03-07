import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import { IoTriangleSharp } from "react-icons/io5";
import { fetchTrendingCoins, Coin } from "../utility/coinGeckoApi";

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
      style={{ ...style, display: "block", background: "gray"}}
      onClick={onClick}
    />
  );
  };
  

  const NextArrow = (props: any) => {
    const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "gray"}}
      onClick={onClick}
    />
  );
  };
  

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 3,
    nextArrow: <NextArrow/>,
    prevArrow: <PrevArrow/>,
  };

  return (
    <div>
  <div className="bg-white p-2 md:ml-3 md:mr-3">
    <div className="mt-2 md:mt-4 md:ml-4 md:mr-4">
      <h1 className="font-bold text-xl md:text-2xl mt-2 mb-2 md:mt-4 md:mb-4 ml-3">
        You May Also Like
      </h1>
      {trendingCoins.length > 0 ? (
        <Slider {...settings}>
          {trendingCoins.map((coin, index) => (
            <div
              key={index}
              className="carousel-item border-2 border-gray-300 p-2 md:p-4 rounded-lg mb-2"
            >
              <div className="flex flex-col items-center md:flex-row md:items-center">
                <img
                  src={coin.thumb}
                  alt={coin.name}
                  width={30}
                  height={40}
                  className="rounded-full mb-2 md:mb-0"
                />
                <div className="md:ml-2">
                  <p>{`${coin.symbol}`}</p>
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
                        <div className="flex items-center">
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
              </div>
              <div className="carousel-item-content mt-2 md:mt-0">
                <p className="md:ml-2">{`${coin.priceUSD}`}</p>
                <img
                  src={coin.sparkline}
                  alt="Sparkline"
                  width={150}
                  height={40}
                  className="md:ml-2"
                />
              </div>
            </div>
          ))}
        </Slider>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  </div>
</div>

  );
};

export default YouMayAlsoLike;
