import React from 'react';

const variants = {
  title: 'text-xl font-semibold',
  meta: 'text-sm text-gray-500',
  subhead: 'text-md font-medium text-gray-700',
  default: 'text-base text-gray-800'
};

const Text = ({ type = 'default', children }) => {
  return <p className={variants[type]}>{children}</p>;
};

export default Text;