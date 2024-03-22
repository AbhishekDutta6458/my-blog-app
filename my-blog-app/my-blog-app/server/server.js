const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3000;

// Middleware
app.use(bodyParser.json());
app.use(cors());

// In-memory data store
let blogPosts = [];

// Routes
app.get('/api/posts', (req, res) => {
  res.json(blogPosts);
});

app.post('/api/posts', (req, res) => {
  const { title, content, author } = req.body;
  const newPost = {
    id: blogPosts.length + 1,
    title,
    content,
    author,
    publicationDate: new Date().toISOString(),
  };
  blogPosts.push(newPost);
  res.json(newPost);
});

app.put('/api/posts/:id', (req, res) => {
  const postId = parseInt(req.params.id);
  const { title, content, author } = req.body;
  const updatedPost = {
    id: postId,
    title,
    content,
    author,
    publicationDate: new Date().toISOString(),
  };
  const postIndex = blogPosts.findIndex((post) => post.id === postId);
  if (postIndex !== -1) {
    blogPosts[postIndex] = updatedPost;
    res.json(updatedPost);
  } else {
    res.status(404).json({ error: 'Post not found' });
  }
});

app.delete('/api/posts/:id', (req, res) => {
  const postId = parseInt(req.params.id);
  const postIndex = blogPosts.findIndex((post) => post.id === postId);
  if (postIndex !== -1) {
    const deletedPost = blogPosts.splice(postIndex, 1)[0];
    res.json(deletedPost);
  } else {
    res.status(404).json({ error: 'Post not found' });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});