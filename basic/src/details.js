import React,{ Component } from 'react';


class Details extends Component{
    render(){
        //console.log(this.props)
        const details =this.props.details
        const memberList = details.map(member =>{
            return(
                <div className = "detail" key ={member.id}>
                    <div>Name: {member.name}</div>
                    <div>Age: {member.age}</div>
                </div>

            )
        }
        ) 
        return(
            <div className="member-list">
                {memberList}
            </div>

        )
    }
}

export default Details