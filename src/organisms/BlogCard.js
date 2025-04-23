import React from 'react';
import Text from '../atoms/Text';
import Layout from "../templates/Layout";

const BlogCard = () => {
  return (
    <div className="mb-6 border-b pb-4">
      <Text type="title">UI Interactions of the week</Text>
      <div className="flex gap-2">
        <Text>12 Feb 2019 |</Text>
        <Text type="Text"> Express, Handlebars</Text>
       </div>

      <Text>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia</Text>
      <Text>consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</Text>
    </div>
    
  );
};

export default BlogCard;
