import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { MdPlayCircleFilled as _PlayIcon } from "react-icons/md";

const Image = styled.img`
  opacity: 1;
  width: 100%;
  
  transition: 0.5s ease-out;
  backface-visibility: hidden;
`;

const Overlay = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;

  height: 200px;
  width: 100%;
  
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;

  transition: 1s ease;
  opacity: 0;

  background-color: rgba(0,0,0,0.5);
`;


const PlayIcon = styled(_PlayIcon)`
  color: rgba(200, 200, 200, 0.75);
  width: 4rem;
  height: 4rem;
`;

const Thumbnail = props => {
  return (
    <React.Fragment>
      <Image src={props.url} />
      { props.hasOverlay &&
        <Overlay>
          <PlayIcon />
        </Overlay>
      }
    </React.Fragment>
  )
}

Thumbnail.propTypes = {
  url: PropTypes.string,
  hasOverlay: PropTypes.bool,
}

Thumbnail.defaultProps = {
  url: 'https://via.placeholder.com/320x180',
  hasOverlay: false,
}

export default Thumbnail;
