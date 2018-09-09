import {
  ActionTypes
} from 'constants/constants';

const initialState = [{
    id: "a4vhAoFG",
    title: "Beyoncé - Drunk in Love (Explicit) ft. JAY Z",
    artist: "Beyoncé",
    url: "https://www.youtube.com/watch?v=p1JPKLa-Ofc"
  },
  {
    id: "2WEKaVNO",
    title: "Maroon 5 - Girls Like You ft. Cardi B",
    artist: "Maroon 5",
    url: "https://www.youtube.com/watch?v=aJOTlE1K90k"
  }
];


export default (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.addVideo:
      return [
        ...state,
        action.newVideo
      ];
    default:
      return state;
  }
};