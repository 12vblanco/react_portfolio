import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import MainContainer from "../MainContainer";

const Form = () => {
  let navigate = useNavigate();

  const onSubmitHandler = (e) => {
    e.preventDefault();

    let myForm = document.getElementById("styledContactForm");
    let formData = new FormData(myForm);
    console.log("Form Data: ", Object.fromEntries(formData.entries()));

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(formData).toString(),
    })
      .then(() => {
        console.log("Form submission successful");
        navigate("/Success");
      })
      .catch((error) => {
        console.error("Form submission error:", error);
        alert(error);
      });
  };

  return (
    <MainContainer>
      <FormContainer>
        <H2>Please send us any requests or queries using this form:</H2>
        <StyledForm
          id="styledContactForm"
          name="contactForm"
          method="POST"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          data-netlify-recaptcha="true"
          onSubmit={onSubmitHandler}
        >
          <input
            type="hidden"
            name="form-name"
            value="contactForm"
            data-netlify-recaptcha="true"
          />
          <input type="hidden" name="bot-field" />

          <Label htmlFor="name">
            Your name
            <Input id="name" type="text" name="name" />
          </Label>

          <Label htmlFor="email">
            Your email
            <span style={{ color: "var(--color-accent)", fontSize: "28px" }}>
              *
            </span>
            <Input id="email" type="email" name="email" required />
          </Label>

          <Label htmlFor="textarea">
            Message
            <span style={{ color: "var(--color-accent)", fontSize: "28px" }}>
              *
            </span>
            <TextArea id="textarea" name="message" />
          </Label>

          <Label htmlFor="checkbox">
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Checkbox type="checkbox" required />
              <CheckText>
                I am happy to receive emails regarding this message & according
                to the{" "}
                <a href="/terms" target="_blank">
                  Terms & Conditions
                </a>
                <span
                  style={{ color: "var(--color-accent)", fontSize: "16px" }}
                >
                  *
                </span>
              </CheckText>
            </div>
          </Label>

          <InputButton type="submit" value="Send a message" />
        </StyledForm>
      </FormContainer>
    </MainContainer>
  );
};

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 700px;
  padding: 0.6rem 0.75rem 2rem 0.75rem;
  border-radius: 0.8rem;
  margin-top: -130px;
  @media (max-width: 440px) {
    max-width: 100%;
    padding: 10px 1.8rem;
    margin-top: -100px;
  }
`;

const H2 = styled.h2`
  margin: 1.6rem 0;
  font-weight: 300;
  @media (max-width: 440px) {
    text-align: center;
    font-size: 18px;
    margin: 1rem 0;
  }
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  height: 32px;
  border-radius: 6px;
  font-size: 16px;
  border: 0.5px dotted #333;
  @media (max-width: 440px) {
    font-size: 16px;
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 0.5rem;
  border-radius: 6px;
  border: 0.5px dotted black;
  font-size: 16px;
  height: 140px;
  box-shadow: 0.1875rem 0.3125rem 1.125rem rgba(3, 3, 3, 0.2);
  @media (max-width: 440px) {
    font-size: 16px;
  }
`;

const Label = styled.label`
  font-size: 18px;
  width: 100%;
  @media (max-width: 440px) {
    font-size: 16px;
  }
`;

const Checkbox = styled.input`
  height: 20px;
  width: 20px;
  outline: 0.1px dotted black;
  margin-top: 13px;
  accent-color: var(--color-secondary);
  &:checked {
    background-color: var(--color-primary);
    color: var(--color-secondary);
  }
`;

const CheckText = styled.p`
  text-align: left;
  font-size: 14px;
  line-height: 1.2;
  width: 100%;
  padding-left: 1rem;
  padding-top: 1rem;
  margin-top: -5px;
  @media (max-width: 440px) {
    font-size: 11px;
    padding-left: 0.8em;
  }
`;

const InputButton = styled.input`
  border-radius: 4px;
  border: 1.6px solid #333;
  font-weight: 500;
  margin-top: 20px;
  font-size: 18px;
  padding: 0.4rem 0.5rem;
  position: relative;
  left: 50%;
  width: 160px;
  transform: translate(-50%);
  background: var(--color-primary);
  cursor: pointer;
  box-shadow: 0.1875rem 0.3125rem 1.125rem rgba(3, 3, 3, 0.5);
  transition: box-shadow 0.5s;
  &:hover {
    box-shadow: 5px 2rem 30px rgba(0, 0, 0, 0.2);
  }
  &:active {
    box-shadow: 0.1875rem 0.3125rem 1.125rem rgba(3, 3, 3, 0.5);
  }
  @media (max-width: 440px) {
    margin-top: 50px;
  }
`;

export default Form;
