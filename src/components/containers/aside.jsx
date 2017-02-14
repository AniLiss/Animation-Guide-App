import React, {Component} from 'react';
// import logo from '../../img/logo1.svg';
import MenuCollection from '../views/menu__collection';
import MenuSearch from '../layouts/menu__search'

class Aside extends Component {
  render() {
    return (
      <aside className="menu">
        <div className="header__logo-wrapper">
          <div className='logo'>
            {/*<img src={logo} alt='logo'/>*/}
          </div>
        </div>

          <MenuCollection />

          <MenuSearch search_item={this.props.items}/>
      </aside>
      )
  }
}

export default Aside;