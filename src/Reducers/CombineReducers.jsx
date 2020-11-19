import {combineReducers} from 'redux';
import UserReducer from './UserReducer'

export const allReducers=combineReducers({
Users:UserReducer,
});