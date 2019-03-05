import React, { Component } from "react";

class Habit extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="Habit">
          <div className="habit-item slide-in-blurred-left">{this.props.habit.habit_item}
            <div className="habit-item-buttons">
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
          </div>
        </div>
      </React.Fragment>
    )
  }
}

export default Habit;
