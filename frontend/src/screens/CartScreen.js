import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addToCart, removeFromCart } from "../actions/cartActions";
import takeawaypicture from "../imagesByEoin/takeawaypicture.png";

export default function CartScreen(props) {
  const productId = props.match.params.id;
  const qty = props.location.search
    ? Number(props.location.search.split("=")[1])
    : 1;
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;
  const dispatch = useDispatch();
  useEffect(() => {
    window.scrollTo(0, 0);

    if (productId) {
      dispatch(addToCart(productId, qty));
    }
  }, [dispatch, productId, qty]);

  const removeFromCartHandler = (id) => {
    // delete action
    dispatch(removeFromCart(id));
  };

  const checkoutHandler = () => {
    props.history.push("/signin?redirect=shipping");
  };
  return (
    <section>
      {/* <Navigation /> */}
      <div className="cart">
        <ul className="cart-list-container">
          <li>
            <h3>Shopping Cart</h3>
          </li>
          <li>
            {cartItems.length === 0 ? (
              <div>
                <h2>Cart is Empty</h2>
                <Link to="/shop">
                  <button
                    id="greenButton"
                    className="greenButtonLight checkout"
                  >
                    Go To Products
                  </button>
                </Link>
              </div>
            ) : (
              <button
                onClick={checkoutHandler}
                id="greenButton"
                className="greenButtonLight checkout"
                disabled={cartItems.length === 0}
              >
                Checkout
              </button>
            )}
          </li>

          <li>
            <button
              onClick={checkoutHandler}
              id="blackText"
              className="checkout"
              disabled={cartItems.length === 0}
            >
              <Link to="/shop">Shop for More?</Link>
            </button>
          </li>

          {cartItems.length === 0
            ? null
            : cartItems.map((item) => (
                <li>
                  <div className="cart-image">
                    <img src={item.image} alt="product image" />
                  </div>
                  <div className="cart-name">
                    <div>
                      <Link
                        to={"/product/" + item.product}
                        className="black-text"
                      >
                        {item.name}
                      </Link>
                    </div>
                    <p className="">€{item.price}</p>

                    <select
                      className="qtywidth"
                      value={item.qty}
                      onChange={(e) =>
                        dispatch(addToCart(item.product, e.target.value))
                      }
                    >
                      {[...Array(item.countInStock).keys()].map((x) => (
                        <option key={x + 1} value={x + 1}>
                          {x + 1}
                        </option>
                      ))}
                    </select>
                    <p
                      type="button"
                      className=""
                      onClick={() => removeFromCartHandler(item.product)}
                    >
                      <u>Delete</u>
                    </p>
                  </div>
                </li>
              ))}
          <li>
            <p>
              Total
              {/* ( {cartItems.reduce((a, c) => a + c.qty, 0)} items)  */}: €{" "}
              {cartItems.reduce((a, c) => a + c.price * c.qty, 0)}
            </p>
          </li>
          <li>
            {cartItems.length === 0 ? null : (
              <button
                onClick={checkoutHandler}
                id="greenButton"
                className="greenButtonLight checkout"
                disabled={cartItems.length === 0}
              >
                Checkout
              </button>
            )}
          </li>
          <li>
            <button
              onClick={checkoutHandler}
              id="blackText"
              className="checkout"
              disabled={cartItems.length === 0}
            >
              <Link to="/shop">Shop for More?</Link>
            </button>
          </li>
        </ul>

        {/* <div className="cart-action">
        <h3>
          Subtotal ( {cartItems.reduce((a, c) => a + c.qty, 0)} items) : €{" "}
          {cartItems.reduce((a, c) => a + c.price * c.qty, 0)}
        </h3>
        <button
          onClick={checkoutHandler}
          id="greenButton"
          className="button primary full-width"
          disabled={cartItems.length === 0}
        >
          Proceed to Checkout
        </button>
      </div> */}
      </div>
    </section>
  );
}
