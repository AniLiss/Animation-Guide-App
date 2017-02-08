import { createStore } from 'redux';
import reducers from './reducers';

const initialState = {
    selectedSection: null,
    description: null,
    sections: {
        [ANIMATION]: [{
            title: 'animation-delay',
            link: 'animation_delay'
        }, {
            title: 'animation-direction',
            link: 'animation_delay'
        },],
        [EASING]: [{
            title: 'easing-funcion'
        }]
    }
}

const store = createStore(reducers);
export default store;
