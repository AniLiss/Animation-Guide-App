import React, {Component} from 'react';
import {connect} from 'react-redux';
import store from '../../store';
import Aside from './aside';
import HeaderContent from '../views/header-content';
import LayoutContainer from  './layout-container';
import {loadLayoutContainer} from '../../actions/header-actions';

const mapStateToProps = function(store) {
  return {
    selected_section: store.contentState.selected_section,
    sections: store.contentState.sections
  };
};

class EasingLayout extends Component {

  componentDidMount() {
    store.dispatch(loadLayoutContainer('easing'));
  }

  render() {

      let easing_sections = this.props.sections;

    return (
      <div>
          <HeaderContent title='Easing'
                         desc='The CSS properties that allow you to animate almost any other property' />

          <main className="main">
              <Aside items={easing_sections}/>
              <LayoutContainer sections={easing_sections} id={this.props.selected_section}/>
          </main>
      </div>
      );
  }
}

export default connect(mapStateToProps)(EasingLayout);