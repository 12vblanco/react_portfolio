import PropTypes from "prop-types";
import styled from "styled-components";

const MainContainer = (props) => {
  return <Div>{props.children}</Div>;
};

const Div = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 1240px;
  margin: 0 auto;
  height: auto;
  padding-top: 1%;
  font-size: 22px;
  margin-top: 110px;
  margin-bottom: 60px;
  @media (max-width: 1440px) {
    padding-top: 1%;
    justify-content: flex-start;
  }
  @media (max-width: 1040px) {
    margin-bottom: 1rem;
  }
`;

MainContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MainContainer;
