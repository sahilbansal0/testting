import React from "react";

class State extends React.Component{

    constructor(){
        super()

    this.state={
       value:1
    }
    }
//        toggle=()=>{
//     this.setState({value:(2)})
//    } 
   render() {
    
    return <div>
        <h2>State and setState</h2>
        <button onClick={()=>this.setState({value:this.state.value+1})}>{this.state.value}</button>
    </div>
   }
   
}
export default State;