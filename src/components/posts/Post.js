import React, { Component } from "react";
import PostCard from "./PostCard";
import { Link } from "react-router-dom";

class Post extends Component {
  deletePost(id) {
    this.props.deletePost(id);
  }
  render() {
    const { posts } = this.props;

    if (!posts || !Array.isArray(posts)) {
      return <div>No posts available</div>;
    }

    return (
      <div>
        <Link to="/add">
          <button className="btn btn-primary btn-sm float-end">
            Add<i className="fa fa-add"></i>
          </button>
        </Link>

        {posts.map((post) => (
          <PostCard
            key={post.id}
            post={post}
            deletePost={this.deletePost.bind(this)}
          />
        ))}
      </div>
    );
  }
}
Post.defaultProps = {
  post: [],
};

export default Post;
