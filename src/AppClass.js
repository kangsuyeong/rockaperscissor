import React, { Component } from "react";
import BoxClass from "./component/BoxClass";
import "./App.css";

const choice = {
  rock: {
    name: "Rock",
    img: "images/rock2.jpg",
  },
  scissors: {
    name: "Scissors",
    img: "images/scissors2.jpg",
  },
  paper: {
    name: "Paper",
    img: "images/paper2.jpg",
  },
  default: {
    name: "default",
    img: "images/game.jpg",
  },
};

export default class AppClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userSelect: choice.default,
      computerSelect: choice.default,
      result: "",
    };
  }

  // const play = (userChoice) => {
  //     setUserSelect(choice[userChoice]);
  //     let computerChoice = randomChoice(); //컴퓨터가 선택한 값
  //     setComputerSelect(computerChoice);
  //     setResult(judgement(choice[userChoice], computerChoice))
  //   };

  play = (userChoice) => {
    let computerChoice = this.randomChoice();
    this.setState({
      userSelect: choice[userChoice],
      computerSelect: computerChoice,
      result: this.judgement(choice[userChoice], computerChoice),
    });
  };

  // const judgement = (user, computer) => {
  //     console.log("user", user, "computer", computer);

  //     // user == computer tie
  //     // user == rock, computer ==scissors user 이긴거지
  //     // user == "rock" computer ==paper  user 패
  //     // user == scissors computer == paper user 승
  //     // user == scissors computer == rack user 패
  //     // user == paper computer == rock user승
  //     // user == paper computer == scissor user패

  //     if (user.name === computer.name) {
  //       return "tie";
  //     } else if (user.name === "Rock")
  //       return computer.name === "Scissors" ? "win" : "lose";
  //     else if (user.name === "Scissors")
  //       return computer.name === "Paper" ? "win" : "lose";
  //     else if (user.name === "Paper")
  //       return computer.name === "Rock" ? "win" : "lose";
  //   };

  judgement = (user, computer) => {
    if (user.name === computer.name) {
      return "tie";
    } else if (user.name === "Rock")
      return computer.name === "Scissors" ? "win" : "lose";
    else if (user.name === "Scissors")
      return computer.name === "Paper" ? "win" : "lose";
    else if (user.name === "Paper")
      return computer.name === "Rock" ? "win" : "lose";
  };

  //   const randomChoice = () => {
  //     let itemArray = Object.keys(choice); //객체에 키값만 뽑아서 어레이로 만들어주는 함수
  //     console.log("item array", itemArray);
  //     let randomItem = Math.floor(Math.random() * itemArray.length);
  //     let final = itemArray[randomItem];
  //     return choice[final];
  //   };

  randomChoice = () => {
    let itemArray = Object.keys(choice); //객체에 키값만 뽑아서 어레이로 만들어주는 함수
    let randomItem = Math.floor(Math.random() * itemArray.length);
    let final = itemArray[randomItem];
    return choice[final];
  };

  render() {
    return (
      <div>
        <div className="main">
          <BoxClass
            title="You"
            item={this.state.userSelect}
            result={this.state.result}
          />
          <BoxClass
            title="Computer"
            item={this.state.computerSelect}
            result={this.state.result}
          />
        </div>
        <div className="main">
          <button className="button-size" onClick={() => this.play("scissors")}>
            <img className="button-img" src="images/scissors2.jpg"></img>
          </button>
          <button className="button-size" onClick={() => this.play("rock")}>
            <img className="button-img" src="images/rock2.jpg"></img>
          </button>
          <button className="button-size" onClick={() => this.play("paper")}>
            <img className="button-img" src="images/paper2.jpg"></img>
          </button>
        </div>
      </div>
    );
  }
}
