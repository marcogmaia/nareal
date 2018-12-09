import React, { Component } from "react";
import { books } from "../assets/books";
import Reader  from "./reader";
import SpotifyWebApi from "spotify-web-api-js";

class Books extends Component {
  constructor(props) {
    super();
    const index = props.match.params.id;
    const book = books[index];
    const rawText = book.text.pages.join("");
    const spotifyApi = new SpotifyWebApi();
    const accessToken = "BQBXHlIEP-y9DAMtb-AOfk-ws92u1rk3pL2vZvgkWP7AzbFTzmygiW-nFIKfYBEI3UHpCOnYjUaOwleacuyry7vCLphyv7qzSBriE9jcHD1SR1m_fANPONDYtBtTSWF3H-JWCct9dcTzPqEYhZ8";
    spotifyApi.setAccessToken(accessToken);
    spotifyApi.play({context_uri: "https://open.spotify.com/playlist/6kLyKCROdQuZ8aFEPxjvYe"})
    .then(response => console.log(response))
    .catch(error => console.log(error));
    this.state  = {
      bookText: book.text
    };
  }

  render() {
    return (
      <Reader book={this.state.bookText} />
    );
  }
}

export default Books;
