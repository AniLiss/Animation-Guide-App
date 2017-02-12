import React, {Component} from 'react';
import {connect} from 'react-redux';
import store from '../../store';
import Aside from '../containers/aside';
import HeaderContent from '../layouts/header-content';
import LayoutContainer from  '../containers/layout-container';
import {loadLayoutContainer} from '../../actions/header-actions';

const mapStateToProps = function (store) {
    return {
        selected_section: store.contentState.selected_section,
        sections: store.contentState.sections
    };
};

class AnimationLayout extends Component {
    componentDidMount() {
        store.dispatch(loadLayoutContainer('animation'));
    }

    render() {

        let animation_sections = this.props.sections;

        return (
            <div>
                <HeaderContent title='Animation'
                               desc='The CSS properties that allow you to animate almost any other property'/>

                <main className="main">
                    <Aside items={animation_sections}/>

                    <LayoutContainer sections={animation_sections} id={this.props.selected_section}/>

                </main>
            </div>
        );
    }
}

export default connect(mapStateToProps)(AnimationLayout);
