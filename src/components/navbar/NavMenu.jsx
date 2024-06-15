import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import Cart from "../products/Cart";

const NavMenu = ({ handleShow, closeMenu, click }) => {
  NavMenu.propTypes = {
    handleShow: PropTypes.func,
    closeMenu: PropTypes.func,
    click: PropTypes.func,
  };
  return (
    <>
      <StyledLink>
        <NavLink to="/" onClick={closeMenu}>
          Home
        </NavLink>
      </StyledLink>
      <StyledLink>
        <NavLink to="/about" onClick={closeMenu}>
          About
        </NavLink>
      </StyledLink>
      <StyledLink>
        <NavLink to="/contact" onClick={closeMenu}>
          Contact
        </NavLink>
      </StyledLink>
      <StyledLink>
        <NavLink to="/blog" onClick={closeMenu}>
          Blog
        </NavLink>
      </StyledLink>
      {click ? (
        <StyledLink
          style={{ marginLeft: "-8px", marginTop: "-46px", cursor: "pointer" }}
        >
          <Cart handleShow={handleShow} onClick={handleShow} />
        </StyledLink>
      ) : (
        <StyledLink
          style={{ marginLeft: "-22px", marginTop: "-14px", cursor: "pointer" }}
        >
          <Cart handleShow={handleShow} onClick={handleShow} />
        </StyledLink>
      )}
    </>
  );
};

export const StyledLink = styled.div`
  list-style: none;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 22px;
  margin: 20px;
  font-weight: 400;
  &:hover,
  .active {
    color: var(--color-accent);
  }
`;

export default NavMenu;
