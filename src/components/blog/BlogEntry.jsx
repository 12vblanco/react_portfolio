import PropTypes from "prop-types";
import styled from "styled-components";

const BlogEntry = ({ entry }) => {
  return (
    <MainContainer>
      <EntryContainer>
        <ImgCol>
          <BlogImage src={entry.image} alt={entry.title} />
        </ImgCol>
        <TextCol>
          <BlogContent>
            <BlogTitle>{entry.title}</BlogTitle>
            <BlogSubtitle>{entry.subtitle}</BlogSubtitle>
            <BlogDate>{entry.date}</BlogDate>
            <BlogText>{entry.text}</BlogText>
            <BlogTags>
              {entry.tags.map((tag, i) => (
                <BlogTag key={i}>{tag}</BlogTag>
              ))}
            </BlogTags>
          </BlogContent>
        </TextCol>
      </EntryContainer>
    </MainContainer>
  );
};

BlogEntry.propTypes = {
  entry: PropTypes.object.isRequired,
};

const MainContainer = styled.div`
  width: 100%;
  padding: 0 15px;
  margin: 0 auto;
`;

const EntryContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: -15px;
  align-items: center;
  justify-content: center;
  margin-bottom: 3rem;
  background: #f1f4f4;
  border-radius: 8px;
`;

const ImgCol = styled.div`
  padding: 15px;
  max-width: 33.3333%;

  @media (max-width: 892px) {
    max-width: 100%;
  }
`;

const TextCol = styled.div`
  padding: 15px;
  max-width: 66.6667%;

  @media (max-width: 892px) {
    max-width: 100%;
  }
`;

const BlogImage = styled.img`
  width: 280px;
  height: 280px;
  object-fit: cover;
  margin-bottom: 1rem;

  @media (max-width: 892px) {
    width: 100%;
    height: auto;
  }
`;

const BlogContent = styled.div`
  flex: 1;
`;

const BlogTitle = styled.h2`
  font-weight: 700;
  margin-bottom: 10px;
  font-size: 26px;
  @media (max-width: 890px) {
    margin-bottom: 6px;
    font-size: 24px;
  }
`;

const BlogSubtitle = styled.h3`
  margin-bottom: 5px;
  font-weight: 500;
  letter-spacing: -0.4px;

  @media (max-width: 890px) {
    margin-bottom: 6px;
    font-size: 19px;
  }
`;

const BlogDate = styled.p`
  font-size: 16px;
  color: #777;
  margin-bottom: 10px;

  @media (max-width: 892px) {
    font-size: 13px;
  }
`;

const BlogText = styled.p`
  font-size: 18px;
  line-height: 1.5;
  margin-bottom: 20px;

  @media (max-width: 892px) {
    font-size: 16px;
  }
`;

const BlogTags = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const BlogTag = styled.span`
  font-size: 16px;
  background-color: #f0f0f0;
  padding: 5px 10px;
  margin-right: 10px;
  margin-bottom: 10px;
  border-radius: 4px;

  @media (max-width: 892px) {
    font-size: 14px;
    padding: 3px 7px;
  }
  @media (max-width: 562px) {
    font-size: 13px;
    padding: 2px 6px;
  }
`;

export default BlogEntry;
