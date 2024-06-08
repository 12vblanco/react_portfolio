import styled from "styled-components";
import MainContainer from "../../components/MainContainer";

const Form = () => {
  const onSubmitHandler = (event) => {
    event.preventDefault();
  };
  return (
    <MainContainer>
      <FromContainer>
        <H1>Please send us any requests or queries using this form:</H1>
        <StyledForm
          name="BasketForm"
          method="POST"
          data-netlify="true"
          onSubmit={onSubmitHandler}
        >
          <input type="hidden" name="BasketForm" value="BasketForm" />

          <Label htmlFor="name">
            Your name
            <Input id="name" type="text" name="name" />
          </Label>

          <Label htmlFor="email">
            Your email
            <span style={{ color: "var(--color-accent)", fontSize: "28px" }}>
              *
            </span>
            <Input id="email" type="email" name="email" required="required" />
          </Label>

          <Label htmlFor="textarea">
            Message
            <span style={{ color: "var(--color-accent)", fontSize: "28px" }}>
              *
            </span>
            <TextArea id="textarea" type="textarea" name="textarea" />
          </Label>

          <Label htmlFor="checkbox">
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Checkbox type="checkbox" required="required" />
              <CheckText>
                I am happy to receive emails regarding this message & according
                to the{" "}
                <a href="/terms" target="_blank">
                  Terms & Conditions
                </a>
                <span
                  style={{ color: "var(--color-accent)", fontSize: "26px" }}
                >
                  *
                </span>
              </CheckText>
            </div>
          </Label>

          <InputButton type="submit" value="Send a message" />
        </StyledForm>
      </FromContainer>
    </MainContainer>
  );
};

const FromContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 700px;
  padding: 0.6rem 0.75rem 2rem 0.75rem;
  border-radius: 0.8rem;
`;

const H1 = styled.h1`
  font-size: 24px;
  margin: 1.6rem 0;
  font-weight: 300;
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const Input = styled.input`
  width: 100%;
  padding: 7px;
  height: 32px;
  border-radius: 6px;
  font-size: 22px;
  box-shadow: 0.1875rem 0.3125rem 1.125rem rgba(3, 3, 3, 0.2);
`;
const TextArea = styled.textarea`
  width: 100%;
  padding: 0.5rem;
  border-radius: 6px;
  outline: 1px solid black;
  font-size: 22px;
  height: 140px;
  box-shadow: 0.1875rem 0.3125rem 1.125rem rgba(3, 3, 3, 0.2);
`;

const Label = styled.label`
  font-size: 24px;
  width: 100%;
`;

const Checkbox = styled.input`
  height: 22px;
  width: 22px;
  outline: 1px solid black;
  margin-top: 12px;
  accent-color: var(--color-secondary);
  &:checked {
    background-color: var(--color-primary);
    color: var(--color-secondary);
  }
`;

const CheckText = styled.p`
  text-align: left;
  font-size: 14px;
  line-height: 0.6;
  width: 100%;
  padding-left: 1rem;
  padding-top: 1rem;
  margin-top: -5px;
`;

const InputButton = styled.input`
  border-radius: 6px;
  outline: 1px solid black;
  font-weight: 500;
  margin-top: 20px;
  font-size: 22px;
  padding: 1rem 0.8rem;
  position: relative;
  left: 50%;
  width: 260px;
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
`;

export default Form;
