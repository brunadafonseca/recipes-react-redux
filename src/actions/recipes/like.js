export const TOGGLE_LIKE = 'TOGGLE_LIKE'

export default () => {
  return {
    type: TOGGLE_LIKE,
    payload: {
      liked: true
    }
  }
}
