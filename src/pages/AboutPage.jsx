import styled from "styled-components";
import Img3 from "../assets/images/about/ley1.jpg";
import Img2 from "../assets/images/about/maple-400.jpg";
import Img1 from "../assets/images/about/round.jpg";
import MainContainer from "../components/MainContainer";

const AboutPage = () => {
  return (
    <MainContainer>
      <Div>
        <Row>
          <DivTextImg>
            <Img src={Img1} />
          </DivTextImg>
          <BioText>
            Before becoming a software developer, my professional life has
            always revolved around trees. <br />
            The structures and shapes of wood and the pathogens and conditions
            that affect and delimit its growth have always had an impact on me
            and at the end of 2019 I started printing these patterns in paper.{" "}
            <br />
            <br />
            All my work comes from diseased trees or trees with structural
            imperfections that must be felled for safety.
          </BioText>
        </Row>

        <DivTextImg>
          <Row>
            <BioText>
              I rescue the wood from becoming firewood or ending up decomposed
              on the ground. In this way, the tree has a chance to leave a mark
              after its physical body has disappeared allowing us to appreciate
              its life history and the beauty within wood growth.
              <br />
            </BioText>{" "}
            <Img src={Img2} />
          </Row>
        </DivTextImg>

        <BioText>
          In my prints one can see the marks left by pathologies, age growth,
          the good years and those that lacked water or sunlight, the imprint
          that physical objects left in the trunk when the tree grew over them,
          the formation and physiology of wood structures such as branches and
          many other details.
        </BioText>
        <BioText>
          The engraving occurs thanks to the difference in density of the wood
          that grows in the rings during spring and fall. In the warmer months,
          the rings grow fast accumulating nutrients and the growth slows down
          in the months with reduced sun hours (although evergreens&apos; growth
          is slightly different and so are their wood&apos;s properties). This
          affects the hardness of the rings.
        </BioText>
        <DivTextImg>
          <Row>
            <Img src={Img3} />
            <BioText>
              My prints are organic, I couldn&apos;t make two the same even if I
              wanted to. Each print is unique and slightly different even if
              there are several based on the same piece of wood. My editions are
              open and the colours and type of paper can be modified to suit
              individual taste.{" "}
            </BioText>
          </Row>
        </DivTextImg>
        <BioText
          style={{
            textAlign: "center",
            marginBottom: "2rem",
          }}
        >
          Thank you for taking the time to look at my work.
        </BioText>
      </Div>
    </MainContainer>
  );
};

const Div = styled.div`
  max-width: 100rem;
  height: auto;
  padding: 1.25rem;
  margin: 0 auto;
`;

const Row = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  @media (max-width: 646px) {
    flex-direction: column;
  }
`;

const DivTextImg = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  margin: 8px 0;
  @media (max-width: 646px) {
    flex-direction: column;
  }
`;

const Img = styled.img`
  width: 160px;
  height: 160px;
  border-radius: 50%;
  margin: 6px;
  @media (max-width: 646px) {
    width: 100%;
    height: 180px;
    margin: 2px 0;
    border-radius: 6px;
    object-fit: cover;
    object-position: 10% 20%;
  }
`;

const BioText = styled.p`
  font-size: 18px;
  line-height: 1.5;
  margin-bottom: 20px;

  @media (max-width: 892px) {
    font-size: 16px;
  }
`;

export default AboutPage;
