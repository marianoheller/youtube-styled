import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as playerActions from '../../actions/player';
import Maximized from './Maximized';
import Minimized from './Minimized';

class PlayerContainer extends Component {
  render() {
    const { isOpen, isMinimized, ...rest } = this.props;
    if (!isOpen) return null;
    if (!isMinimized) return <Maximized {...rest} />;
    if (!isMinimized) return <Minimized {...rest} />;
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
  setMinimized: val => dispatch(playerActions.setMinimized(val)),
});


export default connect(mapStateToProps, mapDispatchToProps)(PlayerContainer);
