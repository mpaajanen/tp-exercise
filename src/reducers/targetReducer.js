import targetService from '../services/targets'

const reducer = (state = [], action) => {
  switch(action.type) {
    case 'INIT_TARGETS':
      return action.data
    default:
      return state
  }
}

export const initializeTargets = () => {
  return async dispatch => {
    const targets = await targetService.getAll()
    dispatch({
      type: 'INIT_TARGETS',
      data: targets
    })
  }
}

export default reducer