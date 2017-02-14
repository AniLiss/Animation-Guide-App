import React, { Component } from 'react';
import { Link } from 'react-router';

class MenuCollection extends Component {
    toggleMenu = function (e) {
        console.log('t');
        console.log(e.target);
        console.log('ct');
        console.log(e.currentTarget);
        let menuCollection = document.querySelector('.menu__collection');
        for (var i = 0; i < menuCollection.childNodes.length; i++) {
            menuCollection.childNodes[i].classList.remove('menu__collection-item--active');
            console.log( menuCollection.childNodes[i]);
        }
        e.target.parentNode.classList.add('menu__collection-item--active');
    }

//     menuCollection.addEventListener('click', function (e) {
//   for (var i = 0; i < menuCollection.childNodes.length; i++) {
//     menuCollection.childNodes[i].classList.remove('menu__collection-item--active');
//     console.log( menuCollection.childNodes[i]);
//   }
//   e.target.parentNode.classList.add('menu__collection-item--active');
// });

    render() {
        return (
            <ul className='menu__collection' onClick={this.toggleMenu}>
                <li className='menu__collection-item menu__collection-item--active'>
                    <Link to='/'>Animation</Link>
                </li>
                <li className='menu__collection-item'>
                    <Link to='/easing'>Easing</Link>
                </li>
            </ul>
        )
    }
}

export default MenuCollection;