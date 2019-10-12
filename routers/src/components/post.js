import React, {Component} from 'react'
import axios from 'axios'

class Post extends Component {
    state = {
        post : null
    }
    getPost = async (id) =>{
        await axios
                .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
                .then(response =>{
                    //console.log(response.data)
                    this.setState({
                        post : response.data
                    })
                })
                .catch(err => console.log(err))
    }
    componentDidMount = () =>{
        const post_id = this.props.match.params.post_id
        //console.log(post_id) 
        this.getPost(post_id)
    }
    render(){
        const post = this.state.post ? (
            <div className="post">
                <h4 className="center">{this.state.post.title}</h4>
                <p>{this.state.post.body}</p>
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

export default Post