import React, { Component } from "react";
import { Link } from "react-router-dom";
// css files

// import Book from "./book";

class Home extends Component {
  // imgfolder = "../epubs/covers/";
  state = {
    images: [
      {
        id: 0,
        addr: "aCoisa.jpg",
        titulo: "A coisa ",
        autor: "Stephen King",
        texto: "teste, isso é um teste, obrigado por testar o teste"
      },
      {
        id: 1,
        addr: "harryPotter.jpg",
        titulo: "Harry Potter - A ordem da fênix",
        autor: "J. K. Rowling",
        texto: "teste, isso é um teste, obrigado por testar o teste"
      },
      {
        id: 2,
        addr: "paraTodos.jpg",
        titulo: "Para todos os garotos que já amei",
        autor: "Jenny Han",
        texto: "teste, isso é um teste, obrigado por testar o teste"
      }
    ]
  };

  render() {
    return (
      <div>
        <div className="card-deck">
          {this.state.images.map(img => (
            <div key={img.id} className="card">
              <Link to={`book/${img.id}`}>
                <img
                  className="card-img-top"
                  // height="350px"
                  // width="250px"
                  src={require(`../images/${img.addr}`)}
                  alt=""
                />
                <div className="card-body text-muted">
                  <h5 className="card-title">{img.titulo}</h5>
                  <p className="card-text">{img.texto}</p>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Home;
