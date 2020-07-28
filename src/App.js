import React, {Component} from "react"

class Counter  extends Component {
  constructor(){
    super();
    this.state = {
      count: 0
    }
  }
  increment = ()=>{
    if(this.state.count <10){
    this.setState({
      count: this.state.count+1
    })
  }
  }
  decrement = ()=>{
    if(this.state.count >0){
    this.setState({
        count: this.state.count-1      
    })
  }
  }
  reset = ()=>{
    this.setState({
      count: this.state.count=0
    })
  }
  toggleDouble = ()=>{

  }



  render(){
    return(
      <div>
        <div className="navbar">Counter.js</div>
        <div className="counter">
          <h1>{this.state.count}</h1>
          <button type="button" onClick={this.increment}>Increment</button>
          <button type="button" onClick={this.decrement}>Decrement</button>
          <button type="button" onClick={this.reset}>Reset Count</button>
          <button type="button" onClick={this.toggleDouble}>Double</button>
        </div>
      </div>
    )
  }
}

export default Counter;