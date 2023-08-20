import React, { useState } from 'react';

const BlogIndexPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('');

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const categories = ['Tech', 'Web'];

  return (
    <div style={{marginTop:"20vh"}}>
      <h1>Blog</h1>
      <div>
        {categories.map((category) => (
          <button key={category} onClick={() => handleCategoryClick(category)}>
            {category}
          </button>
        ))}
      </div>
      {selectedCategory && (
        <div>
          <h2>{selectedCategory} Blogs</h2>
          {/* Render the corresponding blog posts based on selectedCategory */}
        </div>
      )}
    </div>
  );
};

export default BlogIndexPage;