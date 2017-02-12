import * as types from '../actions/action-types';

const myData = {
  "animation": [{
    title: 'animation-delay',
    link: 'animation_delay'
  }, {
    title: 'animation-direction',
    link: 'animation_delay'
  }, {
    title: 'animation-duration',
    link: 'animation_duration'
  }],

  easing: [{
    title: 'animation-timing-function'
  }]
};

const initialState = {
  selected_section: '',
  sections: []
}
export default function contentReducer(state = initialState, action) {

  switch (action.type) {

    case types.LOAD_CONTENT:
      return {...state,
        selected_section: action.title,
        sections: myData[action.title]
      };
    default:
      return state;
  }
}

// return Object.assign({}, state, {
//   selected_section: action.title
// });


