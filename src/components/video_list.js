import React from 'react';
import VideoListItem from './video_list_item';
import '../../style/style.css'

// Defines a functional video list component
const VideoList = (props) => {
  // Class based component has to access props as **this.props**
  // Functional component can access props with just **props**

  const videoItems = props.videos.map((video) => {
    return <VideoListItem key={video.etag} video={video}/>
  });

  return (
    <ul className="col-md-4 list-group">
      {videoItems}
    </ul>
  )
}

export default VideoList;
