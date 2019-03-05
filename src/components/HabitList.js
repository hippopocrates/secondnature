import React, { Component } from "react";
import Habit from "./Habit.js";

class HabitList extends Component {
  render() {
    console.log(this.props);
    return (
      <div className="habit-list">
<<<<<<< HEAD
        <h1>Habit List</h1>
        {this.props.wantingHabits ? (
          <div>
            {this.props.wantingHabits.map((habit, index) => {
=======
        <div>
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
            )
          })}
          </div>
          <div>
            <h3>Completed for Today</h3>
            {this.props.completedHabits.map((habit, index) => {
>>>>>>> f19507a7d666335a060c2b9ec5c275fa06571dd6
              return (
                <Habit
                  key={index}
                  habit={habit}
                  arrayIndex={index}
                  handleCheck={this.props.handleCheck}
<<<<<<< HEAD
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
=======
                  handleDelete={this.props.handleDelete}
                  currentArray="completedHabits"
                />
              )
            })}
          </div>
        </div>
    )
  }
}


export default HabitList
>>>>>>> f19507a7d666335a060c2b9ec5c275fa06571dd6
