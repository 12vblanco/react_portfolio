import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import MainContainer from "../components/MainContainer";
import StyledContainer from "../components/StyledContainer";

const Terms = ({ scrollToTop }) => {
  scrollToTop();
  return (
    <MainContainer>
      <StyledContainer>
        <div style={{ marginTop: "2rem", maxWidth: "1040px" }}>
          <h1>Terms and Conditions</h1>
          <p>
            Welcome to Victor Blanco Prints.
            <br /> These terms and conditions outline the rules and regulations
            for the use of my website and services.
          </p>
          <h3>1. Privacy & Data Protection</h3>
          <p>
            1.1. Collection of Information: We may collect personal information,
            such as your name, email address, phone number, and payment details,
            solely for the purposes of contacting you, processing payments, and
            fulfilling legal obligations related to taxes.
            <br /> 1.2. Security: Your personal information is stored securely
            and will not be shared with third parties except as required by law
            or with your explicit consent.
            <br /> 1.3. GDPR Compliance: We comply with the General Data
            Protection Regulation (GDPR) and other applicable UK legislation
            concerning data protection and user privacy.
          </p>
          <h3>2. Use of Your Information</h3>
          <p>
            2.1. Purpose: The information collected is used for communication
            purposes, processing of payments, and legal compliance related to
            taxation.
            <br />
            2.2. Marketing: We will not use your personal information for
            marketing purposes unless you have explicitly opted in to receive
            such communications.
          </p>
          <h3>3. Cookies</h3>
          <p>
            3.1. Use of Cookies: The Website may use cookies to enhance your
            user experience. By using the Website, you consent to the use of
            cookies in accordance with our Privacy Policy.
          </p>
          <h3>4. Third-Party Links</h3>
          <p>
            4.1. Links to Other Websites: The Website may contain links to
            third-party websites. We are not responsible for the privacy
            practices or content of these websites.
          </p>
          <h3>5. Changes to Terms</h3>
          <p>
            5.1. Modification: We reserve the right to modify these terms and
            conditions at any time. Changes will be effective immediately upon
            posting on the Website.
          </p>
          <h3>6. Limitation of Liability</h3>
          <p>
            6.1. Disclaimer: The information provided on the Website is for
            general informational purposes only. We do not guarantee the
            accuracy, completeness, or reliability of any content.
          </p>
          <h3>7. Governing Law</h3>
          <p>
            7.1. Jurisdiction: These terms and conditions are governed by and
            construed in accordance with the laws of The UK.
          </p>
          <h3>8. Contact Us</h3>
          <p>
            8.1. Questions: If you have any questions or concerns about these
            terms and conditions, please contact us at vblanco@mail.com.
          </p>
          <p>
            By using the Website, you agree to these terms and conditions. If
            you do not agree with any part of these terms, please do not use the
            Website.{" "}
            <NavLink to="/contact" style={{ color: "var(--red)" }}>
              here.
            </NavLink>
          </p>{" "}
        </div>
      </StyledContainer>
    </MainContainer>
  );
};

Terms.propTypes = {
  scrollToTop: PropTypes.func,
};

export default Terms;
