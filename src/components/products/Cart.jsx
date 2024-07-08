import PropTypes from "prop-types";
import { useContext } from "react";
import styled from "styled-components";
import AddToCartIcon from "../../assets/svg/AddToCart-Icon";
import { CartContext } from "../../utils/CartContext";

const Cart = ({ handleShow, click }) => {
  const cart = useContext(CartContext);

  const productsCount = cart.items.reduce(
    (sum, product) => sum + product.quantity,
    0
  );
  return (
    <>
      <ShoppingDiv onClick={handleShow}>
        <AddToCartIcon />
        <Counter>{productsCount}</Counter>
      </ShoppingDiv>
    </>
  );
};

Cart.propTypes = {
  handleShow: PropTypes.func,
  click: PropTypes.func,
};

const ShoppingDiv = styled.div`
  display: flex;
  justify-content: centre;
  align-items: centre;
  position: relative;
  width: 48px;
  height: 48px;
`;

const Counter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  color: #fff;
  width: 24px;
  height: 24px;
  font-size: 20px;
  background: var(--color-accent);
  padding: 1px;
  position: absolute;
  top: -10px;
  right: -14px;
`;

export default Cart;
