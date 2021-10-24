import React from 'react';
import PropTypes from 'prop-types';

export default class EditingTask extends React.Component {
  static defaultProps = {
    id: 12345,
    editTask: () => 'editTask',
  };

  static propTypes = {
    id: PropTypes.number,
    editTask: PropTypes.func,
  };

  state = {
    value: '',
  };

  onLabelChange = (event) => {
    this.setState({ value: event.target.value });
  };

  onSubmit = (event) => {
    const {id, editTask} = this.props;
    const {value} = this.state;

    event.preventDefault();
    editTask(id, value);
    this.setState({ value: '' });
  };

  render() {
    const {value} = this.state;
    return (
      <form onSubmit={this.onSubmit}>
        <input
          type="text"
          className="edit"
          placeholder="Edit your task"
          value={value}
          onChange={this.onLabelChange}
        />
      </form>
    );
  }
}

console.log('hello')
