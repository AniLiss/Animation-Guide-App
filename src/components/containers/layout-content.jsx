import React, {Component} from 'react';
import Properties from '../views/properties';
// import store from '../../store';
// import { loadLayoutContainer } from '../../actions/header-actions';



class LayoutContent extends Component {
    render() {
        return (
            <div className="layout-content">
                <Properties />
            </div>
        )
    }
}

export default LayoutContent;