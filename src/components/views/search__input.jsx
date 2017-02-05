import React, { Component } from 'react';

class SearchInput extends Component {
    render() {
        return (
            <div className="search__input">
                <input type="search" autoComplete="off" placeholder="Search for a property" />
            </div>
        )
    }
}

export default SearchInput;