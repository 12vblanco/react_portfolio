import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled, { ThemeProvider } from "styled-components";
import logo from "../../assets/images/logo.png";
import Modal from "../products/Modal";
// import BurgerMenu from "./BurgerMenu";
import NavMenu from "./NavMenu";

const Navbar = (theme) => {
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
    <ThemeProvider theme={theme}>
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
          <NavMenu handleShow={handleShow} handleClose={handleClose} />
        )}
      </StyledDiv>
      {show && <Modal handleClose={handleClose} />}
    </ThemeProvider>
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
    flex-direction: column;
    margin-left: 0;
    padding-top: 7rem;
    padding-bottom: 5rem;
    height: 22rem;
  }
`;
const LogoDiv = styled.div`
  display: flex;
  margin-left: 4.4rem;
  height: 9.2rem;
  width: auto;
  align-items: center;
  justify-content: space-around;
  @media (max-width: 480px) {
    height: 9.2rem;
    margin: 0;
  }
`;
const NavDiv = styled.div`
  display: flex;
  height: 9.2rem;
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
`;

const Name = styled.h1`
  margin-left: 1rem;
  color: var(--color-secondary);
  text-transform: uppercase;
`;

export default Navbar;
