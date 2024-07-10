import PropTypes from "prop-types";
import { useState } from "react";
import styled from "styled-components";
import InfoIcon from "../../assets/svg/InfoIcon";
import AddToButton from "./AddToButton";

const Product = ({ handleShow, product }) => {
  const [showInfo, setShowInfo] = useState(false);
  const clickHandler = () => {
    setShowInfo(!showInfo);
    setTimeout(() => {
      setShowInfo(false);
    }, 3000);
  };

  return (
    <>
      <ProductWrapper>
        <Info onClick={clickHandler}>
          <InfoIcon
            color={
              product.name === "Fraxinus excelsior A4"
                ? "var(--color-bg)"
                : "#333"
            }
          />
        </Info>
        <div onClick={clickHandler}>
          {showInfo && (
            <Description style={{ whiteSpace: "pre-line" }}>
              {product.description}
            </Description>
          )}

          <Img src={product.img} alt="A print of tree rings" />
        </div>
        <RowDiv style={{ paddingTop: "40px" }}>
          <ColumnDiv>
            <Name>{product.name}</Name>
            <RowDiv>
              <Format>{product.format}</Format>
              <Price>£{product.price}</Price>
            </RowDiv>
          </ColumnDiv>

          <AddToButton product={product} handleShow={handleShow}></AddToButton>
        </RowDiv>
      </ProductWrapper>
    </>
  );
};

Product.propTypes = {
  handleShow: PropTypes.func,
  product: PropTypes.shape({
    name: PropTypes.string,
    description: PropTypes.string,
    img: PropTypes.string,
    format: PropTypes.string,
    price: PropTypes.number,
  }),
};

const ProductWrapper = styled.div`
  width: 340px;
  height: 530px;
  background: white;
  margin: auto;
  position: relative;
  overflow: hidden;
  border-radius: 5px;
  box-shadow: 0.1875rem 0.3125rem 1.125rem rgba(3, 3, 3, 0.5);
  transform: scale(0.95);
  transition: box-shadow 0.5s, transform 0.5s;
  &:hover {
    transform: scale(1);
    box-shadow: 5px 2rem 30px rgba(0, 0, 0, 0.2);
  }
  @media (max-width: 340px) {
    width: 280px;
    height: 450px;
  }
`;

const ColumnDiv = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 8px;
  width: 100%;
`;
const RowDiv = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-around;
`;

const Img = styled.img`
  border-radius: 4px 4px 0 0;
  width: 100%;
  margin-bottom: -52px;
  cursor: pointer;
`;

const Name = styled.h2`
  letter-spacing: -0.3px;
  font-size: 20.5px;
  font-style: italic;
  font-weight: 500;
  z-index: 123;
  @media (max-width: 340px) {
    font-size: 18px;
  }
`;
const Format = styled.h4`
  font-size: 16px;
  font-weight: 100;
  margin-top: -6px;
  z-index: 123;
  @media (max-width: 340px) {
    font-size: 13px;
  }
`;

const Price = styled.span`
  font-size: 18px;
  color: var(--color-accent);
  position: relative;
  font-weight: 500;
  top: -3px;
  margin-left: 4px;
  @media (max-width: 340px) {
    font-size: 16px;
  }
`;

const Info = styled.div`
  position: absolute;
  font-size: 32px;
  margin: 16px;
  z-index: 234;
  cursor: pointer;
  @media (max-width: 340px) {
    font-size: 26px;
  }
`;

const Description = styled.div`
  width: 340px;
  height: 450px;
  min-width: 340px;
  min-height: 4550px;
  background: rgba(238, 238, 237, 0.9);
  position: absolute;
  opacity: 1;
  left: 50%;
  transform: translate(-50%);
  font-size: 18px;
  font-weight: 500;
  padding: 60px 20px;
  color: var(--color-secondary);
  transition: all 1s;
  border-radius: 4px 4px 0px 0px;
  @media (max-width: 340px) {
    font-size: 15px;
    width: 260px;
    height: 430px;
    min-width: 280px;
    min-height: 450px;
  }
`;

export default Product;
