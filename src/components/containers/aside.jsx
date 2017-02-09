import React, {Component} from 'react';
import logo from '../../img/logo.svg';
import MenuCollection from '../views/menu__collection';
// import MenuSearch from '../layouts/menu__search'

class Aside extends Component {
  render() {
    return (
      <aside className="menu">
        <div className="header__logo-wrapper">
          <h1 className='logo'>
            <img src={logo} alt='logo'/>
          </h1>
        </div>
        <div className="search menu__search">
        
        <MenuCollection />
        <div className="search__input">
          <input type="search" autoComplete="off" placeholder="Search for a property" />
        </div>
        <ul className="search__list" id="animation-properties">
          {this.props.items.map((a) => {
            return <li className="search__item" key={a.title}>
              <a href="#" data-hover={a.title}>{a.title}</a>
            </li>
          } )}
        </ul>
        </div>
      </aside>
      )
  }
}

export default Aside;