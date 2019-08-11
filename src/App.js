import React, { Component } from 'react';
import Projects from './Projects';

class App extends Component {
  constructor() {
    super();
    this.state = { displayBio: false };

    this.toggleDisplayBio = this.toggleDisplayBio.bind(this);
  }

  toggleDisplayBio() {
    this.setState({ displayBio: !this.state.displayBio });
  }

  render() {

    return (
      <div>
        <h1>
          Hello!
        </h1>
        <p>My name is Brant. I'm a developer.</p>
        <p>I'm always looking froward to the next challenge!</p>
        { this.state.displayBio ? (
          <div>
            <p>I live in Devner, and code often.</p>
            <p>My favorite language is JavaScript, and I think Recat.js is awesome.</p>
            <p>I love music and powerlifting.</p>
            <button onClick={ this.toggleDisplayBio }>Read Less</button>
          </div>
          ) : (
          <div>
            <button onClick={ this.toggleDisplayBio }>Read More</button>
          </div>
          ) 
        }
        <hr />
        <Projects />
      </div>
    )
  }
}

export default App;