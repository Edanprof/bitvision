import _ from 'lodash';
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import { fetchPosts } from '../actions';

class News extends Component{
  componentDidMount(){
    this.props.fetchPosts();
  }

  renderPosts(){
    return _.map(this.props.posts,post=>{
      return(
        <li class="list-group-item" key={post.i}>
          <a href="#NewsUrl">
            {post.title}
          </a>
        </li>
      );
    });
  }

  render(){
    return (
      <div>
        <h3>Bitcoin News</h3>
        <ul class="list-group">
          {this.renderPosts()}
        </ul>
      </div>
    );
  }
}
function mapStateToProps(state){
  return {posts: state.posts};
}
export default connect(mapStateToProps,{fetchPosts})(News);
