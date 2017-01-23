import {combineReducers} from 'redux';
import courses from './courseReducer';
import authors from './authorReducer';
import ajaxCallsInProgress from './ajaxStatusReducer';
import {intlReducer} from 'react-intl-redux';

const rootReducer = combineReducers({
  courses,
  authors,
  ajaxCallsInProgress,
  intlReducer
});

export default rootReducer;
