const usecaseData = {
  "animation-delay": [
    {
      id: "a_delay-s",
      usecase_value: "0s",
      usecase_description: "The animation will wait zero seconds, and thus start right away."
    },
    {
      id: "a_delay-ms",
      usecase_value: "2500ms",
      usecase_description: "You can use decimal values in seconds with the keyword s"
    }
  ],
  "animation-direction": [
    {
      id: "a_direction-normal",
      "usecase_value": "normal",
      "usecase_description": "The animation will wait zero seconds, and thus start right away."
    },
    {
      id: "a_direction-reverse",
      "usecase_value": "reverse",
      "usecase_description": "You can use decimal values in seconds with the keyword s"
    }
  ],
  "animation-duration": [
    {
      id: "a_duration-s",
      usecase_value: "8s",
      usecase_description: "You can use milliseconds instead of seconds, with the keyword ms"
    },
    {
      id: "a_duration-ms",
      usecase_value: "5800ms",
      usecase_description: "You can use negative values: the animation will start as if it had already been playing for 500ms"
    }],
  "animation-timing-function": [
    {
      id: "atf-linear",
      usecase_value: "linear",
      usecase_description: "The animation has a *constant speed."
    },
    {
      id: "atf-ease",
      usecase_value: "ease",
      usecase_description: "The animation starts slowly, accelerates in the middle, and slows down at the end."
    },
    {
      id: "atf-ease-in",
      usecase_value: "ease-in",
      usecase_description: "The animation starts slowly, and accelerates gradually until the end."
    },
  ]
}

const initialState = {
  use_cases: usecaseData
}

export default function usecaseReducer(state = initialState) {
  return state;
}
