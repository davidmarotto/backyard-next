import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunkMiddleware from 'redux-thunk'

const exampleInitialState = {
  user: {
    id: 1,
    username: 'dave',
  }, 
  filter: null,
  deals: [
    {
      id: 1,
      name: 'Hotel Charts',
    },
    {
      id: 2,
      name: 'Queefer\'s Nest',
    },
    {
      id: 3,
      name: 'Howrya Motel',
    }
  ]
}

export const actionTypes = {
  APPLY_FILTER: 'APPLY_FILTER',
}

// REDUCERS
export const reducer = (state = exampleInitialState, action) => {
  switch (action.type) {
    case actionTypes.APPLY_FILTER:
      return Object.assign({}, state, { filter: action.filter })
    default: return state
  }
}

// ACTIONS
export const applyFilter = (filter) => dispatch => {
  return setInterval(() => dispatch({ type: actionTypes.APPLY_FILTER, filter }))
}

export const initStore = (initialState = exampleInitialState) => {
  return createStore(reducer, initialState, composeWithDevTools(applyMiddleware(thunkMiddleware)))
}
