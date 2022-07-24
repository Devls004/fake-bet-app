import { betListReducer } from './shared/reducers/bet.reducer'
import { eventReducer } from './shared/reducers/event.reducer'
import { composeWithDevTools } from 'redux-devtools-extension'
import { createStore, combineReducers } from 'redux'

const reducer = combineReducers({
  bets: betListReducer,
  events: eventReducer
})
  
export const store = createStore(reducer, composeWithDevTools());
  