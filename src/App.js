import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import ProgressBar from "./components/ProgressBar/ProgressBar";
import FoodList from './components/FoodList/FoodList';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      
    };
  }

  render() {
    return (
      <div className="App">
        <Navbar />
        <div className="container">
        <ProgressBar />
        <FoodList />
        </div>
      </div>
    );
  }
}

export default App;
