import React, {Component} from 'react';
import {Link} from 'react-router';

class HeaderContent extends Component {
    render() {
        return (
            <header className='header'>
                <div className='header-content-wrapper'>
                    <div className='header-content'>
                        <h1 className='header-content__title'>
                            <strong>{this.props.title}</strong> in CSS
                        </h1>
                        <p className="header-content__description">
                            {this.props.desc}
                        </p>
                    </div>
                    <Link to="/animatable-properties" className="button button--aqua">Animatable properties</Link>
                </div>
            </header>
        );
    }
}

export default HeaderContent;