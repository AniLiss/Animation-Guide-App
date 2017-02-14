import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import store from './store';
import router from './router';
import './sass/style.scss';

ReactDOM.render(
  <Provider store={store}>{router}</Provider>,
  document.getElementById('root')
);

// var propertyUsecaseList = document.querySelectorAll('.property__use-case-list');
//
// for (let i = 0; i < propertyUsecaseList.length; i++) {
//   propertyUsecaseList[i].childNodes[0].querySelector('.property__animated-object').classList.add('property__animated-object--default');
// }
