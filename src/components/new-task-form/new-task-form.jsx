import React from 'react';
import PropTypes from 'prop-types';

export default class NewTaskForm extends React.Component {
  static defaultProps = {
    addTask: () => 'addTask',
  };

  static propTypes = {
    addTask: PropTypes.func,
  };

  state = { value: '' };

  onLabelChange = (event) => {
    this.setState({ value: event.target.value });
  };

  onSubmit = (event) => {
    const { addTask } = this.props;
    const { value } = this.state;
    event.preventDefault();
    addTask(value);
    this.setState({ value: '' });
  };

  render() {
    const { value } = this.state;
    return (
      <form onSubmit={this.onSubmit}>
        <input
          className="new-todo"
          placeholder="What needs to be done?"
          value={value}
          onChange={this.onLabelChange}
          autoFocus
        />
      </form>
    );
  }
}
