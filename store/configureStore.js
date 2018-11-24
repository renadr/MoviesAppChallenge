import { createStore, combineReducers, applyMiddleware } from 'redux';
import newResults from './reducers/reducer'
import reducerView from './reducers/reducerView'

function logger({ getState }) {
    return (next) => (action) => {
    //   console.log('will dispatch', action)
      return next(action)
    }
  }

const store = createStore(
    combineReducers({
        newResults,
        reducerView,
    }),
    applyMiddleware(logger)
)
// console.log(store.getState())

export default store