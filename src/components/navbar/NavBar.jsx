import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import logo from "../../assets/images/logo.png";
import { CartContext } from "../../utils/CartContext";
import Modal from "../products/Modal";
import BurgerMenu from "./BurgerMenu";
import NavMenu from "./NavMenu";

const Navbar = () => {
  const cart = useContext(CartContext);
  const productsCount = cart.items.reduce(
    (sum, product) => sum + product.quantity,
    0
  );
  useEffect(() => {
    if (productsCount > 0) {
      handleShow();
    }
  }, [productsCount]);

  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);
  const [isDesktop, setDesktop] = useState(window.innerWidth > 1140);
  const updateNavMenu = () => {
    setDesktop(window.innerWidth > 1140);
  };

  useEffect(() => {
    window.addEventListener("resize", updateNavMenu);
    return () => window.removeEventListener("resize", updateNavMenu);
  });

  return (
    <>
      <StyledDiv>
        <Link to="/">
          <LogoDiv>
            <Img src={logo} alt="tree rings's logo" />
            <Name>Tree Rings</Name>
          </LogoDiv>
        </Link>
        {isDesktop ? (
          <NavDiv>
            <NavUl>
              <NavMenu
                isDesktop={isDesktop}
                show={show}
                handleClose={handleClose}
                handleShow={handleShow}
              />
            </NavUl>
          </NavDiv>
        ) : (
          <BurgerMenu handleShow={handleShow} handleClose={handleClose} />
        )}
      </StyledDiv>
      {show && <Modal handleClose={handleClose} />}
    </>
  );
};

const StyledDiv = styled.nav`
  position: fixed;
  top: 0;
  left: 50%;
  transform: translate(-50%);
  display: flex;
  width: 100vw;
  height: 110px;
  max-width: 140rem;
  align-items: center;
  justify-content: space-evenly;
  z-index: 123;
  background: var(--color-bg);
  @media (max-width: 480px) {
    margin-left: 0;
    padding-top: 1rem;
    padding-bottom: 0rem;
    height: auto;
  }
`;
const LogoDiv = styled.div`
  display: flex;
  margin-left: 2.75rem;
  height: 5.75rem;
  width: auto;
  align-items: center;
  justify-content: space-around;
  @media (max-width: 480px) {
    height: 50px;
    margin: 0;
  }
`;
const NavDiv = styled.div`
  display: flex;
  height: 92px;
  width: auto;
  align-items: center;
  justify-content: space-around;
`;

const NavUl = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-top: 1rem;
`;

const Img = styled.img`
  width: 70px;
  height: auto;
  @media (max-width: 480px) {
    width: 40px;
  }
  @media (max-width: 340px) {
    width: 34px;
  }
`;

const Name = styled.h1`
  margin-left: 1rem;
  color: var(--color-secondary);
  text-transform: uppercase;
  margin-bottom: 0;

  @media (max-width: 480px) {
    margin-left: 0.4rem;
    font-size: 38px;
    margin-bottom: 0;
  }
  @media (max-width: 390px) {
    margin-left: 0.2rem;
    font-size: 28px;
    margin-bottom: 0;
  }
`;

export default Navbar;
