import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
class App extends Component {
  state = {
    persons: [
      { name: 'Max', age: 28},
      { name: 'Manu', age: 28},
      { name: 'Stephanie', age: 26},
    ],
    other: 'sss'
  }

  switchNameHandler = (newName) => {
    this.setState({
      persons: [
        { name: newName, age: 28},
        { name: 'Manu', age: 28},
        { name: 'Stephanie1', age: 26},
      ]
    })
  }

  nameChangeHandler = (event) =>{
    this.setState({
      persons: [
        { name: 'Max', age: 28},
        { name: event.target.value, age: 28},
        { name: 'Stephanie1', age: 26},
      ]
    })
  }

  render() {
    const style = {
      backgroudColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    }
    return (
      <div className="App">
        <h1>Hi I am a react app. {this.state.other}</h1>
        <button
        style={style} 
        onClick={() => this.switchNameHandler('Maximilian!!')}>Swicth Name</button>
        <Person 
          name={this.state.persons[0].name} 
          age={this.state.persons[0].age}/>
        <Person 
        name={this.state.persons[1].name} 
        age={this.state.persons[1].age}
        click={this.switchNameHandler.bind(this, 'Max!')}
        changed={this.nameChangeHandler}>My Hobbies: Racing</Person>
        <Person 
        name={this.state.persons[2].name} 
        age={this.state.persons[2].age}></Person>
      </div>
    );
  }
}

export default App;
