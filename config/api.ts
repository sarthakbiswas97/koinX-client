import axios from "axios";

export const fetchData = async () => {
  try {
    const response = await axios.get(
      "https://api.coingecko.com/api/v3/simple/price"
    );
    const data = response.data;
    return {
      props: { data },
    };
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};
