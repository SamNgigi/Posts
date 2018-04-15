import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

import { posts } from "../actions";

import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery/dist/jquery.min.js';
import 'popper.js/dist/umd/popper.min.js';
import 'bootstrap/dist/js/bootstrap.min.js';
import {
  Button, FormGroup, Form, Input, Container
} from 'reactstrap'


class Posts extends Component{

  state = {
    text:"",
    updatePostId: null,
  }

  resetForm = () => {
    this.setState({text: "", updatePostId: null});
  }

  selectForEdit = (id) => {
    let post = this.props.posts[id]
    this.setState({text: post.content, updatePostId: id})
  }

  submitPost = (event) => {
    event.preventDefault();
    if(this.state.updatePostId === null) {
      this.props.addPost(this.state.text);
    } else {
      this.props.updatePost(this.state.updatePostId, this.state.text)
    }
    this.resetForm()
  }

  render(){
    return(
      <Container className="text-center">
        <h2>Welcome to Posts</h2>
        <br/>
        <h3>Add new posts</h3>

        <Form onSubmit={this.submitPost}>
          <FormGroup>
            <Input
              value={this.state.text}
              placeholder="Enter post here..."
              onChange={(event) => this.setState({text: event.target.value})}
              required
            />
            <Button outline className="my-1" block onClick={this.resetForm}>Reset</Button>
            <Button outline color="success" className="my-1" block type="submit">Save</Button>
          </FormGroup>
        </Form>

        <hr/>
        <h3>Your Posts</h3>
        <table>
          <tbody>
            {this.props.posts.map((post, id) =>(
              <tr key={`post_${id}`}>
                <td>{post.content}</td>
                <td><Button outline color="primary" className="m-1" onClick={()=>this.selectForEdit(id)}>edit</Button></td>
                <td><Button outline color="danger" onClick={()=> this.props.deletePost(id)}>delete</Button></td>
              </tr>
            ))}
          </tbody>
        </table>
        <br/>
        <p>
          Click  <Link to="/contacts">here</Link> to contact us.
        </p>
      </Container>
    )
  }
}

const mapStateToProps = state => {
  return {
    posts: state.posts,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addPost: (content) => {
      dispatch(posts.addPost(content));
    },
    updatePost: (id, content) => {
      dispatch(posts.updatePost(id, content));
    },
    deletePost: (id) => {
      dispatch(posts.deletePost(id));
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Posts)
