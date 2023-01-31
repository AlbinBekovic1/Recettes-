import React from 'react';
import './style.css';
import {
  createBrowserRouter,
  RouterProvider,
  Routes,
  Route,
  Link,
} from 'react-router-dom';
import Recettes from './components/recettes.js';
import RecettesGestion from './components/gestion-recette.js';

export default function App() {
  return (
    <div>
      <h1>App.js :</h1>
      {/* Mise en place des liens pour la navigation */}
      <Routes>
        <Route path="/" element={<Recettes />} />
        <Route path="/recettes/gestion" element={<RecettesGestion />} />
      </Routes>
    </div>
  );
}
