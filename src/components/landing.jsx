import React, { Component } from "react";

class Landing extends Component {
  imgfolder = "../epubs/covers/";
  state = {
    images: [this.imgfolder.concat("gatsby.jpg"), this.imgfolder + "got.jpg"]
  };

  render() {
    return (
      <div className="album">
        <div className="row">
          {/* {this.state.images.map(img => (
            <div className="card">
              <img height="500px" src={require(img)} alt="" />
            </div> */}
          <div className="card">
            <img src={require(this.state.images[0])} alt="" />
          </div>
          ))}
        </div>
        ;
      </div>
    );
  }
}

export default Landing;
