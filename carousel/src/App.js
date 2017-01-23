import React, { Component } from 'react';
import ReactCSSTransitionGroup from 'react/lib/ReactCSSTransitionGroup';
import axios from 'axios';
import './App.css';




let images = ["./images/DeathtoStock_Meticulous-02.jpg",
          "./images/DeathtoStock_Meticulous-04.jpg",
          "./images/DeathtoStock_Meticulous-05.jpg",
          "./images/DeathtoStock_Meticulous-07.jpg"
];

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentImage: './images/DeathtoStock_Meticulous-05.jpg',
      posts: {},
      comments: {}
    };
  }

  changeImage = () => {
    let random = Math.floor(Math.random() * 3);
    this.setState({
      currentImage: images[random]
    });
  }

  componentDidMount() {
    const self = this;
    function getPosts() {
      return axios.get('https://jsonplaceholder.typicode.com/posts');
    }

    function getComments() {
      return axios.get('https://jsonplaceholder.typicode.com/comments');
    }
    axios.all([getPosts(), getComments()])
      .then(axios.spread(function (posts, comments) {
        self.setState({
          posts: posts,
          comments: comments
        });
      }));
  }

  render() {
    return (
      <div className="App">
        <ReactCSSTransitionGroup
          component="div"
          transitionName="carousel"
          transitionEnterTimeout={1000}
          transitionLeaveTimeout={1000}>
          <img src={this.state.currentImage} key={this.state.currentImage} alt="death" />
        </ReactCSSTransitionGroup>
        <br/>
        <button className="change-image" onClick={this.changeImage}>Change</button>
        <Blog posts={this.state.posts} comments={this.state.comments}/>
      </div>
    );
  }
}

class Blog extends React.Component {
  render() {
    let posts = [];
    if (this.props.posts.data) {
      this.props.posts.data.forEach((post) => {
        let comments = [];
        this.props.comments.data.forEach((comment) => {
          if (comment.postId === post.id) {
            comments.push(<Comment key={comment.id} email={comment.email} body={comment.body}/>)
          }
        });
        posts.push(<Post key={post.id} title={post.title} body={post.body} comments={comments}/>);
      });
    }
    return (
      <div>{posts}</div>
    );
  }
}

function Post(props) {
  return (
    <div className="blog-post">
      <h1>{props.title}</h1>
      <p>{props.body}</p>
      {props.comments}
    </div>
  );
}

function Comment(props) {
  return (
    <div className="post-comment">
    <h3>{props.email}</h3>
    <p>{props.body}</p>
    </div>
  );
}

export default App;
