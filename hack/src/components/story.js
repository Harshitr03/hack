import React from 'react';
import styled from 'styled-components';

const Story = () => {
  return (
    <StoryContainer>
      <Title>Our Story</Title>
      <Content>
        <Text>
          Everything is worth something. Waste holds significant value when approached as a resource rather than something to discard...
        </Text>
        <Image src="smaller.jpg" alt="Story" />
      </Content>
    </StoryContainer>
  );
};

export default Story;

const StoryContainer = styled.div`
  padding: 50px 20px;
  background-color: #000;
  color: white;
  text-align: center;
`;

const Title = styled.h2`
  font-size: 2.5em;
  margin-bottom: 20px;
`;

const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 1200px;
  margin: auto;
`;

const Text = styled.p`
  flex: 1;
  padding: 20px;
  font-size: 1.2em;
`;

const Image = styled.img`
  flex: 1;
  max-width: 100%;
  height: auto;
`;
