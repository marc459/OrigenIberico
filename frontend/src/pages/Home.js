import * as React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

export function Home() {
  return (
    <div className="home">
      <h1>Home page</h1>
      <Link to="/about">About</Link>
    </div>
  );
}