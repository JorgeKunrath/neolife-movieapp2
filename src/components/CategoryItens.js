import React, { Component } from 'react';

import api from '../services/api'
import Axios from 'axios';
// const data = await () => console.log(api.get('movie_details.json'));

// async function getData() {
//   console.log("oisss");
// };

// //-----------------------------------
// // FUNCIONOU!!! em parte, não fui a fundo
// // Replace ./data.json with your JSON feed
// fetch('https://yts.mx/api/v2/movie_details.json')
//   .then(response => {
//     return response.json(console.log(response))
//   })
//   .then(data => {
//     // Work with JSON data here
//     console.log(data)
//   })
//   .catch(err => {
//     // Do something for an error here
//   })
// //-----------------------------------


export default class CategoryItens extends Component {
  state = {
    catList: [
      "Action",
      "Adult",
      "Adventure",
      "Animation",
      "Biography",
      "Comedy",
      "Crime",
      "Documentary",
      "Drama",
      "Family",
      "Fantasy",
      "Film Noir",
      "Game-Show",
      "History",
      "Horror",
      "Musical",
      "Music",
      "Mystery",
      "News",
      "Reality-TV",
      "Romance",
      "Sci-Fi",
      "Short",
      "Sport",
      "Talk-Show",
      "Thriller",
      "War",
      "Western"
    ]
  };

  // não tá funcionando não...
  // https://yts.mx/api/v2/movie_details.json
  // https://jsonplaceholder.typicode.com/users
  // esta url busca corretamente por DRAMA https://yts.mx/api/v2/list_movies.json?genre=drama
  // componentDidMount() {
  //   Axios.get(`https://jsonplaceholder.typicode.com/users`)
  //     .then(res => {
  //       // this.setState({ catList: res.data });
  //       console.log(res);
  //     })
  // }
 
  // alguma coisa assim depois para atualizar a lista de filmes, n sei...
  // handleClick = e => {
  //   console.log(api.get('movie_details.json'));
  // }
  // onClick={this.handleClick}

  render() {
    return (
      <>
        {this.state.catList.map(cat => (
          <li className="light" key={cat}>{cat}</li>
        ))}
      </>
    );
  }
}