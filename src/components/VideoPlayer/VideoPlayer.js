import React from "react";
import PropTypes from "prop-types";
import queryString from "query-string";

import "./VideoPlayer.css";

const VideoPlayer = props => {
  const { video, ...htmlTags } = props;
  const urlMap = new Map([
    ["youtube", "http://www.youtube.com/embed/"],
    ["vimeo", "http://player.vimeo.com/video/"]
  ]);
  const src = `${urlMap.get(getVideoProvider(video.url))}${getIdFromVideoURL(video.url)}`;

  return (
    <iframe
      title={video.title}
      src={src}
      frameBorder="0"
      id="player"
      allow="autoplay; encrypted-media"
      allowFullScreen={true}
      webkitallowfullscreen="true"
      mozallowfullscreen="true"
      {...htmlTags}
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

const getVideoProvider = videoURL => {
  const domain = videoURL.split("/")[videoURL.indexOf("//") < 0 ? 0 : 2].split(/[/?:#&]/)[0];
  const domainParts = domain.split(".");
  return domainParts.length === 3 ? domainParts[1] : domainParts[0];
};

export default VideoPlayer;
