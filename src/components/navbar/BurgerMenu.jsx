import PropTypes from "prop-types";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose } from "react-icons/md";
import styled from "styled-components";
import NavMenu from "./NavMenu";

const BurgerMenu = ({ handleShow, handleClose }) => {
  const [click, setClick] = useState(false);
  const clickHandler = () => {
    setClick(!click);
    handleClose();
  };

  const closeMenu = () => {
    setClick(false);
  };

  return (
    <>
      <BurgerDiv>
        <MenuIcon onClick={clickHandler}>
          {click ? <MdClose /> : <GiHamburgerMenu />}
        </MenuIcon>
      </BurgerDiv>
      <BurgerToggled
        style={
          click
            ? { width: "100%", height: "100vh", position: "fixed" }
            : { width: "0%", height: "0vh", display: "none" }
        }
      >
        <NavMenu closeMenu={closeMenu} handleShow={handleShow} />
      </BurgerToggled>
    </>
  );
};

BurgerMenu.propTypes = {
  handleShow: PropTypes.func,
  handleClose: PropTypes.func,
};

const BurgerDiv = styled.div`
  flex: 1;
  margin-right: 4%;

  @media (max-width: 580px) {
    flex: initial;
    margin-top: 14px;
    margin-right: 0;
  }
`;

const MenuIcon = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  margin: 0 auto;
  margin-bottom: 1rem;
  font-size: 50px;
  cursor: pointer;
  @media (max-width: 646px) {
    font-size: 36px;
    margin-top: 2px;
  }
`;

const BurgerToggled = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  text-align: center;
  left: 0;
  padding-top: 25%;
  background: #f4f7f8;
`;

export default BurgerMenu;
