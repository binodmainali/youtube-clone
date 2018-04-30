import _ from 'lodash';
import React, { Component } from 'react';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
import YTSearch from 'youtube-api-search';
import '../style/style.css'

const API_KEY = 'AIzaSyAgJgdya-tdVmwbCG3UagBC40AgUW7OJLY';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null
    };
    this.videoSearch('trending');
  }

  videoSearch(term) {
    YTSearch({key: API_KEY, term: term}, (videos) => {
      // If the key and property has same variable name {videos: videos} is equivalent to { videos }
      // this.setState({ videos: videos })
      this.setState({
        videos: videos,
        selectedVideo: videos[3]
      });
    });
  }

  render() {
    const videoSearch = _.debounce((term) => { this.videoSearch(term) }, 300)


    return (
      <div>
        <SearchBar onSearchTermChange={videoSearch} />
        {
          /*
          Passing data to a component is known as passing props,
          comments has to be inside curly braces for HTML comments
         */
        }
        <div className="container">
          <div className="row">
            <VideoDetail video={this.state.selectedVideo}/>
            <VideoList
              onVideoSelect={ selectedVideo => this.setState({selectedVideo}) }
              videos={this.state.videos}/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
