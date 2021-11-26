import React, { useState } from "react";
import PropTypes from "prop-types";

const EditingTask = ({ id, editTask, task }) => {
  const [value, setValue] = useState(task);

  const onLabelChange = (event) => {
    setValue(event.target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    editTask(id, value);
    setValue(() => "");
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        className="edit"
        placeholder="Edit your task"
        value={value}
        onChange={onLabelChange}
      />
    </form>
  );
};

export default EditingTask;

EditingTask.defaultProps = {
  id: 12345,
  editTask: () => "editTask",
  task: "task text",
};

EditingTask.propTypes = {
  id: PropTypes.number,
  editTask: PropTypes.func,
  task: PropTypes.string,
};
