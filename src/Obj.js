import React from "react";
// console.log("outside class");

class Obj extends React.Component {
  state = {
    name: "sahil",
    job: "web developer",
    age: "21",
    url:[]
  };

  update = () => {
      this.setState({ position: "intern" });
    //   console.log(this.state);
    };
    getusers = async ()=>{
        const response=await fetch("https://api.github.com/users")
        const users=await response.json();
        this.setState({url:users})
        }
    
    
    componentDidMount() {
        this.getusers()
        // console.log("component did mount");
        // fetch("https://api.github.com/users")
        // .then((res) => res.json())
        // .then((c)=>{
        //     this.setState({url:c})
            // console.log(c);
            
        // })
    //   console.log(this.state);
    // console.log(c.avatar_url);
  }
  render() {
    console.log(this.state.url);
    console.log("inside render");
    // for (const iterator of state) {
    //     return <h1> {iterator}</h1>
    // }
    return (
      <div>
        <h1>
          {this.state.name}
          <br />
          {this.state.job}
          <br />
          {this.state.position}
        </h1>
        {
            this.state.url.map((z)=>{
// console.log(z);
               return <img src={z.avatar_url}></img>
            })
        }

        <button onClick={this.update}>update kr</button>
      </div>
    );
  }
}
export default Obj;
