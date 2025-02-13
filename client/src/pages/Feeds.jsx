import React from 'react';
import './Feed.css'; // Import CSS file for styling

const Feed = () => {
  // Sample data for blog feeds
  const blogFeeds = [
    {
      id: 1,
      title: "10 Tips for Mastering React",
      author: "John Doe",
      date: "May 1, 2024",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio."
    },
    {
      id: 2,
      title: "Getting Started with Node.js",
      author: "Jane Smith",
      date: "April 28, 2024",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      id: 3,
      title: "Introduction to GraphQL",
      author: "Bob Johnson",
      date: "April 25, 2024",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    }
   
  ];

  return (
    <div className="blog-feed">
      <h1 className="title">🚀 Blog Feeds 🎉</h1>
      <ul>
        {blogFeeds.map(feed => (
          <li key={feed.id} className="feed-item">
            <h2 className="feed-title">{feed.title}</h2>
            <p className="author"><strong>Author:</strong> {feed.author}</p>
            <p className="date"><strong>Date:</strong> {feed.date}</p>
            <p className="content">{feed.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Feed;
