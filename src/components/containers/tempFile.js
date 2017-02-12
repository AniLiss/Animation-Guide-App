import React, { Component } from 'react';

class ItemList extends Component {
  constructor() {
    super();

    this.state = {
      animation : [{
        title: 'animation-delay',
        link: 'animation_delay'
      }, {
        title: 'animation-direction',
        link: 'animation_delay'
      },{
        title: 'animation-delay1',
        link: 'animation_delay'
      }, {
        title: 'animation-direction1',
        link: 'animation_delay'
      }]
    };
  }

  render() {
    if (this.state.hasErrored) {
      return <p>Sorry! There was an error loading the items</p>;
    }

    if (this.state.isLoading) {
      return <p>Loading…</p>;
    }

    return (
      <ul>
      {this.state.animation.map((item) => (
        <li key={item.title}>
        {item.title}
        </li>
        ))}
      </ul>
      );
  }
}

export default ItemList;


// "start": "react-scripts start",
//   "build": "react-scripts build",
//   "test": "react-scripts test --env=jsdom",
//   "eject": "react-scripts eject"
