import React, {Component} from 'react';
import {Link} from 'react-router-dom';

export default class Posts extends Component{
  render(){
    return(
      <div>
        <h2>Welcome to Posts</h2>
        <p>
          Click  <Link to="/contacts">here</Link> to contact us.
        </p>
      </div>
    )
  }
}
