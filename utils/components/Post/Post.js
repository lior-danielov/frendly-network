// Post.js
import React from 'react';
import "./post.css";

const Post = ({ content }) => {
  return (
    <div className="post">
      <p>{content}</p>
    </div>
  );
};

export default Post;
