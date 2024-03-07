import Navbar from "@/components/Navbar";
import { RiArrowRightDoubleLine } from "react-icons/ri";
import Senti from "@/components/Sentiment";
import AboutBitcoin from "@/components/AboutBitcoin";
import ChartComponent from "@/components/ChartComponent";
import YouMayAlsoLike from "@/components/YouMayAlsoLike";
import RightSide from "@/components/RightSide";
import TeamCard from "@/components/TeamSection";
import PerformanceSection from "@/components/Performance";
import Tokenomics from "@/components/Tokenomics";

const Home: React.FC = () => {
  
  return (
    <div className="flex flex-col h-screen">
      <Navbar />
      <div className="flex mt-4 ml-16 font-extralight text-slate-500">
        <div>Cryptocurrencies</div>
        <RiArrowRightDoubleLine className="mt-1 ml-1 text-slate-800" />
        <div>Bitcoin</div>
      </div>
      <div className="flex-1 grid grid-cols-9">
        <div className="col-span-6">
          <ChartComponent />
          <div className="ml-12 mr-3">
            <PerformanceSection/>
          </div>
          <Senti />
          <AboutBitcoin />
          <Tokenomics/>
          <TeamCard/>
        </div>
        <div className="col-span-3 mt-4">
          <RightSide />
        </div>
      </div>

        <YouMayAlsoLike />
        <YouMayAlsoLike />

    </div>
  );
};

export default Home;
