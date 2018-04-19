import React, {Component} from 'react';

class SearchBar extends Component {
    render() {
        return (
            <div className="SearchBar">
                <input onChange={this.onInputChange}/>
            </div>
        );
    }

    onInputChange(event) {
        console.log(event.target.value);
    };
}

export default SearchBar;