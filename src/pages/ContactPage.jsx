import PropTypes from "prop-types";
import MainContainer from "../components/MainContainer";
import StyledContainer from "../components/StyledContainer";
import Form from "../components/contact/Form";

const ContactPage = ({ scrollToTop }) => {
  scrollToTop();

  return (
    <MainContainer>
      <StyledContainer>
        <Form />
      </StyledContainer>
    </MainContainer>
  );
};

ContactPage.propTypes = {
  scrollToTop: PropTypes.func,
};

export default ContactPage;
