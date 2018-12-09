import React, { Component } from "react";
import { books } from "../assets/books";
import Reader from "./reader";
import SpotifyWebApi from "spotify-web-api-js";

class Books extends Component {
  constructor(props) {
    super();
    const index = props.match.params.id;
    const book = books[index];
    // const rawText = book.text.pages.join("");
    const spotifyApi = new SpotifyWebApi();
    // esse token dura apenas por *uma* hora
    const accessToken =
      "BQB6_zz4IXpaGmzLO0NdOAZ8uz0PwPXmiAM4f1g6CorYWNLLWi-0qtOF6tfwoaLnOyDQ5VvWY73sqUruYxSkzbvb8aSh4_jt7pYNFhj5zKMASAxIGeEPaOwfXl0PFA-V6o20Dg4DVpOB4kGOy6mkK674BTs3y7Qti1X28PV85V-i8urrFO3H13_Z";
    spotifyApi.setAccessToken(accessToken);
    spotifyApi
      .play({
        context_uri: "https://open.spotify.com/playlist/6kLyKCROdQuZ8aFEPxjvYe"
      })
      .then(response => console.log("response", response))
      .catch(error => console.log("error", error));
    this.state = {
      jsontxt: book.text,
      id: book.id
    };
  }

  render() {
    return <Reader key={this.state.id} book={this.state.jsontxt} />;
  }
}
//wtf
export default Books;
