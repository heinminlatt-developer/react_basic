import { Component } from "react";
import { v4 as uuidv4 } from "uuid";
import { useNavigate } from "react-router-dom";

class AddPost extends Component {
  state = {
    id: "",
    title: "",
    desc: "",
  };

  addUser = (e) => {
    e.preventDefault();
    this.props.addPost({ id: uuidv4(), ...this.state });
    this.props.navigate("/");
  };
  render() {
    return (
      <div className="card bg-dark px-4">
        <h1 className="text-white text-center">Add New Post</h1>

        <form onSubmit={this.addUser}>
          <div className="mb-3">
            <label htmlFor="title" className="form-label text-white">
              Post title
            </label>
            <input
              type="text"
              className="form-control"
              id="title"
              onChange={(e) => this.setState({ title: e.target.value })}
              value={this.state.title}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="desc" className="form-label text-white">
              Post Desc
            </label>
            <input
              type="text"
              className="form-control"
              id="desc"
              onChange={(e) => this.setState({ desc: e.target.value })}
              value={this.state.desc}
            />
          </div>
          <button type="submit" class="btn btn-primary float-end">
            Submit
          </button>
        </form>
      </div>
    );
  }
}
export default (props) => {
  const navigator = useNavigate();
  return <AddPost {...props} navigate={navigator} />;
};
