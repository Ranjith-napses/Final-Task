import React from 'react';
import Layout from '../templates/Layout';
import BlogCard from '../organisms/BlogCard';

const BlogPage = () => {
  return (
    <Layout title="Blog">
      {[1, 2, 3, 4].map((item) => (
        <BlogCard key={item} />
      ))}
    </Layout>
  );
};

export default BlogPage;
