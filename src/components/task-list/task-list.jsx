import React from 'react';
import PropTypes from 'prop-types';

import Task from '../task/task';

const TaskList = ({ data, deleteTask, editStatus, editTask, toggleStatus }) => {
  const tasks = data.map((task) => (
    <Task
      data={task}
      deleteTask={deleteTask}
      editStatus={editStatus}
      editTask={editTask}
      toggleStatus={toggleStatus}
      key={task.id}
    />
  ));

  return <ul className="todo-list">{tasks}</ul>;
};

TaskList.defaultProps = {
  data: [{ id: 12345, name: 'Example', status: 'active', render: true }],
  deleteTask: () => 'deleteTask',
  editStatus: () => 'editStatus',
  editTask: () => 'editTask',
  toggleStatus: () => 'toggleStatus',
};

TaskList.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object),
  deleteTask: PropTypes.func,
  editStatus: PropTypes.func,
  editTask: PropTypes.func,
  toggleStatus: PropTypes.func,
};

export default TaskList;
