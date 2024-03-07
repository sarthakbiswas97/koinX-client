import React, { useEffect, useState } from 'react';
import { IoTriangleSharp } from 'react-icons/io5';
import { fetchTrendingCoins, Coin } from '../utility/coinGeckoApi';

const TrendingCoins: React.FC = () => {
  const [trendingCoins, setTrendingCoins] = useState<Coin[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const coins = await fetchTrendingCoins();
      setTrendingCoins(coins.slice(0, 3));
    };

    fetchData();
  }, []);

  return (
    <div>
      <div className="w-300 h-300 bg-white rounded-xl ml-3 mr-3">
        <div className="m-4">
          <h1 className="font-bold text-2xl mt-4">Trending Coins (24h)</h1>
          {trendingCoins.length > 0 ? (
            trendingCoins.map((coin, index) => (
              <div key={index} className="flex items-center mt-5">
                <img
                  src={coin.thumb}
                  alt={coin.name}
                  width={30}
                  height={40}
                  className="rounded-full"
                />
                <div className="ml-2">
                  <p>{`${coin.name} (${coin.symbol})`}</p>
                </div>
                <div
                  className={`ml-auto flex items-center ${
                    coin.priceChange24h >= 0 ? 'text-green-500' : 'text-red-500'
                  }`}
                >
                  <div
                    className={`${
                      coin.priceChange24h >= 0 ? 'bg-green-100' : 'bg-red-100'
                    } rounded-lg px-2 py-1 ml-1`}
                  >
                    <div className="display flex items-center">
                      {coin.priceChange24h >= 0 ? (
                        <IoTriangleSharp />
                      ) : (
                        <IoTriangleSharp className="transform rotate-180" />
                      )}
                      {`${Math.abs(coin.priceChange24h)?.toFixed(2)}%`}
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p>Loading...</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default TrendingCoins;
