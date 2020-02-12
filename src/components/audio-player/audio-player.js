<<<<<<< HEAD
import React, {Component} from 'react';

import './audio-player.css';

export default class AudioPlayer extends Component {
  interval;

  state = {
    audioDuration: '',
    currentAudioTime: '',
    left: 0
  };

  componentDidUpdate(prevProps, prevState, snapshot) {
    if(prevProps.src!==this.props.src) {
      this.pause();
      this.setState({
        left: 0
      })
    }
  }

  onClick = () => {
    const audio = document.querySelector(`#${this.props.id} .audio`);

    if (audio.paused) {
      audio.play();
      this.play();
    } else {
      audio.pause();
      this.pause();
    }
  };

  setTime = (time) => {
    let seconds;

    if (Math.ceil(time % 60) < 10) {
      seconds = `0${Math.ceil(time % 60)}`;
    } else {
      seconds = Math.ceil(time % 60);
    }

    return seconds;
  };

  play = () => {
    const playerButton = document.querySelector(`#${this.props.id} .player-button`);
    playerButton.classList.add('playing');
    playerButton.classList.remove('paused');
    this.interval = setInterval(() => {
      const currentAudioTime = document.querySelector(`#${this.props.id} .audio`).currentTime;

      this.setState({
        currentAudioTime: currentAudioTime,
        left: `${currentAudioTime / this.state.audioDuration * 100}%`
      });
    }, 100);
  };

  pause = () => {
    const playerButton = document.querySelector(`#${this.props.id} .player-button`);
    playerButton.classList.add('paused');
    playerButton.classList.remove('playing');
    clearInterval(this.interval);
  };

  onLoadedMetadata = () => {
    const audioDuration = document.querySelector(`#${this.props.id} .audio`).duration;

    this.setState({
      audioDuration: audioDuration,
      currentAudioTime: 0
    });
  };

  render() {
    const {id, src} = this.props;
    const {audioDuration, currentAudioTime, left} = this.state;
    let durationSeconds = this.setTime(audioDuration);
    let seconds = this.setTime(currentAudioTime);

    return (<div className="player" id = {id}>
        <audio className="audio" src={src} onLoadedMetadata={this.onLoadedMetadata} />
        <div className="d-flex justify-content-between">
          <div className="player-button paused" onClick={this.onClick}></div>
          <div className="time-bar">
            <div className="track"></div>
            <div className="track-slider" style={{left: left}}></div>
            <div className="controls d-flex justify-content-between">
              <span>{Math.floor(currentAudioTime / 60)}:{seconds}</span>
              <span>{Math.floor(audioDuration / 60)}:{durationSeconds}</span>
            </div>
          </div>
        </div>
      </div>);
  }
}
=======
import React, {Component} from 'react';

import './audio-player.css';

export default class AudioPlayer extends Component {
  interval;

  state = {
    audioDuration: '',
    currentAudioTime: '',
    left: 0
  };

  componentDidUpdate(prevProps, prevState, snapshot) {
    if(prevProps.src!==this.props.src) {
      this.pause();
      this.setState({
        left: 0
      })
    }
  }

  onClick = () => {
    const audio = document.querySelector(`#${this.props.id} .audio`);

    if (audio.paused) {
      audio.play();
      this.play();
    } else {
      audio.pause();
      this.pause();
    }
  };

  setTime = (time) => {
    let seconds;

    if (Math.ceil(time % 60) < 10) {
      seconds = `0${Math.ceil(time % 60)}`;
    } else {
      seconds = Math.ceil(time % 60);
    }

    return seconds;
  };

  play = () => {
    const playerButton = document.querySelector(`#${this.props.id} .player-button`);
    playerButton.classList.add('playing');
    playerButton.classList.remove('paused');
    this.interval = setInterval(() => {
      const currentAudioTime = document.querySelector(`#${this.props.id} .audio`).currentTime;

      this.setState({
        currentAudioTime: currentAudioTime,
        left: `${currentAudioTime / this.state.audioDuration * 100}%`
      });
    }, 100);
  };

  pause = () => {
    const playerButton = document.querySelector(`#${this.props.id} .player-button`);
    playerButton.classList.add('paused');
    playerButton.classList.remove('playing');
    clearInterval(this.interval);
  };

  onLoadedMetadata = () => {
    const audioDuration = document.querySelector(`#${this.props.id} .audio`).duration;

    this.setState({
      audioDuration: audioDuration,
      currentAudioTime: 0
    });
  };

  render() {
    const {id, src} = this.props;
    const {audioDuration, currentAudioTime, left} = this.state;
    let durationSeconds = this.setTime(audioDuration);
    let seconds = this.setTime(currentAudioTime);

    return (<div className="player" id = {id}>
        <audio className="audio" src={src} onLoadedMetadata={this.onLoadedMetadata} />
        <div className="d-flex justify-content-between">
          <div className="player-button paused" onClick={this.onClick}></div>
          <div className="time-bar">
            <div className="track"></div>
            <div className="track-slider" style={{left: left}}></div>
            <div className="controls d-flex justify-content-between">
              <span>{Math.floor(currentAudioTime / 60)}:{seconds}</span>
              <span>{Math.floor(audioDuration / 60)}:{durationSeconds}</span>
            </div>
          </div>
        </div>
      </div>);
  }
}
>>>>>>> Additions
