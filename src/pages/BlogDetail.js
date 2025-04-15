import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './BlogDetail.css';

const imageUrls = [
    "https://assets.traveltriangle.com/blog/wp-content/uploads/2019/02/Changi-Point-Coastal-Walk.jpg",
    "https://assets.traveltriangle.com/blog/wp-content/uploads/2019/02/The-Ritz-Carlton.jpg",
    "https://assets.traveltriangle.com/blog/wp-content/uploads/2019/02/Marina-Bay-Sands2.jpg",
    "https://assets.traveltriangle.com/blog/wp-content/uploads/2019/02/Gardens-By-The-Bay1.jpg",
    "https://assets.traveltriangle.com/blog/wp-content/uploads/2019/02/Beaches-Of-Sentosa.jpg",
    "https://assets.traveltriangle.com/blog/wp-content/uploads/2019/02/The-Botanic-Gardens.jpg",
    "https://assets.traveltriangle.com/blog/wp-content/uploads/2015/05/Yueh-Hai-Chang-Temple.jpg",
    "https://assets.traveltriangle.com/blog/wp-content/uploads/2015/05/Esplanade-Roof-Garden.jpg",
    "https://assets.traveltriangle.com/blog/wp-content/uploads/2019/02/Singapore-Flyer1.jpg",
    "https://assets.traveltriangle.com/blog/wp-content/uploads/2019/07/Universal-studios1.jpg"
  ]

const BlogDetail = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
        if (!res.ok) throw new Error(`Failed to fetch blog`);
        const data = await res.json();
        setBlog({
          ...data,
          image: imageUrls[parseInt(id) - 1] || 'https://via.placeholder.com/250x160'
        });
      } catch (err) {
        console.error(err);
      }
    };
    fetchBlog();
  }, [id]);

  if (!blog) return <div>Loading...</div>;

  return (
    <div className="detail-container">
      <button className="back-button" onClick={() => navigate('/')}>← Back to Blog List</button>
      <h2 className="detail-title">{blog.title}</h2>
      <img className="detail-image" src={blog.image} alt="Blog" />
      <p className="detail-description">{blog.body}</p>
    </div>
  );
};

export default BlogDetail;
