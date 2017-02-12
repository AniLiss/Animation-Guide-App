import React, {Component} from 'react';
import logo from '../../img/logo.svg';
import MenuCollection from '../views/menu__collection';
import MenuSearch from '../layouts/menu__search'

class Aside extends Component {
  render() {
    return (
      <aside className="menu">
        <div className="header__logo-wrapper">
          <h1 className='logo'>
            <img src={logo} alt='logo'/>
          </h1>
        </div>

          <MenuCollection />

          <MenuSearch search_item={this.props.items}/>
      </aside>
      )
  }
}

export default Aside;