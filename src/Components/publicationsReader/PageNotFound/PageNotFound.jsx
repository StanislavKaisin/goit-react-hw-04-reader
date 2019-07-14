import React from 'react';
import { Link } from 'react-router-dom';

const PageNotFound = () => {
  return (
    <div>
      <h1>Page not found.</h1>
      <Link to="/">Back to main</Link>
    </div>
  );
};

export default PageNotFound;
