import React, {Component} from 'react';
import { connect } from 'react-redux';
import Aside from '../containers/aside';
import HeaderContent from '../layouts/header-content';
import store from '../../store';
import { loadLayoutContainer } from '../../actions/header-actions';


const mapStateToProps = function(store) {
  return {
    selected_section: store.contentState.selected_section,
    sections: store.contentState.sections.easing
  };
};

class EasingLayout extends Component {

  componentDidMount() {
    store.dispatch(loadLayoutContainer('easing'));
  }
  
  render() {
    return (
      <section>
        <Aside items={this.props.sections}/>
        <HeaderContent title='Easing' desc='The CSS properties that allow you to animate almost any other property' />
        <div>    
          {this.props.sections.map((a) => {
            return <p key={a.title}>{a.title}</p>
          } )}
        </div>
      </section>
      );
  }
}
export default connect(mapStateToProps)(EasingLayout);