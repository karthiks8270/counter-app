import './App.css';
import React, { Component } from 'react';
class MyComponent extends Component{
   constructor(props){
    super(props);
    this.state = {
      count:0,
    }
   }
   increment = () =>{
    this.setState({count:this.state.count+1})
   }
   decrement = () =>{
    this.setState({count:this.state.count-1})
   }
   restart =() =>{
    this.setState({count:0})
   }
    render(){
      return(
        <div className='counter-app'>
          <h2>Counter</h2>
           <div>
              <button className='btn btn-success counter-bt' onClick={this.increment}>+</button>
              <button className='btn btn-danger  counter-bt' onClick={this.decrement}>-</button>
              <button className='btn btn-primary counter-bt' onClick={this.restart}>Restart</button>
           </div>
           
           <div></div>
          <h1>{this.state.count}</h1>
        </div>
      )
    }
}
export default MyComponent;