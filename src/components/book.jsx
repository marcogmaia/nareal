import React, { Component } from "react";

class Books extends Component {
  // state = [
  //   { id: 1, text: "random text 1" },
  //   { id: 2, text: "random text 2" },
  //   { id: 3, text: "random text 3" },
  //   { id: 4, text: "random text 4" }
  // ];

  // console.log(this.props);
  randomtext() {
    console.log(this.props.match.params);
    return "random text wtf Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit voluptatem expedita eos eveniet corrupti iure consequatur optio exercitationem dicta repellendus pariatur inventore, velit commodi dignissimos officia, cumque provident itaque accusantium?";
  }
  render() {
    return (
      <div className="container">
        <h1>
          <p>Book</p>
        </h1>
        <h4>
          <p>{this.randomtext()}</p>
        </h4>
      </div>
    );
  }
}

export default Books;
