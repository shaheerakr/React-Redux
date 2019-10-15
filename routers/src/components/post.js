import React, {Component} from 'react'
//import axios from 'axios'
import {connect} from 'react-redux'
import {deletePost} from '../Actions/postActions'

class Post extends Component {
    // state = {
    //     post : null
    // }
    // getPost = async (id) =>{
    //     await axios
    //             .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
    //             .then(response =>{
    //                 //console.log(response.data)
    //                 this.setState({
    //                     post : response.data
    //                 })
    //             })
    //             .catch(err => console.log(err))
    // }
    // componentDidMount = () =>{
    //     const post_id = this.props.match.params.post_id
    //     //console.log(post_id) 
    //     this.getPost(post_id)
    // }
    handleDelete = (e) =>{
        this.props.deletePost(this.props.post.id)
        this.props.history.push('/')
    }
    render(){
        //console.log(this.props)
        const post = this.props.post ? (
            <div className="post">
                <h4 className="center">{this.props.post.title}</h4>
                <p>{this.props.post.body}</p>
                <div className="center">
                    <button className="btn gray" onClick={this.handleDelete}>
                        Delete Post
                    </button>
                </div>
            </div>
        ) : (
            <div className="center"><h6>Loading...</h6></div>
        )
        return(
            <div className="container">
                {post}
            </div>
        )
    }

}
const mapStateToProps = (state,ownProps) =>{
    // let post = null
    // state.posts.forEach(element => {
    //     if(ownProps.match.params.post_id === element.id){
    //         post = element
    //     }
    // });
    return {
        post : state.posts.find(post => post.id === ownProps.match.params.post_id)
    }
}
const mapDispatchToProps = (dispatch) =>{
    return({
        deletePost : (id) =>{ dispatch(deletePost(id))}
    })
}

export default connect(mapStateToProps, mapDispatchToProps)(Post)