import { combineReducers } from 'redux';
import { api } from './apiReducer';
const rootReducer = combineReducers({
    api
});
export default rootReducer;