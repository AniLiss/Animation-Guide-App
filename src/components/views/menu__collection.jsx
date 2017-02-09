import React, { Component } from 'react';
import { Link } from 'react-router';

class MenuCollection extends Component {
    handler() {
        console.log('click');
    }
    render() {
        return (
            <ul className='menu__collection'>
                <li className='menu__collection-item menu__collection-item--active animation'>
                    <Link to='/'>Animation</Link>
                </li>
                <li className='menu__collection-item easing'>
                    <Link to='/easing'>Easing</Link>
                </li>
            </ul>
        )
    }
}

export default MenuCollection;