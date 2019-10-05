import React from 'react';


const Details = ({details}) =>{
    //console.log(this.props)
    //const details =props.details
    const memberList = details.map(member =>{
        if (member.age>2){
            return(
                <div className = "detail" key ={member.id}>
                    <div>Name: {member.name}</div>
                    <div>Age: {member.age}</div>
                </div>
            )
        }
        else {
            return null
        }
    })
    
    return(
        <div className="member-list">
            {memberList}
            {/* {
                details.map(member =>{
                    return member.age>20? (
                        <div className = "detail" key ={member.id}>
                            <div>Name: {member.name}</div>
                            <div>Age: {member.age}</div>
                        </div>
                    ) : null
                }) 
            } */}
           </div>

    )
}

export default Details