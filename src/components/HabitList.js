import React, { Component } from 'react'
import Habit from './Habit'

class HabitList extends Component {
  render() {
    return (
      <div className="habit-list">
        {this.props.wantingHabits ? (
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
        ) : (
          ""
        )}
      </div>
    );
  }
}


export default HabitList
