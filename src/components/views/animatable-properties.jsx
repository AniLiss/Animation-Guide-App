import React, {Component} from 'react';
import {Link} from 'react-router';
import Logotype from './logotype';

import animatableProperties from '../../data/propsData.json';

export default class AnimatablePropertiesPage extends Component {
    render() {
        return (
            <div className="animatable-props">
                <div className="animatable-props__header">
                    <Logotype />
                    <Link to="/" className="button button--close"></Link>
                </div>
                <ul className="animatable-props__list">
                    {animatableProperties.animatable_properties.map((aProp) => {
                        return <li key={aProp.prop_name}>
                            <a href={aProp.link} data-hover={aProp.prop_name} className="custom-link">{aProp.prop_name}</a>
                        </li>
                        }
                    )}
                </ul>
            </div>
        );
    }
}
