import React from 'react';
import { RecipeItem } from '../RecipeItem/RecipeItem';
import './ListRecipe.scss';

export const ListRecipe = React.memo(({recipesList, selectRecipe}) => {
    console.log('Renderiza ListRecipe')
    return (
        <div>
            <h2>Listado de recetas:</h2>

            {recipesList.map((recipe) =>  <RecipeItem 
                        key={recipe.id} 
                        recipe={recipe} 
                        selectRecipe={selectRecipe}/>
            )} 

        </div>
    );

})