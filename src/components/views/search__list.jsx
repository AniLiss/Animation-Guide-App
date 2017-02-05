import React, { Component } from 'react';

class SearchList extends Component {
    render() {
        return (
            <ul className="search__list" id="animation-properties">
                <li className="search__item" >
                    <a href="#" data-hover="animation-delay">animation-delay</a>
                </li>
                <li className="search__item">
                    <a href="#" data-hover="animation-direction">animation-direction</a>
                </li>
                <li className="search__item">
                    <a href="#" data-hover="animation-delay">animation-delay</a>
                </li>
                <li className="search__item" data-hover="animation-direction">
                    <a href="#" data-hover="animation-direction">animation-direction</a>
                </li>
                <li className="search__item">
                    <a href="#" data-hover="animation-delay">animation-delay</a>
                </li>
                <li className="search__item" data-hover="animation-direction">
                    <a href="#" data-hover="animation-direction">animation-direction</a>
                </li>
                <li className="search__item">
                    <a href="#"  data-hover="animation-timing-function">animation-timing-function</a>
                </li>
            </ul>
        )
    }
}

export default SearchList;