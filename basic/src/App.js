import React,{ Component } from 'react';
import Details from './details'

class App extends Component {
  state ={
    details :[
      {'name':'Shaheer', 'age':21, 'id':1},
      {'name':'Qandeel', 'age':20, 'id':2},
      {'name':'yasir', 'age':21, 'id':3}
    ]
  }
  render(){
    return (
      <div className="App-content">
      <h1>Hello, React!</h1>
      <Details details = {this.state.details} />
      </div>
    )
  }
}

export default App;
