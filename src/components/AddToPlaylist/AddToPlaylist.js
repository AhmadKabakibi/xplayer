import React, { Component } from "react";
import shortid from "shortid";
import "./AddToPlaylist.css";

class AddToPlaylist extends Component {
  constructor(props) {
    super(props);
    const { video } = props;
    this.state = {
      ...video
    };
  }
  
  onSubmit(event) {
    event.preventDefault();
    const newVideo = {
      id: shortid.generate(),
      artist: this.state.artist,
      title: this.state.title,
      url: this.state.url
    };

    this.props.onSubmit(newVideo);
    return false;
  }

  render() {
    return (
      <div className="video-form">
        <p className="form__placeholder">
          You can add videos to your playlist from the below form
        </p>
        <form onSubmit={this.onSubmit.bind(this)} className="form">
          <label className="form__label">Title: </label>
          <input
            className="form__input"
            id="title"
            type="text"
            placeholder={this.state.title}
            onChange={event => {
              this.setState({
                title: event.target.value
              });
            }}
          />
          <label className="form__label">Artist: </label>
          <input
            className="form__input"
            id="artist"
            type="text"
            placeholder={this.state.artist}
            onChange={event => {
              this.setState({
                artist: event.target.value
              });
            }}
          />
          <label className="form__label">URL: </label>
          <input
            className="form__input"
            id="url"
            type="text"
            placeholder={this.state.url}
            onChange={event => {
              this.setState({
                url: event.target.value
              });
            }}
          />

          <div className="form__button-holder">
            <button className="form__button" type="submit">
              Add
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default AddToPlaylist;
