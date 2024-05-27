import React, { Component } from "react";
import image from "../../assets/images/images.png";

class PostCard extends Component {
  delete = () => {
    this.props.deletePost(this.props.post.id);
  };

  render() {
    console.log("card data", this.props.post.title);
    return (
      <div className="card">
        <div className="row">
          <div className="col-2 mt-2">
            <img
              src={image}
              width="50px"
              height="50px"
              alt="post"
            />
          </div>

          <div className="col-4">
            <p>{this.props.post.title}</p>
            <p>{this.props.post.desc}</p>
          </div>

          <div className="col-5 mt-2">
            <button className="btn btn-sm btn-info me-1">
              <i className="fa fa-eye"></i>
            </button>
            <button className="btn btn-sm btn-warning me-1">
              <i className="fa fa-edit"></i>
            </button>
            <button
              className="btn btn-sm btn-danger"
              onClick={this.delete.bind(this)}
            >
              <i className="fa fa-trash"></i>
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default PostCard;
