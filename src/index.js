import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import router from './router';

ReactDOM.render(
    <Provider store={store}>{router}</Provider>,
    document.getElementById('root')
);
// if (module.hot) {
//   module.hot.accept({router}, () => {
//     const NextApp = require({router}).default;
//     ReactDOM.render(
//       <NextApp />,
//       document.getElementById('root')
//     );
//   });
// }
