import React, {Component} from 'react';
import '../../style/style.css'

// Defines are class component SearchBar
class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {term: '', placeholder: 'Search for Videos'}
  }

  render() {
    return (
      <div className="search-bar">
        <input
          value={this.state.term}
          placeholder={this.state.placeholder}
          onChange={event => this.onInputChange(event.target.value)} />
      </div>
    );
  }

  onInputChange(term) {
    this.setState({term});
    this.props.onSearchTermChange(term);
  }
}

export default SearchBar;