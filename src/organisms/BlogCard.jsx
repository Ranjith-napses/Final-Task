import React from 'react';
import Text from '../atoms/Text';

const BlogCard = () => {
  return (
    <div className="mb-6 border-b pb-4">
      <Text type="title">UI Interactions of the week</Text>
      <Text type="meta">12 Feb 2019 | Express, Handlebars</Text>
      <Text>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint...</Text>
    </div>
    
  );
};

export default BlogCard;