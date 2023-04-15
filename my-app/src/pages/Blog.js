import React, { useState, useEffect } from 'react';
import Blogcard from '../components/Blogcard';
import '../stylesheets/Blog.css'

const Blog = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
     fetch("https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@wbennett711")
        .then((response) => response.json())
        .then((data) => {
           console.log(data.items);
           setPosts(data.items);
        })
        .catch((err) => {
           console.log(err.message);
        });
  }, []);

return (
  <div className="blog-list">
    {posts.map((post) => {
      return (
        <div className='blog-column'>
            <Blogcard 
          title = {post.title}
          image = {post.thumbnail}
          link = {post.link}
          />
        </div>
      );
    })}
  </div>
);
};

export default Blog;