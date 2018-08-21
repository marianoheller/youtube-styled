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
`;

const PlayerWrapper = styled.div`
  height: 40vh;
`;

const MinimizeButton = styled(_MinimizeIcon)`
  position: absolute;
  top: 1rem;
  left: 1rem;

  width: 1rem;
  height: 1rem;

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
        from={{ opacity: 0, scale: 0.5, translate: 1 }}
        to={{ opacity: 1, scale: 1, translate: 0 }}
        native
      >
        {({ opacity, scale, translate}) => (
          <MaximizedContainer styles={{
            opacity: opacity.interpolate(o => o),
            scale: scale.interpolate(s => s),
            willChange: 'transform',
            transform: translate.interpolate(t => `translate3d(0, ${0} ,0)`)
          }}>
            <PlayerWrapper>
              <YouTubePlayer
                url={url}
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

