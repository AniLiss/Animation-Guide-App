import React, {Component} from 'react';
import {Link} from 'react-router';

import animatableProperties from '../../data/propsData.json';

export default class AnimatablePropertiesPage extends Component {
    render() {
        return (
            <div className="animatable-props">
                <Link to="/" className="button button--close"></Link>

                <ul className="animatable-props__list">
                    {animatableProperties.animatable_properties.map((aProp) => {
                        return <li key={aProp.prop_name}>
                            <a href={aProp.link} className="propLink">{aProp.prop_name}</a>
                        </li>
                        }
                    )}
                </ul>
            </div>
        );
    }
}
