import React from 'react';
import PropTypes from 'prop-types';

export default class TasksFilter extends React.Component {
  static defaultProps = {
    filter: () => 'filter'
  };

  static propTypes = {
    filter: PropTypes.func,
  };

  state = { all: 'selected', active: '', completed: '' };

  func = (event) => {
    const filter = event.target.textContent.toLowerCase();
    if (filter === 'all') this.setState({ all: 'selected', active: '', completed: '' });
    if (filter === 'active') this.setState({ all: '', active: 'selected', completed: '' });
    if (filter === 'completed') this.setState({ all: '', active: '', completed: 'selected' });
    this.props.filter(filter);
  };

  render() {
      const {all, active, completed} = this.state;
    return (
      <ul className="filters" onClick={this.func} onKeyDown={this.func}>
        <li>
          <button className={all} type="button">All</button>
        </li>
        <li>
          <button className={active} type="button">Active</button>
        </li>
        <li>
          <button className={completed} type="button">Completed</button>
        </li>
      </ul>
    );
  }
}
