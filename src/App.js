import React, { Component } from 'react';
import HabitList from './components/HabitList.js'
import Forms from './components/Forms.js'
import './main.css'

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      currentView: 'habits',
      completedHabits: [],
      habits: []
    }
  }

  fetchHabits = () => {
    fetch('http://localhost:3000/habits')
    .then(response => response.json())
    .then(jsonData => {
      console.log(jsonData)
    })
    .catch(error => console.log(error))
  }

  componentDidMount () {
    this.fetchHabits()
  }

  render() {
    return (
      <React.Fragment>
        <div className="main-container">
          <h1>Hello Caroline!</h1>
          <Forms />
          <h3>Morning Habits</h3>
            <HabitList />
          <h3>Afternoon Habits</h3>
            <HabitList />
          <h3>Evening Habits</h3>
            <HabitList />
        </div>
      </React.Fragment>
    );
  }
}

export default App;
