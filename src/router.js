/**
 * Created by user on 04.02.2017.
 */
import React from 'react';
import {Router, Route, browserHistory} from 'react-router';
import MainLayout from './components/layouts/main-layout-content';
import AnimatablePropertiesPage from './components/views/animatable-properties';

export default (
    <Router history={browserHistory}>
        <Route path="/" component={MainLayout}/>
        <Route path="animatable-properties" component={AnimatablePropertiesPage}/>
    </Router>
)
