import React, { Component } from "react";
import Habit from "./Habit";

class HabitList extends Component {
  render() {
    return (
      <div className="habit-list">
        <div className="wanting-habits-list">
          <h3>Habits for Today</h3>
          {this.props.wantingHabits.map((habit, index) => {
            return (
              <Habit
                key={index}
                habit={habit}
                arrayIndex={index}
                handleCheck={this.props.handleCheck}
                handleDelete={this.props.handleDelete}
                currentArray="wantingHabits"
              />
            );
          })}
        </div>
        <div className="completed-habits-list">
          <h3>Completed for Today</h3>
          {this.props.completedHabits.map((habit, index) => {
            return (
              <Habit
                key={index}
                habit={habit}
                arrayIndex={index}
                handleCheck={this.props.handleCheck}
                handleDelete={this.props.handleDelete}
                currentArray="completedHabits"
              />
            );
          })}
        </div>
      </div>
    );
  }
}

export default HabitList;
