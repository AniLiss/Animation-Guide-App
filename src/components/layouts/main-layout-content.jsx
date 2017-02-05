/**
 * Created by user on 04.02.2017.
 */
import React, {Component} from 'react';
import Aside from '../containers/aside';
import Header from '../containers/header';
import Layout from '../containers/layout-content';

class MainLayout extends Component {
    render() {
        return (
            <section>
                <Aside/>
                <Header/>
                <Layout/>
            </section>
        );
    }
}
export default MainLayout;