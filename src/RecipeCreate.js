import React, { useState } from 'react';

function RecipeCreate({ createRecipe }) {
  const [recipe, setRecipe] = useState({
    name: '',
    cuisine: '',
    photo: '',
    ingredients: '',
    preparation: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setRecipe((currentRecipe) => ({
      ...currentRecipe,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    createRecipe(recipe);
    setRecipe({
      name: '',
      cuisine: '',
      photo: '',
      ingredients: '',
      preparation: '',
    });
  };

  // : When the form is submitted, a new recipe should be created, and the form contents cleared.
  //: Add the required input and textarea form elements.
  //: Add the required submit and change handlers.

  return (
    <form name='create' onSubmit={handleSubmit}>
      <table>
        <tbody>
          <tr>
            <td>
              <input name='name' type='text' value={recipe.name} onChange={handleChange} required />
            </td>
            <td>
              <input
                name='cuisine'
                type='text'
                value={recipe.cuisine}
                onChange={handleChange}
                required
              />
            </td>
            <td>
              <input
                name='photo'
                type='text'
                value={recipe.photo}
                onChange={handleChange}
                required
              />
            </td>
            <td>
              <textarea
                name='ingredients'
                value={recipe.ingredients}
                onChange={handleChange}
                required
              />
            </td>
            <td>
              <textarea
                name='preparation'
                value={recipe.preparation}
                onChange={handleChange}
                required
              />
            </td>
            <td>
              <button type='submit'>Create</button>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
}

export default RecipeCreate;
