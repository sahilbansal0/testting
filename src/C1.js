import React from 'react';

class Car extends React.Component{
    constructor(){
        super()
    }
    render(){
        
        let z="class"
        return <div><h2>inside {z}
        </h2><Student name={"Let's the Magic begin"}/></div>
    }
}


class Student extends React.Component{
    render(){
        return <h2>inside student class <br/>{this.props.name}</h2>
    }
}
export default Car;
