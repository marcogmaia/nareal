import React, { Component } from "react";
import "./reader.css";

function Page(props) {
  let title;
  if (!!props.title && props.pageNum === 0) {
    title = <h1 class="page-title">{props.title}</h1>;
  }

  let text = props.text.split("\t");

  return (
    <div class="page rounded" /*style={{ height: "100vh" }}*/>
      {props.pageNum + 1}
      <p class="book-title">{props.book}</p>
      {title}
      {text.map(a => (
        <p>{a}</p>
      ))}
    </div>
  );
}

class Reader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pages: this.props.book.pages,
      pageNum: 0
    };
  }

  nextPage(e) {
    e.preventDefault();
    if (this.state.pages.length > this.state.pageNum + 1)
      this.setState({
        pageNum: this.state.pageNum + 1
      });
  }

  previousPage(e) {
    e.preventDefault();
    if (0 < this.state.pageNum)
      this.setState({
        pageNum: this.state.pageNum - 1
      });
  }

  clickPage(e) {
    if (e.clientX >= window.innerWidth / 2) this.nextPage(e);
    else this.previousPage(e);
  }

  render() {
    return (
      <div
        id="page-container"
        class="container page-shadow"
        onMouseDown={e => {
          this.clickPage(e);
        }}
      >
        <Page
          book={this.props.book.bookTitle}
          title={this.props.book.chapterTitle}
          text={this.state.pages[this.state.pageNum]}
          pageNum={this.state.pageNum}
        />
        {/* <Page book={this.props.book.book} title={this.props.book.title} text={this.props.book.pages[3]}></Page> */}
      </div>
    );
  }
}

export default Reader;
