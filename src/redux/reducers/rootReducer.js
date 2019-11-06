import { combineReducers } from 'redux';
import shareYourStoryReducer from './shareYourStoryReducer';
import userReducer from './userReducer';

export default combineReducers({
    shareYourStoryReducer,
    userReducer
});