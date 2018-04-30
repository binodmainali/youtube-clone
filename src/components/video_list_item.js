import React from 'react';

const VideoListItem = ({video}) => {
  // Passing key in {video} in function to VideoListItem will be same as declaring const video = props.video

  const imageUrl = video.snippet.thumbnails.default.url;
  return (
    <li className="list-group-item">
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