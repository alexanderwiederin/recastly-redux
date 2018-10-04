import React from 'react';
import VideoListContainer from '../containers/VideoListContainer.js';
import VideoPlayerContainer from '../containers/VideoPlayerContainer.js';
import Nav from './Nav.js';
import store from '../store/store.js';

var App = () => (
  <div>
    <Nav />
    <div className="row">
      <div className="col-md-7">
        <VideoPlayerContainer/>
      </div>
      <div className="col-md-5">
        <VideoListContainer/>
      </div>
    </div>
  </div>
);

export default App;


