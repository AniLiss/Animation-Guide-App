import React, {Component} from 'react';
import UsecaseLayout from '../layouts/usecase-layout';

class Property extends Component {
    render() {
        return (
            <section className="property" id={this.props.name}>
                <header className="property__header">
                    <h2 className="property__name">
                        <a href="#"><span>#</span>{this.props.name}</a>
                    </h2>

                    <button className="button button--purple">Play</button>

                    <div className="property__description">
                        <p>Defines how long the animation has to wait before <strong>starting</strong>.
                            The animation will only be delayed on its <em>first</em> iteration.</p>
                    </div>

                </header>
                <UsecaseLayout name={this.props.name} />
            </section>
        )
    }
}

export default Property;