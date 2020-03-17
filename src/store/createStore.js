import Immutable from 'immutable'
import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'
import { composeWithDevTools } from 'redux-devtools-extension'
import { createStore, applyMiddleware } from 'redux'


import rootReducer from '../reducers'

  function createMiddlewares () {
  const middlewares = [
    thunkMiddleware
  ]

  if (typeof window !== 'undefined') {
    middlewares.push(createLogger({
      level: 'info',
      collapsed: true,
      stateTransformer: (state) => {
        const newState = {}

        for (const i of Object.keys(state)) {
          if (Immutable.Iterable.isIterable(state[i])) {
            newState[i] = state[i].toJS()
          } else {
            newState[i] = state[i]
          }
        }

        return newState
      }
    }))
  }

  return middlewares
}

function immutableChildren (obj) {
  const state = {}
  Object.keys(obj).forEach((key) => {
    state[key] = Immutable.fromJS(obj[key])
  })
  return state
}

export default (initialState = {}, context) => {
  const middlewares = createMiddlewares()
  const state = immutableChildren(initialState)

  return createStore(
    rootReducer,
    state,
    composeWithDevTools(applyMiddleware(...middlewares)),
  )
}
