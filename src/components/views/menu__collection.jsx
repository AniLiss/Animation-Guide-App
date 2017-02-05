import React, { Component } from 'react';

class MenuCollection extends Component {
    handler() {
        console.log('click');
    }
    render() {
        return (
            <ul className='menu__collection'>
                <li className='menu__collection-item menu__collection-item--active animation'>
                    <a href=''>Animation</a>
                    {/*onClick={::this.handler}*/}
                </li>
                <li className='menu__collection-item easing'>
                    <a href=''>Easing</a>
                </li>
            </ul>
        )
    }
}

export default MenuCollection;