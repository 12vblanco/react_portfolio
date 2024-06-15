import PropTypes from "prop-types";
import { useContext } from "react";
import { IoMdClose } from "react-icons/io";
import { MdOutlineAddShoppingCart } from "react-icons/md";
import styled from "styled-components";
import { CartContext } from "../../utils/CartContext";
import CartProduct from "./CartProduct";
import Checkout from "./Checkout";
import { loadStripe } from "@stripe/stripe-js";

const Modal = ({ handleClose }) => {
  const cart = useContext(CartContext);

  // Load Stripe asynchronously
  const stripePromise = loadStripe(
    "pk_test_51HqgwdGKpDMhyEuL11A63hDc42CNdjZbMH93xDPIumVyYlgGe5byVF9rXhgW0rs64r0uaDjQUqlwOUDXrbTZy9nx00cyCIwiBm"
  );

  const checkout = async () => {
    alert("Redirecting to checkout...");
    // Example fetch logic to initiate checkout
    try {
      const response = await fetch("/api/stripe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ items: cart.items }),
      });
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const session = await response.json();
      const stripe = await stripePromise;
      const result = await stripe.redirectToCheckout({ sessionId: session.id });
      if (result.error) {
        alert(result.error.message);
      }
    } catch (error) {
      console.error("Error initiating checkout:", error);
    }
  };

  const productsCount = cart.items.reduce(
    (sum, product) => sum + product.quantity,
    0
  );

  function timer() {
    setTimeout(() => handleClose(), 2900);
  }

  return (
    <ModalWrapper>
      <ModalHeader
        style={
          productsCount > 0
            ? { borderBottom: "1px solid #333" }
            : { borderBottom: "none" }
        }
      >
        {productsCount > 0 ? <P>Your basket:</P> : ""}
        <Close>
          <IoMdClose onClick={handleClose} />
        </Close>
      </ModalHeader>
      <>
        {productsCount > 0 ? (
          <>
            {cart.items.map((currentProduct, i) => (
              <CartProduct
                key={i}
                id={currentProduct.id}
                quantity={currentProduct.quantity}
                name={currentProduct.name}
                img={currentProduct.img}
              />
            ))}
            <RowDiv>
              <p>
                Total:{" "}
                <span style={{ fontWeight: "500" }}>
                  £{cart.getTotalCost().toFixed(2)}
                </span>
              </p>
              <div onClick={checkout}>
                {/* Use Checkout component for checkout functionality */}
                <Checkout />
              </div>
            </RowDiv>
          </>
        ) : (
          <>
            <h5
              style={{
                textTransform: "sentence",
                fontWeight: "300",
                marginTop: "18px",
                fontSize: "15px",
              }}
            >
              Click{" "}
              <MdOutlineAddShoppingCart
                style={{
                  fontSize: "36px",
                  cursor: "pointer",
                  margin: "0 6px -14px 6px",
                }}
                onClick={() => window.location.assign("/")}
              />
              to add items
            </h5>
          </>
        )}
        {productsCount === 0 && timer()}
      </>
    </ModalWrapper>
  );
};

// PropTypes declaration outside the component
Modal.propTypes = {
  handleClose: PropTypes.func.isRequired,
};

const ModalWrapper = styled.div`
  position: fixed;
  overflow-y: scroll;
  overflow-x: hidden;
  top: 110px;
  right: -14px;
  width: 340px;
  height: auto;
  max-height: 80vh;
  font-size: 25px;
  padding: 1rem 1.4rem 1.4rem 1.4rem;
  border: solid 2px #333;
  border-right: none;
  background: #f4f7f8;
  z-index: 124;
  border-radius: 0.6rem 0 0 0.6rem;
  @media (max-width: 460px) {
    width: 340px;
    font-size: 20px;
    padding-top: 8px;
    top: 140px;
  }
`;

const ModalHeader = styled.header`
  display: flex;
  justify-content: space-between;
  padding-bottom: 0.6rem;
  font-weight: 500;
`;

const Close = styled.div`
  font-size: 36px;
  cursor: pointer;
  position: absolute;
  right: 24px;
  top: 4px;
  @media (max-width: 460px) {
    font-size: 30px;
  }
`;

const RowDiv = styled.div`
  margin-top: 6px;
  margin-bottom: -18px;
  font-size: 20px;
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
`;

const P = styled.p`
  font-size: 14px;
`;

export default Modal;
