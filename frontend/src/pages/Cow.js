import * as React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import './Cow.css';

export function Cow() {
  return (
    <div className="home">
      <div className="home-grid">
          <div class="cow-card">
            <img alt="" src="/OrigenIberico/imgs/cow1.png"/>
            <h2>Barbara</h2>
            <p><b>Procedencia</b>: Langreo, Asturias</p>
            <p><b>Edad</b>: 29 meses</p>
            <p><b>Alimentación</b>: se alimentó exclusivamente con un pienso ecológico de mezclas de cebada, malta, maíz y trigo.</p>
            <p><b>Historial sanitario</b>: La vaca fue criada bajo estrictas medidas sanitarias y no recibió ningún tipo de tratamiento antibiótico.</p>
            <p>
              <a href='#'>Granja</a> - <a href='#'>Matadero</a> - <a href='#'>Minorista</a>
            </p>
            <p><b>Peso</b>: 450 kgs</p>
            <p><b>Raza</b>: Asturiana de los Valles, una raza autóctona de Asturias que se caracteriza por su excelente calidad de carne.</p>
            <p><b>Proceso de producción</b>: La vaca fue criada en una granja certificada y fue sacrificada en un matadero local que cumple con los más altos estándares de higiene y seguridad alimentaria.</p>
            <img alt="" src="/OrigenIberico/imgs/espanita.png"/>
          </div>
      </div>
      <Link to="/about">About</Link>
    </div>
  );
}