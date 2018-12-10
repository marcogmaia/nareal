import React, { Component } from "react";
import { books } from "../assets/books";
import Reader from "./reader";
import SpotifyWebApi from "spotify-web-api-js";
import Axios from "axios";

import {accessToken} from "./token"

import "./book.css";

class Books extends Component {
  constructor(props) {
    super();
    const index = props.match.params.id;
    const book = books[index];
    const rawText = book.text.pages.join("");
    this.state = {
      jsontxt: book.text,
      id: book.id,
      isPaused: false
    };
    
    const baseURI = "https://open.spotify.com/playlist/";
    
    const spotifyApi = new SpotifyWebApi();

    spotifyApi.setAccessToken(accessToken);

    Axios.post("http://localhost:5000/playlist", rawText, {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers":
          "Origin, X-Requested-With, Content-Type, Accept"
      }
    }).then(response => {
      spotifyApi
        .play({
          context_uri: baseURI + response.data
        })
        .then(response => this.setState({spotifyOk: true}))
        .catch(error => console.log(error));
    });

    // spotifyApi
    //   .play({
    //     context_uri: "https://open.spotify.com/playlist/6kLyKCROdQuZ8aFEPxjvYe"
    //   })
    //   .then(response => console.log("response", response))
    //   .catch(error => console.log("error", error));
    
  }

  handleLike() {
    console.log("Pressed Like");
  }

  handleDislike() {
    console.log("Pressed Dislike");
    const spotifyApi = new SpotifyWebApi();

    spotifyApi.setAccessToken(accessToken);
    spotifyApi.skipToNext()
    .then(console.log)
    .catch(console.log);
  }

  handlePause(e) {
    this.setState({
      isPaused: !this.state.isPaused
    });
    console.log("toggle", this.state.isPaused);

    const spotifyApi = new SpotifyWebApi();

    spotifyApi.setAccessToken(accessToken);

    if (this.state.isPaused) {
      spotifyApi.play()
      .then(response => console.log("oie"))
      .catch(error => console.log(error));
    } else {
      spotifyApi.pause()
      .then(response => console.log(response))
      .catch(error => console.log(error));
    }
  }

  changeIcon() {
    return !this.state.isPaused ? "fas fa-lg fa-pause" : "fas fa-lg fa-play";
  }

  render() {
    return (
      <div>
        <Reader key={this.state.id} book={this.state.jsontxt} />
        <div className="btn-reader container">
          <button
            id="b1"
            className="btn btn-danger b1"
            onClick={this.handleDislike}
          >
            <i class="fas fa-thumbs-down fa-lg" />
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
            <i class="fas fa-thumbs-up fa-lg" />
          </button>
        </div>
      </div>
    );
  }
}
//wtf
export default Books;
