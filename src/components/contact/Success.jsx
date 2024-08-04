import { useEffect } from "react";
import styled from "styled-components";

const Success = () => {
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
      <h2>Thank you for submitting the form!</h2>
      <Text>We will get back to you soon.</Text>
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
`;

const Text = styled.p`
  margin-bottom: 44px;
  font-weight: 500;
`;

export default Success;
