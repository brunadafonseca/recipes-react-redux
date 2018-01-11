export const toggleLike = (recipeId) => {
  return {
    type: 'TOGGLE_LIKE',
    payload: recipeId
  }
}

export const createRecipe = (newRecipe) => {
  return {
    type: 'CREATE_RECIPE',
    payload: newRecipe
  }
}
