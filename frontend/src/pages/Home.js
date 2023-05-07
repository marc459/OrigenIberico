import * as React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import { useNavigate } from 'react-router-dom';

export function Home() {
  const navigate = useNavigate();
  return (
    <div className="home">
      <h1>Busca a tu vaca con su Código de identificación</h1><br></br>
      <input type='text'></input>
      <span className='search'><button class="btn-search" onClick={() => {navigate('/cow/cow1', {replace: true})}}></button></span><br></br>
      <Link to="/about">About</Link>
    </div>
  );
}