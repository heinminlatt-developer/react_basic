import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Post from "./components/posts/Post";
import AddPost from "./components/posts/AddPost";

function App() {
  const DB = "postDB";
  const [posts, setPosts] = useState([]);

  const addPostHandler = (post) => {
    const newPost = { ...post, id: Date.now() };
    setPosts([newPost, ...posts]);
  };

  useEffect(() => {
    let data = localStorage.getItem(DB);
    if (data) {
      setPosts(JSON.parse(data)); 
    }
  }, []); 
console.log("Post is",posts)

  useEffect(() => {
    localStorage.setItem(DB, JSON.stringify(posts));
  }, [posts]);

  const postDeleteHandler = (id) => {
    console.log("Delete Id",id)
    setPosts(posts.filter((post) => post.id !== id));
  };

  return (
    <div className="container my-5">
      <h1 className="text-center text-info">Post</h1>
      <Router>
        <Routes>
          <Route
            path="/"
            element={<Post posts={posts} deletePost={postDeleteHandler} />}
          />
          <Route path="/add" element={<AddPost addPost={addPostHandler} />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
