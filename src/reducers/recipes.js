import { FETCHED_RECIPES, TOGGLE_LIKE, FETCHED_ONE_RECIPE, CREATED_RECIPE } from '../actions/recipes'

// const newId = (state) => {
//   const ids = state.map((recipe) => recipe._id).sort()
//   return [parseInt('abcd', (ids[ids.length - 1].split('abcd')[1], 10) + 1)].join('')
// }

export default (state = [], { type, payload } = {}) => {
  switch (type) {
    case TOGGLE_LIKE:
    return state.map((recipe) => {
      if (recipe._id !== payload) return recipe
      return { ...recipe, liked: !recipe.liked }
    })

    case FETCHED_RECIPES:
      return payload.slice()

    case FETCHED_ONE_RECIPE:
      return [payload].concat(state)

    case CREATED_RECIPE:
      console.log(state)
      console.log(payload)
      return [{ ...payload }].concat(state)

    default:
      return state
  }
}
