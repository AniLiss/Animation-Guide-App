/**
 * Created by user on 04.02.2017.
 */
import React from 'react';
import {Router, Route, browserHistory} from 'react-router';
import AnimationLayout from './components/containers/animation-layout';
import EasingLayout from './components/containers/easing-layout';
import AnimatablePropertiesPage from './components/views/animatable-properties';
import MainPage from './components/views/main-page';

export default (
    <Router history={browserHistory}>
      <Route path="/" component={MainPage} />
      <Route path="/animation" component={AnimationLayout} />
      <Route path="/easing" component={EasingLayout} />
      <Route path="/animatable-properties" component={AnimatablePropertiesPage} />
    </Router>
)
