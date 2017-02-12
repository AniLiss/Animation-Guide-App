import * as types from '../actions/action-types';

const usecaseData = {
  "animation-delay": [
    {
      id: 1,
      usecase_value: "0s",
      usecase_description: "The animation will wait <b>zero</b> seconds, and thus start right away."
    },
    {
      id: 2,
      usecase_value: "1.8s",
      usecase_description: "You can use decimal values in seconds with the keyword s"
    }
  ],
  "animation-direction": [
    {
      id: 3,
      "usecase_value": "normal",
      "usecase_description": "The animation will wait zero seconds, and thus start right away."
    },
    {
      id: 4,
      "usecase_value": "reverse",
      "usecase_description": "You can use decimal values in seconds with the keyword s"
    }
  ],
  "animation-duration": [
  {
    id: 5,
    usecase_value: "5800s",
    usecase_description: "You can use milliseconds instead of seconds, with the keyword ms"
  },
  {
    id: 6,
    usecase_value: "-800s",
    usecase_description: "You can use negative values: the animation will start as if it had already been playing for 500ms"
  }],
  "animation-timing-function": [
    {
      id: 7,
      usecase_value: "linear",
      usecase_description: "The animation has a *constant speed."
    },
    {
      id: 8,
      usecase_value: "ease",
      usecase_description: "The animation starts slowly, accelerates in the middle, and slows down at the end."
    },
    {
      id: 9,
      usecase_value: "ease-in",
      usecase_description: "The animation starts slowly, and accelerates gradually until the end."
    },
  ]
}

const initialState = {
  use_cases: usecaseData
}

export default function usecaseReducer(state = initialState, action) {

  switch (action.type) {

    case types.LOAD_USECASE:
      return {
        ...state,
        use_cases: usecaseData[action.title]
      };
    default:
      return state;
  }
}
