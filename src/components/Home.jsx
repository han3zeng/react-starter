import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <>
      <h1>React Starter</h1>
      <p>This is the project works as web architecture prototype</p>
      <ul>
        <li><Link to="/webpack-setting-trial">Webpack Result Page</Link></li>
      </ul>
    </>
  );
}

export default Home;
