import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import * as routes from "constants/routes";
import Playlist from "components/Playlist";

import YTVideoPlayer from "components/YTVideoPlayer";
//TODO modify VideoPlayer components with native events onEnd
//import VideoPlayer from "components/VideoPlayer";


import logo from "./logo.svg";
import "./MainPage.css";

class MainPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      videos: Object.values(props.videos)[0],
      videoIndex: 0
    };
  }

  repeatVideoPlayer (index) {
    const { videos } = this.state;
    let videoIndex = index;
    if (videoIndex < 0) {
      videoIndex = videos.length - 1;
    } else if (videoIndex >= videos.length) {
      videoIndex = 0;
    }
    this.setState({
      videoIndex
    });
  }

  render() {
    const { videos } = this.state;
    const currentVideo = videos[this.state.videoIndex];
    return (
      <div className="app">
        <header className="app-header">
          <img src={logo} className="app-logo" alt="logo" />
          <h1 className="app-title">XPlayer</h1>
        </header>
        <div className="app__videos">
          {/* <VideoPlayer video={currentVideo} width={560} height={315} onEnded={this.repeatVideoPlayer.bind(this)} /> */}
          <YTVideoPlayer video={currentVideo} onEnd={this.repeatVideoPlayer.bind(this, this.state.videoIndex + 1)} />
          {videos ? <Playlist videos={videos} /> : null}
        </div>
        <div className="button__holder">
          <Link className="link__button" to={routes.NEW_VIDEO}>
            Add to Playlist
          </Link>
        </div>
      </div>
    );
  }
}

export default connect(state => {
  return {
    videos: state
  };
})(MainPage);
