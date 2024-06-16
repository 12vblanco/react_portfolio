import { useEffect } from "react";
import styled from "styled-components";

const SuccessPayment = () => {
  const handleBackHome = () => {
    window.location.href = "/";
  };
  useEffect(() => {
    const timer = setTimeout(() => {
      window.location.href = "/";
    }, 4000);

    return () => clearTimeout(timer);
  }, []);
  return (
    <Div>
      <h2>Thank you for payment!</h2>
      <Text>We will be in touch soon.</Text>
      <ContactBtn onClick={handleBackHome} tagName={"Go Back!"} />{" "}
    </Div>
  );
};

const Div = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 90vh;
  border-bottom: solid 1px #000;
  border-right: solid 1px #000;
`;

const Text = styled.p`
  margin-bottom: 44px;
  font-weight: 500;
`;

const ContactBtn = styled.button`
  display: flex;
  background: var(--blue);
  border: 1px solid var(--blue);
  border-radius: 2px;
  font-weight: 600;
  font-size: 0.9375rem;
  color: var(--white);
  width: 110px;
  height: 50px;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: all 0.3s linear;

  &:hover {
    background: rgba(40, 98, 150, 1) 100%;
  }
`;

export default SuccessPayment;
