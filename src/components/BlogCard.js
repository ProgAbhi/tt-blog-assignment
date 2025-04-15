import React from 'react';
import './BlogCard.css';

const BlogCard = ({ title, description, image, onClick }) => {
  return (
    <div className="blog-card" onClick={onClick}>
      <img src={image} alt={title} className="blog-image" loading="lazy"/>
      <div className="blog-content">
        <h2 className="blog-title">{title}</h2>
        <p className="blog-description">{description}</p>
      </div>
    </div>
  );
};

export default BlogCard;

