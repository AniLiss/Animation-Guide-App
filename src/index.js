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

var propertyUsecaseList = document.querySelectorAll('.property__use-case-list');
// var toggleMenuBtn = document.querySelector('.menu__collection-item');
var menuCollection = document.querySelector('.menu__collection');

for (let i = 0; i < propertyUsecaseList.length; i++) {
  propertyUsecaseList[i].childNodes[0].querySelector('.property__animated-object').classList.add('property__animated-object--default');
}

// var toggleMenu = function toggleMenu(e) {
//   e.target.classList.toggle('.menu__collection-item--active');
// }

menuCollection.addEventListener('click', function (e) {
  for (var i = 0; i < menuCollection.length; i++) {
    menuCollection.childNodes[i].className.remove('menu__collection-item--active');
  }
  console.log(menuCollection.childNodes);
  e.target.parentNode.classList.add('menu__collection-item--active');
  console.log(e.target.parentNode);
});

var logo = document.querySelector('.logo');

logo.addEventListener('click', function (e) {

})
