import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

class Posts extends Component{
  render(){
    return(
      <div>
        <h2>Welcome to Posts</h2>
        <hr/>
        <h3>Posts</h3>
        <table>
          <tbody>
            {this.props.posts.map((post, id) =>(
              <tr key={`post_${id}`}>
                <td>{post.text}</td>
                <td><button>edit</button></td>
                <td><button>delete</button></td>
              </tr>
            ))}
          </tbody>
        </table>
        <br/>
        <p>
          Click  <Link to="/contacts">here</Link> to contact us.
        </p>
      </div>
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

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Posts)
