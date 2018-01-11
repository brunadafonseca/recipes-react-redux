export const TOGGLE_LIKE = 'TOGGLE_LIKE'

export default (id) => {
  return {
    type: TOGGLE_LIKE,
    id
  }
}
