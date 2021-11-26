import React, { useState } from "react";
import "./new-task-form.css";
import PropTypes from "prop-types";

const NewTaskForm = ({ addTask }) => {
  const [value, setValue] = useState("");
  const [minValue, setMinValue] = useState("");
  const [secValue, setSecValue] = useState("");

  const onLabelChange = (event) => {
    setValue(event.target.value);
  };

  const onMinChange = (event) => {
    setMinValue(event.target.value);
  };

  const onSecChange = (event) => {
    setSecValue(event.target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    addTask(value, minValue, secValue);
    setValue("");
    setMinValue("");
    setSecValue("");
  };

  const onSubmitMin = (event) => {
    if (event.keyCode === 13) {
      onSubmit(event);
    }
  };

  const onSubmitSec = (event) => {
    if (event.keyCode === 13) {
      onSubmit(event);
    }
  };

  return (
    <div className="new-task-form">
      <form onSubmit={onSubmit}>
        <input
          className="new-todo"
          placeholder="What needs to be done?"
          value={value}
          onChange={onLabelChange}
          autoFocus /* eslint-disable-line */
        />
      </form>
      <input
        className="new-todo-form__timer"
        placeholder="Min"
        value={minValue}
        onChange={onMinChange}
        onKeyUp={onSubmitMin}
      />
      <input
        className="new-todo-form__timer"
        placeholder="Sec"
        value={secValue}
        onChange={onSecChange}
        onKeyUp={onSubmitSec}
      />
    </div>
  );
};

export default NewTaskForm;

NewTaskForm.defaultProps = {
  addTask: () => "addTask",
};

NewTaskForm.propTypes = {
  addTask: PropTypes.func,
};
