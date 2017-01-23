/*eslint-disable import/default */
// Polyfills
import 'babel-polyfill';

// React
import React from 'react';
import {render} from 'react-dom';

// Redux
import {Provider} from 'react-redux';
import configureStore from './store/configureStore';

// Router
import {Router, browserHistory} from 'react-router';
import routes from './routes';

// Actions
import {loadCourses} from './actions/courseActions';
import {loadAuthors} from './actions/authorActions';

// Styles
import './styles/styles.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/toastr/build/toastr.min.css';

// react-intl
import {addLocaleData} from 'react-intl';
import {IntlProvider, intlReducer} from 'react-intl-redux';
import en from 'react-intl/locale-data/en';
import ar from 'react-intl/locale-data/ar';

// // Our translated strings
// import localeData from './../../build/locales/data.json';

addLocaleData([
  ...en,
  ...ar
]);


// Define user's language. Different browsers have the user locale defined
// on different fields on the `navigator` object, so we make sure to account
// for these different by checking all of them
// const language = (navigator.languages && navigator.languages[0]) || navigator.language || navigator.userLanguage;

// // Split locales with a region code
// const languageWithoutRegionCode = language.toLowerCase().split(/[_-]+/)[0];

// // Try full locale, try locale without region code, fallback to 'en'
// const messages = localeData[languageWithoutRegionCode] || localeData[language] || localeData.en;

const store = configureStore();
store.dispatch(loadCourses());
store.dispatch(loadAuthors());

render(
  <Provider store={store}>
    <IntlProvider locale="en">
      <Router history={browserHistory} routes={routes}/>
    </IntlProvider>
  </Provider>,
  document.getElementById('app')
);
