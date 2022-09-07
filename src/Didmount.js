import React from 'react';
class Didmount extends React.Component{

    state={
        color:"red"
    }
    
    componentDidMount(){
        // setTimeout(() => {
            
        // }, 5000);
        this.setState({color:"black"})
    }
    getSnapshotBeforeUpdate(props,state){
console.log(state);
return 1;
    }
    // shouldComponentUpdate(){
    //     return false;
    // }
    componentDidUpdate(){
    // this.setState({color:"updated"})
    alert("update ho gya bhai dekh")
    console.log("comonent did update")
    }
    componentWillUnmount(){
        
    }
    
    render(){
        return <div><h1>
            {this.state.color}
        </h1>
        {/* <h2>
            {state}
        </h2> */}
        </div>
    }

}

export default Didmount;
