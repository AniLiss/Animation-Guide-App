import React, {Component} from 'react';
import Aside from '../containers/aside';
import HeaderContent from '../layouts/header-content';

class EasingLayout extends Component {
  render() {
    return (
      <section>
        <Aside />
        <HeaderContent title='Easing' desc='The CSS properties that allow you to animate almost any other property' />
      </section>
    );
  }
}
export default EasingLayout;