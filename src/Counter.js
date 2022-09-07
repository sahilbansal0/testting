import React from "react";

class Counter extends React.Component {
//   constructor() {
//     super();

// }
//     increment=()=>{
    // this.setState({value:this.state.value+1})
    //     }
    state = {
      value: 0,
    };
increment=()=>{
this.setState(prev=>{
    return  ({value:prev.value+1})
})
}
    decrement=()=>{
        this.setState({value:this.state.value-1})
    }
  
  render() {
    return (
      <div>
        <h1>counter using class component</h1>
        <h1>{this.state.value}</h1>
        <button onClick={this.increment}>+</button>
        <button onClick={this.decrement}>-</button>
      </div>
    );
  }
}

export default Counter;
