import Navbar from "./Components/navbar";
import MainBanner from "./Components/MainBanner";
import Features from "./Components/fetchars";
import DaikinFit from "./Components/DaikinFit";
import Products from "./Components/Products";
import DealerBanner from "./Components/DealerBanner";
import AirConditioningFinancing from "./Components/AirConditioningFinancing";
import HighEfficiencySection from "./Components/HighEfficiencySection";
import Looking from "./Components/Looking";
import LogoSection from "./Components/LogoSection";
import Footer from "./Components/Footer";
export default function Home() {
  return (
    <div >
    <Navbar/>
    <MainBanner/>
    <Features/>
    <DaikinFit/>
    <Products/>
    <DealerBanner/>
    <AirConditioningFinancing/>
    <HighEfficiencySection/>
    <Looking/>
    <LogoSection/>
    <Footer/>
    </div>
  );
}
