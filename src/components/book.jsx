import React, { Component } from "react";

class Books extends Component {
  state = {
    books: [
      {
        id: 0,
        text:
          "random text 1 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti asperiores maxime expedita, nesciunt voluptas porro? Sit consectetur totam quibusdam amet, corrupti tempora, veniam commodi quas nobis, odio iste minus soluta."
      },
      { id: 1, text: "random text 2" },
      { id: 2, text: "random text 3" },
      { id: 3, text: "random text 4" }
    ]
  };

  // console.log(this.props);
  randomtext(index) {
    return (
      <div className="card text-center">
        <p>{this.state.books[index].text}</p>
      </div>
    );
  }

  render() {
    const index = this.props.match.params.testval;
    return (
      <div className="container">
        <h1>
          <p>Book</p>
        </h1>
        <h4>{this.randomtext(index)}</h4>
      </div>
    );
  }
}

export default Books;
