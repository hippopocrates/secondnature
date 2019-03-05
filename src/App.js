import React, { Component } from "react";
import HabitList from "./components/HabitList.js";
import Forms from "./components/Forms.js";
import DateHeader from "./components/DateHeader.js";
// import Dashboard from "./components/Dashboard.js";
import "./main.css";
import Title from './components/Title.js'
// import ls from "local-storage";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentView: "",
      completedHabits: [],
      wantingHabits: [],
      currentMonth: "",
      currentDay: "",
      currentYear: ""
    };
  }
  //-------------------------------//
  //  HANDLE VIEW OF HABITS LISTS  //
  //-------------------------------//
  handleView = view => {
    this.setState({ currentView: view });
  };

  //-------------------------//
  //  RETRIEVE CURRENT DATE  //
  //-------------------------//
  getDate = () => {
    let currentDay = new Date().toJSON().slice(8, 10);
    let currentMonth = new Date().toJSON().slice(5, 7);
    let currentYear = new Date().toJSON().slice(0, 4);
    let fullDate = currentMonth + "/" + currentDay + "/" + currentYear;
    this.setState({
      currentView: fullDate,
      currentDay: currentDay,
      currentMonth: currentMonth,
      currentYear: currentYear
    });
  };

  //---------------------//
  //  CHANGE HABIT DATE  //
  //---------------------//
  previousDay = () => {
    let prevDay =
      this.state.currentDay - 1 >= 1 ? this.state.currentDay - 1 : 30;
    let fullDate =
      this.state.currentMonth + "/" + prevDay + "/" + this.state.currentYear;
    this.setState({
      currentDay: prevDay,
      currentView: fullDate
    });
    this.setValue();
  };
  nextDay = () => {
    let nextDay =
      this.state.currentDay + 1 <= 30 ? this.state.currentDay + 1 : 1;
    let fullDate =
      this.state.currentMonth + "/" + nextDay + "/" + this.state.currentYear;
    this.setState({
      currentDay: nextDay,
      currentView: fullDate
    });
    this.setValue();
  };

  //-------------------------------//
  //  RETRIEVE FROM LOCAL STORAGE  //
  //-------------------------------//
  setValue = () => {
    let todaysWantingHabits = localStorage.getItem('this.state.currentView')
      ? ''
      : this.state.wantingHabits
    let todaysCompletedHabits = localStorage.getItem('this.state.currentView')
      ? ''
      : this.state.completedHabits
    localStorage.setItem(
      this.state.currentView,
      JSON.stringify(todaysWantingHabits), JSON.stringify(todaysCompletedHabits)

    );
  };
  //Find the current view and set the data to that current view (in this case, it would be the current date)
  retrieveDaysHabits = () => {
    let retrievedHabits = localStorage.getItem(this.state.currentView);
    this.sortHabits(JSON.parse(retrievedHabits));
    console.log(JSON.parse(retrievedHabits));
  };
  //Retrieve storage if you change the date you are displaying on the page

  //-------------------------//
  //  FETCH HABITS FROM API  //
  //-------------------------//
  fetchHabits = () => {
    fetch("http://localhost:3000/habits")
      .then(response => response.json())
      .then(jsonData => {
        this.sortHabits(jsonData);
      })
      .catch(error => console.log(error));
  };

  //----------------------//
  //  CREATE A NEW HABIT  //
  //----------------------//
  handleCreateHabit = habit => {
    fetch("http://localhost:3000/habits", {
      body: JSON.stringify(habit),
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json"
      }
    })
      .then(createdHabit => {
        return createdHabit.json();
      })
      .then(jsonData => {
        this.updateArray(jsonData, "wantingHabits");
      })
      .catch(error => console.log(error));
  };

  //-------------------//
  //  DELETES A HABIT  //
  //-------------------//
  //Need to figure out how to delete from either array regardless of where the data is located
  handleDelete = (habitId, arrayIndex, currentArray) => {
    fetch("http://localhost:3000/habits/" + habitId, {
      method: "DELETE"
    })
      .then(data => {
        this.removeFromArray(currentArray, arrayIndex);
      })
      .catch(error => console.log(error));
  };

  //---------------------------------------------//
  //  CHANGES HABIT FROM COMPLETE TO INCOMPLETE  //
  //---------------------------------------------//
  handleCheck = (habit, arrayIndex, currentArray) => {
    habit.completed = !habit.completed;
    console.log(habit);
    fetch("http://localhost:3000/habits/" + habit.id, {
      body: JSON.stringify(habit),
      method: "PUT",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json"
      }
    })
      .then(updatedHabit => {
        return updatedHabit.json();
      })
      .then(jsonData => {
        this.removeFromArray(currentArray, arrayIndex);
        if (currentArray === "wantingHabits") {
          this.updateArray(habit, "completedHabits");
        } else {
          this.updateArray(habit, "wantingHabits");
        }
      });
  };

  //---------------------------//
  //  REMOVE HABIT FROM ARRAY  //
  //---------------------------//
  removeFromArray = (array, arrayIndex) => {
    this.setState(prevState => {
      prevState[array].splice(arrayIndex, 1);
      return {
        [array]: prevState[array]
      };
    });
  };

  //--------------------------//
  //  UPDATE ARRAY WITH HABIT //
  //--------------------------//
  updateArray = (habit, array) => {
    this.setState(prevState => {
      prevState[array].push(habit);
      console.log(prevState);
      return {
        [array]: prevState[array]
      };
    });
  };

  //----------------------------------//
  //  SORT HABITS: COMPLETED/WANTING  //
  //----------------------------------//
  sortHabits = habits => {
    let completedHabits = [];
    let wantingHabits = [];
    habits.forEach(habit => {
      if (habit.completed) {
        completedHabits.push(habit);
      } else {
        wantingHabits.push(habit);
      }
    });
    this.setHabits(completedHabits, wantingHabits);
  };

  //--------------//
  //  SET HABITS  //
  //--------------//
  setHabits = (completed, wanting) => {
    this.setState({
      completedHabits: completed,
      wantingHabits: wanting
    });
  };

  //-------------------//
  //  MOUNT COMPONENT  //
  //-------------------//
  componentDidMount() {
    this.fetchHabits();
    this.getDate();
  }

  render() {
    return (
      <React.Fragment>
        <div className="main-container">
          <Title />
          <Forms handleCreateHabit={this.handleCreateHabit} />
          <DateHeader
            day={this.state.currentDay}
            month={this.state.currentMonth}
            year={this.state.currentYear}
            previousDay={this.previousDay}
            nextDay={this.nextDay}
          />
          <HabitList
            wantingHabits={this.state.wantingHabits}
            completedHabits={this.state.completedHabits}
            handleCheck={this.handleCheck}
            handleDelete={this.handleDelete}
            currentView={this.state.currentView}
          />
        </div>
        <hr/>
      </React.Fragment>
    );
  }
}

export default App;
