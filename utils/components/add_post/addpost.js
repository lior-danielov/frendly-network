"use client";
import React, { useState } from "react";
import "./addPost.css";
import { createNewPost } from "@/utils/api/postsApi/postsApi";

const AddPost = () => {
  const [postContent, setPostContent] = useState("");

  const handlePostChange = (e) => {
    setPostContent(e.target.value);
  };

  const handlePostSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
    // Handle post submission logic here
    const post = await createNewPost(data);
    console.log(post);
    alert(`Post submitted: ${postContent}`);
    setPostContent("");
  };

  return (
    <div className={"addPost"}>
      <form onSubmit={handlePostSubmit}>
        <textarea
          name="text"
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
