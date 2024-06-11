import PropTypes from "prop-types";
import { Col, Container, Row } from "react-bootstrap";
import styled from "styled-components";

const BlogEntry = ({ entry }) => {
  return (
    <Container>
      <Row className="my-4">
        <Col md={4}>
          <BlogImage src={entry.image} alt={entry.title} />
        </Col>
        <Col md={8}>
          <BlogContent>
            <BlogTitle>{entry.title}</BlogTitle>
            <BlogSubtitle>{entry.subtitle}</BlogSubtitle>
            <BlogDate>{entry.date}</BlogDate>
            <BlogBody>{entry.body}</BlogBody>
            <BlogTags>
              {entry.tags.map((tag, i) => (
                <BlogTag key={i}>{tag}</BlogTag>
              ))}
            </BlogTags>
          </BlogContent>
        </Col>
      </Row>
    </Container>
  );
};

BlogEntry.propTypes = {
  entry: PropTypes.object.isRequired,
};

const BlogImage = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
  margin-bottom: 1rem;

  @media (min-width: 768px) {
    width: 280px;
    height: 280px;
    margin-right: 26px;
    margin-bottom: 0;
  }
`;

const BlogContent = styled.div`
  flex: 1;
`;

const BlogTitle = styled.h2`
  font-size: 24px;
  margin-bottom: 10px;
`;

const BlogSubtitle = styled.h3`
  font-size: 18px;
  margin-bottom: 5px;
`;

const BlogDate = styled.p`
  font-size: 14px;
  color: #888;
  margin-bottom: 10px;
`;

const BlogBody = styled.p`
  font-size: 16px;
  line-height: 1.5;
  margin-bottom: 20px;
`;

const BlogTags = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const BlogTag = styled.span`
  font-size: 14px;
  background-color: #f0f0f0;
  padding: 5px 10px;
  margin-right: 10px;
  margin-bottom: 10px;
  border-radius: 4px;
`;

export default BlogEntry;
