import PropTypes from "prop-types";
import { useContext, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose } from "react-icons/md";
import styled from "styled-components";
import { CartContext } from "../../utils/CartContext";
import NavMenu from "./NavMenu";

const BurgerMenu = ({ handleShow, handleClose }) => {
  const cart = useContext(CartContext);

  const productsCount = cart.items.reduce(
    (sum, product) => sum + product.quantity,
    0
  );

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
          {click ? (
            <MdClose style={{ marginRight: "22px" }} />
          ) : (
            <>
              <GiHamburgerMenu />
              {productsCount > 0 && <Counter>{productsCount}</Counter>}
            </>
          )}
        </MenuIcon>
      </BurgerDiv>
      <OverlayMenu show={click}>
        <NavMenu closeMenu={closeMenu} handleShow={handleShow} click={click} />
      </OverlayMenu>
    </>
  );
};

BurgerMenu.propTypes = {
  handleShow: PropTypes.func,
  handleClose: PropTypes.func,
};

const BurgerDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
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
  font-size: 50px;
  cursor: pointer;

  @media (max-width: 646px) {
    font-size: 36px;
    margin-top: 2px;
    margin-bottom: 1rem;
  }
`;

const OverlayMenu = styled.div`
  position: fixed;
  top: 110px;
  left: 0;
  width: 100%;
  height: 100vh;
  transform: ${({ show }) => (show ? "translateX(0)" : "translateX(100%)")};
  transition: transform 0.3s ease-in-out;
  padding-top: 12vh;
  background-color: var(--color-bg);
  z-index: 22999;
`;

const Counter = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  color: #fff;
  width: 24px;
  height: 24px;
  font-size: 20px;
  background: var(--color-accent);
  padding: 1px;
  top: -18px;
  right: 12px;
  @media (max-width: 646px) {
    font-size: 14px;
    width: 18px;
    height: 18px;
  }
  @media (max-width: 580px) {
  }
`;

export default BurgerMenu;
