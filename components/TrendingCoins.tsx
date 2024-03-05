import { useState, useEffect } from 'react';
import axios from 'axios';
import Image from 'next/image';

const TrendingCoins = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://api.coingecko.com/api/v3/search/trending');
        setData(response.data);
      } catch (error) {
        throw error;
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []); // Empty dependency array means the effect runs once after the initial render

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div className="w-200 h-200 bg-white rounded-xl ml-3 mr-3 mt-4">
      <div className='mb-5'>
      <h1 className="font-bold text-lg ml-4">Trending Coins (24h)</h1>
      <ul className="m-4">
        {data.coins.slice(0, 3).map((coin, index) => (
          <li className='mt-3' key={index}>{coin.item.name}</li>
        ))}
      </ul>
    </div>
    </div>
  );
};

export default TrendingCoins;
