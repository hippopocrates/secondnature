import React, { Component } from 'react'

class DateHeader extends Component {
  render() {
    return (
      <React.Fragment>
        <h2>
          {/*<button onClick={() => {
            this.props.previousDay()
          }}>Yesterday</button>
          ---{this.props.month}/{this.props.day}/{this.props.year}---<button onClick={() => {
            this.props.nextDay()
          }}>Tomorrow</button>*/}

          {this.props.month}/{this.props.day}/{this.props.year}
          
        </h2>
      </React.Fragment>
    )
  }
}

export default DateHeader
