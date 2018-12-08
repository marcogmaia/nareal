import React, { Component } from "react";
import 

class Home extends Component {
  // imgfolder = "../epubs/covers/";
  state = {
    images: [
      { id: 1, value: "gatsby" },
      { id: 2, value: "got" },
      { id: 3, value: "harryPotter" },
      { id: 4, value: "stephenKing" }
    ]
  };

  // as imagens estao funcionando como botoes
  handleClickThumbnail = () => {
    console.log("mas que coisa doido");
  };

  render() {
    return (
      <div>
        <div className="album text-muted">
          <div className="row">
            {this.state.images.map(img => (
              <div key={img.id} className="card">
                <button onClick={this.handleClickThumbnail}>
                  <img
                    height="350px"
                    width="250px"
                    src={require(`../epubs/covers/${img.value}.jpg`)}
                    alt=""
                  />
                </button>
              </div>
            ))}
          </div>
        </div>
        <div className="container meuteste">
          <h1 className="meuteste">texto teste</h1>
        </div>
        ;
      </div>
    );
  }
}

export default Home;
