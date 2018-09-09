import React from "react";
import Video from "components/Video";

import "./Playlist.css";

const Playlist = ({ videos }) => (
  <ul className="videos-list">
    {videos.map(video => (
      <li className="videos-list__item" key={video.id}>
        <Video video={video} />
      </li>
    ))}
  </ul>
);

export default Playlist;
