import { createStore , applyMiddleware } from 'redux'
import { counter } from './reducers'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

const store = createStore(counter,14,composeWithDevTools(applyMiddleware(thunk)))

export default store