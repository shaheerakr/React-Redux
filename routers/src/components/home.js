import React, { Component } from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

class Home extends Component {
    state = {
        posts : []
    }
    componentDidMount = async () => {
        await axios
                .get('https://jsonplaceholder.typicode.com/posts')
                .then(response => {
                this.setState({
                    posts : response.data.slice(0,10)
                    })
                })
                .catch(error => console.log(error))
    }
    render(){
        const { posts } = this.state
        
        
        const postList = posts.length?  (
            posts.map(post => {
                return(
                    <div className="post card" key={post.id}>
                        <div className="card-content">
                            <Link to = {'/'+post.id}>
                                <span className="card-title">{post.title}</span>
                            </Link>
                            <p>{post.body}</p>
                        </div>
                    </div>
                )
            })
        ) : (
            <div className="center"><h5>no posts yet</h5></div>
        )
        return(
            <div className="container">
                <h3 className="center">Home</h3>
                {postList}
            </div>
        )
    }
}

export default Home