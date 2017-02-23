import {createStore, compose} from 'redux';
import {syncHistoryWithStore} from 'react-router-redux';
import {browserHistory} from 'react-router'

// Import the root reducers
import rootReducer from './reducers/index';

import comments from './data/comments.js';
import posts from './data/posts.js';

// create an object for default data
const defaultState = {
  posts,
  comments
};

const store = createStore(rootReducer, defaultState);

export const history = syncHistoryWithStore(browserHistory, store)

export default store
