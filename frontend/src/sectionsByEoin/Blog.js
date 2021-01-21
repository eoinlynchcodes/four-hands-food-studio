import React, { useEffect } from "react";

function Blog() {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, []);

  return (
      <section className="aboutContainer">
        <section className="principlesbox">
          <div id="" className="">
            <hr />
            <p><b>Foxes Fruit and Veg</b> Mullingar, Westmeath</p>
            <hr />
            <p>Nuts and Grains Mullingar, Westmeath</p>
            <hr />
            <p>Lowe and Co. Athlone, Westmeath</p>
            <hr />
            <p>Marlowe and Co Dublin</p>
            <hr />
            <p>Lennox Street Grocers Howth Dublin</p>
            <hr />
            <p>Mamo Restaurant Howth, Dublin</p>
            <hr />
            <p>Margadh Specialty Shop Howth, Dublin</p>
            <hr />
            <p>The Dublin Food Co-Op. Dublin</p>
            <hr />
            <p>The Fumbally Shop Dublin</p>
            <hr/>
          </div>
        </section>
      </section>
  );
}

export default Blog;
