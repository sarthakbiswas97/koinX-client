import { useState, useEffect } from "react";
import axios from "axios";
import TradingViewWidget from "./TradingView";
import { IoTriangleSharp } from "react-icons/io5";
import Image from "next/image";

interface CoinDetails {
  symbol: string;
  priceUSD: number;
  priceINR: number;
  change24hr: number;
  thumbImage: string;
}

const ChartComponent: React.FC = () => {
  const [bitcoinDetails, setBitcoinDetails] = useState<CoinDetails | null>(
    null
  );

  useEffect(() => {
    const fetchBitcoinDetails = async () => {
      try {
        const priceResponse = await axios.get(
          "https://api.coingecko.com/api/v3/simple/price",
          {
            params: {
              ids: "bitcoin",
              vs_currencies: "usd,inr",
            },
          }
        );

        const bitcoinData = priceResponse.data.bitcoin;

        const moreDetailsResponse = await axios.get(
          "https://api.coingecko.com/api/v3/coins/bitcoin",
          {
            params: {
              localization: false,
            },
          }
        );

        const moreDetailsData = moreDetailsResponse.data;

        const coinDetails: CoinDetails = {
          symbol: "BTC",
          priceUSD: bitcoinData.usd,
          priceINR: bitcoinData.inr,
          change24hr:
            moreDetailsData.market_data.price_change_percentage_24h || 0,
          thumbImage: moreDetailsData.image.thumb,
        };

        setBitcoinDetails(coinDetails);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchBitcoinDetails();
  }, []);

  const formattedPriceInUSD = bitcoinDetails?.priceUSD?.toLocaleString(
    "en-US",
    {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }
  );

  const formattedPriceInINR = bitcoinDetails?.priceINR?.toLocaleString(
    "en-US",
    {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }
  );

  const isPositive =
    bitcoinDetails?.change24hr && bitcoinDetails?.change24hr >= 0;

  return (
    <div className="w-200 h-200 bg-white rounded-xl ml-14 mr-3">
      <div className="display flex items-center">
        <div className="mt-4 ml-4">
          <img
            src={bitcoinDetails?.thumbImage}
            alt="Bitcoin Thumbnail"
            width={40}
            height={50}
          />
        </div>
        <h1 className="mt-4 ml-2 font-semibold text-3xl">Bitcoin</h1>
        <p className="mt-4 ml-3 font-medium text-slate-500">
          {bitcoinDetails?.symbol}
        </p>
        <div className="mt-4 ml-7 bg-slate-500 text-white p-2 rounded-md">
          RANK #1
        </div>
      </div>

      <div className="display flex items-center">
        <p className="mt-7 ml-4 font-bold text-3xl">${formattedPriceInUSD}</p>
        <div
          className={`mt-7 ml-4 ${
            isPositive ? "text-green-500" : "text-red-500"
          }`}
        >
          <div
            className={` ${
              isPositive ? "bg-green-100" : "bg-red-100"
            } rounded-lg px-2 py-1 ml-1`}
          >
            <div className="display flex items-center">
              {isPositive ? (
                <IoTriangleSharp />
              ) : (
                <IoTriangleSharp className="transform rotate-180" />
              )}
              {`${bitcoinDetails?.change24hr.toFixed(2)}%`}
            </div>
          </div>
        </div>

        <div className="mt-7 ml-4 font-medium text-slate-500">(24H)</div>
      </div>

      <div>
        <p className="mt-1 ml-4 mb-4 font-medium text-lg">
          ₹ {formattedPriceInINR}
        </p>
      </div>
      <div className="h-96">
        <Image
        src="/btcdays.png"
        alt="Sparkline"
        width={900}
        height={40}/>
        <TradingViewWidget />
      </div>
    </div>
  );
};

export default ChartComponent;
