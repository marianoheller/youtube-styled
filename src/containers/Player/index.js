import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as playerActions from '../../actions/player';

import styled from 'styled-components';
import { Spring, animated } from 'react-spring';
import YouTubePlayer from 'react-player/lib/players/YouTube';

import { MdExpandMore as _MinimizeIcon } from "react-icons/md";
import { MdClose as _CloseIcon } from "react-icons/md";
import { MdPlayArrow as _PlayIcon } from "react-icons/md";
import { MdPause as _PauseIcon } from "react-icons/md";
import { MdLoop as _LoopIcon } from "react-icons/md";
import Slider from '../../components/Slider';


const MainContainer = styled(animated.div)`
  position: absolute;
  top: ${({ isMinimized }) => (isMinimized ? 'unset' : 0)};
  left: 0;
  right: 0;
  bottom: 0;

  display: flex;
  flex-direction: ${({ isMinimized }) => (isMinimized ? 'row' : 'column')};
  z-index: ${({ theme }) => theme.zIndex.ref + 2 };
  background-color: white;
`;

const PlayerWrapper = styled.div`
  height: ${({ isMinimized }) => (isMinimized ? '10vh' : '40vh')};
  width: ${({ isMinimized }) => (isMinimized ? '10vh' : 'unset')};
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

const MinimizedControls = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
`;

const PlayButton = styled(_PlayIcon)`
  width: 1.5rem;
  height: 1.5rem;
  color: black;
`;

const PauseButton = styled(_PauseIcon)`
  width: 1.5rem;
  height: 1.5rem;
  color: black;
`;

const LoopButton = styled(_LoopIcon)`
  width: 1.5rem;
  height: 1.5rem;
  color: black;
`;

const CloseButton = styled(_CloseIcon)`
  width: 1.5rem;
  height: 1.5rem;
  color: black;
`;



class PlayerContainer extends Component {
  render() {
    const { isOpen, isMinimized, ...rest } = this.props;
    if (!isOpen) return null;
    
    return (
      <Spring
        from={{ opacity: 0, scale: 0.5, translate: 100 }}
        to={{ opacity: 1, scale: 1, translate: 0 }}
        native
      >
        {({ opacity, scale, translate}) => (
          <MainContainer
            isMinimized={isMinimized}
            style={{
              opacity: opacity.interpolate(o => o),
              scale: scale.interpolate(s => s),
              willChange: 'transform',
              transform: translate.interpolate(t => `translate3d(0, ${t}px ,0)`)
            }}
          >
            <PlayerWrapper
              isMinimized={isMinimized}
              onClick={ !isMinimized ? () => {} : () => rest.setMinimized(false) }
            >
              <YouTubePlayer
                url={`http://www.youtube.com/watch?v=${rest.url}`}
                width="100%"
                height="100%"
                playing={rest.isPlaying}
                volume={rest.volume}
                controls={!isMinimized}
              />
            </PlayerWrapper>
            { !isMinimized && <MinimizeButton onClick={() => rest.setMinimized(true)}/>}

            { isMinimized &&
              <MinimizedControls>
                { !rest.isPlaying ?
                  <PlayButton onClick={() => rest.setPlaying(true)}/>
                  :
                  <PauseButton onClick={() => rest.setPlaying(false)}/>
                }
                <Slider value={rest.volume*100} onValChange={rest.setVolume} />
                <LoopButton onClick={() => rest.setLooping(!rest.isLooping)}/>
                <CloseButton onClick={() => rest.closePlayer()}/>
              </MinimizedControls>
            }
          </MainContainer>
        )}
    
      
      </Spring>
    );
  }
}


PlayerContainer.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  isMinimized: PropTypes.bool.isRequired,
  isPlaying: PropTypes.bool.isRequired,
  url: PropTypes.string.isRequired,
  volume: PropTypes.number.isRequired,
  isMuted: PropTypes.bool.isRequired,
  isLooping: PropTypes.bool.isRequired,

  setPlaying: PropTypes.func.isRequired,
  setMinimized: PropTypes.func.isRequired,
}


const mapStateToProps = ({ player }) => ({
  isOpen: player.isOpen,
  isMinimized: player.isMinimized,

  isPlaying: player.isPlaying,
  url: player.url,
  volume: player.volume,
  isMuted: player.isMuted,
  isLooping: player.isLooping,
});


const mapDispatchToProps = dispatch => ({
  setPlaying: val => dispatch(playerActions.setPlaying(val)),
  setLooping: val => dispatch(playerActions.setLooping(val)),
  setMinimized: val => dispatch(playerActions.setMinimized(val)),
  setVolume: val => dispatch(playerActions.setVolume(val)),
  closePlayer: () => dispatch(playerActions.closePlayer()),
});


export default connect(mapStateToProps, mapDispatchToProps)(PlayerContainer);
