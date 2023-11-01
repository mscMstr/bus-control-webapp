import { useState } from "react";
import ctaImage from './images/cta.png';  // importing the image
import mitImage from './images/mit.png';  // importing the image
import neuImage from './images/neu.png';  // importing the image

const Home = () => {

  return (
    <div className="home">
      <h2>Bus Control Web App</h2>
        <h4 className="homepageText">
            Welcome to the bus control web app! Click on stations above to get monitoring information and recommendations.
        </h4>
        <img src={ctaImage} alt="Bus" />  {/* inserting the image */}
        <img src={mitImage} alt="Bus" />  {/* inserting the image */}
        <img src={neuImage} alt="Bus" />  {/* inserting the image */}
        <h4>
        </h4>
    </div>
  );
};

export default Home;