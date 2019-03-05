import React, { Component } from "react";
import ReactDOM from "react-dom";
// import Modal from "./Modal";

class Dashboard extends Component {
  state = { show: false };

  showModal = () => {
    this.setState({ show: true });
  };

  hideModal = () => {
    this.setState({ show: false });
  };

  render() {
    return (
      <div className="modal">
        <h1>react modal</h1>
        <Modal show={this.state.show} handleClose={this.hideModal}>
          <p>modal</p>
          <p>data</p>
        </Modal>
        <button onClick={this.showModal}>open</button>
      </div>
    );
  }
}

export default Dashboard;
