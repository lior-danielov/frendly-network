// PostList.js
import React from 'react';
import Post from './Post';

const PostList = () => {
  const posts = [
    "Post 1 content",
    "Post 2 content",
    "Post 3 content",
    "Post 4 content",
    "Post 5 content",
    "Post 6 content",
    "Post 7 content",
    "Post 8 content",
    "Post 9 content",
    "Post 10 content"
  ];

  return (
    <div className="post-list">
      {posts.map((content, index) => (
        <Post key={index} content={content} />
      ))}
    </div>
  );
};

export default PostList;
