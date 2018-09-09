import React from "react";
import { connect } from "react-redux";

import "./Video.css";

const Video = ({ video }) => {
  return (
    <div className="video">
      <span className="video__title">{video.title}</span>
      <div className="video__bar">
        <span className="video__artist">{video.artist}</span>
      </div>
    </div>
  );
};

export default connect(state => {
  return state;
})(Video);
