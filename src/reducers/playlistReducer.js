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
    id: "ubkWrjeCNGI",
    title: "BURNS - When I'm Around U",
    artist: " BURNS",
    url: "https://www.youtube.com/watch?v=ubkWrjeCNGI"
  },
  {
    id: "Nt4fp43U2ys",
    title: "Sunny Days",
    artist: " Armin van Buuren",
    url: "https://www.youtube.com/watch?v=Nt4fp43U2ys"
  },
  {
    id: "2WEKaVNO",
    title: "[MV] MAMAMOO(마마무) _ Egotistic(너나 해)",
    artist: " MAMAMOO",
    url: "https://www.youtube.com/watch?v=pHtxTSiPh5I"
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