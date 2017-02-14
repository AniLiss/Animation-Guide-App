import React, {Component} from 'react';
import UsecaseLayout from '../layouts/usecase-layout';

class Property extends Component {
    handlerOnClickToProp(evt) {
        evt.preventDefault();
        let element = evt.currentTarget;
        
        if (document.body.offsetWidth < 1000 && element.classList.contains('property--short')) {
            element.classList.remove('property--short');
        } else {
            element.classList.add('property--short');
        }
    }

    render() {
        return (
            <section className="property property--short" id={this.props.name} onClick={this.handlerOnClickToProp}>
                <header className="property__header">
                    <h2 className="property__name">
                        <a href="#" ><span>#</span>{this.props.name}</a>
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