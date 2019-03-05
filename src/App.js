import React, { Component } from "react";
import HabitList from "./components/HabitList.js";
import Forms from "./components/Forms.js";
import "./main.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentView: "habits",
      completedHabits: [],
      wantingHabits: []
    };
  }

  fetchHabits = () => {
    fetch("http://localhost:3000/habits")
      .then(response => response.json())
      .then(jsonData => {
        this.sortHabits(jsonData);
      })
      .catch(error => console.log(error));
  };

  //Creates a new task
  handleCreateHabit = habit => {
    fetch("http://localhost:3000/habits", {
      body: JSON.stringify(habit),
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json"
      }
    })
      .then(createdHabit => {
        return createdHabit.json();
      })
      .then(jsonData => {
        this.updateArray(jsonData, "wantingHabits");
      })
      .catch(error => console.log(error));
  };

  //Update the state of array
  updateArray = (habit, array) => {
    this.setState(prevState => {
      prevState[array].push(habit);
      console.log(prevState);
      return {
        [array]: prevState[array]
      };
    });
  };

  sortHabits = habits => {
    let completedHabits = [];
    let wantingHabits = [];
    habits.forEach(habit => {
      if (habit.completed) {
        completedHabits.push(habit);
      } else {
        wantingHabits.push(habit);
      }
    });
    this.setHabits(completedHabits, wantingHabits);
  };

  setHabits = (completed, wanting) => {
    this.setState({
      completedHabits: completed,
      wantingHabits: wanting
    });
  };

  componentDidMount() {
    this.fetchHabits();
  }

  render() {
    return (
      <React.Fragment>
        <div className="main-container">
          <h1>Hello Caroline!</h1>
          <Forms handleCreateHabit={this.handleCreateHabit} />
          <h3>Morning Habits</h3>
          <HabitList />
          <h3>Afternoon Habits</h3>
          <HabitList wantingHabits={this.props.wantingHabits} />
          <h3>Evening Habits</h3>
          <HabitList />
        </div>
      </React.Fragment>
    );
  }
}

export default App;
