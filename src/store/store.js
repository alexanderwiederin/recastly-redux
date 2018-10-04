import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './../reducers/main.js';

// TODO:  Create your redux store, apply thunk as a middleware, and export it!

var store = createStore(rootReducer, applyMiddleware(thunk));
console.log(store.getState());

// var mapStateToProps = (state) => {
//   return {
//     videos: state.videoList,
//     currentVideo: state.currentVideo
//   };
// };

// var mapDispatchToProps = (dispatch) => {
  
// };

// var storeContainer = connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(App);

export default store;