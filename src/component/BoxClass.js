import React, { Component } from "react";

export default class BoxClass extends Component {
  render() {
    let result
  if(this.props.title==="Computer" && this.props.result!=="tie" && this.props.result!==""){
    result = this.props.result==="win" ? "lose" : "win"
  }
  else{
    result=this.props.result
  }
    return (
      <div>
        <div className={`box ${result}`}>
          <h1>{this.props.title}</h1>
          <img className="item-img" src={this.props.item && this.props.item.img}></img>
          <h2 className={`${result}Color`}>{result}</h2>
        </div>
      </div>
    );
  }
}
