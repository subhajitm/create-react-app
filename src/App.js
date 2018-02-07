import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: 'max', age: 23 },
      { name: 'manu', age: 12 }
    ],
    otherState: 'some other state'
  }

  switchHandler = (newName) => {
    // console.log('was clicked');
    // this.state.persons[0].name = 'subhajit';
    this.setState({persons:[
      { name: newName, age: 23 },
      { name: 'manu', age: 12 }
    ]})
  }
  render() {
    return (
      <div className="App">
        <h1>React app</h1>
        <button onClick={() => this.switchHandler('subho')}>switch</button>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age} />
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
          click={this.switchHandler.bind(this, 'Raj')} />
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}>Sending Childern</Person>
      </div>
    );
  }
}

export default App;
