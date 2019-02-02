import React, { Component } from 'react';

class Play extends Component {
  render() {
    const { text } = this.props;
    return (
      <div>
        <h2>Your Matches!</h2>
        <p>{text}</p>
      </div>
    );
  }
}

export default Play;
