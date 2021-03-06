import React, { useEffect } from "react";
import TakeawayContainer from "./TakeawayContainer";
import { Link } from "react-router-dom";
import veggietakeaway from "../imagesByEoin/veggietakeaway.JPG";

function Takeaway() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="aboutContainer">
      {/* <div className="vl"></div> */}
      <div>
        {/* <div className="coloredBox green">
          <h2>Takeaway</h2>
        </div> */}
        <br />

        <div className="">
          <div className="">
            <div className="flextakeaway">
              <img className="takeawayImage" src={veggietakeaway} alt="An image of fermented food" />
              <p className="takeawayText">
                Nourishing, sustainable, tasty ready-to-go meal to enjoy with
                your loved ones in the comfort of your own home.
                <br />
                <br />
                Our takeaway is by pre-order only, join our mailing list to
                receive the weekly menu, or check out the website each Monday
                for the update.
                <br />
                <br />
                Food is served in glass jars, we greatly appreciate the return
                of clean jars helping eliminate waste.
              </p>
            </div>
          </div>
          <div>
            <TakeawayContainer />
            <br />
            <Link to="/shop">
              <div className="ProductsFromMenu">Shop Products</div>
            </Link>
            <br />
          </div>
        </div>
      </div>
      {/* <div className="vl"></div> */}
    </section>
  );
}

export default Takeaway;
