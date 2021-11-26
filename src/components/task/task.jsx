import React from "react";
import PropTypes from "prop-types";

import "./task.css";
import Time from "../time/time";
import EditingTask from "../editing-task/editing-task";
import TaskTimer from "../task-timer/task-timer";

const Task = ({ data, deleteTask, editStatus, editTask, toggleStatus }) => {
  const { name, id, status, editing, timer } = data;
  const render = data.render ? "visible" : "invisible";
  const taskType = editing ? "editing" : status;

  return (
    <li className={`${taskType} ${render}`}>
      <div className="view">
        <input
          className="toggle"
          type="checkbox"
          checked={status === "completed"}
          onChange={() => toggleStatus(id)}
        />
        <label>
          <span className="description">{name}</span>
          <TaskTimer timer={timer} />
          <Time />
        </label>
        <button
          className="icon icon-edit"
          type="button"
          onClick={() => editStatus(id)}
          aria-label="edit"
        />
        <button
          className="icon icon-destroy"
          type="button"
          onClick={() => {
            deleteTask(id);
          }}
          aria-label="delete"
        />
      </div>
      {taskType === "editing" && (
        <EditingTask id={id} task={name} editTask={editTask} />
      )}
    </li>
  );
};

Task.defaultProps = {
  data: { id: 12345, name: "Example", status: "active", render: true },
  deleteTask: () => "deleteTask",
  editStatus: () => "editStatus",
  editTask: () => "editTask",
  toggleStatus: () => "toggleStatus",
};

Task.propTypes = {
  data: PropTypes.instanceOf(Object),
  deleteTask: PropTypes.func,
  editStatus: PropTypes.func,
  editTask: PropTypes.func,
  toggleStatus: PropTypes.func,
};

export default Task;
