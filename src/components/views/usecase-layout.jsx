/**
 * Created by user on 11.02.2017.
 */
import React, {Component} from 'react';
import {connect} from 'react-redux';

const mapStateToProps = function (store, props) {
    const allUseCases = store.usecaseState.use_cases;

    return {
        use_cases: allUseCases[props.name]
    };
};



class UsecaseLayout extends Component {

    componentDidMount() {
        let propertiesContainer = document.querySelector('.properties');
        // let propertyContainer = propertiesContainer.querySelectorAll('.property');
        let animateBtn = propertiesContainer.querySelector('.button');
        // let animatedObject = propertyContainer.querySelectorAll('.property__animated-object');

        let animateProperty = function (e) {
            let propContainer = e.target.parentNode.parentNode;
            let animatedObject = propContainer.querySelectorAll('.property__animated-object');
            for (let i = 0; i < animatedObject.length; i++ ) {
                animatedObject[i].classList.toggle('property__animated-object--is-animated');
            }
        }

        animateBtn.addEventListener('click', animateProperty);
    }

    shouldComponentUpdate() {
        let propertiesContainer = document.querySelector('.properties');
        // let propertyContainer = propertiesContainer.querySelectorAll('.property');
        let animateBtn = propertiesContainer.querySelector('.button');
        // let animatedObject = propertyContainer.querySelectorAll('.property__animated-object');

        let animateProperty = function (e) {
           let propContainer = e.target.parentNode.parentNode;
           let animatedObject = propContainer.querySelectorAll('.property__animated-object');
           for (let i = 0; i < animatedObject.length; i++ ) {
               animatedObject[i].classList.toggle('property__animated-object--is-animated');
           }
        }

        animateBtn.addEventListener('click', animateProperty);
    }

    render() {
        return (
            <div className="property__use-case-list">
                {this.props.use_cases.map((a) => {
                    return (
                        <div className={"property__use-case " + a.id} key={a.id}>
                            <div className="property__use-case-info">
                                <div className="property__use-case-header">
                                    <copy-button class="property__use-case-name" data-tooltip="Click to copy"
                                                 target-text={this.props.name + ": " + a.usecase_value + ";"}>{this.props.name}: {a.usecase_value};
                                    </copy-button>
                                </div>

                                <ul className="property__use-case-description">
                                    <li>{a.usecase_description}</li>
                                </ul>
                            </div>
                            <div className="property__use-case-preview">
                                <div className="property__preview-frame">
                                    <i></i>
                                    <i></i>
                                    <i></i>
                                </div>
                                <div className="property__preview-output">
                                    <div className="property__animated-object">
                                        <div className='dino'></div>
                                        <div className='eye'></div>
                                        <div className='jaw'></div>
                                        <div className='ground'></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })
                }
            </div>
        );
    }
}
export default connect(mapStateToProps)(UsecaseLayout);
