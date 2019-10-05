import React,{ Component } from 'react';
import Details from './details'
import AddMember from './addMember'

class App extends Component {
  state ={
    details :[
      {'name':'Shaheer', 'age':21, 'id':1},
      {'name':'Qandeel', 'age':20, 'id':2},
      {'name':'yasir', 'age':21, 'id':3}
    ]
  }
  addMember = (member) =>{
    //console.log(member)
    member.id = Math.random()
    let members = [...this.state.details,member]
    this.setState({
      details : members
    })
  }
  render(){
    return (
      <div className="App-content">
      <h1>Hello, React!</h1>
      <Details details = {this.state.details} />
      <AddMember addMember={this.addMember}/>
      </div>
    )
  }
}

export default App;
