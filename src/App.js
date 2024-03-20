import { useState } from "react";
import "./App.css";
import Box from "./component/Box";

// 1. 박스 2개 (타이틀,사진,결과)
// 2. 가위 바위 보 버튼이 있다.
// 3. 버튼을 클릭하면 클릭한 값이 박에 보임
// 4. 컴퓨터는 랜덤하게 아이템 선택이 된다.
// 5. 3 4의 결과를 가지고 누가 이겼는지 승패를 따진다.
// 6. 승패결과에 따라 테두리 색이 바뀐다 (이기면-초록, 지면-빨강, 비기면 -검은색)

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
  }
};
function App() {
  //state
  const [userSelect, setUserSelect] = useState(choice.default);
  const [computerSelect, setComputerSelect] = useState(choice.default);
  const [result, setResult] = useState("");

  const play = (userChoice) => {
    setUserSelect(choice[userChoice]);
    let computerChoice = randomChoice(); //컴퓨터가 선택한 값
    setComputerSelect(computerChoice);
    setResult(judgement(choice[userChoice], computerChoice))
  };

  const judgement = (user, computer) => {
    console.log("user", user, "computer", computer);

    // user == computer tie
    // user == rock, computer ==scissors user 이긴거지
    // user == "rock" computer ==paper  user 패
    // user == scissors computer == paper user 승
    // user == scissors computer == rack user 패
    // user == paper computer == rock user승
    // user == paper computer == scissor user패

    if (user.name === computer.name) {
      return "tie";
    } else if (user.name === "Rock")
      return computer.name === "Scissors" ? "win" : "lose";
    else if (user.name === "Scissors")
      return computer.name === "Paper" ? "win" : "lose";
    else if (user.name === "Paper")
      return computer.name === "Rock" ? "win" : "lose";
  };

  const randomChoice = () => {
    let itemArray = Object.keys(choice); //객체에 키값만 뽑아서 어레이로 만들어주는 함수
    console.log("item array", itemArray);
    let randomItem = Math.floor(Math.random() * itemArray.length);
    let final = itemArray[randomItem];
    return choice[final];
  };

  return (
    <div>
      <div className="main">
        <Box title="You" item={userSelect} result={result} />
        <Box title="Computer" item={computerSelect} result={result} />
      </div>
      <div className="main">
        <button className="button-size" onClick={() => play("scissors")}><img className="button-img" src="images/scissors2.jpg"></img></button>
        <button className="button-size" onClick={() => play("rock")}><img className="button-img" src="images/rock2.jpg"></img></button>
        <button className="button-size" onClick={() => play("paper")}><img className="button-img" src="images/paper2.jpg"></img></button>
      </div>
    </div>
  );
}

export default App;
