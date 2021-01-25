import React, { useEffect } from "react";

function Blog() {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, []);

  return (
      <section className="aboutContainer">
        <section className="principlesbox">
          <p className="centerThis">We are proud to be stocked in the following selected stores.
            <br/>
            Together we support our local food community.</p>
            <br/>
            <br/>
          <div id="" className="">
            <p>Hereford and More - Tullamore, Offaly</p>
            <hr />
            <p>Foxes Fruit and Veg - Mullingar, Westmeath</p>
            <hr />
            <p>Nuts and Grains - Mullingar, Westmeath</p>
            <hr />
            <p>Lowe and Co. - Athlone, Westmeath</p>
            <hr />
            <p>Marlowe and Co. - Dublin 8</p>
            <hr />
            <p>Lennox Street Grocer - Portobello, Dublin</p>
            <hr />
            <p>Barrow Market - Dublin 4</p>
            <hr/>
            <p>Mamo Restaurant - Howth, Dublin</p>
            <hr />
            <p>Margadh Specialty Shop - Howth, Dublin</p>
            <hr />
            <p>The Dublin Food Co-Op. - Kilmainham, Dublin</p>
            <hr />
            <p>The Fumbally Shop - Dublin 8</p>
            <hr/>
          </div>
        </section>
      </section>
  );
}

export default Blog;
