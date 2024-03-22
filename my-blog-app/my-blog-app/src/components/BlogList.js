// BlogList.js
import React, { useState, useEffect } from 'react';
import BlogPost from './BlogPost';

const BlogList = () => {
  const [blogPosts, setBlogPosts] = useState([]);

  useEffect(() => {
    // Fetch blog posts from the API
    // You'll need to replace this with the actual API call
    const fetchedPosts = [
      { id: 1, title: 'Post 1', content: 'This is the first post', publicationDate: '2023-03-22', author: 'John Doe' },
      { id: 2, title: 'Post 2', content: 'This is the second post', publicationDate: '2023-03-21', author: 'Jane Smith' },
      // Add more sample posts as needed
    ];
    setBlogPosts(fetchedPosts);
  }, []);

  return (
    <div>
      <h1>Blog Posts</h1>
      {blogPosts.map((post) => (
        <BlogPost key={post.id} post={post} />
      ))}
    </div>
  );
};

export default BlogList;