import React from 'react';
import './task-timer.css';
import PropTypes from 'prop-types';

export default class TaskTimer extends React.Component {
  state = {
    min: null,
    sec: null,
    isRunning: false,
  };

  componentDidMount() {
    const { timer } = this.props;

    const min = timer[0];
    const sec = timer[1];

    const minFormat = min > 10 ? min : `0${min}`;
    const secFormat = sec > 10 ? sec : `0${sec}`;
    this.setState({ min: minFormat, sec: secFormat });
  }

  componentWillUnmount() {
    clearInterval(this.timerId);
  }

  start = () => {
    const { isRunning } = this.state;

    if (!isRunning) {
      this.setState({ isRunning: true });
      this.timerId = setInterval(this.timer, 1000);
    }
  };

  pause = () => {
    clearInterval(this.timerId);
    this.setState({ isRunning: false });
  };

  timer = () => {
    const { min, sec } = this.state;

    let secCounter = Number(sec);
    let minCounter = Number(min);

    secCounter += 1;

    if (secCounter === 60) {
      secCounter = 0;
      minCounter += 1;
    }

    const secFormat = `${secCounter >= 10 ? secCounter : `0${secCounter}`}`;
    const minFormat = `${minCounter >= 10 ? minCounter : `0${minCounter}`}`;

    this.setState({ min: minFormat, sec: secFormat });
  };

  render() {
    const { min, sec } = this.state;

    return (
      <span className="taskTimer-description">
        <button className="taskTimer-button taskTimer-iconPlay" type="button" aria-label="start" onClick={this.start} />

        <button
          className="taskTimer-button taskTimer-iconPause"
          type="button"
          aria-label="pause"
          onClick={this.pause}
        />
        {`${min}:${sec}`}
      </span>
    );
  }
}

TaskTimer.defaultProps = {
  timer: [0, 0],
};

TaskTimer.propTypes = {
  timer: PropTypes.instanceOf(Array),
};
