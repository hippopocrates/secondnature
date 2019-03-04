import React, { Component } from 'react';
import HabitList from './components/HabitList.js'
import Forms from './components/Forms.js'
import './main.css'

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="main-container">
          <h1>Hello Caroline!</h1>
          <HabitList />
          <h3>Morning Habits</h3>
          <h3>Afternoon Habits</h3>
          <h3>Evening Habits</h3>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
