import React from "react";
import LoginFooter from "../LoginFooter";
import LoginHeader from "../LoginHeader";
import "./about.css";

function WhoWeAre() {
  return (
    <>
      <LoginHeader />
      <div className="aboutPosts">
        <div>
          <h3>Mission:</h3>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione
            iure tempore dolor blanditiis nemo aliquid aut expedita ea nesciunt
            at quisquam magnam inventore eveniet sed minima, nihil ab hic
            aperiam.
          </p>
        </div>
        <div>
          <h3>Our Purpose:</h3>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione
            iure tempore dolor blanditiis nemo aliquid aut expedita ea nesciunt
            at quisquam magnam inventore eveniet sed minima, nihil ab hic
            aperiam.
          </p>
        </div>
      </div>
      <LoginFooter />
    </>
  );
}

export default WhoWeAre;
