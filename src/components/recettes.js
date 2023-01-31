import React from 'react';
import { Link } from 'react-router-dom';

const Recettes = () => {
  return (
    <div>
      <h2>Liste des recettes : </h2>
      <Link to="/recettes/gestion"> Gestion des recettes </Link>
    </div>
  );
};

export default Recettes;
