import PropTypes from "prop-types";
import { useContext } from "react";
import styled from "styled-components";
import stripe_img from "../../assets/images/stripe_logo.png";
import CloseIcon from "../../assets/svg/CloseIcon";
import { CartContext } from "../../utils/CartContext";
import CartProduct from "./CartProduct";

const Modal = ({ handleClose }) => {
  const cart = useContext(CartContext);

  const checkout = async () => {
    await fetch("http://localhost:4000/checkout", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ items: cart.items }),
    })
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        if (response.url) {
          window.location.assign(response.url);
        }
      });
  };

  const productsCount = cart.items.reduce(
    (sum, product) => sum + product.quantity,
    0
  );

  if (productsCount === 0) {
    return null;
  }

  return (
    <ModalWrapper>
      <ModalHeader>
        <P>Your basket:</P>
        <Close onClick={handleClose}>
          <CloseIcon width="34" height="34" />
        </Close>
      </ModalHeader>
      {cart.items.map((currentProduct, i) => (
        <CartProduct
          key={i}
          id={currentProduct.id}
          quantity={currentProduct.quantity}
          name={currentProduct.name}
          img={currentProduct.img}
        />
      ))}
      <RowCheckout>
        <div
          style={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <img
            src={stripe_img}
            style={{
              width: "60px",
              height: "28px",
              marginRight: "17px",
              borderRadius: "12px",
              border: "1px solid #333",
            }}
            alt="Stripe"
          />
          <p>
            Total:{" "}
            <span style={{ fontWeight: "500" }}>
              £{cart.getTotalCost().toFixed(2)}
            </span>
          </p>
        </div>
        <CheckoutButton onClick={checkout}>Checkout</CheckoutButton>
      </RowCheckout>
    </ModalWrapper>
  );
};

Modal.propTypes = {
  handleClose: PropTypes.func,
};

const ModalWrapper = styled.div`
  position: fixed;
  overflow-y: auto;
  overflow-x: hidden;
  top: 110px;
  right: 0px;
  width: 340px;
  height: auto;
  max-height: 470px;
  font-size: 25px;
  padding: 1rem 1.4rem 0rem 1.4rem;
  border: solid 1.8px #333;
  border-right: none;
  background: var(--color-bg);
  z-index: 124;
  border-radius: 0.6rem 0 0 0.6rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
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
  border-bottom: 2px solid #333;
`;

const Close = styled.div`
  cursor: pointer;
  position: absolute;
  right: 14px;
  top: 10px;
`;

const RowCheckout = styled.div`
  position: sticky;
  bottom: 0px;
  padding-top: 6px;
  font-size: 20px;
  width: 100%;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: var(--color-bg);
`;

const P = styled.p`
  font-size: 14px;
`;

const CheckoutButton = styled.button`
  color: var(--color-secondary);
  background: var(--color-bg);
  padding: 0.2rem 0.4rem;
  margin-left: 1rem;
  border-radius: 6px;
  font-size: 0.875rem;
  font-weight: 500;
  cursor: pointer;
  z-index: 110;
  border: 2px solid #333;
  cursor: pointer;
  box-shadow: 0.1rem 0.1rem 0.1rem rgba(3, 3, 3, 0.4);
  transition: all 0.3s;
  &:hover {
    box-shadow: 0.1rem 0.3rem 1rem rgba(3, 3, 3, 0.4);
  }
  &:active {
    box-shadow: 0.1rem 0.1rem 0.1rem rgba(3, 3, 3, 0.4);
  }
`;

export default Modal;
