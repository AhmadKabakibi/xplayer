import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { compose } from "recompose";
import AddToPlaylist from "components/AddToPlaylist";
import { addVideo } from "actions/PlaylistActions";
import * as routes from "constants/routes";

class NewVideo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      video: {
        title: "title",
        artist: "artist name",
        url: "video url"
      }
    };
  }

  onSubmit(video) {
    
    this.props.addVideo(video, this.props.video);
    this.props.history.push(routes.VIDEOS);
  }

  render() {
    const { video } = this.state;
    return <AddToPlaylist onSubmit={this.onSubmit.bind(this)} video={video} />;
  }
}

const mapStateToProps = state => ({
  playList: state
});

const mapDispatchToProps = dispatch => ({
  addVideo: video => dispatch(addVideo(video))
});

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  ),
  withRouter
)(NewVideo);
