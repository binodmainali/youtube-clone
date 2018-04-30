import React, { Component } from 'react';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
import YTSearch from 'youtube-api-search';
import './App.css';

const API_KEY = 'AIzaSyAgJgdya-tdVmwbCG3UagBC40AgUW7OJLY';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null
    };

    YTSearch({key: API_KEY, term: 'trending'}, (videos) => {
      // If the key and property has same variable name {videos: videos} is equivalent to { videos }
      // this.setState({ videos: videos })
      this.setState({
        videos: videos,
        selectedVideo: videos[3]
      });
    });

  }
  render() {
    return (
      <div className="App">
        <SearchBar />
        {
          /*
          Passing data to a component is known as passing props,
          comments has to be inside curly braces for HTML comments
         */
        }
        <VideoDetail video={this.state.selectedVideo}/>
        <VideoList videos={this.state.videos}/>
      </div>
    );
  }
}

export default App;
