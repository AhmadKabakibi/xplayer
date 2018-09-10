import React from "react";
import PropTypes from "prop-types";
import queryString from "query-string";
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
  const urlParts = videoURL.split("/");
  const idString = urlParts[urlParts.length - 1];
  const queryParams = queryString.extract(videoURL);
  return (queryParams && queryString.parse(queryParams).v) || idString || "";
};

export default VideoPlayer;
