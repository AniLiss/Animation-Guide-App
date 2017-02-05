import React, {Component} from 'react';
import {Link} from 'react-router';
import HeaderContentTitle from '../views/header-content__title';
import HeaderContentDescription from '../views/header-content__description';

class HeaderContent extends Component {
    render() {
        return (
            <div className='header-content'>
                <HeaderContentTitle />
                <HeaderContentDescription />
                <Link to="/animatable-properties" className="button button--aqua">Animatable properties</Link>
            </div>
        )
    }
}

export default HeaderContent;