import React,{Component} from 'react'

class AddMember extends Component{
    state = {
        name : null,
        age : null
    }
    handleForm = (e) =>{
        this.setState({
            [e.target.id] : e.target.value
        })
    }
    handleSubmit = (e) =>{
        e.preventDefault()
        //console.log(this.state)
        this.props.addMember(this.state)
    }
    render(){
        return(
            <div className = "add-member">
                <form onSubmit = {this.handleSubmit}>
                    Enter Name: <input type = "text" id = "name" onChange = {this.handleForm}/>
                    Enter Age: <input type  = "text" id = "age" onChange = {this.handleForm}/>
                    <input type = "submit" value = "submit"/>
                </form>
            </div>
        )
    }
}

export default AddMember