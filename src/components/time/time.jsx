import React from 'react';
import { formatDistanceToNow } from 'date-fns';

import './time.css';

export default class Time extends React.Component {
  created = new Date();

  state = {
    created: formatDistanceToNow(this.created, { includeSeconds: true }),
  };

  componentDidMount() {
    this.timerId = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerId);
  }

  tick() {
    this.setState({
      created: formatDistanceToNow(this.created, { includeSeconds: true }),
    });
  }

  render() {
    const { created } = this.state;
    return <span className="created">created {created} ago</span>;
  }
}
