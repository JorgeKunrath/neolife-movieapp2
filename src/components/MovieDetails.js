import React, { Component } from 'react';

var title = "Título do Filme";
var resume = "Loki, o irmão de Thor, ganha acesso ao poder ilimitado do cubo cósmico ao roubá-lo de dentro das instalações da S.H.I.E.L.D. Nick Fury, o diretor desta agência internacional que mantém a paz, logo reúne os únicos super-heróis que serão capazes de defender a Terra de ameaças sem precedentes. Homem de Ferro, Capitão América, Hulk, Thor, Viúva Negra e Gavião Arqueiro formam o time dos sonhos de Fury, mas eles precisam aprender a colocar os egos de lado e agir como um grupo em prol da humanidade.";





export default class MovieDetails extends Component {
  state = {
    meta: {
      name: "nome",
      year: "2018",
      duration: "189min",
      genres: [
        "ação",
        "aventura",
        "drama"
      ],
      age: "18 anos"
    },
    links: [
      {
        linkName: "Avenger_pt-br_2019_720p.mp4",
        linkURI: "https://...",
      },
      {
        linkName: "Avenger_pt-br_2019_720p.mp4",
        linkURI: "https://...",
      },
      {
        linkName: "Avenger_pt-br_2019_720p.mp4",
        linkURI: "https://...",
      }
    ]
  }
  
  render() {
    return (
      <div className="movieModal">
        <span className="movieModal__closeButton"></span>
        <div className="movieModal__inner">
          <div className="movieModal__cover">
            <img src="https://media.fstatic.com/rI8vBW_6SVc5UcSCmkoS7xkiUqQ=/fit-in/290x478/smart/media/movies/covers/2018/10/2111570182.jpg" />
          </div>
          <div className="movieModal__content">
            <h1>{title}</h1>
            <div className="movieModal__meta">
              <span>Alfred Hitchcock</span>
              <span>2018</span>
              <span>139min</span>
              <span>ação, aventura, suspense</span>
              <span>18 anos</span>
            </div>
            <div className="movieModal__resume">
              <p>{resume}</p>
            </div>
            <div className="movieModal__links">
              <a href="" target="_blank" className="light">Avenger_pt-br_2019_720p.mp4</a>
              <a href="" target="_blank" className="light">Avenger_pt-br_2019_1080p.mp4</a>
              <a href="" target="_blank" className="light">Avenger_en_2019_1080p.mp4</a>
              <a href="" target="_blank" className="light">Avenger_en_2019_4k.mp4</a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}