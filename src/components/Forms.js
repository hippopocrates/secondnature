import React, { Component } from "react";

class Forms extends Component {
  constructor(props) {
    super(props);
    this.state = {
      habit_item: "",
      icon: "",
      completed: false
    };
  }

  //-----------------//
  //  HANDLE CHANGE  //
  //-----------------//
  // Handles any change within the input field
  handleChange = c => {
    this.setState({ habit_item: c.target.value });
  };
  handleChangeIcon = c => {
    this.setState({ icon: c.target.value });
  };
  //-----------------//
  //  HANDLE SUBMIT  //
  //-----------------//
  // Handles any submit function via the form; runs handleCreateHabit function which creates new habit
  handleSubmit = s => {
    s.preventDefault();
    this.props.handleCreateHabit(this.state);
    this.clearForm();
  };

  //--------------//
  //  CLEAR FORM  //
  //--------------//
  // Clears the input field
  clearForm = () => {
    this.setState({ habit_item: "", icon: "" });
  };

  render() {
    return (
      <div className="forms">
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            placeholder="Create New Habit"
            onChange={this.handleChange}
            value={this.state.habit_item}
          />
          <input
            type="text"
            placeholder="Icon URL"
            onChange={this.handleChangeIcon}
            value={this.state.icon}
          />

          <button type="submit" className="submit-button">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default Forms;
