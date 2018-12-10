import React, { Component } from "react";
import { books } from "../assets/books";
import Reader from "./reader";
import SpotifyWebApi from "spotify-web-api-js";
import Axios from "axios";

import "./book.css";

class Books extends Component {

  spotifyApi = new SpotifyWebApi();
  accessToken =
    "BQAFjU19Wes1h2VPYf8cBwkfp04wSuzNRXJePILA2RsziID9RGD43IJ8XJKMD7z_uhupbg44TIJIs_e74dh6-c090Gz0yepLJ_VKQdXjqVRdC8qDjuRyAKyIf7Am8R2Nhw2rey6zpZkbTZGh1w3lqJCDNVhLm2vEltwkKQ1IUw";
  baseURI = "https://open.spotify.com/playlist/";
  rawText = "";

  constructor(props) {
    super();
    const index = props.match.params.id;
    const book = books[index];
    this.rawText = book.text.pages.join("");

    this.spotifyApi.setAccessToken(this.accessToken);

    this.state = {
      jsontxt: book.text,
      id: book.id,
      isPaused: false
    };

    this.state.id === 0 ? this.funcID0() : this.funcIDOther();
  }

  handleLike() {
    console.log("Pressed Like");
  }

  handleDislike() {
    console.log("Pressed Dislike");
    this.spotifyApi.skipToNext();
  }

  handlePause(e) {
    this.state.isPaused ? this.spotifyApi.play() : this.spotifyApi.pause();
    this.setState({
      isPaused: !this.state.isPaused
    });
  }

  changeIcon() {
    return !this.state.isPaused ? "fas fa-lg fa-pause" : "fas fa-lg fa-play";
  }

  funcID0() {
    this.spotifyApi
      .play({
        context_uri: "https://open.spotify.com/playlist/6kLyKCROdQuZ8aFEPxjvYe"
      })
      .catch(error => console.error("errorID0: ", error));
  }

  funcIDOther() {
    Axios.post("http://localhost:5000/playlist", this.rawText, {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers":
          "Origin, X-Requested-With, Content-Type, Accept"
      }
    }).then(response => {
      this.spotifyApi
        .play({
          context_uri: this.baseURI + response.data
        })
        .catch(error => console.error("errorIDOther: ", error));
    });
  }

  render() {
    return (
      <div>
        <Reader key={this.state.id} book={this.state.jsontxt} />
        <div className="btn-reader container">
          <button
            id="b1"
            className="btn btn-danger b1"
            onClick={(e) => { this.handleDislike(e) }}
          >
            <i className="fas fa-thumbs-down fa-lg" />
          </button>
          <button
            id="b2"
            className="btn btn-danger b2"
            onClick={e => this.handlePause(e)}
          >
            <i className={this.changeIcon()} />
          </button>
          <button
            id="b3"
            className="btn btn-danger b3"
            onClick={this.handleLike}
          >
            <i className="fas fa-thumbs-up fa-lg" />
          </button>
        </div>
      </div>
    );
  }
}
export default Books;
