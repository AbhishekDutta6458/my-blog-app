// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import BlogList from './components/BlogList';
import BlogForm from './components/BlogForm';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/create">Create Post</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/create" element={<BlogForm />} />
          <Route path="/" element={<BlogList />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;