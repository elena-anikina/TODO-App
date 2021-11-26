import React, { useState } from "react";
import PropTypes from "prop-types";

const TasksFilter = ({ filter: filterFunc }) => {
  const [filterState, setFilterState] = useState({
    all: "selected",
    active: "",
    completed: "",
  });

  const func = (event) => {
    const filter = event.target.textContent.toLowerCase();
    if (filter === "all")
      setFilterState({ all: "selected", active: "", completed: "" });
    if (filter === "active")
      setFilterState({ all: "", active: "selected", completed: "" });
    if (filter === "completed")
      setFilterState({ all: "", active: "", completed: "selected" });
    filterFunc(filter);
  };

  const { all, active, completed } = filterState;
  return (
    <ul className="filters">
      {" "}
      <li>
        <button className={all} type="button" onClick={func} onKeyDown={func}>
          All
        </button>
      </li>
      <li>
        <button
          className={active}
          type="button"
          onClick={func}
          onKeyDown={func}
        >
          Active
        </button>
      </li>
      <li>
        <button
          className={completed}
          type="button"
          onClick={func}
          onKeyDown={func}
        >
          Completed
        </button>
      </li>
    </ul>
  );
};

export default TasksFilter;

TasksFilter.defaultProps = {
  filter: () => "filter",
};

TasksFilter.propTypes = {
  filter: PropTypes.func,
};
