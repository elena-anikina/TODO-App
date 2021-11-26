import React, { useCallback, useEffect, useState } from "react";
import "./task-timer.css";
import PropTypes from "prop-types";

const TaskTimer = ({ timer }) => {
  const [time, setTime] = useState({ min: timer[0], sec: timer[1] });
  const [isRunning, setIsRunning] = useState(false);

  let { min, sec } = time;

  const tick = () => {
    sec += 1;
    if (sec === 60) {
      sec = 0;
      min += 1;
    }

    setTime({ min, sec });
  };

  const tickCallback = useCallback(() => tick(), []); // eslint-disable-line

  useEffect(() => {
    const interval = isRunning ? setInterval(tickCallback, 1000) : null;
    return () => clearInterval(interval);
  }, [isRunning, tickCallback]);

  const formatTime = (num) => (Number(num) >= 10 ? num : `0${num}`);

  return (
    <span className="taskTimer-description">
      <button
        className="taskTimer-button taskTimer-iconPlay"
        type="button"
        aria-label="start"
        onClick={() => setIsRunning(true)}
      />
      <button
        className="taskTimer-button taskTimer-iconPause"
        type="button"
        aria-label="pause"
        onClick={() => setIsRunning(false)}
      />
      {formatTime(min)}:{formatTime(sec)}
    </span>
  );
};

export default TaskTimer;

TaskTimer.defaultProps = {
  timer: [0, 0],
};

TaskTimer.propTypes = {
  timer: PropTypes.instanceOf(Array),
};
