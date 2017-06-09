import React, { Component } from 'react';
import {Header} from './Header';
import {CommentSection} from './CommentSection';
import {SimpleClock} from './SimpleClock';
import './App.css';

class App extends Component {
  render() {
    const comments = [{ from: "Mitch", text: "This is some comment text" }, { from: "Elyse", text: "I'm cute"}];
    return (
      <div className="App">
        <Header title="The Midnight" />
        <SimpleClock />
        <div className="App-content">
          <CommentSection comments={comments} />
        </div>
      </div>
    );
  }
}

export default App;
