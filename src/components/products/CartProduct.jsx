import PropTypes from "prop-types";
import { useContext } from "react";
import styled from "styled-components";
import { CartContext } from "../../utils/CartContext";
import { getProductData } from "./Products";

const CartProduct = (props) => {
  CartProduct.propTypes = {
    id: PropTypes.string.isRequired,
    quantity: PropTypes.number.isRequired,
  };
  const cart = useContext(CartContext);
  const id = props.id;
  const quantity = props.quantity;
  const productData = getProductData(id);

  return (
    <>
      <RowDiv style={{ marginTop: "28px" }}>
        <Img alt="A print of the rings of a tree" src={productData.img} />
        <ColumnDiv>
          <Name>{productData.name}</Name>
          <QtyDiv>
            {quantity > 1 ? (
              <Qty>
                {quantity}
                <span> units</span>
              </Qty>
            ) : (
              <Qty>
                {quantity}
                <span> unit</span>
              </Qty>
            )}
          </QtyDiv>
          <Price>Price: £ {(quantity * productData.price).toFixed(2)}</Price>

          <RowDiv>
            <Minus onClick={() => cart.removeOneFromCart(id)}>-</Minus>
            <RemoveButton onClick={() => cart.deleteFromCart(id)}>
              Remove
            </RemoveButton>
            <Plus onClick={() => cart.addOneToCart(id)}>+</Plus>
          </RowDiv>
        </ColumnDiv>
      </RowDiv>
      <hr style={{ marginTop: "1.4rem" }}></hr>
    </>
  );
};

const RemoveButton = styled.button`
  color: var(--color-accent);
  background: var(--color-bg);
  padding: 8px 10px;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  z-index: 110;
  border: 2px solid var(--color-accent);
  margin: 1rem 0 -0.4rem 0;
`;

const Name = styled.p`
  letter-spacing: -0.03rem;
  font-size: 16px;
  font-style: italic;
  font-weight: 600;
`;
const Qty = styled.h3`
  font-size: 16px;
  font-weight: 500;

  span {
    color: var(--color-secondary);
    font-size: 16px;
  }
`;
const QtyDiv = styled.div``;

const Price = styled.h3`
  color: var(--color-secondary);
  font-size: 16px;
  font-weight: 500;
`;

const Img = styled.img`
  max-width: 120px;
  border-radius: 8px;
  padding: 4px;
`;

const RowDiv = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  cursor: pointer;
`;

const ColumnDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 0 1rem;
`;

const Plus = styled.span`
  font-size: 38px;
  margin: -0.4rem 1rem -2rem 0.8rem;
`;
const Minus = styled.span`
  font-size: 38px;
  color: var(--color-secondary);
  margin: -0.4rem 1rem -2rem 0px;
`;

export default CartProduct;
