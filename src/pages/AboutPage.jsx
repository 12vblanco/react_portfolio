import { Col, Container, Row } from "react-bootstrap";
import styled from "styled-components";
import Img3 from "../assets/images/about/ley1.jpg";
import Img2 from "../assets/images/about/maple-400.jpg";
import Img1 from "../assets/images/about/round.jpg";
import MainContainer from "../components/MainContainer";
import Footer from "../components/footer/Footer";

const AboutPage = () => {
  return (
    <MainContainer>
      <Container>
        <Row className="my-4">
          <Col
            md={2}
            className="d-flex align-items-center justify-content-center"
          >
            <Img src={Img1} alt="Description" />
          </Col>
          <Col md={10}>
            <BioText>
              Before becoming a software developer, my professional life has
              always revolved around trees. <br />
              <br />
              The structures and shapes of wood and the pathogens and conditions
              that affect and delimit its growth have always had an impact on me
              and at the end of 2019 I started printing these patterns in paper.
            </BioText>
          </Col>
        </Row>

        <Row className="my-4">
          <Col>
            <BioText>
              All my work comes from diseased trees or trees with structural
              imperfections that must be felled for safety. I rescue the wood
              from becoming firewood or ending up decomposed on the ground. In
              this way, the tree has a chance to leave a mark after its physical
              body has disappeared allowing us to appreciate its life history
              and the beauty within wood growth.
            </BioText>
          </Col>
        </Row>

        <Row className="my-4">
          <Col md={10}>
            <BioText>
              The engraving occurs thanks to the difference in density of the
              wood that grows in the rings during spring and fall. In the warmer
              months, the rings grow fast accumulating nutrients and the growth
              slows down in the months with reduced sun hours (although
              evergreens&apos; growth is slightly different and so are their
              wood&apos;s properties). This affects the hardness of the rings.
            </BioText>
          </Col>
          <Col
            md={2}
            className="d-flex align-items-center justify-content-center"
          >
            <Img src={Img2} alt="Description" />
          </Col>
        </Row>

        <Row className="my-4">
          <Col>
            <BioText>
              In my prints one can see the marks left by pathologies, age
              growth, the good years and those that lacked water or sunlight,
              the imprint that physical objects left in the trunk when the tree
              grew over them, the formation and physiology of wood structures
              such as branches and many other details.
            </BioText>
          </Col>
        </Row>

        <Row className="my-4">
          <Col
            md={2}
            className="d-flex align-items-center justify-content-center"
          >
            <Img src={Img3} alt="Description" />
          </Col>
          <Col md={10}>
            <BioText>
              My prints are organic, I couldn&apos;t make two the same even if I
              wanted to. Each print is unique and slightly different even if
              there are several based on the same piece of wood. My editions are
              open and the colours and type of paper can be modified to suit
              individual taste.
            </BioText>
          </Col>
        </Row>

        <Row className="my-4">
          <Col>
            <BioText style={{ textAlign: "center" }}>
              Thank you for taking the time to look at my work.
            </BioText>
          </Col>
        </Row>
      </Container>
      <Footer />
    </MainContainer>
  );
};

const Img = styled.img`
  width: 160px;
  height: 160px;
  border-radius: 50%;
  margin: 6px;
  @media (max-width: 646px) {
  }
`;

const BioText = styled.p`
  line-height: 1.5;
  font-weight: 300;
  padding: 1rem 2rem;
  @media (max-width: 646px) {
    font-size: 18px;
  }
`;

export default AboutPage;
