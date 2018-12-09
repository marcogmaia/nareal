import React, { Component } from "react";
import { books } from "../assets/books";
import Reader from "./reader";
import SpotifyWebApi from "spotify-web-api-js";
import Axios from "axios";

import "./book.css";

class Books extends Component {
  constructor(props) {
    super();
    const index = props.match.params.id;
    const book = books[index];
    const rawText = book.text.pages.join("");

    const spotifyApi = new SpotifyWebApi();
    const accessToken = "BQB__BwUPNQODQAK37ayNr-tvt_OfYFEFMb5DZwSMyy9sYFls-HfmMtE-Wa9rejuMQdKEyjgwded8eZm2RtBH6MW5s2N8xL6Llunmr5c3LsTojiBbg_Ayak3wpFN5I-90CV4IgjreQzpdxiohDAVyXh6JEuFc3mv37N116DQJiAfiNzr8QsiaO2Qw2M7-lcECzSQ3-fiwW59fKgqjFxWt_8G_tGh";
    const baseURI = "https://open.spotify.com/playlist/"
    spotifyApi.setAccessToken(accessToken);

    Axios.post("http://localhost:5000/playlist", rawText, {headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept"
    }})
    .then(response => {
      console.log(response);
      spotifyApi.play({
        context_uri: baseURI + response.data
      })
      .then(response => console.log(response))
      .catch(error => console.log(error));
    });
    // spotifyApi.setAccessToken(accessToken);
    // spotifyApi
    //   .play({
    //     context_uri: "https://open.spotify.com/playlist/6kLyKCROdQuZ8aFEPxjvYe"
    //   })
    //   .then(response => console.log("response", response))
    //   .catch(error => console.log("error", error));
    this.state = {
      jsontxt: book.text,
      id: book.id
    };
  }

  render() {
    return (
      <div>
        <Reader key={this.state.id} book={this.state.jsontxt} />
        <div className="btn-reader container">
          <button id="b1" className="btn btn-danger b1">
            <i class="fas fa-thumbs-down fa-lg" />
          </button>
          <button id="b2" className="btn btn-danger b2">
            <i className="fas fa-play fa-lg" />
          </button>
          <button id="b3" className="btn btn-danger b3">
            <i class="fas fa-thumbs-up fa-lg" />
          </button>
        </div>
      </div>
    );
  }
}
//wtf
export default Books;
