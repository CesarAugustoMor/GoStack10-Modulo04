import React, { Component } from 'react';

export class TechList extends Component {
  state = { newTech: '', teches: ['Node.js', 'ReactJs', 'React Naive'] };

  handleInputChange = (e) => {
    this.setState({ newTech: e.target.value });
  };
  handleSubmit = (e) => {
    e.preventDefault();

    this.setState({
      teches: [...this.state.teches, this.state.newTech],
      newTech: '',
    });
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <ul>
          {this.state.teches.map((tech) => (
            <li key={tech}>{tech}</li>
          ))}
        </ul>
        <input
          type="text"
          onChange={this.handleInputChange}
          value={this.state.newTech}
        />
        <button type="submit">Enviar</button>
      </form>
    );
  }
}

export default TechList;
