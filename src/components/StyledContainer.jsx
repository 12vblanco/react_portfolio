import PropTypes from "prop-types";
import styled from "styled-components";

const StyledContainer = (props) => {
  StyledContainer.propTypes = {
    children: PropTypes.node.isRequired,
  };

  return <Div>{props.children}</Div>;
};

const Div = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;

  @media (max-width: 900px) {
    padding-top: 0;
  }
`;

export default StyledContainer;
