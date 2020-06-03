import * as React from 'react';
import NotFoundImage from '../assets/images/imagen-404.jpeg'

export default (props: any) =>
  <div className="container not-found">
    <h1>Acá no hay juegos!</h1>
    <img src={NotFoundImage} alt="not found" />
  </div>