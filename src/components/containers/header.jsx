import React, {Component} from 'react';
import { connect } from 'react-redux';
import headerApi from '../../api/header-api';
// import logo from '../../img/logo.svg';
// import  './header.css';
import HeaderContent from '../layouts/header-content';
// import { createStore } from 'redux';

class Header extends Component {
    componentDidMount() {
    headerApi.getHeaderContent();
    store.dispatch(loadHeaderContent());
},
    render() {
        return (
            <header className='header'>
                <div className='header-content-wrapper'>
                    {/*<HeaderContent />*/}
                    {headerApi.getHeaderContent();}

                </div>
            </header>
        )
    }
}

// function counter(state = 0, action) {
//     switch (action.type) {
//         case 'INCREMENT':
//             return state + 1
//         case 'DECREMENT':
//             return state - 1
//         default:
//             return state
//     }
// }
// let store = createStore(counter);
//
// store.subscribe(() =>
//     console.log(store.getState())
// )
//
// store.dispatch({ type: 'INCREMENT' })
// // 1
// store.dispatch({ type: 'INCREMENT' })
// // 2
// store.dispatch({ type: 'DECREMENT' })
// // 1

export default Header;