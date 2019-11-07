import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {

  state = {
    persons : [
      { name : "Karn", age:29 },
      { name : "Sudh", age: 30 },
      { name : "Sabby", age:20 },
    ]
  }

  switchNameHandler = () => {
    console.log("console value");
    this.setState (
    {
      persons : [
        { name : "Karan", age:29 },
        { name : "Sudaah", age: 30 },
        { name : "Sabby", age:20 },
      ]
    })
  }

  render() {
    return (
      <div className="App">
       <h1>HI I am a react app</h1>
       <button onClick={this.switchNameHandler}>Switch name</button>
       <Person name={this.state.persons[0].name} age="24"> I am a developer</Person>
       <Person name="Sudh" age="26"></Person>
       <Person name="Sabby" age="24"></Person>
      </div>
      
    );
    // return React.createElement('h1',{className : 'App'},'Hi I wldkfglkdgkljdfslkgjklsdfgjkljskgjlsjkl;gllskjgkjlkljsdlgkljdsill become a great developer and person');
  }
}

export default App;
