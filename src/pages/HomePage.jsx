import PropTypes from "prop-types";
import styled from "styled-components";
import MainContainer from "../components/MainContainer";
import StyledContainer from "../components/StyledContainer";
import Product from "../components/products/Product.jsx";
import { products } from "../components/products/Products";

const HomePage = ({ handleShow }) => {
  HomePage.propTypes = {
    handleShow: PropTypes.func,
  };
  return (
    <MainContainer>
      <StyledContainer>
        {products.map((product, i) => {
          return (
            <ProductCard key={i}>
              <Product product={product} handleShow={handleShow} />
            </ProductCard>
          );
        })}
      </StyledContainer>
    </MainContainer>
  );
};

const ProductCard = styled.div`
  margin: 6px 10px;
`;

export default HomePage;
