import PropTypes from "prop-types";
import { useContext } from "react";
import { MdOutlineShoppingCart } from "react-icons/md";
import styled from "styled-components";
import { CartContext } from "../../utils/CartContext";

const Cart = ({ handleShow }) => {
  const cart = useContext(CartContext);

  const productsCount = cart.items.reduce(
    (sum, product) => sum + product.quantity,
    0
  );
  return (
    <>
      <ShoppingDiv onClick={handleShow}>
        <ShoppingCart />
        <Counter>{productsCount}</Counter>
      </ShoppingDiv>
    </>
  );
};

Cart.propTypes = {
  handleShow: PropTypes.func,
};

const ShoppingDiv = styled.div`
  display: flex;
  position: relative;
  padding-bottom: 1rem;
`;

const ShoppingCart = styled(MdOutlineShoppingCart)`
  font-size: 46px;
  margin-top: 52px;
  width: 56px;
  margin-left: 3rem;
  position: relative;
  @media (max-width: 646px) {
    font-size: 44px;
  }
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
  position: relative;
  top: 40px;
  right: 16px;
`;

export default Cart;
