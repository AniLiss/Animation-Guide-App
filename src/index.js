import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import router from './router';

// import Header from './components/containers/header';
// import Aside from './components/containers/aside';
// import LayoutContent from './components/containers/layout-content';

import router from './router';
// import './index.css';

ReactDOM.render(
    // (<div>
    //     <div>{router}</div>
    // {/*<Header />*/}
    // {/*<Aside />*/}
    // {/*<LayoutContent />*/}
    // </div>),
    // document.getElementById('root')
    <Provider store={store}>{router}</Provider>,
    document.getElementById('root')
);
