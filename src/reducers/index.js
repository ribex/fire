import { combineReducers } from 'redux';
import SpecialsReducer from './reducer_specials';
import CurrentItemReducer from './reducer_current_item';

const rootReducer = combineReducers({
  items: SpecialsReducer,
  currentItem: CurrentItemReducer
});

export default rootReducer;
