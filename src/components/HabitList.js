import React, { Component } from "react";
import Habit from "./Habit.js";

class HabitList extends Component {
  render() {
    console.log(this.props);
    return (
      <div className="habit-list">
        <h1>Habit List</h1>
        {this.props.wantingHabits ? (
          <div>
            {this.props.wantingHabits.map((habit, index) => {
              return (
                <Habit
                  key={index}
                  habit={habit}
                  arrayIndex={index}
                  handleCheck={this.props.handleCheck}
                />
              );
            })}
          </div>
        ) : (
          ""
        )}
      </div>
    );
  }
}

export default HabitList;
