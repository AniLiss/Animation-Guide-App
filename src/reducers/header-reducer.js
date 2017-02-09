import * as types from '../actions/action-types';

const initialState = {
  selected_section: '',
  sections: {
    animation : [{
      title: 'animation-delay',
      link: 'animation_delay'
    }, {
      title: 'animation-direction',
      link: 'animation_delay'
    }, {
      title: 'animation-duration',
      link: 'animation_duration'
    }],
    easing : [{
      title: 'easing-funcion'
    }]
  }
};


export default function contentReducer(state = initialState, action) {

  switch (action.type) {

    case types.LOAD_CONTENT:
    return Object.assign({}, state, {
      selected_section: action.title
    });

    default:
    return state;
  }
}
