import React from 'react';
import '../../style/style.css';

const VideoListItem = ({video, onVideoSelect}) => {
  // Passing key in {video} in function to VideoListItem will be same as declaring const video = props.video

  const imageUrl = video.snippet.thumbnails.default.url;
  return (
    <li onClick={() => onVideoSelect(video)} className="list-group-item">
      <div className="video-list media">
        <div className="media-left">
          <img className="media-object" src={imageUrl} alt=''/>
        </div>
        <div className="media-body">
          <div className="media-heading">
            {video.snippet.title}
          </div>
        </div>
      </div>
    </li>
  );
};

export default VideoListItem;