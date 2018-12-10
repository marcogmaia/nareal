import React, { Component } from "react";
import { Link } from "react-router-dom";
import { books } from "../assets/books";
// css files
import "./home.css";

// import Book from "./book";

class Home extends Component {
  // imgfolder = "../epubs/covers/";
  state = {
    books: books
  };

  handleBookClick() {}

  render() {
    return (
      <div className="">
        <div className="container front-page">
          <div className="card-deck">
            {this.state.books.map(book => (
              <div key={book.id} className="card">
                <Link onClick="" to={`book/${book.id}`}>
                  <img
                    className="card-img-top"
                    // height="350px"
                    // width="250px"
                    src={book.img}
                    alt=""
                  />
                  <div className="card-body text-muted">
                    <h5 className="card-title text-center">{book.title}</h5>
                    <p className="card-text text-center">{book.author}</p>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
