import Intro from "./Components/Splash/Intro";
import ParticleBackground from "./Components/Splash/ParticleBackground";
import Portfolio from "./Components/Portfolio/Portfolio";
import { useState } from "react";

const App = () => {
  const [portfolio, setPortfolio] = useState(false);
  const openPortfolio = () => {
    setPortfolio(!portfolio);
  };

  return (
    <>
      <ParticleBackground />
      <Intro
        name="Adnan Adrian"
        designation="Undergraduate Student"
        onExplore={openPortfolio}
      />
      {portfolio ? <Portfolio onClose={openPortfolio} /> : ""}
    </>
  );
};

export default App;
