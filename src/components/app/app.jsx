import React from 'react';

import Header from '../header/header';
import Main from '../main/main';

export default class App extends React.Component {
  maxId = 5;

  state = {
    data: [
      { id: 1, name: 'Drink Coffee', status: 'active', editing: false, render: true, timer: [12, 0] },
      { id: 2, name: 'Learn React', status: 'active', editing: false, render: true, timer: [47, 16] },
      { id: 3, name: 'Coding', status: 'active', editing: false, render: true, timer: [56, 35] },
      { id: 4, name: 'Creat app', status: 'active', editing: false, render: true, timer: [36, 34] },
      { id: 5, name: 'Every day', status: 'active', editing: false, render: true, timer: [15, 5] },
    ],
  };

  addTask = (text, min, sec) => {
    const minVar = Number(min) || 0;
    let secVar = Number(sec) || 0;
    if (secVar > 59) {
      secVar = 0;
    }
    const newTask = {
      id: (this.maxId += 1),
      name: text,
      status: 'active',
      editing: false,
      render: true,
      timer: [minVar, secVar],
    };
    this.setState(({ data }) => {
      const newData = [...data, newTask];
      return { data: newData };
    });
  };

  deleteTask = (id) => {
    const { data } = this.state;
    const newData = data.filter((task) => task.id !== id);
    this.setState(() => ({ data: newData }));
  };

  deleteCompleted = () => {
    this.setState(({ data }) => {
      const newData = data.filter((task) => task.status !== 'completed');
      return { data: newData };
    });
  };

  editStatus = (id) => {
    this.setState(({ data }) => {
      const idx = data.findIndex((el) => el.id === id);
      const newItem = { ...data[idx], editing: true };
      return { data: [...data.slice(0, idx), newItem, ...data.slice(idx + 1)] };
    });
  };

  editTask = (id, text) => {
    this.setState(({ data }) => {
      const idx = data.findIndex((el) => el.id === id);
      const newTask = { ...data[idx], name: text, editing: false };
      return { data: [...data.slice(0, idx), newTask, ...data.slice(idx + 1)] };
    });
  };

  filter = (filter) => {
    if (filter === 'all') {
      this.setState(({ data }) => {
        const newData = data.map((task) => ({ ...task, render: true }));
        return { data: newData };
      });
    }
    if (filter === 'active') {
      this.setState(({ data }) => {
        const newData = data.map((task) => ({ ...task, render: task.status === 'active' }));
        return { data: newData };
      });
    }
    if (filter === 'completed') {
      this.setState(({ data }) => {
        const newData = data.map((task) => ({ ...task, render: task.status === 'completed' }));
        return { data: newData };
      });
    }
  };

  toggleStatus = (id) => {
    this.setState(({ data }) => {
      const idx = data.findIndex((el) => el.id === id);
      const newItem = { ...data[idx], status: data[idx].status === 'active' ? 'completed' : 'active' };
      return { data: [...data.slice(0, idx), newItem, ...data.slice(idx + 1)] };
    });
  };

  render() {
    const { data } = this.state;
    return (
      <section className="todoapp">
        <Header />
        <Main
          data={data}
          addTask={this.addTask}
          deleteTask={this.deleteTask}
          deleteCompleted={this.deleteCompleted}
          editStatus={this.editStatus}
          editTask={this.editTask}
          filter={this.filter}
          toggleStatus={this.toggleStatus}
        />
      </section>
    );
  }
}
