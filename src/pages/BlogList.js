import React, { useEffect, useState } from 'react';
import BlogCard from '../components/BlogCard';
import { useNavigate } from 'react-router-dom';
import './BlogList.css';

//Random Image URLs

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

const BlogList = () => {
  const [blogs, setBlogs] = useState([]);
  const [filteredBlogs, setFilteredBlogs] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  //function to handle blog card clicks

  const handleCardClick = (id) => {
    navigate(`/blog/${id}`);
  };

  // Fetching blog with Async/Await by error handling
    
  useEffect(() => {
    const fetchBlogs = async () => {
      try{
        const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=10');
      
      if(!res.ok){
        throw new Error(`Server responded with status ${res.status}`);
      }

      const data = await res.json();

      const blogsWithImages = data.map((blog, index) => ({
        ...blog,
        image: imageUrls[index] || 'https://via.placeholder.com/250x160', // fallback
      }))
      setBlogs(blogsWithImages);
      setFilteredBlogs(blogsWithImages);
    }
      catch (error) {
        console.error('Network or parsing error', error);
      }
    };

    fetchBlogs();
  }, []);


  // Filter blogs on search

  useEffect(() => {
    const filtered = blogs.filter((blog) =>
      blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      blog.body.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredBlogs(filtered);
  }, [searchTerm, blogs]);


  return (
    <div className="app-container">
      <h1 className="app-heading">Blog</h1>

      <input
        type="text"
        placeholder="Search posts..."
        className="search-input"
        value={searchTerm}
        onChange={(e) => {
          setSearchTerm(e.target.value);
        }}
      />

        <div className="blog-list">
        {filteredBlogs.map(blog => (
          <BlogCard
            key={blog.id}
            title={blog.title}
            description={blog.body.slice(0, 100) + '...'}
            image={blog.image}
            onClick={() => handleCardClick(blog.id)}
          />
        ))}
        </div>
    </div>
  );
};

export default BlogList;