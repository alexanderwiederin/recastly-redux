import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './../reducers/main.js';
import exampleVideoData from '../data/exampleVideoData.js';


var store = createStore(rootReducer, {videoList: exampleVideoData, currentVideo: exampleVideoData[0]}, applyMiddleware(thunk));

export default store;