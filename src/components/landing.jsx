import React, { Component } from "react";
// import images from "../../epubs/covers";
// const images = require.context("../epubs/covers/", false, /\.(png|jpe?g|svg)$/);

// const mylist = images.map(img => <li>images</li>);
// const mlist = [1, 2, 3, 4];
// const litem = mlist.map(item => <li>{item}</li>);

class Landing extends Component {
  // imgfolder = "../epubs/covers/";
  state = {
    image: ["gatsby", "got", "harryPotter", "stephenKing"]
  };

  render() {
    return (
      <div>
        <div className="album text-muted">
          <div className="row">
            {this.state.image.map(img => (
              <div className="card">
                <img
                  height="400px"
                  src={require(`../epubs/covers/${img}.jpg`)}
                  alt=""
                />
              </div>
            ))}
          </div>

          <div className="container">
            <h1>pronto agora vai</h1>
          </div>
        </div>
      </div>
    );
  }
}

export default Landing;
