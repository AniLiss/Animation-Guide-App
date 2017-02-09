import React, {Component} from 'react';
import {Link} from 'react-router';

class HeaderContent extends Component {
    render() {
        return (
          <header className='header'>
            <div className='header-content-wrapper'>
              <div className='header-content'>
                <h2 className='header-content__title'>
                    <strong>{this.props.title}</strong> in CSS
                </h2>
                <p className="header-description" >
                  {this.props.desc}
                </p>
                <Link to="/animatable-properties" className="button button--aqua">Animatable properties</Link>
              </div>
            </div>
          </header>
        );
    }
}

                

export default HeaderContent;