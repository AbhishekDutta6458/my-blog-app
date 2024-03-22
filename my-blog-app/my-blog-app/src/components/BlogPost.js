// BlogPost.js
import React from 'react';

const BlogPost = ({ post }) => {
  return (
    <div>
      <h2>{post.title}</h2>
      <p>{post.content}</p>
      <p>Author: {post.author}</p>
      <p>Publication Date: {post.publicationDate}</p>
    </div>
  );
};

export default BlogPost;