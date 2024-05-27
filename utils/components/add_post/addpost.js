"use client";
import React, { useState } from "react";
import "./addPost.css";

const AddPost = () => {
  const [postContent, setPostContent] = useState("");

  const handlePostChange = (e) => {
    setPostContent(e.target.value);
  };

  const handlePostSubmit = (e) => {
    e.preventDefault();
    // Handle post submission logic here
    alert(`Post submitted: ${postContent}`);
    setPostContent("");
  };

  return (
    <div className={"addPost"}>
      <form onSubmit={handlePostSubmit}>
        <textarea
          value={postContent}
          onChange={handlePostChange}
          placeholder="What's on your mind?"
          rows="4"
        ></textarea>
        <button type="submit">Post</button>
      </form>
    </div>
  );
};

export default AddPost;
