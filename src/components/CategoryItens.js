import React, { Component } from 'react';

import api from '../services/api'


export default class CategoryItens extends Component {
  state = {
    catList: [
      'osi',
      'oi2',
      'oi3',
      'oi4',
      'aqui vai o jason'
    ]
  };

  handleClick = e => {
    console.log('oi');
    console.log(api.get());
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