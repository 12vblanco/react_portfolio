import PropTypes from "prop-types";
import styled from "styled-components";
import MainContainer from "../components/MainContainer";
import StyledContainer from "../components/StyledContainer";
import Product from "../components/products/Product";
import { products } from "../components/products/Products";

const HomePage = ({ handleShow, scrollToTop }) => {
  scrollToTop();

  return (
    <MainContainer style={{ marginBottom: "2rem" }}>
      <StyledContainer style={{ marginBottom: "2rem" }}>
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

HomePage.propTypes = {
  handleShow: PropTypes.func,
  scrollToTop: PropTypes.func,
};

const ProductCard = styled.div`
  margin: 6px 10px;
  @media (max-width: 340px) {
    margin: 6px 0;
  }
`;

export default HomePage;
