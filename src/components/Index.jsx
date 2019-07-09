import React, {  Component } from 'react';
import { getPosts } from '../services/api';
import { Link } from 'react-router-dom';

class Index extends Component {
    constructor() {
        super();
        this.state = {
            posts: []
        }
    }

    componentDidMount() {
        var self = this;
        getPosts().then(function(json) {
            self.setState({posts: json})
            console.log(json)
        })
    }


render () {
    var posts = this.state.posts.map((post, idx) => {
        return (
            <li key={idx}>
                <Link to={`/posts/${post._id}`}>{post.title}</Link>
                <br/>
                <span>Upvotes: {post.upvotes}</span>
                <br/>
                <a href="#" className="btn btn-success">Upvote <i className="fa fa-thumbs-up"></i></a>
                <br/>
                <a href="#" className="btn btn-danger">Downvote <i className="fa fa-thumbs-down"></i></a>
                <br/>
                <hr/>
            </li>
        )
    });
    return(
        <div>
            <h1>Hello from Index</h1>
            <hr/>
            <br/>

            <ul>
                { posts }
            </ul>
        </div>
        )
    }
}

export default Index;