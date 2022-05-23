import React from 'react';
import axios from 'axios';
import AuthorName from './AuthorName';
import RandomDate from './RandomDate';
import RandomImg from './RandomImg';
import RandomText from './RandomText';
import Comment from './Comment';


export default class Article extends React.Component {
    state = {
        persons: [],
        posts: [],
        comments: []
    }

    componentDidMount() {
        axios.get(`https://jsonplaceholder.typicode.com/users`)
            .then(res => {
                const persons = res.data;
                this.setState({ persons });
            })

        axios.get(`https://jsonplaceholder.typicode.com/posts`)
            .then(res => {
                const posts = res.data;
                this.setState({ posts });
            })

        axios.get(`https://jsonplaceholder.typicode.com/comments`)
            .then(res => {
                const comments = res.data;
                this.setState({ comments });
            })
    }

    render() {
        return (
            <div>
                {this.state.posts
                    .map(post =>
                        <div>

                            {
                                function getPerson() {
                                    let personX = this.state.persons.filter(person => person.id === post.userId)
                                    console.log(personX);
                                    return personX.name;
                                }
                            }
                            <h1 className="title">{post.title}</h1>
                            <ul className="infoContainer">
                                <li className="infoItem" key={post.id}>Destination Europe</li>
                                <li className="infoItem" key={post.id * 100}>Added by <span className='infoPersonName'>
                                    <AuthorName key={post.id*300} person={this.state.persons.filter(person => person.id === post.userId)}></AuthorName>
                                </span></li>
                                <li className="infoItem" key={post.id * 200}><RandomDate></RandomDate></li>
                            </ul>
                            <div className="buttonsContainer">
                                <a className="buttonsBtn">Edit</a>
                                <a className="buttonsBtn">Delete</a>
                            </div>
                            <RandomImg key ={post.id*400}></RandomImg>
                            <RandomText key ={post.id*500}></RandomText>
                            <div className="commContainer">
                            <h4 className="commentTitle">Comments:</h4>
                            {this.state.comments.filter(comment => comment.postId === post.id).map(commentData => (
                                <Comment
                                    key={commentData.id}
                                    name={commentData.name}
                                    email={commentData.email}
                                    body={commentData.body}
                                ></Comment>
                            ))}
                            </div>
                        </div>
                    )
                }

            </div>
        )
    }
}