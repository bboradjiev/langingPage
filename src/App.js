import Footer from "./Components/Footer/Footer";
import Mainheader from "./Components/Header/Mainheader";
import HeroSection from "./Components/Hero/HeroSection";
import NewsSection from "./Components/News/NewsSection";
import SexSection from "./Components/Sex/SexSection";
import SpecialFeaturesSection from "./Components/SpecialFeatures/SpecialFeaturesSection";
import SportSection from "./Components/Sport/SportSection";
import TechnologySection from "./Components/Technology/TechnologySection";
import "./Scss/App.scss";

import { useState } from "react";
function App() {
  const [toggle, setToggle] = useState(false);
  return (
    <div className="App">
      <Mainheader toggle={toggle} setToggle={setToggle}/>
      <HeroSection />
      <NewsSection />
      <SexSection />
      <TechnologySection />
      <SportSection />
      <SpecialFeaturesSection />
      <Footer />
    </div>
  );
}

export default App;
