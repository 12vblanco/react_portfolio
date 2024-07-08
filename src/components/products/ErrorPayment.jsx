import { useEffect } from "react";
import styled from "styled-components";

const ErrorPayment = () => {
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
      <h2>Something went wrong with the payment</h2>
      <Text>Please try again, or get in touch.</Text>
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

export default ErrorPayment;
