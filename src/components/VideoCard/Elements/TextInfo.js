import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import distanceInWords from 'date-fns/distance_in_words'

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;


const Title = styled.div`
  font-size: 0.8rem;
  font-weight: 500;
  margin-bottom: 0.25rem;
`;

const Description = styled.div`
  font-size: 0.6rem;
  color: hsl(0, 0%, 53.3%);;
`;

const ChannelTitle = styled.div`
  font-size: 0.6rem;
  color: hsl(0, 0%, 53.3%);;
`;

const PublishedAt = styled.div`
  font-size: 0.6rem;
  color: hsl(0, 0%, 53.3%);
`;

const MAX_LENGTH = 40;

const TextInfo = props => {
  const { title, description, channelTitle, publishedAt } = props;
  return (
    <Container>
      <Title>{title.length > MAX_LENGTH ? title.slice(0, MAX_LENGTH) + '...' : title}</Title>
      <Description>{description.length > MAX_LENGTH ? description.slice(0, MAX_LENGTH) + '...' : description}</Description>
      <ChannelTitle>{channelTitle.length > MAX_LENGTH ? channelTitle.slice(0, MAX_LENGTH) + '...' : channelTitle}</ChannelTitle>
      <PublishedAt>{distanceInWords(publishedAt, Date.now())} ago</PublishedAt>
    </Container>
  )
}

TextInfo.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  channelTitle: PropTypes.string.isRequired,
  publishedAt: PropTypes.string.isRequired,
};

TextInfo.defaultProps = {
  description: '',
};


export default TextInfo;
