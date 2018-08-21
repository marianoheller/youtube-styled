import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Spring, animated } from 'react-spring';
import YouTubePlayer from 'react-player/lib/players/YouTube';
import { MdExpandMore as _MinimizeIcon } from "react-icons/md";


const MaximizedContainer = styled(animated.div)`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  display: flex;
  flex-direction: column;
  z-index: ${({ theme }) => theme.zIndex.ref + 2 };
  background-color: white;
`;

const PlayerWrapper = styled.div`
  height: 40vh;
  background-color: black;
`;

const MinimizeButton = styled(_MinimizeIcon)`
  position: absolute;
  top: 1.5rem;
  left: 1.5rem;

  width: 1.5rem;
  height: 1.5rem;
  color: white;
`;

export default class Maximized extends Component {
  render() {
    const {
      url,
      isPlaying,
      volume,
      setMinimized,
    } = this.props;
    return (
      <Spring
        from={{ opacity: 0, scale: 0.5, translate: 100 }}
        to={{ opacity: 1, scale: 1, translate: 0 }}
        native
      >
        {({ opacity, scale, translate}) => (
          <MaximizedContainer style={{
            opacity: opacity.interpolate(o => o),
            scale: scale.interpolate(s => s),
            willChange: 'transform',
            transform: translate.interpolate(t => `translate3d(0, ${t}px ,0)`)
          }}>
            <PlayerWrapper>
              <YouTubePlayer
                url={`http://www.youtube.com/watch?v=${url}`}
                width="100%"
                height="100%"
                playing={isPlaying}
                volume={volume}
                controls
              />
            </PlayerWrapper>
    
            <MinimizeButton onClick={() => setMinimized(true)}/>
          </MaximizedContainer>
        )}
    
      
      </Spring>
    )
  }
}

Maximized.propTypes = {
  isPlaying: PropTypes.bool.isRequired,
  url: PropTypes.string.isRequired,
  volume: PropTypes.number.isRequired,
  isMuted: PropTypes.bool.isRequired,
  isLooping: PropTypes.bool.isRequired,

  setPlaying: PropTypes.func.isRequired,
  setMinimized: PropTypes.func.isRequired,
}

