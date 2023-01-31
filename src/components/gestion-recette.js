import React from 'react';

const RecettesGestion = () => {
  const tableau = [];
  /*saveStorage(event) {
    localStorage.setItem("Recette");
  };*/
  return (
    <div>
      <h2>Gestion des recettes</h2>
      <form onSubmit={this.saveStorage}>
        <input type="url" name="image_url" placeholder="URL de l'image" />
        <br /> <br />
        <input type="text" name="title" placeholder="Titre de la recette" />
        <br /> <br />
        <textarea name="description" placeholder="Description..." />
        <br /> <br />
        <input
          type="submit"
          value="Ajouter une recette"
          name="submit_recette"
        />
      </form>
    </div>
  );
};

export default RecettesGestion;
