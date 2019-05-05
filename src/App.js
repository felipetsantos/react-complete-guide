import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
class App extends Component {
  state = {
    persons: [
      { id: 1, name: 'Max', age: 28},
      { id: 2, name: 'Manu', age: 28},
      { id: 3, name: 'Stephanie', age: 26},
    ],
    other: 'sss',
    showPersons: false
  }
  nameChangeHandler = (event) =>{
    this.setState({
      persons: [
        { id: 1, name: 'Max', age: 28},
        { id: 2, name: event.target.value, age: 28},
        { id: 3, name: 'Stephanie1', age: 26},
      ]
    })
  }

  togglePersonsHandler = () => {
    this.setState({showPersons: !this.state.showPersons});
  }

  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  }
  render() {
    const style = {
      backgroudColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    }

    let persons = null;
    if (this.state.showPersons) {
      persons = (
      <div>
        {
        this.state.persons.map((person, index) => {
         return <Person
         click={() => this.deletePersonHandler(index)} 
          name={person.name} 
          age={person.age}
          key={person.id}/> 
        })
        }
      </div>
      ); 
    }

    return (
      <div className="App">
        <h1>Hi I am a react app. {this.state.other}</h1>
        <button
        style={style} 
        onClick={this.togglePersonsHandler}>Toggle Persons</button>
        {persons}
      </div>
    );
  }
}

export default App;
