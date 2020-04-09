import React, { Component } from 'react';

export class TechList extends Component {
  state = { teches: ['Node.js', 'ReactJs', 'React Naive'] };
  render() {
    console.log(this.state);

    return (
      <ul>
        <li>Node.js</li>
        <li>ReactJs</li>
        <li>React Native</li>
      </ul>
    );
  }
}

export default TechList;
