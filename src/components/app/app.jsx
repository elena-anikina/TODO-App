/* eslint-disable */
import React, { useState } from "react";

import Header from "../header/header";
import Main from "../main/main";

const App = () => {
  let maxId = 5;

  const [data, setData] = useState([
    {
      id: 1,
      name: "Drink Coffee",
      status: "active",
      editing: false,
      render: true,
      timer: [12, 0],
    },
    {
      id: 2,
      name: "Learn React",
      status: "active",
      editing: false,
      render: true,
      timer: [47, 16],
    },
    {
      id: 3,
      name: "Coding",
      status: "active",
      editing: false,
      render: true,
      timer: [56, 35],
    },
    {
      id: 4,
      name: "Creat app",
      status: "active",
      editing: false,
      render: true,
      timer: [36, 34],
    },
    {
      id: 5,
      name: "Every day",
      status: "active",
      editing: false,
      render: true,
      timer: [15, 5],
    },
  ]);

  const addTask = (text, min, sec) => {
    const minVar = Number(min) || 0;
    let secVar = Number(sec) || 0;
    if (secVar > 59) {
      secVar = 0;
    }
    const newTask = {
      id: (maxId += 1),
      name: text,
      status: "active",
      editing: false,
      render: true,
      timer: [minVar, secVar],
    };
    setData((data) => [...data, newTask]);
  };

  const deleteTask = (id) => {
    const newData = data.filter((task) => task.id !== id);
    setData(newData);
  };

  const deleteCompleted = () => {
    const newData = data.filter((task) => task.status !== "completed");
    setData(() => newData);
  };

  const editStatus = (id) => {
    const idx = data.findIndex((el) => el.id === id);
    const newItem = { ...data[idx], editing: true };
    setData((data) => [...data.slice(0, idx), newItem, ...data.slice(idx + 1)]);
  };

  const editTask = (id, text) => {
    const idx = data.findIndex((el) => el.id === id);
    const newTask = { ...data[idx], name: text, editing: false };
    setData((data) => [...data.slice(0, idx), newTask, ...data.slice(idx + 1)]);
  };

  const filter = (filter) => {
    if (filter === "all") {
      const newData = data.map((task) => ({ ...task, render: true }));
      setData(() => newData);
    }
    if (filter === "active") {
      const newData = data.map((task) => ({
        ...task,
        render: task.status === "active",
      }));
      setData(() => newData);
    }
    if (filter === "completed") {
      const newData = data.map((task) => ({
        ...task,
        render: task.status === "completed",
      }));
      setData(() => newData);
    }
  };

  const toggleStatus = (id) => {
    const idx = data.findIndex((el) => el.id === id);
    const newItem = {
      ...data[idx],
      status: data[idx].status === "active" ? "completed" : "active",
    };
    setData((data) => [...data.slice(0, idx), newItem, ...data.slice(idx + 1)]);
  };

  return (
    <section className="todoapp">
      <Header />
      <Main
        data={data}
        addTask={addTask}
        deleteTask={deleteTask}
        deleteCompleted={deleteCompleted}
        editStatus={editStatus}
        editTask={editTask}
        filter={filter}
        toggleStatus={toggleStatus}
      />
    </section>
  );
};

export default App;
