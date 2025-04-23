import React from 'react';

const variants = {
  title: 'text-xl font-semibold ',
  Text: 'text-sm text-gray-500',
  subhead: 'text-md font-medium text-gray-700',
};

const Text = ({ type = 'default', children }) => {
  return <p className={variants[type]}>{children}</p>;
};

export default Text;
