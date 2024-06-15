import PropTypes from "prop-types";
import { useContext } from "react";
import { MdOutlineAddShoppingCart } from "react-icons/md";
import styled from "styled-components";
import { CartContext } from "../../utils/CartContext.jsx";

const AddToButton = ({ product, handleShow }) => {
  const cart = useContext(CartContext);
  const productQty = cart.getProductQty(product.id);
  return (
    <>
      <AddToWrapper>
        {productQty < 1 ? (
          <RowDiv>
            <AddIcon onClick={() => cart.addOneToCart(product.id)} />
          </RowDiv>
        ) : (
          <ColumnDiv style={{ fontSize: "2.6rem" }}>
            <RowDiv>
              <Minus onClick={() => cart.removeOneFromCart(product.id)}>
                -
              </Minus>
              <Plus onClick={() => cart.addOneToCart(product.id)}>+</Plus>
            </RowDiv>
            <Qty onClick={handleShow}>{productQty}</Qty>
          </ColumnDiv>
        )}
      </AddToWrapper>
    </>
  );
};

AddToButton.propTypes = {
  handleShow: PropTypes.func,
  product: PropTypes.object,
};

const AddToWrapper = styled.div`
  width: 72px;
  height: 80px;
  margin: 6px 2px;
  cursor: pointer;
  z-index: 4;
  border-left: solid 0.1px rgba(51, 51, 51, 0.4);
`;
const AddIcon = styled(MdOutlineAddShoppingCart)`
  font-size: 42px;
  transition: all 0.2s linear;
  color: var(--color-secondary);
  &:hover {
    font-size: 46px;
  }
`;

const ColumnDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const RowDiv = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const Qty = styled.span`
  font-size: 20px;
  margin-top: -0.2rem;
  border: 2px solid var(--color-secondary);
  border-radius: 50%;
  width: 36px;
  height: 36px;
  text-align: center;
`;
const Plus = styled.span`
  font-size: 38px;
  margin: -6px 10px -14px 6px;
`;
const Minus = styled.span`
  font-size: 38px;
  color: var(--color-accent);
  margin: -6px 8px -14px 12px;
`;

export default AddToButton;
