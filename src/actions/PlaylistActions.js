import { ActionTypes } from 'constants/constants';

export function addVideo(newVideo) {
  return {
    type: ActionTypes.addVideo,
    newVideo
  };
}
