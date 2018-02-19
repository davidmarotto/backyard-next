import React from 'react';

export default class Deal extends React.Component {
  
  render() {
    return (
      <h2>{this.props.deal.name}</h2>
    )
  }
}