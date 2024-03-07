// coinGeckoApi.ts
import axios from 'axios';

export interface Coin {
  id: string;
  name: string;
  symbol: string;
  thumb: string;
  priceChange24h: number;
  priceUSD: string;
  sparkline: string;
}

export const fetchTrendingCoins = async (): Promise<Coin[]> => {
  try {
    const response = await axios.get(
      'https://api.coingecko.com/api/v3/search/trending'
    );

    return response.data.coins.map((coinData: any) => {
      const {
        item: {
          id,
          name,
          symbol,
          thumb,
          data: { price_change_percentage_24h, price, sparkline },
        },
      } = coinData;

      return {
        id,
        name,
        symbol,
        thumb,
        priceChange24h: price_change_percentage_24h?.usd || 0,
        priceUSD: price || '0', // Ensure it's a string
        sparkline: sparkline || '',
      };
    });
  } catch (error) {
    console.error('Error fetching trending coins:', error);
    return [];
  }
};
