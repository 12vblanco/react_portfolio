import PropTypes from "prop-types";
import { useContext } from "react";
import styled from "styled-components";
import { CartContext } from "../../utils/CartContext";
import { getProductData } from "./Products";

const CartProduct = (props) => {
  const cart = useContext(CartContext);
  const id = props.id;
  const quantity = props.quantity;
  const productData = getProductData(id);

  return (
    <>
      <RowDiv style={{ marginTop: "0.rem" }}>
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
          <Price>
            Price: £ {(quantity * productData.price).toFixed(2)}
            <>
              <RemoveButton onClick={() => cart.deleteFromCart(id)}>
                Delete
              </RemoveButton>
            </>
          </Price>

          <RowDiv></RowDiv>
        </ColumnDiv>
      </RowDiv>
      <hr style={{ marginTop: "1rem" }}></hr>
    </>
  );
};

CartProduct.propTypes = {
  id: PropTypes.string.isRequired,
  quantity: PropTypes.number.isRequired,
};

const RemoveButton = styled.button`
  color: var(--color-accent);
  background: var(--color-bg);
  padding: 0.125rem 0.25rem;
  margin-left: 2rem;
  border-radius: 6px;
  font-size: 0.875rem;
  font-weight: 500;
  cursor: pointer;
  z-index: 110;
  border: 2px solid var(--color-accent);
  box-shadow: 0.1rem 0.1rem 0.1rem rgba(3, 3, 3, 0.4);
  transition: all 0.3s;
  &:hover {
    box-shadow: 0.1rem 0.3rem 1rem rgba(3, 3, 3, 0.4);
  }
  &:active {
    box-shadow: 0.1rem 0.1rem 0.1rem rgba(3, 3, 3, 0.4);
  }
`;

const Name = styled.p`
  letter-spacing: -0.03rem;
  font-size: 0.9375rem;
  font-style: italic;
  font-weight: 500;
`;
const Qty = styled.h3`
  font-size: 0.9375rem;
  font-weight: 400;

  span {
    color: var(--color-secondary);
    font-size: 0.9375rem;
  }
`;
const QtyDiv = styled.div``;

const Price = styled.h3`
  color: var(--color-secondary);
  font-size: 0.9375rem;
  font-weight: 400;
`;

const Img = styled.img`
  max-width: 60px;
  border-radius: 6px;
`;

const RowDiv = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  cursor: pointer;
  margin-top: 0.75rem;
`;

const ColumnDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 0 1rem;
`;

export default CartProduct;
