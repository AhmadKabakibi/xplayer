import React from "react";
import PropTypes from "prop-types";
import YouTube from "react-youtube";

import "./YTVideoPlayer.css";

const VideoPlayer = props => {
  const { video } = props;
  const opts = {
    height: "315",
    width: "560",
    playerVars: {
      autoplay: 1
    }
  };
  return (
    <YouTube
      videoId={getIdFromVideoURL(video.url)}
      opts={opts}
      onEnd={() => props.onEnd()}
    />
  );
};

VideoPlayer.propTypes = {
  video: PropTypes.object.isRequired
};

const getIdFromVideoURL = videoURL => {
  let videoID = videoURL.split("v=")[1];
  var ampersandPosition = videoID.indexOf("&");  
  if(ampersandPosition !== -1) {
    videoID = videoID.substring(0, ampersandPosition);
  }
  return videoID;
};

export default VideoPlayer;
