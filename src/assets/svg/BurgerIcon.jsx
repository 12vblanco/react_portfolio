import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";

const BurgerIcon = ({ strokeColor }) => (
  <BurgerSvg
    className="burger"
    fill="none"
    stroke="var(--color-secondary)"
    strokeWidth="2.5"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M5 12H20" strokeWidth="2.6" strokeLinecap="round" />
    <path d="M5 17H20" strokeWidth="2.6" strokeLinecap="round" />
    <path d="M5 7H20" strokeWidth="2.6" strokeLinecap="round" />
  </BurgerSvg>
);

BurgerIcon.propTypes = {
  strokeColor: PropTypes.string,
};

BurgerIcon.defaultProps = {
  strokeColor: "var(--color-secondary)",
};

const BurgerSvg = styled.svg`
  width: 52px;
  height: 52px;
  stroke-width: 2.2;
  margin-right: 2px;
  cursor: pointer;
  position: relative;
  top: 8px;
`;

export default BurgerIcon;
