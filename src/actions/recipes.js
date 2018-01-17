import ApiClient from '../api/client'
import { loading, loadError } from './loading'

export const FETCHED_RECIPES = 'FETCHED_RECIPES'
export const FETCHED_ONE_RECIPE = 'FETCHED_ONE_RECIPE'
export const CREATED_RECIPE = 'CREATED_RECIPE'
export const TOGGLE_LIKE = 'TOGGLE_LIKE'

const api = new ApiClient()

export const fetchRecipes = () => {
  return dispatch => {
    const path = 'recipes'
    dispatch(loading(path, true))

    api.get(path)
      .then(res => dispatch({ type: FETCHED_RECIPES, payload: res.body }))
      .catch(err => dispatch(loadError(err)))

    dispatch(loading(path, false))
  }
}

export const fetchRecipeById = (recipeId) => {
  return dispatch => {
    const path = `recipes/${recipeId}`
    dispatch(loading(path, true))

    api.get(path)
      .then(res => dispatch({ type: FETCHED_ONE_RECIPE, payload: res.body }))
      .catch(err => dispatch(loadError(err)))

    dispatch(loading(path, false))
  }
}

export const toggleLike = (recipeId) => {
  return {
    type: 'TOGGLE_LIKE',
    payload: recipeId
  }
}

export const createRecipe = (newRecipe) => {
  return dispatch => {
    const path = 'recipes'
    dispatch(loading(path, true))

    api.post('recipes')
      .send(newRecipe)
      .then(res => dispatch({ type: CREATED_RECIPE, payload: res.body }))
      .catch(err => dispatch(loadError(err)))

    dispatch(loading(path, false))
  }
}
