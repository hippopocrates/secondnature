import React, { Component } from "react";
import Modal from "react-modal";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)"
  }
};

class Dashboard extends Component {
  constructor() {
    super();

    this.state = {
      modalIsOpen: false
    };

    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal() {
    this.setState({ modalIsOpen: true });
  }

  afterOpenModal() {
    // references are now sync'd and can be accessed.
    this.subtitle.style.color = "cornflowerblue";
  }

  closeModal() {
    this.setState({ modalIsOpen: false });
  }

  render() {
    return (
      <div>
        <button onClick={this.openModal}>search icon</button>
        <Modal
          id="modal"
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Habit Modal"
        >
          <div className="modal-window">
            <h2
              className="modal-title"
              ref={subtitle => (this.subtitle = subtitle)}
            >
              Habit Icon Selection
            </h2>
            <div className="cards">
              <div className="card">
                <img
                  src="/img/book.png"
                  alt="book"
                  onClick={() => {
                    this.props.icon("/img/book.png");
                  }}
                />
              </div>

              <div className="card">
                <img
                  src="/img/code.png"
                  alt="code"
                  onClick={() => {
                    this.props.icon("/img/code.png");
                  }}
                />
              </div>

              <div className="card">
                <img
                  src="/img/fitness.png"
                  alt="fitness"
                  onClick={() => {
                    this.props.icon("/img/fitness.png");
                  }}
                />
              </div>

              <div className="card">
                <img
                  src="/img/water.png"
                  alt="water"
                  onClick={() => {
                    this.props.icon("/img/water.png");
                  }}
                />
              </div>

              <div className="card">
                <img
                  src="/img/healthy.png"
                  alt="healthy"
                  onClick={() => {
                    this.props.icon("/img/healthy.png");
                  }}
                />
              </div>

              <div className="card">
                <img
                  src="/img/heart.png"
                  alt="heart"
                  onClick={() => {
                    this.props.icon("/img/heart.png");
                  }}
                />
              </div>

              <div className="card">
                <img
                  src="/img/star.png"
                  alt="star"
                  onClick={() => {
                    this.props.icon("/img/star.png");
                  }}
                />
              </div>

              <div className="card">
                <img
                  src="/img/meditate.png"
                  alt="meditate"
                  onClick={() => {
                    this.props.icon("/img/meditate.png");
                  }}
                />
              </div>
            </div>
            <button onClick={this.closeModal}>close</button>
          </div>
        </Modal>
      </div>
    );
  }
}

export default Dashboard;
