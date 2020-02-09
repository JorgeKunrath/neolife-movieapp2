import React, { Component } from 'react';

import api from '../services/api'
console.log(api.get('movie_details.json'));

export default class CategoryItens extends Component {
  state = {
    catList: [
      'oi',
      'oi2',
      'oi3',
      'oi4',
      'aqui vai o jason'
    ]
  };

  handleClick = e => {
    console.log('oi');
  }

  render() {
    return (
      <>
        {this.state.catList.map(cat => (
          <li className="light" key={cat} onClick={this.handleClick}>{cat}</li>
        ))}
      </>
    );
  }
}