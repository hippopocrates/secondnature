import React, { Component } from 'react'

class DateHeader extends Component {
  render() {
    return (
      <h2>---{this.props.month}/{this.props.day}/{this.props.year}---</h2>

    )
  }
}

export default DateHeader
