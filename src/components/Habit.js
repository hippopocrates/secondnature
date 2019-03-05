import React, { Component } from "react";

class Habit extends Component {
  render() {
    return (
      <div className="Habit">
        <div className="habit-item">{this.props.habit.habit_item}</div>
        <button
          onClick={() => {
            this.props.handleCheck(
              this.props.habit,
              this.props.arrayIndex,
              this.props.currentArray
            );
          }}
        >
          {this.props.habit.completed === false ? "Complete" : "Incomplete"}
        </button>

        <button
          onClick={() => {
            this.props.handleDelete(
              this.props.habit.id,
              this.props.arrayIndex,
              this.props.currentArray
            );
          }}
        >
          Delete
        </button>
      </div>
    );
  }
}

export default Habit;
