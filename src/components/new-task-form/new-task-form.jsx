import React from 'react';
import './new-task-form.css';
import PropTypes from 'prop-types';

export default class NewTaskForm extends React.Component {
  static defaultProps = {
    addTask: () => 'addTask',
  };

  static propTypes = {
    addTask: PropTypes.func,
  };

  state = {
    value: '',
    minValue: '',
    secValue: '',
  };

  onLabelChange = (event) => {
    this.setState({ value: event.target.value });
  };

  onMinChange = (event) => {
    this.setState({ minValue: event.target.value });
  };

  onSecChange = (event) => {
    this.setState({ secValue: event.target.value });
  };

  onSubmit = (event) => {
    const { addTask } = this.props;
    const { value, minValue, secValue } = this.state;
    event.preventDefault();
    addTask(value, minValue, secValue);
    this.setState({ value: '', minValue: '', secValue: '' });
  };

  onSubmitMin = (event) => {
    if (event.keyCode === 13) {
      this.onSubmit(event);
    }
  };

  onSubmitSec = (event) => {
    if (event.keyCode === 13) {
      this.onSubmit(event);
    }
  };

  render() {
    const { value, minValue, secValue } = this.state;
    return (
      <div className="new-task-form">
        <form onSubmit={this.onSubmit}>
          <input
            className="new-todo"
            placeholder="What needs to be done?"
            value={value}
            onChange={this.onLabelChange}
            autoFocus /* eslint-disable-line */
          />
        </form>
        <input
          className="new-todo-form__timer"
          placeholder="Min"
          value={minValue}
          onChange={this.onMinChange}
          onKeyUp={this.onSubmitMin}
        />
        <input
          className="new-todo-form__timer"
          placeholder="Sec"
          value={secValue}
          onChange={this.onSecChange}
          onKeyUp={this.onSubmitSec}
        />
      </div>
    );
  }
}
