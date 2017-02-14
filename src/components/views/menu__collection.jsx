import React, { Component } from 'react';
import { Link, withRouter } from 'react-router';

class MenuCollection extends Component {
    generateItemClassName(activePath) {
        if (this.props.location.pathname === activePath) {
            return 'menu__collection-item menu__collection-item--active';
        } else {
            return 'menu__collection-item';
        }
    }

    render() {
        return (
            <ul className='menu__collection'>
                <li className={this.generateItemClassName('/animation')}>
                    <Link to='/animation'>Animation</Link>
                </li>
                <li className={this.generateItemClassName('/easing')}>
                    <Link to='/easing'>Easing</Link>
                </li>
            </ul>
        )
    }
}

export default withRouter(MenuCollection);