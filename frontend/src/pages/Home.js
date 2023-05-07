import * as React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

export function Home() {
  return (
    <div className="home">
      <div className="home-grid">
          <div class="cow-card">
            <img alt="" src="./imgs/cow1.png"/>
            <h2>Barbara</h2>
            <p>Jaén</p>
            <p>Fecha de muerte: 30-04-2023</p>
            <p>Alimentada a base de pienso ecológico</p>
            <span class="left bottom">tel: 731 366 ***</span>
            <span class="right bottom">adress: Czech Republic</span>
          </div>
      </div>
      <Link to="/about">About</Link>
    </div>
  );
}