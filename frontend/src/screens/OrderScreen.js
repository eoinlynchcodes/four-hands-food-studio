import Axios from "axios";
import { PayPalButton } from "react-paypal-button-v2";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { deliverOrder, detailsOrder, payOrder } from "../actions/orderActions";
import LoadingBox from "../components/LoadingBox";
import MessageBox from "../components/MessageBox";
import {
  ORDER_DELIVER_RESET,
  ORDER_PAY_RESET,
} from "../constants/orderConstants";

export default function OrderScreen(props) {
  const orderId = props.match.params.id;
  const [sdkReady, setSdkReady] = useState(false);
  const orderDetails = useSelector((state) => state.orderDetails);
  const { order, loading, error } = orderDetails;
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;

  const orderPay = useSelector((state) => state.orderPay);
  const {
    loading: loadingPay,
    error: errorPay,
    success: successPay,
  } = orderPay;
  const orderDeliver = useSelector((state) => state.orderDeliver);
  const {
    loading: loadingDeliver,
    error: errorDeliver,
    success: successDeliver,
  } = orderDeliver;
  const dispatch = useDispatch();
  useEffect(() => {
    const addPayPalScript = async () => {
      const { data } = await Axios.get("/api/config/paypal");
      const script = document.createElement("script");
      script.type = "text/javascript";
      let currency = "EUR";
      script.src = `https://www.paypal.com/sdk/js?currency=${currency}&client-id=${data}`;
      script.async = true;
      script.onload = () => {
        setSdkReady(true);
      };
      document.body.appendChild(script);
    };
    if (
      !order ||
      successPay ||
      successDeliver ||
      (order && order._id !== orderId)
    ) {
      dispatch({ type: ORDER_PAY_RESET });
      dispatch({ type: ORDER_DELIVER_RESET });
      dispatch(detailsOrder(orderId));
    } else {
      if (!order.isPaid) {
        if (!window.paypal) {
          addPayPalScript();
        } else {
          setSdkReady(true);
        }
      }
    }
    window.scrollTo(0, 0);
  }, [dispatch, orderId, sdkReady, successPay, successDeliver, order]);

  const successPaymentHandler = (paymentResult) => {
    dispatch(payOrder(order, paymentResult));
  };
  const deliverHandler = () => {
    dispatch(deliverOrder(order._id));
  };

  return loading ? (
    <LoadingBox></LoadingBox>
  ) : error ? (
    <MessageBox variant="danger">{error}</MessageBox>
  ) : (
    <div>
      <div className="order-screen">
        <ul className="centerThisUL">
          <li>
            <div className="card card-body">
              <h2 className="violet">Order Summary</h2>

              <ul className="centerThisSecondUL">
              <li>
                  <h3 className="violet">Pay Here:</h3>
                </li>
                <br/>

                <li>
                  <div className="row">
                    <div>
                      <strong>Order Total:</strong>
                    </div>
                    <div>
                      <strong>€{order.totalPrice.toFixed(2)}</strong>
                    </div>
                  </div>
                </li>
                {!order.isPaid && (
                  <li className="payPalSetupJob">
                    {!sdkReady ? (
                      <LoadingBox></LoadingBox>
                    ) : (
                      <>
                        {errorPay && (
                          <MessageBox variant="danger">{errorPay}</MessageBox>
                        )}
                        {loadingPay && <LoadingBox></LoadingBox>}
                        <br />
                        <PayPalButton
                          amount={order.totalPrice}
                          options={{
                            clientId: "############",
                            currency: "EUR",
                          }}
                          onSuccess={successPaymentHandler}
                        ></PayPalButton>
                      </>
                    )}
                  </li>
                )}

                <li>
                  {order.orderItems.map((item) => {
                    return (
                      <ul className="cart-list-container">
                        <hr/>
                        <li>
                          <div className="cart-image">
                            <img src={item.image} alt="product" />
                          </div>
                          <div className="cart-name">
                            <div>
                              <Link
                                to={"/product/" + item.product}
                                className="black-text"
                              >
                                (x{item.qty}) {item.name}
                              </Link>
                            </div>
                            <p className="">€{item.price}</p>
                          </div>
                        </li>
                      </ul>
                    );
                  })}
                </li>
                {userInfo.isAdmin && order.isPaid && !order.isDelivered && (
                  <li>
                    {loadingDeliver && <LoadingBox></LoadingBox>}
                    {errorDeliver && (
                      <MessageBox variant="danger">{errorDeliver}</MessageBox>
                    )}
                    <button
                      type="button"
                      className="primary block"
                      onClick={deliverHandler}
                    >
                      Deliver Order
                    </button>
                  </li>
                )}
              </ul>
            </div>

            <div className="centerThisSecondUL">
              <h2>Delivery Address:</h2>
              <p>
                <div>
                  {order.shippingAddress.fullName}, <br />{" "}
                  {order.shippingAddress.address},<br />
                  {order.shippingAddress.city},<br />
                  {order.shippingAddress.country},<br />{" "}
                  {order.shippingAddress.postalCode} <br />
                </div>
              </p>
              {/* {order.isDelivered ? (
                <MessageBox variant="success">
                  Delivered at {order.deliveredAt}
                </MessageBox>
              ) : (
                <MessageBox variant="danger">Not Delivered</MessageBox>
              )} */}
            </div>

            {/* <div className="card card-body">
              <h2>Order Items</h2>
              <ul>
                {order.orderItems.map((item) => (
                  <li key={item.product}>
                    <div className="row">
                      <div>
                        <img
                          src={item.image}
                          alt={item.name}
                          className="small"
                        ></img>
                      </div>
                      <div className="min-30">
                        <Link to={`/product/${item.product}`}>{item.name}</Link>
                      </div>

                      <div>
                        {item.qty} x €{item.price} = €{item.qty * item.price}
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div> */}
          </li>
        </ul>
      </div>
    </div>
  );
}
