import React, { Component } from "react";

class Habit extends Component {
  render() {
    return (
      <div className="Habit">
        <div className="habit-item">{this.props.habit.habit_item}</div>
      </div>
    );
  }
}

export default Habit;
