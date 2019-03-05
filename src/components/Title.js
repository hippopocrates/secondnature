import React, { Component } from 'react'

class Title extends Component {
  render() {
    return (
      <React.Fragment>
        <h1 className="title">Second Nature</h1>
        <h5>Tracking your daily habits to help you live your best life!</h5>
        <button
          onClick={() => {
            this.retrieveDaysHabits();
          }}
        >
          Retrieve Test
        </button>
      </React.Fragment>
    )
  }
}

export default Title
