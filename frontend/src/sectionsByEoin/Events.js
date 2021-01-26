import React, { useEffect } from "react";
import roseintro from "../imagesOfEvents/roseintro.jpeg";
import cocktail from "../imagesOfEvents/cocktail.jpg";
import neckandgizzard from "../imagesOfEvents/neckandgizzard.jpeg";
import seasoning from "../imagesOfEvents/seasoning.jpeg";
import main from "../imagesOfEvents/main.jpg";
import naturalwines from "../imagesOfEvents/naturalwines.jpeg";
import marrowfatpeas from "../imagesOfEvents/marrowfatpeas.jpeg";
import appledessert from "../imagesOfEvents/appledessert.jpeg";

function Events() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="aboutContainer">
      {/* <div className="vl"></div> */}
      <div>
        <div>
          <h2 className="covid coloredBox">COVID statement</h2>
          <p className="aboutMainText">
            2020 saw big changes, our little world at 4 Hands Food Studio had to
            adjust! Cancelling our dinner events, we made changes to our
            business model. We were focusing on gathering people together in a
            communal dining experience, sharing our nourishing foods and all
            embarking on a discussion around sustainable eating and the future
            of food. We press pause for the moment on this but continue to share
            our knowledge and ethos in a different form.
            <br />
            <br />
            We wish to thank all of you who shared our dining experiences in
            2019 and early 2020, for those who missed out due to cancellations
            we are looking forward to feeding you again in the future!
            <br />
            <br />
            <br />
            <b>Rose &amp; Margaux</b>
          </p>
        </div>
        <br />
        <div className="containEventImages">
          <img src={roseintro} alt="Rose from 4 Hands" />
          <br />          <br />

          <img src={cocktail} alt="4 Hands Food Studio Cocktail" />
          <br />          <br />

          <img src={neckandgizzard} alt="4 Hands Food Studio Course" />
          <br />          <br />

          <img src={seasoning} alt="4 Hands Food Studio Course" />
          <br />          <br />

          <img src={main} alt="4 Hands Food Studio" />
          <br />          <br />

          <img src={naturalwines} alt="4 Hands Food Studio" />
          <br />          <br />

          <img src={marrowfatpeas} alt="4 Hands Food Studio" />
          <br />          <br />

          <img src={appledessert} alt="4 Hands Food Studio" />
          <br />          <br />

        </div>
      </div>
      {/* <div className="vl"></div> */}
    </section>
  );
}

export default Events;
