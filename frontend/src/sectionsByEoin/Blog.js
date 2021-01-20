import React from "react";

function Blog() {
  return (
    <div>
      <section className="aboutContainer">
      {/* <div className="vl"></div> */}
        {/* <div>
          <h2 className="violet">Stockists</h2>
        </div> */}
        <section id="stockists" className="stockists">
          <table className="">
            <thead>
              <tr>
                <th>Name</th>
                <th>Address</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Foxes Fruit and Veg</td>
                <td>Mullingar, Westmeath</td>
              </tr>
              <tr>
                <td>Lowe and Co.</td>
                <td>Athlone, Westmeath</td>
              </tr>
              <tr>
                <td>Marlowe and Co</td>
                <td>Dublin</td>
              </tr>
              <tr>
                <td>Lennox Street Grocers</td>
                <td>Howth Dublin</td>
              </tr>
              <tr>
                <td>Mamo Restaurant</td>
                <td>Howth, Dublin</td>
              </tr>
              <tr>
                <td>Margadh Specialty Shop</td>
                <td>Howth, Dublin</td>
              </tr>
              <tr>
                <td>The Dublin Food Co-Op.</td>
                <td>Dublin</td>
              </tr>
              <tr>
                <td>The Fumbally Shop</td>
                <td>Dublin</td>
              </tr>
            </tbody>
          </table>
        </section>
        {/* <div className="vl"></div> */}
      </section>
    </div>
  );
}

export default Blog;
