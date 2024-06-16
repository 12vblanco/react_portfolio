// import PropTypes from "prop-types";
import styled from "styled-components";
import MainContainer from "../components/MainContainer.jsx";
import StyledContainer from "../components/StyledContainer.jsx";
import { blogEntries } from "../components/blog/BlogEntries.jsx";
import BlogEntry from "../components/blog/BlogEntry.jsx";

const BlogPage = () => {
  return (
    <MainContainer>
      <StyledContainer>
        {blogEntries.map((entry, i) => {
          return (
            <BlogEntryCard key={i}>
              <BlogEntry entry={entry} />
            </BlogEntryCard>
          );
        })}
      </StyledContainer>
    </MainContainer>
  );
};

const BlogEntryCard = styled.div`
  margin: 20px 0;
`;

export default BlogPage;
