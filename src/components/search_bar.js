import React, {Component} from 'react';

// Defines are class component SearchBar
class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {term: '', placeholder: 'Search for Videos'}
  }

  render() {
    return (
      <div className="SearchBar">
        <input
          value={this.state.term}
          placeholder={this.state.placeholder}
          onChange={event => this.setState({ term: event.target.value  })}/>
      </div>
    );
  }
}

export default SearchBar;