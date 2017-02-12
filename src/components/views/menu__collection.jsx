import React, { Component } from 'react';
import { Link } from 'react-router';

class MenuCollection extends Component {
    render() {
        return (
            <ul className='menu__collection'>
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