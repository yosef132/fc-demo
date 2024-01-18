import { Component } from "react";

export default class CCStudent extends Component {



  constructor(props) {
    super(props);
    this.state = { n1: 0, n2: 0, res: 0 }
    this.myres=17
  }

  btnADD = () => {
    let result = parseInt(this.state.n1) + parseInt(this.state.n2)
    this.setState({ res: result })
    this.myres=result;
  }
  btnMin = () => {
    let result = parseInt(this.state.n1) - parseInt(this.state.n2)
    this.setState({ res: result })
    this.myres=result;
  }
  btnDiv = () => {
    let result = parseInt(this.state.n1) / parseInt(this.state.n2)
    this.setState({ res: result })
    this.myres=result;
  }
  btnMult = () => {
    let result = parseInt(this.state.n1) * parseInt(this.state.n2)
    this.setState({ res: result })
    this.myres=result;
  }



  render() {
    return (
      <div className="container">
        Num1:
        <input type="text" onChange={(e) => {
          this.setState({ n1: e.target.value })
        }} /> <br />


        <button onClick={this.btnADD}>+</button> 
        <button onClick={this.btnMin}>-</button>
        <button onClick={this.btnDiv}>/</button>
        <button onClick={this.btnMult}>*</button>
        <br />


        Num2:
        <input type="text" onChange={(e) => {
          this.setState({ n2: e.target.value })
        }} /> <br />
      <div className="result">Result: {this.myres}</div>
      </div>
    );
  }
}