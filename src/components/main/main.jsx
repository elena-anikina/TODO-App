import React from "react";
import PropTypes from "prop-types";
import NewTaskForm from "../new-task-form/new-task-form";
import TaskList from "../task-list/task-list";
import Footer from "../footer/footer";

const Main = ({
  data,
  addTask,
  deleteTask,
  deleteCompleted,
  editStatus,
  editTask,
  filter,
  toggleStatus,
}) => (
  <section className="main">
    <NewTaskForm addTask={addTask} />
    <TaskList
      data={data}
      deleteTask={deleteTask}
      editStatus={editStatus}
      editTask={editTask}
      toggleStatus={toggleStatus}
    />
    <Footer data={data} deleteCompleted={deleteCompleted} filter={filter} />
  </section>
);

Main.defaultProps = {
  data: [{ id: 12345, name: "Example", status: "active", render: true }],
  addTask: () => "addTask",
  deleteTask: () => "deleteTask",
  deleteCompleted: () => "deleteCompleted",
  editStatus: () => "editStatus",
  editTask: () => "editTask",
  filter: () => "filter",
  toggleStatus: () => "toggleStatus",
};

Main.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object),
  addTask: PropTypes.func,
  deleteTask: PropTypes.func,
  deleteCompleted: PropTypes.func,
  editStatus: PropTypes.func,
  editTask: PropTypes.func,
  filter: PropTypes.func,
  toggleStatus: PropTypes.func,
};

export default Main;
