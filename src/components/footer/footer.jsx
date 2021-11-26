import React from "react";
import PropTypes from "prop-types";
import TasksFilter from "../task-filter/tasks-filter";

const Footer = ({ data, deleteCompleted, filter }) => (
  <footer className="footer">
    <span className="todo-count">
      {[...data].filter((task) => task.status === "active").length} items left
    </span>
    <TasksFilter filter={filter} />
    <button className="clear-completed" type="button" onClick={deleteCompleted}>
      Clear completed
    </button>
  </footer>
);

Footer.defaultProps = {
  data: [{ id: 12345, name: "Example", status: "active", render: true }],
  deleteCompleted: () => "deleteCompleted",
  filter: () => "filter",
};

Footer.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object),
  deleteCompleted: PropTypes.func,
  filter: PropTypes.func,
};

export default Footer;
