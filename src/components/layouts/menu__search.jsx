import React, {Component} from 'react';
import SearchInput from '../views/search__input';
import SearchList from '../views/search__list';

class MenuSearch extends Component {
    render() {
        return (
            <div className="search menu__search">
                <SearchInput />
                <SearchList />
            </div>
        )
    }
}

export default MenuSearch;