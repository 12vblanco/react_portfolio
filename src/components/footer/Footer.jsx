import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Footer = () => {
  return (
    <>
      <FooterDiv>
        <Div>
          <NavLink to="/contact">
            Tree Rings -{new Date().getFullYear()} &copy;
            <span>&nbsp;&nbsp;</span>
          </NavLink>{" "}
          <NavLink to="/terms"> Terms & conditions</NavLink> <span>&nbsp;</span>
        </Div>
      </FooterDiv>
    </>
  );
};

const FooterDiv = styled.div`
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  background: var(--color-bg);
  color: var(--color-secondary);
  text-align: center;
  z-index: 234;
`;
const Div = styled.div`
  padding: 0.8rem;
  background: var(--color-bg);
  font-size: 12px;
  font-weight: 500;
  @media (max-width: 340px) {
    font-size: 10px;
    padding: 0.4rem;
  }
`;

export default Footer;
